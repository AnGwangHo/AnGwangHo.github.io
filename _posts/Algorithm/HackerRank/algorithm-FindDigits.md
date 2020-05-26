---
title: Find Digits(javascript)
date: 2020-05-26
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Find Digits
  - javascript
  - Easy
---

## <center>Find Digits</center>

**<center>javascript</center>**

---

### Input Format

| 변수 | 값     |
| ---- | ------ |
| n    | number |

### 입출력 예

> | n        | return |
> | -------- | ------ |
> | 12, 1012 | 2, 3   |

### 코드

1. n의 각 자리별 숫자로 n을 나눈 경우 0인 경우

```javascript
function findDigits(n) {
  const number = n + '';
  let ret = 0;
  for (let i of number) {
    if (n % +i == 0) {
      ret++;
    }
  }
  return ret;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
