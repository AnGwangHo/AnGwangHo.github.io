---
title: Minimum Distances(javascript)
date: 2020-06-08
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Minimum Distances
  - javascript
  - Easy
---

## <center>Minimum Distances</center>

**<center>javascript</center>**

---

### Input Format

| 변수 | 값                |
| ---- | ----------------- |
| a    | 1차원 number 배열 |

### 입출력 예

> | a                  | return |
> | ------------------ | ------ |
> | [7, 1, 3, 4, 1, 7] | 3      |

### 코드

```javascript
function minimumDistances(a) {
  const len = a.length;
  let stack = [];

  for (let i = 0; i < len; i++) {
    const f = a[i];
    const s = a.indexOf(f, i + 1);
    if (s !== -1) {
      stack.push(Math.abs(i - s));
    }
  }

  return stack.length ? Math.min(...stack) : -1;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
