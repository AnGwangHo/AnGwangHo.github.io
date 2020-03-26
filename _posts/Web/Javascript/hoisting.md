---
title: 호이스팅(hoisting)
date: 2020-03-26
tags:
  - hoisting
  - Javascript
keywords:
  - hoisting
  - Javascript
---

## 개념

호이스팅(hoisting)은 단어 뜻과 같이 Javascript 엔진에서 javascript file을 parsing 단계에서 변수, 함수선언문에 대하여 스코프 상단으로 끌어올리는 것을 말한다.

- 실제 code가 변경되는 것이 아닌 엔진 내부에서 가상적으로 끌어올려 code 해석 및 실행 함

## 예시

아래 코드에서 a라는 변수를 선언하였는데 선언 이전에 a라는 변수를 호출하는 코드가 존재 시 ReferenceError가 아닌 undefined가 출력된다.

```Javascript
//사용자 script
console.log(a); // undefined
var a = 10;
console.log(a); // 10
```

```Javascript
//javascript 엔진 parsing 시
var a; //호이스팅 O
console.log(a); // undefined
a = 10;
console.log(a); // 10
```

- Javascript 엔진에서 parsing하는 경우 위 코드와 같이 변수선언을 최상단에서 하며 값 할당의 경우 기존 자리에서 진행한다.

### const, let

ES6에서 추가된 const, let의 경우 호이스팅이 되지 않는다. 아래와 같이 code가 있는 경우 해당 코드는 ReferenceError가 발생한다.

```Javascript
//사용자 script
console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // ReferenceError: Cannot access 'b' before initialization
const a = 10;
let b = 20;
console.log(a); // 10
console.log(b); // 20
```

```Javascript
//javascript 엔진 parsing 시
console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // ReferenceError: Cannot access 'b' before initialization
const a = 10; //호이스팅 X
let b = 20; //호이스팅 X
console.log(a); // 10
console.log(b); // 20
```

### 함수

함수의 경우 함수 선언문의 경우 호이스팅이 되지만 함수 표현식의 경우 호이스팅이 되지 않는다.

```Javascript
//사용자 script
echo(); // "함수선언문"
echo2(); // TypeError: echo2 is not a function

function echo() // 함수 선언문
{ 
  console.log("함수선언문");
}
var echo2 = function() //함수 표현식
{
  console.log("함수표현식");
}
```

```Javascript
//javascript 엔진 parsing 시
var echo2; // 변수에 대한 호이스팅 O
function echo() // 함수에 대한 호이스팅 O
{ 
  console.log("함수선언문");
}

echo(); // "함수선언문"
echo2(); // TypeError: echo2 is not a function

echo2 = function() //여기서 함수를 할당한다.
{
  console.log("함수표현식");
}
```

내부 함수의 경우 외부 함수 내 스코프에서 최상단으로 호이스팅이 발생한다.

- 내부 함수가 함수 선언문인 경우

  ```Javascript
  //사용자 script
  function outerFn()
  {
    var inner = innerFn();
    console.log(typeof inner); //function
    console.log(inner); // "inner 함수선언문"
    function innerFn()
    {
        return "inner 함수선언문";
    }
  }

  outerFn();
  ```

  ```Javascript
  //javascript 엔진 parsing 시
  function outerFn()
  {
    var inner; //호이스팅 O
  
    function innerFn() //호이스팅 O
    {
      return "inner 함수선언문";
    }
  
    inner = innerFn(); //할당
    console.log(typeof inner); //function
    console.log(inner); // "inner 함수선언문"
  }
  
  outerFn();
  ```

- 내부함수가 함수 표현식인 경우

  ```Javascript
  //사용자 script
  function outerFn()
  {
    console.log(inner); // undefined
    var inner = innerFn(); //함수 호출

    var innerFn = function()
    {
        return "inner 함수표현식";
    }
  }

  outerFn();
  ```

  ```Javascript
  //javascript 엔진 parsing 시
  function outerFn()
  {
    var innerFn; // 호이스팅 O
    var inner; // 호이스팅 O
    console.log(inner); // TypeError: inner is not a function
    var inner = innerFn(); //함수 호출

    var innerFn = function()
    {
        return "inner 함수표현식";
    }
  }

  outerFn();
  ```

- const, let으로 함수표현식을 사용 시 호이스팅이 발생되지 않으므로 사용자 script 코드와 동일하게 해석한다.

## 규칙

1. 변수, 함수가 동일한 이름인 경우
    - 변수가 함수보다 상위로 호이스팅
    - 변수에 값이 할당되는 경우 함수 선언문을 덮어쓴다.
    - 변수에 값이 할당되지 않는 경우 함수가 할당된다.

    ```Javascript
    //사용자 script
    var a = 10;
    var b;

    function a()
    {
      console.log("함수a");
    }
    function b()
    {
      console.log("함수a");
    }

    console.log(typeof a); // number
    console.log(typeof b); // function
    ```

    ```Javascript
    //javascript 엔진 parsing 시
    /*변수가 함수보다 상위로 호이스팅*/
    var a; // 호이스팅 O
    var b; // 호이스팅 O

    /*함수가 변수를 덮어씀*/
    function a() // 호이스팅 O
    {
      console.log("함수a");
    }
    function b() // 호이스팅 O
    {
      console.log("함수a");
    }

    /*값 할당을 통해 함수를 덮어씀*/
    a = 10; //a:function -> a:number

    console.log(typeof a); // number
    console.log(typeof b); // function
    ```

## 참고

- [Blog 호이스팅 정리](https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html)

- [W3C JavaScript Hoisting](https://www.w3schools.com/js/js_hoisting.asp)