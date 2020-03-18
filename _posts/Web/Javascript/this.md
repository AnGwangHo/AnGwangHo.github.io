---
title: Javascript this
date: 2020-03-18
tags:
  - this
  - Javascript
keywords:
  - this
  - Javascript
---

## 함수 호출에 따른 this

Javascript함수는 호출 될 때, 매개변수로 argument와 this를 암묵적으로 전달 받는다.

- Javascript에서의 this는 호출 될 때 인자로 전달받는 구조이므로, 호출 방식에 따라 this에 바인딩할 객체가 동적으로 결정된다.
- 스코프(Scope)에서는 함수를 선언할 때 결정되었지만, this는 함수는 호출할 때 결정된다.

### 함수의 호출방식

1. 함수 호출
2. 메소드 호출
3. 생성자 함수 호출
4. apply, call, bind 호출

### 함수 호출

브라우저에서 전역객체는 window이다. 이러한 전역객체는 전역 스코프(Global Scope)를 갖는 전역변수를 프로퍼티로 소유한다. 따라서, 전역 영역에서 선언한 함수는 전역객체의 프로퍼티로 접근 가능한 전역 메소드이다.

- 아래와 같이 echo라는 함수를 선언 시 echo는 전역 영역에서 선언되어 전역객체의 프로퍼티로 저장되어 echo()함수를 실행 시 전역객체의 프로퍼티를 호출한 것으로 this는 전역객체이다.

  ```Javascript
  function echo() {
      console.log(this); //window
  }

  echo(); //window
  window.echo(); //window
  ```

- 아래와 같이 내부 함수(`echo2`) 또는 함수 선언식(`echo3`)의 경우 echo함수의 property로 저장된 것이 아니므로 this는 전역 객체를 참조한다.

  ```Javascript
  function echo() {
    console.log(this); //window
    function echo2() {
        console.log(this); //window
    }
    var echo3 = function () {
        console.log(this); //window
    }
    echo2();
    echo3();
  }

  echo();
  ```

- 이러한 this가 전역 객체를 바인딩하는 경우는 다음과 같다.
  1. 전역 영역에서 선언한 함수
  2. callback 함수
  3. 메소드의 내부함수
  4. 함수의 내부함수
- 만약, 내부함수에서 this가 전역객체를 참조하는 것을 회피 하기 위해서는 다음과 같이 this를 저장한 변수를 객체내부에 저장하여 참조하는 방식으로 구현한다.

```Javascript
var echoText = "Global Echo";

var obj = {
    echoText : "local Echo",
    echo : function () {
        var pThis = this;

        console.log("echo.this : " + this); // obj
        console.log("echo.echoText : " + this.echoText); // local Echo
        function ehoc2() {
            console.log("echo2.this : " + this); // window
            console.log("echo2.echoText : " + this.echoText); // Global Echo

            console.log("pThis.this : " + pThis); // obj
            console.log("pThis.echoText : " + pThis.echoText); // local Echo
        }
    }
}

obj.echo();
```

- 이러한 방식 외 apply, call, bind 메소드를 사용하여 this를 바인딩하는 방법이 존재한다.

### 메소드 호출

함수가 객체의 프로퍼티이면 메소드라고 지칭하며 해당 메소드를 호출 시 소유한 객체가 this에 바인딩 된다.

```Javascript
var obj = {
    echoText : "object echo",
    echo : function() {
        console.log(this);
    }
}
obj.echo(); // obj
```

### 생성자 함수 호출

함수를 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수라고 한다. 이러한 생성자 함수 호출 시 빈 객체를 생성하며 this는 새로 생성된 빈 객체를 가리키게 됩니다. 또한, 빈 객체의 프로토타입 객체의 경우 생성자 함수의 prototype 프로퍼티가 가르키는 객체가 됩니다.

즉, 생성자 함수 호출의 경우 this는 자기자신이 됩니다.

```Javascript
// 생성자 함수
function Person(name) {
    this.name = name;
}

var me = new Person('Lee');
console.log(me); // Person {name: "Lee"} <-- this

// new 연산자 없이 호출 시 일반함수로의 호출이므로, 반환값은 없으며 this의 경우 전역객체이다.
var you = Person('Kim');
console.log(you); // undefined
console.log(window.name); // Kim
```

### apply, call, bind 호출

현재까지 this의 경우 함수가 호출되는 패턴에 의해 결정되었다. 이러한 암묵적인 결정대신 명시적인 결정이 되도록 해주는 방법이 apply, call, bind 메소드를 사용하는 것이다.

- 3가지 메소드의 경우 Function.prototype 객체의 메소드이므로 모든 함수는 이를 호출 가능하다.

#### apply, call

호출하고자 하는 함수에 대하여 this를 인자로 넘기는 객체로 바인드하고 인자에 대해서는 아래와 같이 넘긴다.

```Javascript
var Person = function (name) {
    this.name = name;
};

var foo = {};

// apply 메소드는 생성자함수 Person을 호출한다. 이때 this에 객체 foo를 바인딩한다.
Person.apply(foo, ['name', 'name2', ...]); //인자를 배열로 전달
Person.call(foo, 'name', 'name2', ...); //인자를 하나씩 전달

console.log(foo); // { name: 'name' }
```

#### bind

호출하고자 하는 함수를 bind()로 호출 시 인자로 넘긴 this 값이 바인딩된 함수를 만들고 반환합니다.

- 인자의 경우 call() 메소드와 같은 방식으로 인자를 전달합니다.

```Javascript
function fn() {
    console.log(this);
}
var obj = {
    value: 5
};
var boundFn = fn.bind(obj);
boundFn(); // -> { value: 5 }
```

### 참고

[this | PoiemaWeb](https://poiemaweb.com/js-this)

[Function.prototype.bind()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
