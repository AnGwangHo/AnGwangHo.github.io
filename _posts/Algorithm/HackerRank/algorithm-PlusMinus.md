---
title: Plus Minus(javascript)
date: 2020-05-01
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Plus Minus
  - javascript
  - Easy
---

## <center>Plus Minus</center>

**<center>javascript</center>**

---

### Input Format

- 0 <= n <= 100
- -100 <= arr[i] <= 100

| 변수 | 값                |
| ---- | ----------------- |
| arr  | 1차원 number 배열 |

### 제한사항

> - console.log로 플러스, 마이너스, 제로에 대한 전체 길이로 나눈 값 반환
> - 소수점 6자리까지 반환

### 입출력 예

> | s                    | return                     |
> | -------------------- | -------------------------- |
> | [-4, 3, -9, 0, 4, 1] | 0.500000 0.333333 0.166667 |

### 코드

```javascript
function plusMinus(arr) {
  const len = arr.length;
  let plus = 0;
  let minus = 0;
  let zero = 0;
  for (let value of arr) {
    if (value > 0) plus++;
    else if (value < 0) minus++;
    else zero++;
  }

  console.log(Number(plus / len).toFixed(6));
  console.log(Number(minus / len).toFixed(6));
  console.log(Number(zero / len).toFixed(6));
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
