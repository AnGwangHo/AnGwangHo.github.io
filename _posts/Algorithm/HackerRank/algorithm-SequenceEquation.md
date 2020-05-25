---
title: Sequence Equation(javascript)
date: 2020-05-24
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Sequence Equation
  - javascript
  - Easy
---

## <center>Sequence Equation</center>

**<center>javascript</center>**

---

### Input Format

| 변수 | 값          |
| ---- | ----------- |
| p    | number 배열 |

### 입출력 예

> | p               | return          |
> | --------------- | --------------- |
> | [2, 3, 1]       | [2, 3, 1]       |
> | [4, 3, 5, 1, 2] | [1, 3, 5, 4, 2] |

### 코드

1. p[p[i]] = i 인 값을 반환

```javascript
function permutationEquation(p) {
  const len = p.length;
  let ret = [];
  for (let i = 1; i <= len; i++) {
    const num = p.indexOf(i) + 1;
    ret.push(p.indexOf(num) + 1);
  }
  return ret;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
