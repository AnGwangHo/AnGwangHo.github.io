---
title: JSP에서 batch 실행하기
date: 2020-03-04
tags:
  - JSP
  - batch
  - github
  - autopush
keywords:
  - batch
  - Github
  - autopush
---

## JSP에서 Github autopush 환경 만들기

### 개발환경

- Server : Tomcat8
- OS : window10

### 구현

- DB에 Data가 갱신될 때 마다 Github 저장소에 auto push 기능을 구현하고자 하였다.
- 이를 위해서 우선적으로 bat파일을 만들어 jsp환경에서 성공적으로 DB에 Update 시 실행하도록 하였다.

  <details>
  <summary>batch 파일 코드</summary>

  ```Shell
    F: #batch파일이 존재하는 드라이브 위치
    cd 'batch가 위치할 폴더 경로' #batch 파일이 위치 할 폴더 경로
    git add . #git에 변경된 사항에 대해서 스테이징 한다.
    git commit -m "auto push(file upload)" #commit실행
    git push origin master #git 저장소에 push
  ```

</details>

- jsp에서 Runtime의 exec함수를 사용하여 batch파일을 실행하도록 코드를 작성하였다.

  ```java
  <%@ page import="java.lang.Runtime"%> //Runtime import

  Process process = Runtime.getRuntime().exec("파일경로");
  process.waitFor(); //batch파일이 실행되기 까지 대기

  //Option : 실행 결과에대해서 알고 싶은 경우 구현
  BufferedReader br = new BufferedReader(new InputStreamReader(process.getInputStream()));

  String line = null;

  while((line = br.readLine()) != null){
      out.println(line);
  }
  br.close();
  //Option 끝

  process.destroy(); //완료된 프로세스 제거
  ```

### 이슈

- batch파일을 터미널에서 실행 시 정상적으로 수행되었으나 jsp코드 상 실행 시 무한 loop가 걸리는 문제가 존재하였다. 이에 대하여 line별 실행 해본 결과 push과정에서 문제가 발생하였다.
- 이와 관련된 문제를 찾아본 결과 권한 문제. 즉, 로그인 문제인걸로 방향을 잡고 SSH keys를 발급하여 GitHub 계정에 등록하였다. 그러나 문제가 해결되지 않았다.
- 이와 관련된, 문제에 대해서 찾아도 나오지 않아 프로젝트 문제인걸로 방향을 잡고 새로운 저장소를 생성하여 실행하였으나 결과는 같았다. 그때, 실수로 branch를 새로 생성하였는데 이 후로 push 실행 시 수행되는 것을 확인하였다!😮
- SSH Keys를 발급 후 push를 수행한 경우 자동적으로 권한 취득이 되어 아이디/패스워드 미입력이 되는줄 알았는데 아니었나보다...
- 만약, 이와 같은 증상을 겪는사람이 있다면 SSH Keys등록 후 브랜치를 하나 생성해보길 바란다.

### 참고 사이트

- [Pushing to Git returning Error Code 403 fatal: HTTP request failed](https://stackoverflow.com/questions/7438313/pushing-to-git-returning-error-code-403-fatal-http-request-failed)
