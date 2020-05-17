---
title: The Hurdle Race(javascript)
date: 2020-05-17
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - The Hurdle Race
  - javascript
  - Easy
---

## <center>The Hurdle Race</center>

**<center>javascript</center>**

---

### Input Format

| 변수   | 값                   |
| ------ | -------------------- |
| height | number 배열          |
| k      | jump가능한 최대 높이 |

### 입출력 예

> | height          | k   | return |
> | --------------- | --- | ------ |
> | [1, 6, 3, 5, 2] | 4   | 2      |
> | [2, 5, 4, 5, 2] | 7   | 0      |

### 코드

1. height에서 가장 높은 값을 찾은 후 k의 값을 뺀 숫자를 반환
2. k가 가장 높은 값보다 큰 경우 0 반환

```javascript
function hurdleRace(k, height) {
  let max = 0;
  for (let value of height) {
    if (value > max) {
      max = value;
    }
  }
  return k > max ? 0 : max - k;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
