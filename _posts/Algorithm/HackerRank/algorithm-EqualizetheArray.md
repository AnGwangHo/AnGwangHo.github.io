---
title: Equalize the Array(javascript)
date: 2020-06-06
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Equalize the Array
  - javascript
  - Easy
---

## <center>Equalize the Array</center>

**<center>javascript</center>**

---

### Input Format

| 변수 | 값           |
| ---- | ------------ |
| arr  | number array |

### 입출력 예

> | arr             | return |
> | --------------- | ------ |
> | [3, 3, 2, 1, 3] | 2      |

### 코드

```javascript
function equalizeArray(arr) {
  const len = arr.length;
  const stack = {};
  let ret = len;
  ƒ;

  for (let i = 0; i < len; i++) {
    const num = arr[i];
    if (!stack[num]) stack[num] = 1;
    else stack[num] += 1;
  }

  for (let [key, value] of Object.entries(stack)) {
    if (len - value < ret) ret = len - value;
  }

  return ret;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
