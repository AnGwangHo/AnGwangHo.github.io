---
title: Angry Professor(javascript)
date: 2020-05-20
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Angry Professor
  - javascript
  - Easy
---

## <center>Angry Professor</center>

**<center>javascript</center>**

---

### Input Format

| 변수 | 값                             |
| ---- | ------------------------------ |
| k    | 수업 시작을 위한 학생 수       |
| a    | 학생들의 도착 시간에 대한 배열 |

### 입출력 예

> | k   | a              | return |
> | --- | -------------- | ------ |
> | 3   | [-1, -3, 4, 2] | "YES"  |
> | 2   | [0, -1, 2, 1]  | "NO"   |

### 코드

```javascript
function angryProfessor(k, a) {
  return a.filter(value => value <= 0).length < k ? 'YES' : 'NO';
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
