---
title: Apple and Orange(javascript)
date: 2020-05-10
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Apple and Orange
  - javascript
  - Easy
---

## <center>Apple and Orange</center>

**<center>javascript</center>**

---

### Input Format

- a < s < t < b

  | 변수    | 값                                       |
  | ------- | ---------------------------------------- |
  | s       | 집 가장 좌측 좌표                        |
  | t       | 집 가장 우측 좌표                        |
  | a       | 사과나무 위치                            |
  | b       | 오렌지나무 위치                          |
  | apples  | 사과나무 기준으로 사과가 떨어진 위치     |
  | oranges | 오렌지나무 기준으로 오렌지가 떨어진 위치 |

### 입출력 예

> | s   | t   | a   | b   | apples     | oranges | return |
> | --- | --- | --- | --- | ---------- | ------- | ------ |
> | 7   | 11  | 5   | 15  | [-2, 2, 1] | [5, -6] | 1, 1   |

### 코드

1. s~t 사이에 위치한 사과, 오렌지의 개수를 출력

```javascript
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  //a : 사과나무 위치, b : 오렌지나무 위치
  //s ~ t 집 위치
  //apples : 사과가 나무로부터 떨어진 위치 배열, oranges : 오렌지가 나무로부터 떨어진 위치 배열
  console.log(apples.filter(value => value > 0 && value + a >= s && value + a <= t).length);
  console.log(oranges.filter(value => value < 0 && value + b >= s && value + b <= t).length);
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com
