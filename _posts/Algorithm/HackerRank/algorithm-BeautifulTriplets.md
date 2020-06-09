---
title: Beautiful Triplets(javascript)
date: 2020-06-09
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Beautiful Triplets
  - javascript
  - Easy
---

## <center>Beautiful Triplets</center>

**<center>javascript</center>**

---

### Input Format

| 변수 | 값                 |
| ---- | ------------------ |
| d    | 3원소의 각 차이 값 |
| arr  | 1차원 number 배열  |

### 입출력 예

> | d   | s                      | return |
> | --- | ---------------------- | ------ |
> | 3   | [1, 2, 4, 5, 7, 8, 10] | 3      |

### 코드

```javascript
function beautifulTriplets(d, arr) {
  let ret = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    const num = arr[i];
    if (arr.some(value => value === num + d) && arr.some(value => value === num + d * 2)) {
      ret++;
    }
  }
  return ret;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
