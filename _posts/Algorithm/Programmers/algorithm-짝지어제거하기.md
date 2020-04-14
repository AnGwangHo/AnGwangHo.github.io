---
title: 짝지어 제거하기(javascript)
date: 2020-04-14
tags:
  - 알고리즘
  - 프로그래머스
  - 2017 팁스타운
keywords:
  - 알고리즘
  - 프로그래머스
  - 짝지어 제거하기
  - javascript
  - 2017 팁스타운
---

## <center>[2017 팁스타운] 짝지어 제거하기</center>

**<center>javascript</center>**

---

### 조건

> - 알파벳 소문자로 이루어진 문자열을 가지고 시작
> - 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다. 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다.
> - 이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료
> - 성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴

### 제한사항

> - 문자열의 길이 : 1,000,000이하의 자연수
> - 문자열은 모두 소문자로 이루어져 있습니다.

### 입출력 예

> | s      | result |
> | ------ | ------ |
> | baabaa | 1      |
> | cdcd   | 0      |

### 코드

```javascript
function solution(s) {
  let stack = [];
  const len = s.length;
  for (let i = 0; i < len; i++) {
    if (stack.length == 0) stack.push(s.charAt(i));
    else {
      if (stack[stack.length - 1] === s.charAt(i)) stack.pop();
      else stack.push(s.charAt(i));
    }
  }

  return stack.length === 0 ? 1 : 0;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
