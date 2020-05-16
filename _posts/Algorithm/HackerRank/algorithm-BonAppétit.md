---
title: Bon Appétit(javascript)
date: 2020-05-16
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Bon Appétit
  - javascript
  - Easy
---

## <center>Bon Appétit</center>

**<center>javascript</center>**

---

### Input Format

| 변수 | 값                                |
| ---- | --------------------------------- |
| bill | 1차원 5개의 원소를 가진 배열      |
| k    | Anna가 먹지않은 음식의 bill index |
| b    | Anna가 지불한 bill 값             |

### 입출력 예

> | bill          | k   | b   | return        |
> | ------------- | --- | --- | ------------- |
> | [3, 10, 2, 9] | 1   | 12  | 5             |
> | [3, 10, 2, 9] | 1   | 7   | "Bon Appetit" |

### 코드

1. bill에서 k의 index를 제외한 합을 구한 후 2로 나눈다.
2. 나눈 값에서 b값을 뺀 경우 0이면 'Bon Appetit'을 반환, 아니면 숫자 반환

```javascript
function bonAppetit(bill, k, b) {
  let ret = 'Bon Appetit';
  const sum = bill.reduce((sum, value, index) => (index != k ? sum + value : sum)) / 2;
  if (sum != b) ret = b - sum;
  console.log(ret);
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
