---
title: Time Conversion(javascript)
date: 2020-04-22
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Time Conversion
  - javascript
  - Easy
---

## <center>Time Conversion</center>

**<center>javascript</center>**

---

### Input Format

- 01 <= hh <= 12
- 00 <= mm,ss <= 59

| 변수 | 값                       |
| ---- | ------------------------ |
| s    | hh:mm:ssAM or hh:mm:ssPM |

### 제한사항

> - 24 hour 형태의 hh:mm:ss 포맷으로 값을 반환
> - 00 <= hh <= 23

### 입출력 예

> | s          | return   |
> | ---------- | -------- |
> | 07:05:45PM | 19:05:45 |
> | 12:05:45PM | 12:05:45 |
> | 12:05:45AM | 00:05:45 |

### 코드

1. `:`를 구분자로 활용하여 문자열을 배열로 변환
2. PM, AM을 구분하여 조건처리
3. PM인 경우 24h인 경우 12h를 유지

```javascript
function timeConversion(s) {
  const date_array = s.slice(0, s.length - 2).split(':');

  if (s.slice(s.length - 2) == 'PM') {
    date_array[0] != '12' && (date_array[0] = Number(date_array[0]) + 12);
  } else {
    date_array[0] == '12' && (date_array[0] = '00');
  }
  return date_array.join(':');
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/challenges/drawing-book/leaderboard
