---
title: React.js Hook
date: 2020-03-06
tags:
  - React.js
  - Hook
keywords:
  - React.js
  - Hook
---

## React.js의 Hook에 대해서 학습 및 사용법

---

- 학습의 경우 공식 홈페이지를 참고하여 진행([**공식홈페이지**](https://ko.reactjs.org/docs/hooks-intro.html)).
- React 버전 16.8.0이상, React Native 0.59이상에서 지원

### 등장 배경

- 기존 React에서 state를 사용하기 위해서는 class형태에서 React.component를 상속하여 사용
- 상속 없이 import 방식으로 Function이나 const같은 함수에서 state 사용할 수 있도록 지원하는 개념
- 함수 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 “연동(hook into)“할 수 있게 해주는 함수.

### 개념

- state를 사용하기 위해 class를 사용하는데 이를 대체하여 class가 아니여도 state관리 및 rife-cycle사용이 가능하게 해주는 API
- 좀 더 재사용 가능한 컴포넌트를 작성하는데 도움을 주기 위해 나옴
- class안에서는 동작하지 않음

### 문법

- 중복하여 사용 가능(state, effect 동일)

1.  State Hook

    - state를 대체하는 개념으로 useState를 react로 부터 import하여 사용

    - useState는 2개의 항목을 가지는 배열을 반환. 인자로 주는 값의 경우 초기 변수 값을 나타낸다.

      > 💡 return [현재 변수값, 변수를 바꾸는 setter 함수];

      <details>
      <summary>사용 예시</summary>

      ```javascript
      import React, { useState } from 'react'; //useState가 hook

      function Example() {
        // "count"라는 새 상태 변수를 선언합니다
        const [count, setCount] = useState(0); //useState는 중복하여 호출가능(각자 독립된 state를 가짐)
        const [fruit, setFruit] = useState('banana');
        const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
          </div>
        );
      }
      ```

      </details>

2.  Effect Hook

    - 'Data를 가져와 DOM을 수정하는 작업'을 'side effects' or 'effects'라고 한다. 이러한 작업들을 함수 컴포넌트에서 Hook을 사용해서 수행 가능하도록 하는 것을 말한다.

    - class의 생명주기 함수에서 제공되는 부분들에 대해서 제공하는 것(componentDidMount, componentDidUpdate, componentWillUnmount를 대체)

    - props, state에 접근이 가능하며, 매 랜더링 후 실행 됨(최초 로딩 포함)

    - 기존 class 구조에서는 생명주기 메서드 각각에 로직을 작성했으나 Effect Hook에서는 한 곳에서 로직관리 가능

      <details>
      <summary>사용 예시</summary>

      ```javascript
      import React, { useState, useEffect } from 'react';

      function Example() {
        const [count, setCount] = useState(0);

        // componentDidMount, componentDidUpdate와 비슷합니다
        useEffect(() => {
          // 브라우저 API를 이용해 문서의 타이틀을 업데이트합니다
          document.title = `You clicked ${count} times`; //DidMount, DidUpdate를 대체

          return () => {
            //willUnmount를 대체
            //cdoe...
          };
        });

        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
          </div>
        );
      }
      ```

      </details>

    - 구독을 계속 갱신,취소하는데 이는 과도한 비용을 초래합니다. 이를 방지하고자 값이 변경 됬을 때만 새로운 구독을 생성하면 되는데 useEffect 두 번째 인자를 전달하여 사용할 것(props.source)

      ```javascript
      useEffect(
        () => {
          const subscription = props.source.subscribe();
          return () => {
            subscription.unsubscribe();
          };
        },
        [props.source] //Option : [] 값 입력 시 DidMount/WillUnmount효과, 값이 있는 경우 변경 된 경우에만 코드 수행
      );
      ```

3.  Context Hook

    - context 객체(React.createContext에서 반환된 값)을 받아 그 context의 현재 값을 반환합니다. context의 현재 값은 트리 안에서 이 Hook을 호출하는 컴포넌트에 가장 가까이에 있는 <MyContext.Provider>의 value prop에 의해 결정됩니다.
    - react.js의 context를 hook API화 시킨 개념

      **Context란?**

      - 하위 컴포넌트에 값을 전달하기 위해서는 props를 사용하여 넘겨주어야 하는데, 이를 사용하지 않고 값을 전달 가능하게 하는 기능
      - 전역변수를 사용하는것과 비슷하지만, JS의 클로저를 활용하는 개념과 유사하다고 본다.
      - 만약 상위에 Context가 있고 하위에서 Context를 선언할 시 하위의 Context를 참조함
      - Context를 사용 시 따로 지정된 context를 참조하는게 아니라 문맥상 가장 가까운 위치의 context를 참조하기 때문에 만약, 하위에서 context를 사용 시 이를 참조하게 된다.

      <details>
      <summary>사용 예시</summary>

      ```javascript
      //React.createContext(Context 생성)
      const MyContext = React.createContext(defaultValue); //defaultValue : Provider를 찾지 못하였을 때 사용

      //Context.Provider : Notiy역활 수행
      <MyContext.Provider value={/* 어떤 값 */}/>; //value가 변경된 것을 알리는 역활(re-rendering 수행)

      //Context.Consumer : 구독 역활 수행
      <MyContext.Consumer>
        {value => /* context 값을 이용한 렌더링 */} //value를 구독
      </MyContext.Consumer>
      ```

      </details>

4.  Custom Hook

    - 상태관련 Logic을 컴포넌트 간 재사용하고 싶은데 고전적인 방식으로는 higher-order components와 render props 2가지 방식을 사용
    - Custom Hook은 이를 대체
    - 이름의 경우 'useOOO'과 같이 앞에 use를 붙여서 사용 시 linter 플러그인 사용 시 버그를 찾아준다.

      <details>
      <summary>사용 예시</summary>

      ```javascript
      import React, { useState, useEffect } from 'react';

      function useFriendStatus(friendID) {
        const [isOnline, setIsOnline] = useState(null);

        function handleStatusChange(status) {
          setIsOnline(status.isOnline);
        }

        useEffect(() => {
          ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
          return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
          };
        });

        return isOnline;
      }

      //각 함수에서 독립되게 호출되어 사용됨
      function FriendStatus(props) {
        const isOnline = useFriendStatus(props.friend.id);

        if (isOnline === null) {
          return 'Loading...';
        }
        return isOnline ? 'Online' : 'Offline';
      }

      function FriendListItem(props) {
        const isOnline = useFriendStatus(props.friend.id);

        return <li style={{ color: isOnline ? 'green' : 'black' }}>{props.friend.name}</li>;
      }
      ```

      </details>

### 규칙

1. 최상위 에서만 호출해야함. 반복문, 조건문, 중첩된 함수에서는 사용 X

   - useState, useEffect가 여러번 호출되어 Hook보장을 위해서 최상위에서만 쓰라는 것

   - 작성한 순서대로 react는 읽어들임(순서보장)

2. Custom Hook이 아닌 이상, React 함수 컴포넌트에서만 호출할 것

### 기타

1. useEffect vs useLayoutEffect
   - useEffect는 브라우저 화면이 다 그려질때 까지 지연, 다음 렌더링이 발생하기 전에 발생하는 것을 보장. 레이아웃 배치&그리기 완료 후 발생
   - 이를 대체하기 위해 useLayoutEffect가 존재, 이는 모든 DOM변경 후 동기적으로 발생. 브라우저가 화면 그리기 이전에 동기적으로 발생
     - componentDidMount나 componentDidUpdate와 동일한 단계를 실행하게 된다는 것에 주의
   - 먼저 useEffect사용 후 문제 시 useLayoutEffect 사용할 것, 서버 렌더링 단계에서는 모든 js다운 전까지 둘다 실행 되지 않는다.
     - UI가 깨져보일 수 있는 것들은 조건부 렌더링이나 노출 지연할 것
