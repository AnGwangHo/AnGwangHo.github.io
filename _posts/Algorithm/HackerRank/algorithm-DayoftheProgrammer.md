---
title: Day of the Programmer(javascript)
date: 2020-05-29
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Day of the Programmer
  - javascript
  - Easy
---

## <center>Day of the Programmer</center>

**<center>javascript</center>**

---

### Input Format

| 변수 | 값               |
| ---- | ---------------- |
| year | number type 년도 |

### 입출력 예

> | year | return       |
> | ---- | ------------ |
> | 2017 | "13.09.2017" |
> | 2016 | "12.09.2016" |
> | 1800 | "12.09.1800" |

### 코드

- 윤년계산의 경우 양식별로 다르게 계산

1. 1917년 이전달력의 경우 Julian calendar양식을 사용
2. 1918년의 경우 양식이 전환되므로 2월은 14일 사용
3. 1919이상의 경우 Gregorian calendar양식을 사용

```javascript
function dayOfProgrammer(year) {
  let ret = '13.09.' + year;
  if (year > 1918) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      ret = '12.09.' + year;
    }
  } else if (year === 1918) {
    ret = '26.09.' + year;
  } else {
    if (year % 4 === 0) {
      ret = '12.09.' + year;
    }
  }
  return ret;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
