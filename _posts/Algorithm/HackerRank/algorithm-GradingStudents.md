---
title: Grading Students(javascript)
date: 2020-05-06
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Grading Students
  - javascript
  - Easy
---

## <center>Grading Students</center>

**<center>javascript</center>**

---

### Input Format

- 1 <= n <= 60
- 0 <= grades[i] <= 100

| 변수   | 값                |
| ------ | ----------------- |
| grades | 1차원 number 배열 |

### 제한사항

> - 38이상의 성적인 경우에만 점수 올려주기 가능
> - 성적 올림 시 5단위로 올림을 수행, 올림 수와 현재 성적과 차이가 3미만인 경우에만 점수 올리기 가능

### 입출력 예

> | grades           | return           |
> | ---------------- | ---------------- |
> | [73, 67, 38, 33] | [75, 67, 40, 33] |

### 코드

```javascript
function gradingStudents(grades) {
  let ret = grades.map(value => {
    if (value < 38) return value;
    const roundNum = Math.round(value / 10) * 10;
    if (roundNum > value) {
      if (roundNum - value < 3) {
        return roundNum;
      }
    } else {
      if (roundNum + 5 - value < 3) {
        return roundNum + 5;
      }
    }
    return value;
  });
  return ret;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
