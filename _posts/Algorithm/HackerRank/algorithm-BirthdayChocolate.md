---
title: Birthday Chocolate(javascript)
date: 2020-05-13
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Birthday Chocolate
  - javascript
  - Easy
---

## <center>Birthday Chocolate</center>

**<center>javascript</center>**

---

### Input Format

| 변수 | 값           |
| ---- | ------------ |
| s    | number Array |
| d    | number       |
| m    | number       |

### 입출력 예

> | s                  | d   | m   | return |
> | ------------------ | --- | --- | ------ |
> | [1, 2, 1, 3, 2]    | 3   | 2   | 0      |
> | [1, 1, 1, 1, 1, 1] | 3   | 2   | 0      |
> | [4]                | 4   | 1   | 1      |

### 코드

1. 배열 s에서 m길이만큼의 길이의 합이 d와 같은 경우를 체크

```javascript
function birthday(s, d, m) {
  let ret = 0;
  const len = s.length - m + 1;

  for (let i = 0; i < len; i++) {
    const sum = s.slice(i, i + m).reduce((sum, value) => sum + value);
    if (sum == d) ret++;
  }
  return ret;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
