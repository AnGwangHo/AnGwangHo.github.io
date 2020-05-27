---
title: Cut the sticks(javascript)
date: 2020-05-27
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Cut the sticks
  - javascript
  - Easy
---

## <center>Cut the sticks</center>

**<center>javascript</center>**

---

### Input Format

| 변수 | 값          |
| ---- | ----------- |
| arr  | number 배열 |

### 입출력 예

> | arr                      | return       |
> | ------------------------ | ------------ |
> | [5, 4, 4, 2, 2, 8]       | [6, 4, 2, 1] |
> | [1, 2, 3, 4, 3, 3, 2, 1] | [8, 6, 4, 1] |

### 코드

1. 배열 중 최소 값으로 전체 원소값을 뺄 시 걸리는 카운트 횟수 반환

```javascript
function cutTheSticks(arr) {
  let sort = [...arr].sort((a, b) => a - b);
  const len = sort.length;
  let num = sort[0];
  let ret = [len];

  for (let i = 1; i < len; i++) {
    if (num != sort[i]) {
      num = sort[i];
      ret.push(len - i);
    }
  }

  return ret;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
