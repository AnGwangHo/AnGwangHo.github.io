---
title: 쇠막대기(javascript)
date: 2020-04-12
tags:
  - 알고리즘
  - 프로그래머스
  - 스택/큐
keywords:
  - 알고리즘
  - 프로그래머스
  - 쇠막대기
  - javascript
  - 스택/큐
---

## <center>[스택/큐] 쇠막대기</center>

**<center>javascript</center>**

---

### 조건

> - 쇠막대기는 자신보다 긴 쇠막대기 위에만 놓일 수 있습니다.
> - 쇠막대기를 다른 쇠막대기 위에 놓는 경우 완전히 포함되도록 놓되, 끝점은 겹치지 않도록 놓습니다.
> - 각 쇠막대기를 자르는 레이저는 적어도 하나 존재합니다.
> - 레이저는 어떤 쇠막대기의 양 끝점과도 겹치지 않습니다.

### 제한사항

> - arrangement의 길이는 최대 100,000입니다.
> - arrangement의 여는 괄호와 닫는 괄호는 항상 쌍을 이룹니다.

### 입출력 예

> | arrangement               | skill_trees |
> | ------------------------- | ----------- |
> | "()(((()())(())()))(())" | 17          |

### 코드

```javascript
function solution(arrangement) {
  const bar_array = Array.from(arrangement);
  let answer = 0,
    stack = [];

  bar_array.map((value, index, array) => {
    if (value === '(') {
      stack.push(value);
    } else {
      const prevalue = array[index - 1];
      stack.pop();
      if (prevalue == '(') {
        answer += stack.length;
      } else {
        answer += 1;
      }
    }
  });
  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
