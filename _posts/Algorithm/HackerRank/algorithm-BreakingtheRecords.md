---
title: Breaking the Records(javascript)
date: 2020-05-07
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Breaking the Records
  - javascript
  - Easy
---

## <center>Breaking the Records</center>

**<center>javascript</center>**

---

### Input Format

- 1 <= n <= 1000
- 0 <= scores[i] <= 10<sup>8</sup>

| 변수   | 값                     |
| ------ | ---------------------- |
| scores | number type 1차원 배열 |

### 입출력 예

> | scores                          | return |
> | ------------------------------- | ------ |
> | [10, 5, 20, 20, 4, 5, 2, 25, 1] | 2 4    |

### 코드

1. 최대, 최소 점수가 갱신 된 카운트에 대해서 반환

```javascript
function breakingRecords(scores) {
  let ret = [];
  let min = 0,
    max = 0;
  let minCount = 0,
    maxCount = 0;

  scores.forEach((value, index) => {
    if (!index) {
      min = value;
      max = value;
    } else {
      if (value < min) {
        min = value;
        minCount++;
      } else if (value > max) {
        max = value;
        maxCount++;
      }
    }
  });
  return [maxCount, minCount];
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
