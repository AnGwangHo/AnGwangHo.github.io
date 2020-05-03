---
title: Mini-Max Sum(javascript)
date: 2020-05-03
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Mini-Max Sum
  - javascript
  - Easy
---

## <center>Mini-Max Sum</center>

**<center>javascript</center>**

---

### Input Format

- 1 <= arr[i] <= 10<sup>9</sup>

| 변수 | 값                           |
| ---- | ---------------------------- |
| arr  | 1차원 5개의 원소를 가진 배열 |

### 입출력 예

> | arr             | return |
> | --------------- | ------ |
> | [1, 2, 3, 4, 5] | 10 14  |

### 코드

1. 5개의 원소 중 4개의 합 중에서 가장 작은 값과 큰 값을 반환

```javascript
function miniMaxSum(arr) {
  const copy_arr = arr.sort((a, b) => a - b);
  console.log(
    copy_arr.slice(0, 4).reduce((sum, value) => sum + value),
    copy_arr.slice(1).reduce((sum, value) => sum + value)
  );
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
