---
title: Between Two Sets(javascript)
date: 2020-05-12
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Between Two Sets
  - javascript
  - Easy
---

## <center>Between Two Sets</center>

**<center>javascript</center>**

---

### Input Format

| 변수 | 값                |
| ---- | ----------------- |
| a    | 1차원 number 배열 |
| b    | 1차원 number 배열 |

### 제한사항

> - a배열, b배열 수 사이에 위치한 값 중 각 배열의 값에 대하여 나눈 나머지 값이 0인 숫자

### 입출력 예

> | a      | b            | return |
> | ------ | ------------ | ------ |
> | [2, 4] | [16, 32, 96] | 3      |

### 코드

1. a배열의 마지막 숫자 ~ b배열의 첫 번째 숫자 사이의 숫자를 구한다.
2. 사이의 숫자가 a배열의 각 원소들로 나눈 경우 나머지 값이 0인 경우
3. 사이의 숫자로 b배열의 각 원소들을 나눈 나머지 값이 0인경우

```javascript
function getTotalX(a, b) {
  let ret = 0;
  const start = a[a.length - 1];
  const end = b[0];
  for (let i = start; i <= end; i++) {
    if (a.every(value => i % value == 0)) {
      if (b.every(value => value % i == 0)) ret++;
    }
  }
  return ret;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
