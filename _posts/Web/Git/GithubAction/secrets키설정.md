---
title: GitHub Action에서 API Key값 설정하기
date: 2020-08-03
tags:
  - GitHub Action
keywords:
  - GitHub
  - GitHub Action
  - Secrets
  - API Key
---

## GitHub Action에서 API Key값 설정하기

---

### 문제

프로젝트 개발 시 `.env`파일에 Server 주소, API key를 설정하여 사용하고 있었다. 해당 값들의 경우 Github 저장소에 공개되면 안되므로 해당 부분을 GitHub저장소에 올릴 수가 없었으며, 이에 대책으로 GitHub Secrets에 저장하여 변수로 사용하고자 하였다.

### 방안

Secrets에 저장한 프로젝트의 경우 GitHub Action을 사용하고 있었으며, 해당 프로세스의 경우 리눅스 기반환경으로 shell이 수행되고 있었다. GitHub에 저장된 Key-Value를 `secrets.[Key이름]`문법으로 제공해주고 있었으며, 이러한 값을 사용하여 `.env`파일에 Server주소, API key값을 동적으로 설정하고자 하였다.

1. 환경변수의 값 비공개화

    - GitHub의 Secrets를 사용

2. `.env`파일에 동적으로 환경변수의 값을 설정

    - 리눅스 명령어 `sed`를 사용

### 해결

아래와 같이 GitHub Action에서 저장소에 저장된 Secrets 값을 가져온다.

```yml
SERVER: ${{ secrets.REACT_APP_SERVER }}
```

이렇게 가져온 값의 경우 GitHub Action이 수행되는 동안 전역변수와 같이 사용되게 된다. 이렇게 가져온 값에 대하여 `sed`명령어를 사용하여 특정 줄에서 정규식을 통해 찾은 단어 뒤에 Secrets에서 가져온 값을 삽입한다.

> 💡리눅스(mac)에서는 `/`가 정상적으로 동작하나, GitHub Action에서의 ubuntu 환경에서는 `/`가 인식이 되지않아 `#`으로 대체하여 사용해야 했다. (`#`과 `/`는 리눅스에서 동일한 의미를 가진다.)

```yml
- name: set .env.* file
    run: |
        sed -i "1s#=#&$SERVER#" .env.production
        sed -i "2s#=#&$NAVER_MAP_KEY#" .env.production
        sed -i "1s#=#&$SERVER#" .env.development
        sed -i "2s#=#&$NAVER_MAP_KEY#" .env.development
```

위와 같이 수행 시 숫자에 해당하는 줄에서 `=`을 찾아서 해당 단어 뒤에 Secrets에서 가져온 값을 Insert하라는 의미이다.

### 결론

1. `.env`환경변수의 값에 대해서는 비공개를 해야하므로, 사용하는 CI/CD환경에 해당 값들을 비공개로 저장한다.

2. 동적으로 넣을 시 리눅스 환경에서는 `sed`를 사용하여 값을 파일에 설정 할 수 있다.
