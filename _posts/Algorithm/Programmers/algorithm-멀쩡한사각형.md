---
title: 멀쩡한 사각형(javascript)
date: 2020-06-02
tags:
  - 알고리즘
  - 프로그래머스
  - Summer/Winter Coding(2019)
keywords:
  - 알고리즘
  - 프로그래머스
  - 멀쩡한 사각형
  - javascript
  - Summer/Winter Coding(2019)
---

## <center>[Summer/Winter Coding(2019)] 멀쩡한 사각형</center>

**<center>javascript</center>**

---

### 조건

> - 가로의 길이 W와 세로의 길이 H가 주어질 때, 사용할 수 있는 정사각형의 개수를 구하는 solution 함수를 완성해 주세요.

### 제한사항

> - W, H : 1억 이하의 자연수

### 입출력 예

> | w   | h   | result |
> | --- | --- | ------ |
> | 8   | 12  | 80     |

### 코드

```javascript
function solution(w, h) {
  let answer = 0;
  for (let i = 0; i < w; i++) {
    answer += Math.floor((h * i) / w);
  }

  return answer * 2;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
