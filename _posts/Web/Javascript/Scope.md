---
title: 스코프(Scope)
date: 2020-03-16
tags:
  - Scope
  - 스코프
  - Javascript
keywords:
  - Scope
  - 스코프
  - Javascript
---

## 스코프(Scopre)

어떠한 변수에 접근할 수 있는 범위

- 참조 대상 식별자(identifier, 변수, 함수의 이름과 같이 어떤 대상을 다른 대상과 구분하여 식별할 수 있는 유일한 이름)를 찾아내기 위한 규칙
- 만약, 스코프가 없다면 동일한 이름의 식별자는 1개만 존재가능
- Javascript는 `렉시컬(지역) 스코프`를 사용, 함수를 `어디에 선언`하느냐에 따라 스코프가 결정. 호출 되는 시점과 무관

### 스코프 구분

- Javascript는 기본적으로 함수(function) 스코프를 가짐
- ES6 문법인 let, const를 통해 블록(block) 스코프 형성 가능

### 전역 스코프

전역 스코프란? 함수 밖이나 `{}`밖에 선언되었을 때를 말한다.

- 즉, 코드 어디에서든지 참조 가능한 것을 말한다.
- 아래의 코드에서 echo()함수를 호출 시 함수 내에서 text변수를 호출하는데, 함수 스코프 안에서 text변수를 찾은 뒤 없으면 상위 스코프에서 찾게됩니다. 이를 스코프 체인(Scope Chain)이라고 합니다.

  ```Javascript
  /*전역 스코프*/
  var text = "Hello World!"; //전역 변수
  function echo() {
  console.log(text); //전역 변수 text를 호출
  }
  console.log(text); //"Hellow World!"
  echo(); //"Hellow World!"
  ```

- 위와 같이 전역 변수의 경우 global 객체에 변수가 저장되어, 타 라이브러리 사용 시 이름 중복문제 발생할 수도 있습니다.
- Javascript의 경우 함수 스코프를 기본으로 가지기 때문에 만약, if문 안에 var로 선언된 변수가 있는 경우 전역 스코프를 가집니다.

  ```Javascript
  if (true) {
      var text = "Hello World!"; //전역 변수
  }
  console.log(text); //"Hellow World!"
  ```

### 지역 스코프

지역 스코프란 특정 부분에서만 사용 할 수 있는 것을 말합니다.

- 이러한 지역 스코프의 경우 크게 2가지로 나뉘며 함수 스코프, 블럭 스코프라 합니다.

  #### 함수 스코프

  함수 안에서 선언한 식별자를 말하며 그 함수 내부에서만 사용가능 한 것을 말합니다.

  - 만약, 전역과 지역에 동일한 이름의 2개의 변수가 존재 시 지역변수를 우선참조합니다.

  ```Javascript
  /*함수 스코프*/
  function echo() {
  var text = "Hello World!"; //지역 변수
  console.log(text); //전역 변수 text를 호출
  }
  echo(); //"Hello World!"
  console.log(text); //Uncaught ReferenceError: text is not defined

  /*동일한 이름의 변수가 2개 존재 시*/
  var text = "global Hello World!";
  function echo() {
  var text = "local Hello World!";
  console.log(text); // "local Hello World!"
  }
  console.log(text); // "global Hello World!"
  ```

  #### 블록 스코프

  중괄호(`{}`) 내부에서 `const`또는 `let`으로 변수를 선언 시 해당 변수의 경우 중괄호 블록내에서만 접근 할 수 있습니다.

  ```Javascript
  /*블록 스코프*/
  if (true) {
  var a = 1; //전역 변수
  const b = 2; //블록 변수
  let c = 3; //블록 변수
  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // 3
  }

  console.log(a); // 1
  console.log(b); //Uncaught ReferenceError: b is not defined
  console.log(c); //Uncaught ReferenceError: c is not defined
  ```

### 암묵적 전역

함수안에서 선언되지 않은 변수에 값을 할당 시 전역 객체의 프로퍼티로 할당 됩니다. 또한, 변수가 아니라 프로퍼티로 추가됨으로 호스이스팅이 발생하지 않습니다.

- 전역 변수는 delete로 삭제 불가, 전역 프로퍼티는 delete로 삭제 가능

  ```Javascript
  console.log(window.a); //undefined <- 호이스팅 발생
  console.log(window.text); //ReferenceError: text is not defined <- 호이스팅 미발생

  var a = 1; //전역 변수

  function echo() {
  //선언하지 않은 변수
  text = "Hello World!"; //window.text로 property 추가 됨
  console.log(text); //"Hello World!"
  }

  echo(); //"Hello World!"

  console.log(window.a); //1
  console.log(window.text); //"Hello World!"

  delete a; //전역 변수임으로 삭제 X
  delete text; //프로퍼티로 삭제 O

  console.log(window.a); //1
  console.log(window.text); //undefined
  ```

### 참고

[Scope | PoiemaWeb](https://poiemaweb.com/js-scope)

[[번역] 자바스크립트 스코프와 클로저(JavaScript Scope and Closures)](https://medium.com/@khwsc1/%EB%B2%88%EC%97%AD-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%EC%BD%94%ED%94%84%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%80-javascript-scope-and-closures-8d402c976d19)
