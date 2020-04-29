---
title: Compare the Triplets(javascript)
date: 2020-04-29
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Compare the Triplets
  - javascript
  - Easy
---

## <center>Time Conversion</center>

**<center>javascript</center>**

---

### Input Format

| 변수 | 값          |
| ---- | ----------- |
| a    | number 배열 |
| b    | number 배열 |

### 제한사항

> - number가 더 큰 쪽이 1 point 획득, 같은경우 아무도 point획득하지 않음

### 입출력 예

> | a          | b         | return |
> | ---------- | --------- | ------ |
> | [17,28,30] | [99,16,8] | [2,1]  |

### 코드

```javascript
function compareTriplets(a, b) {
  let ret = [0, 0];
  const len = a.length;
  for (let i = 0; i < len; i++) {
    if (a[i] > b[i]) ret[0]++;
    else if (a[i] < b[i]) ret[1]++;
  }
  return ret;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
