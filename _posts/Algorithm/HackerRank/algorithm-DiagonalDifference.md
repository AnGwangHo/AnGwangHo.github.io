---
title: Diagonal Difference(javascript)
date: 2020-04-30
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Diagonal Difference
  - javascript
  - Easy
---

## <center>Diagonal Difference</center>

**<center>javascript</center>**

---

### Input Format

- -100 <= arr[i][j] <= 100

| 변수 | 값              |
| ---- | --------------- |
| arr  | n\*n 2차원 배열 |

### 입출력 예

> | arr                             | return |
> | ------------------------------- | ------ |
> | [[11,2,4], [4,5,6], [10,8,-12]] | 15     |

### 코드

1. loop 한번에 대각선 별 합 한번에 구하도록 구현

```javascript
function diagonalDifference(arr) {
  const len = arr.length;
  let sum1 = 0,
    sum2 = 0;

  for (let i = 0; i < len; i++) {
    sum1 += arr[i][i];
    sum2 += arr[len - 1 - i][i];
  }

  return Math.abs(sum1 - sum2);
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
