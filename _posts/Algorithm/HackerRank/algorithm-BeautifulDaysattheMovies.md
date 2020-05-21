---
title: Beautiful Days at the Movies(javascript)
date: 2020-05-21
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Beautiful Days at the Movies
  - javascript
  - Easy
---

## <center>Beautiful Days at the Movies</center>

**<center>javascript</center>**

---

### Input Format

| 변수 | 값             |
| ---- | -------------- |
| i    | 시작할 날짜    |
| j    | 끝날 날짜      |
| k    | 날짜를 나눌 수 |

### 입출력 예

> | i   | j   | k   | return |
> | --- | --- | --- | ------ |
> | 20  | 23  | 6   | 2      |
> | 13  | 45  | 3   | 33     |

### 코드

```javascript
function beautifulDays(i, j, k) {
  let ret = 0;
  for (let start = i; start <= j; start++) {
    const sum = Math.abs(
      start -
        +(start + '')
          .split('')
          .reverse()
          .join('')
    );
    if (sum % k === 0) ret++;
  }
  return ret;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
