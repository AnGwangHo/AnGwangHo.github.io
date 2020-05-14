---
title: Migratory Birds(javascript)
date: 2020-05-14
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Migratory Birds
  - javascript
  - Easy
---

## <center>Migratory Birds</center>

**<center>javascript</center>**

---

### Input Format

| 변수 | 값                             |
| ---- | ------------------------------ |
| arr  | 조류 type을 나타내는 숫자 배열 |

### 입출력 예

> | arr                               | return |
> | --------------------------------- | ------ |
> | [1, 4, 4, 4, 5, 3]                | 4      |
> | [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4] | 3      |

### 코드

1. map을 사용하여 key, value조합으로 counting
2. forEach를 통해 가장 높은 count를 가진 낮은 type을 반환

```javascript
function migratoryBirds(arr) {
  let ret = { type: 0, count: 0 };
  let count = new Map();
  for (let value of arr) {
    if (!count.has(value)) {
      count.set(value, 1);
    } else {
      count.set(value, count.get(value) + 1);
    }
  }
  count.forEach((value, index) => {
    if (value > ret.count) {
      ret.type = index;
      ret.count = value;
    } else if (value == ret.count && ret.type > index) {
      ret.type = index;
    }
  });
  return ret.type;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
