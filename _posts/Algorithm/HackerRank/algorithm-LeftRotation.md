---
title: Left Rotation(javascript)
date: 2020-04-27
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Left Rotation
  - javascript
  - Easy
---

## <center>Left Rotation</center>

**<center>javascript</center>**

---

### Input Format

- 1 <= n <= 10<sup>5</sup>
- 1 <= d <= n
- 1 <= a[i] <= 10<sup>6</sup>

| 변수 | 값                       |
| ---- | ------------------------ |
| n    | 1차원 배열               |
| d    | 좌측으로 이동 시킬 Index |

### 입출력 예

> | n           | d   | return      |
> | ----------- | --- | ----------- |
> | [1 2 3 4 5] | 4   | [5 1 2 3 4] |

### 코드

1. d가 array.length보다 낮으므로 같은 경우에만 예외처리
2. ES6문법을 사용하여 바로 반환처리

```javascript
function rotLeft(a, d) {
  if (a.length == d) return a;

  return [...a.slice(d), ...a.slice(0, d)];
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
