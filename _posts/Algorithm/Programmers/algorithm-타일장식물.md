---
title: 타일 장식물(javascript)
date: 2020-04-17
tags:
  - 알고리즘
  - 프로그래머스
  - 동적계획법
keywords:
  - 알고리즘
  - 프로그래머스
  - 타일 장식물
  - javascript
  - 동적계획법
---

## <center>[동적계획법] 타일 장식물</center>

**<center>javascript</center>**

---

### 조건

> - 타일의 개수 N이 주어질 때, N개의 타일로 구성된 직사각형의 둘레를 return

### 제한사항

> - N은 1 이상 80 이하인 자연수이다.

### 입출력 예

> | N   | return |
> | --- | ------ |
> | 5   | 26     |
> | 6   | 42     |

### 코드

```javascript
function solution(N) {
  let w = 1,
    h = 1;
  for (let i = 1; i < N; i++) {
    h += w;
    w = h - w;
  }
  return w * 2 + h * 2;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
