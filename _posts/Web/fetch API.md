---
title: fetch API
date: 2020-03-11
tags:
  - fetch
  - Javascript
keywords:
  - fetch
  - Javascript
---

## Fetch API 학습

---

### 개념

- 기존 XMLHttpRequest(이하 XHR)를 대체하는 개념으로 Request나 Response를 포함하며 결과값으로 Promise객체를 반환합니다.
- XHR에서 Response를 확인하기 위하여 callback이나 event를 사용하던 부분을 .then(), .catch()를 사용하여 확인합니다.
- ajax와 유사해 보이지만 다른 부분이 존재
  1. 결과값인 Promise 객체는 HTTP error 상태를 reject하지 않음
     - Status Code가 404나 500인 경우 resolve처리. ok상태가 false인 resolve를 반환
     - 네트워크 장애, 요청 미완료 시 reject 반환
  2. 쿠키를 보내거나 받지 않음
     - CORS 및 쿠키 사용시에는 Header에 credentials 속성을 설정해줘야 함
- 미지원 브라우저의 경우 [Fetch Polyfill](https://github.com/github/fetch)사용하여 구현가능

### 문법

1.  Syntax

    ```Javascript
    fetch(URL, [option]);
    //URL : 통신 요청할 서버주소
    //option : 객체를 넘기며 method, headers, body... 와 같은 properyt를 설정한다.
    ```

2.  사용법

    아래와 같이 URL을 입력 후 성공, 실패에 대한 동작정의를 then(), catch() 메소드를 사용하여 처리한다.

    ```Javascript
    fetch(URL, [option]);
    //Get방식
    fetch('http://example.com/movies.json') //서버 주소를 첫 번째 인자로 넘김
    .then(res => console.log(res)) //통신 성공 시 수행 할 코드
    .catch(err => console.log(err)); //error 발생 시 예외처리 할 코드

    //Post방식
    const option = {
      method : "POST",
      body : ...,
      header : {}
    }
    fetch('http://example.com/movies.json', option) //두 번째 인자에 객체를 인자로 전달한다
    .then(res => console.log(res)) //통신 성공 시 수행 할 코드
    .catch(err => console.log(err)); //error 발생 시 예외처리 할 코드
    ```

### 관련 인터페이스

1.  Headers

    - Headers() 생성자를 사용해 헤더 객체를 생성가능
    - Key와 Value로 이루어진 multi-map구조

      ```Javascript
      //1. set(), append() 메소드를 사용하여 property 추가
      var myHeaders = new Headers();
      myHeaders.set("Content-Type", "text/plain"); //기존의 동일한 property가 존재시 덮어쓰기
      myHeaders.append("Content-Length", "Hello World".length.toString());
      myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
      //2. 생성자에 인자로 전달
      myHeaders = new Headers({
      "Content-Type": "text/plain",
      "Content-Length": "Hello World".length.toString(),
      "X-Custom-Header": "ProcessThisImmediately",
      });

      //3. has(), get(), getAll() 메소드로 value 확인
      myHeaders.has("Content-Type") // true
      myHeaders.has("Set-Cookie") // false
      myHeaders.get("Content-Length") // 11
      myHeaders.append("X-Custom-Header", "AnotherValue");
      myHeaders.getAll("X-Custom-Header") // ["ProcessThisImmediately", "AnotherValue"]

      //4. delete()로 삭제
      myHeaders.delete("X-Custom-Header");
      ```

2.  Request

    - fetch()에 직접 URL, option을 입력하는 것을 대체해준다.

      ```Javascript
      //Request(URL, [option])
      //URL : 서버 주소
      //option : method, headers, body... etc fetch의 두 번째 인자를 대체
      const req = new Request("/api/posts", {
      method: "GET",
      headers: new Headers({ //Headers 인터페이스 사용 or 직접 객체입력
      "content-type": "application/json",
      }),
      body: { //Body 인터페이스로 대체 가능
      name: "LeeHanur",
      }
      });

      fetch(req)
      .then(res => console.log(res))
      .catch(err => console.log(err);
      ```

3.  Response

    - fetch()에서는 resolve 됬을 때 Response 인스턴스를 반환한다.
    - 생성자로 객체 생성하여 사용 가능하나 ServiceWorkers에서 사용할 것이 아니면 굳이 생성하지 않는다.

      ```Javascript
      //Response 상수

      Response.status //HTTP Status의 정수치, 기본값 200
      Response.statusText //HTTP Status 코드의 메서드와 일치하는 문자열, 기본값은 "OK"
      Response.ok //HTTP Status 코드가 200~299 값 인지에 대하여 Boolean를 반환

      var myResponse = new Response(body, [init]);
      //body : null 허용, Blob|BufferSource... etc 응답된 body의 type을 정의
      //init : status, statusText, headers 3가지 property 설정가능

      var myBlob = new Blob();
      var init = { "status" : 200 , "statusText" : "SuperSmashingGreat!" };
      var myResponse = new Response(myBlob,init);
      ```

4.  body

    - Request, Response 둘 다 Body를 가지고 있으며, body는 아래에서 기술한 타입들 중 하나의 인스턴스입니다.

      - ArrayBuffer
      - ArrayBufferView (Uint8Array같은 TypedArray)
      - [Blob](https://developer.mozilla.org/ko/docs/Web/API/Blob)/File
      - 문자열
      - [URLSearchParams](https://developer.mozilla.org/ko/docs/Web/API/URLSearchParams)
      - [FormData](https://developer.mozilla.org/ko/docs/Web/API/FormData)

      ```Javascript
      var form = new FormData(document.getElementById('login-form'));
      fetch("/login", {
      method: "POST",
      body: form
      })
      ```

### 참고

- [Using Fetch](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Fetch%EC%9D%98_%EC%82%AC%EC%9A%A9%EB%B2%95)

- [Javascript Fetch API](https://medium.com/@kkak10/javascript-fetch-api-e26bfeaad9b6)
