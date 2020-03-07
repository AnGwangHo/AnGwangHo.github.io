---
title: React.js에 typescript 적용하기
date: 2020-03-07
tags:
  - React.js
  - typescript
keywords:
  - React.js
  - typescript
---

## React.js에 typescript 적용하기

---

- React 공식 사이트를 참고하여 진행하였습니다.

  [Static Type Checking - React](https://ko.reactjs.org/docs/static-type-checking.html#using-typescript-with-create-react-app)

### 프로젝트 설치

- 생성하고자하는 위치에서 프로젝트이름을 원하는 이름으로 넣은 후 아래 명령어를 터미널에서 입력한다.

  ```Shell
    npx create-react-app '프로젝트이름' --template typescript
  ```

- 만약, app.js 즉, 기본 실행 페이지가 없으며 아래와 같은 text가 발생한 경우

  > template was not provided. This is likely because you're using an outdated version of create-react-app.
  > Please note that global installs of create-react-app are no longer supported.

- 아래 명령어를 실행하여 global로 설치된 react-app을 제거 후 시작한다.

  ```Shell
    npm uninstall -g create-react-app
  ```

- 만약, Mac 환경에서 src가 생성이 안된 경우는 다음과 같이 명령어를 실행 후 생성된다

  ```Shell
  npm rm -g create-react-app #old 버전 제거
  sudo npm install -g create-react-app #sudo로 해야 권한 에러 미발생
  ```

- 정상적으로 설치 시 아래와 같은 디렉토리 구조를 가진다.

  ![Alternate text][directory]

- 아래 명령어를 입력하여 프로젝트를 실행한다.

  ```Shell
  cd '프로젝트이름'
  npm start
  ```

  - 실행 시 다음과 같은 화면을 확인할 수 있다.👏

    ![Alternate text][runview]

### 실행 및 테스트

- typescript가 적용되고 있는지 간단히 확인하기 위하여 Header.tsx라는 파일을 생성하여 다음과 같은 코드를 작성

  ```javascript
  //Header.tsx
  import React from "react";

  function Header(props: { title: string }) {
  const test = parseInt(props.title, 10) as Number; // or const test: Number = parseInt(props.title, 10)
  return <div>{test}</div>;
  }

  export default Header;

  //App.tsx
  import React from "react";
  import "./App.css";
  import Header from "./Header";

  function App() {
  return (

  <div className="App">
  <header className="App-header">
  <Header title="1234" />
  </header>
  </div>
  );
  }

  export default App;
  ```

- App.tsx에서 기존의 태그들을 삭제 후 Header라는 함수형 컴포넌트에 title property에 값을 넣어 typescript를 테스트하고자 합니다.

- 현재, 코드상 title에 string값을 인자로 넘겨주고 있습니다. 만약, string이 아닌 값을 넣어 줄 시 tool상에서 다음과 같은 error를 표시합니다.

  ![Alternate text][syntax_error]

- 다시 원래대로 문자열을 넘겨주도록 되돌린 후 실행 시 다음과 같이 적용된 것을 확인 할 수 있습니다.

  ![Alternate text][updateview]

- typescript 사용시 자세한 문법이나 type의 경우 다음 링크를 참조하여 작업하기 바랍니다.

  [TypeScript 한글 문서](https://typescript-kr.github.io/pages/Basic%20Types.html)

[directory]: image1.png '폴더구조'
[runview]: image2.png '실행결과'
[syntax_error]: image3.png '문법에러'
[updateview]: image4.png '수정결과화면'
