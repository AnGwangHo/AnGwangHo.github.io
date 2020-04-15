---
title: 타겟 넘버(javascript)
date: 2020-04-15
tags:
  - 알고리즘
  - 프로그래머스
  - 깊이/너비 우선 탐색(DFS/BFS)
keywords:
  - 알고리즘
  - 프로그래머스
  - 타겟 넘버
  - javascript
  - 깊이/너비 우선 탐색(DFS/BFS)
---

## <center>[깊이/너비 우선 탐색(DFS/BFS)] 타겟 넘버</center>

**<center>javascript</center>**

---

### 조건

> - n개의 음이 아닌 정수
> - 사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return

### 제한사항

> - 주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
> - 각 숫자는 1 이상 50 이하인 자연수입니다.
> - 타겟 넘버는 1 이상 1000 이하인 자연수입니다.

### 입출력 예

> | numbers         | target | return |
> | --------------- | ------ | ------ |
> | [1, 1, 1, 1, 1] | 3      | 5      |

### 코드

```javascript
function solution(numbers, target) {
  var answer = 0;

  function dfs(target, numbers, k) {
    if (k == numbers.length) {
      let sum = 0;
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      if (sum == target) {
        answer++;
      }
      return;
    } else {
      numbers[k] *= 1;
      dfs(target, numbers, k + 1);

      numbers[k] *= -1;
      dfs(target, numbers, k + 1);
    }
  }
  dfs(target, numbers, 0);
  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
