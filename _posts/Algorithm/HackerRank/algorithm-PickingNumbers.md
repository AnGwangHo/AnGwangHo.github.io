---
title: Picking Numbers(javascript)
date: 2020-05-18
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Picking Numbers
  - javascript
  - Easy
---

## <center>Picking Numbers</center>

**<center>javascript</center>**

---

### Input Format

| 변수 | 값          |
| ---- | ----------- |
| a    | number 배열 |

### 입출력 예

> | a                  | return |
> | ------------------ | ------ |
> | [4, 6, 5, 3, 3, 1] | 3      |
> | [1, 2, 2, 3, 1, 2] | 5      |

### 코드

1. 주어진 배열의 원소로 새로운 배열을 만들 시 각 배열의 값들의 차가 1이하인 경우 중 최대 값을 반환
2. 전부 같은값이 주어진 경우 loop문에서 판단이 안되므로 마지막 최종 반환 시 한번 더 체크

```javascript
function pickingNumbers(a) {
  const sort_array = a.sort((a, b) => a - b);
  let first_num = sort_array[0];
  let max = 1;
  let ret = 0;

  for (let i = 1; i < sort_array.length; i++) {
    if (Math.abs(sort_array[i] - first_num) < 2) {
      max++;
    } else {
      first_num = sort_array[i];
      if (max > ret) ret = max;
      max = 1;
    }
  }

  return max > ret ? max : ret;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
