---
title: 탑(javascript)
date: 2020-04-18
tags:
  - 알고리즘
  - 프로그래머스
  - 스택/큐
keywords:
  - 알고리즘
  - 프로그래머스
  - 탑
  - javascript
  - 스택/큐
---

## <center>[스택/큐] 탑</center>

**<center>javascript</center>**

---

### 조건

> - 모든 탑의 꼭대기에는 신호를 송/수신하는 장치를 설치했습니다.
> - 발사한 신호는 신호를 보낸 탑보다 높은 탑에서만 수신합니다. 또한, 한 번 수신된 신호는 다른 탑으로 송신되지 않습니다.
> - 맨 왼쪽부터 순서대로 탑의 높이를 담은 배열 heights가 매개변수로 주어질 때 각 탑이 쏜 신호를 어느 탑에서 받았는지 기록한 배열을 return

### 제한사항

> - heights는 길이 2 이상 100 이하인 정수 배열입니다.
> - 모든 탑의 높이는 1 이상 100 이하입니다.
> - 신호를 수신하는 탑이 없으면 0으로 표시합니다.

### 입출력 예

> | heights         | return          |
> | --------------- | --------------- |
> | [6,9,5,7,4]     | [0,0,2,2,4]     |
> | [3,9,9,3,5,7,2] | [0,0,0,3,3,3,6] |
> | [1,5,3,6,7,6,5] | [0,0,2,0,0,5,6] |

### 코드

```javascript
function solution(heights) {
  var answer = [0];
  var max_index = 0;
  var len = heights.length;

  for (var i = 1; i < len; i++) {
    if (max_index != i - 1 && heights[i - 1] > heights[i]) {
      answer.push(i);
      max_index = i - 1;
    } else if (heights[max_index] > heights[i]) {
      answer.push(max_index + 1);
    } else {
      answer.push(0);
    }
  }
  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
