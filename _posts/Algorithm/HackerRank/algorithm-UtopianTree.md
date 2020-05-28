---
title: Utopian Tree(javascript)
date: 2020-05-28
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Utopian Tree
  - javascript
  - Easy
---

## <center>Utopian Tree</center>

**<center>javascript</center>**

---

### Input Format

| 변수 | 값                                          |
| ---- | ------------------------------------------- |
| n    | 나무 높이를 구해야 할 년도에 대한 숫자 배열 |

### 입출력 예

> | n      | return |
> | ------ | ------ |
> | [0, 1] | [1, 2] |
> | [4, 3] | [7, 6] |

### 코드

1. 봄에는 나무 높이가 더블로 늘어나고, 여름에는 높이가 +1증가

```javascript
function utopianTree(n) {
  let ret = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      ret = ret + 1;
    } else {
      ret *= 2;
    }
  }
  return ret;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
