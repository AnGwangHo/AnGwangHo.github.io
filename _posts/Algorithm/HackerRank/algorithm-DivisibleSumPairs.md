---
title: Divisible Sum Pairs(javascript)
date: 2020-05-15
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Divisible Sum Pairs
  - javascript
  - Easy
---

## <center>Divisible Sum Pairs</center>

**<center>javascript</center>**

---

### Input Format

- 2 <= n <= 100
- 1 <= k <= 100
- 1 <= ar[i] <= 100

| 변수 | 값                  |
| ---- | ------------------- |
| n    | ar 배열의 길이      |
| k    | 합한 숫자를 나눌 값 |
| ar   | number 배열         |

### 입출력 예

> | n   | k   | ar                 | return |
> | --- | --- | ------------------ | ------ |
> | 6   | 3   | [1, 3, 2, 6, 1, 2] | 5      |

### 코드

1. 2개의 숫자를 합한 값이 k의 배수인 경우를 카운트하여 반환
2. 첫번째 숫자가 두번째 숫자보다 index가 낮아야함

```javascript
function divisibleSumPairs(n, k, ar) {
  let ret = 0;
  for (let i = 0; i < n; i++) {
    let first = ar[i];
    for (let j = i + 1; j < n; j++) {
      if ((first + ar[j]) % k == 0) ret++;
    }
  }
  return ret;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
