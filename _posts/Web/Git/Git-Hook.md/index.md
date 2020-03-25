---
title: Git Hook 사용하기
date: 2020-03-25
tags:
  - Git
  - Git Hook
keywords:
  - Git
  - Git Hook
  - husky
---

## React.js에 husky를 사용하여 Git Hook 적용하기

---

기존의 git hook의 경우 shell 방식으로 사용하였다. 이러한 방식은 shell 관련된 코드를 작성해야하는데 이와 관련된 자료나 학습에 많은 시간이 소요된다. 이러한 부분을 도와주는 라이브러리를 검색하다가 husky라는 라이브러리를 찾았으며, package.json에 설정만 추가하면 쉽고 빠르게 git hook기능을 사용할 수 있다.

### 설치

- 현재 React.js+typescript 프로젝트가 npx cra를 사용하여 생성되어있으며, 이를 기준으로 진행한다.
- 아래 명령어를 입력하여 현재 프로젝트에 husky 라이브러리를 개발용으로 추가한다.
  
  ```Shell
  npm install husky --save-dev
  ```

### 설정

현재, husky라이브러리가 설치 되었고 git hook기능을 사용하여 commit 수행 전 자동 test를 실행하고자 한다. 이러한 실행동작을 위해서는 package.json에 설정이 필요하며 아래 코드를 참조하여 추가하면 된다.

```JSON
"scripts": {
  ...,
  "test": "react-scripts test",
  "test:watch": "react-scripts test --watchAll=false", //test관련 추가
},
...,
"husky": {
  "hooks": {
    "pre-commit": "npm run test:watch", //commit 전에 해야할 동작을 정의한다.
    // "pre-push":, "명령어" 추가적인 행동설정 가능
  }
}
```

- 위에서 test:watch의 경우 기존 test동작 시 테스트 이후 동작에 대해서 키 입력을 해야한다. 우리가 하고자 하는 것은 단순히 test 결과에 대하여 true/false동작만을 필요로한다.

- 이를 위해서 test시 모든 test에 대해서 수행되도록 —watchAll option을 주었고 =fasle를 하여 단순히 true/false결과만 받도록 하였다.

- husky에는 hooks에 대해서 해야할 동작을 정의하였고 commit전에 test를 수행하도록 하였다.

### 결과 동작

- 일부러 App.tsx에 test시 실패가 되도록 코드를 수정하였다.

    ![Alternate text][commit]

- 이러한 상태에서 commit시 다음과 같은 alert창이 발생되고 commit이 실패함을 알 수 있다.

    ![Alternate text][fail]

### 참고

- [[React] husky 사용법](https://velog.io/@jch9537/React-husky-%EC%82%AC%EC%9A%A9%EB%B2%95-1kk4wj5og4)

- [Jest test 결과만 나오도록 하는 방법](https://stackoverflow.com/questions/39724017/running-cra-jest-in-non-interactive-mode)

[commit]: image1.png 'commit수행'
[fail]: image2.png 'commit실패'
