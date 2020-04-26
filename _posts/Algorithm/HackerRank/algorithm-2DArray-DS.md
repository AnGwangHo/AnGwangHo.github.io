---
title: 2D Array - DS(javascript)
date: 2020-04-26
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - 2D Array - DS
  - javascript
  - Easy
---

## <center>2D Array - DS</center>

**<center>javascript</center>**

---

### Input Format

- -9 <= arr[i][j] <= 9
- 0 <= i,j <= 5

| 변수 | 값         |
| ---- | ---------- |
| arr  | 2차원 배열 |

### 입출력 예

> | s                                                                                     | return |
> | ------------------------------------------------------------------------------------- | ------ |
> | [[1 1 1 0 0 0],[0 1 0 0 0 0],[1 1 1 0 0 0],[0 0 2 4 4 0],[0 0 0 2 0 0],[0 0 1 2 4 0]] | 19     |

### 코드

1. 3\*3 모래시계로 배열을 추출 시 가장 큰 합의 값을 반환
2. 변수의 가장 낮은 값은 -9이므로 전부 -9인 경우 -63이므로 최초 max값을 -63로 설정

```javascript
function hourglassSum(arr) {
  const row_len = arr.length - 2;
  const col_len = arr[0].length - 2;
  let max = -63;

  for (let i = 0; i < row_len; i++) {
    for (let j = 0; j < col_len; j++) {
      const sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];

      if (sum > max) max = sum;
    }
  }
  return max;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
