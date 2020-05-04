---
title: Kangaroo(javascript)
date: 2020-05-04
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Kangaroo
  - javascript
  - Easy
---

## <center>Kangaroo</center>

**<center>javascript</center>**

---

### Input Format

- 0 <= x1 < x2 <= 10000
- 1 <= v1 <= 10000
- 1 <= v2 <= 10000

| 변수 | 값                  |
| ---- | ------------------- |
| x1   | 첫 번째 캥거루 위치 |
| x2   | 두 번째 캥거루 위치 |
| v1   | 첫 번째 캥거루 속도 |
| v2   | 두 번째 캥거루 속도 |

### 입출력 예

> | x1  | x2  | v1  | v2  | return |
> | --- | --- | --- | --- | ------ |
> | 0   | 4   | 3   | 2   | YES    |
> | 0   | 5   | 2   | 3   | NO     |

### 코드

1. 서로 영원히 만날 수 없는 경우에 대해서 예외처리
2. loop문으로 서로 겹치는 순간을 체크

```javascript
function kangaroo(x1, v1, x2, v2) {
  const diff = x2 - x1;
  let ret = 'NO';
  if ((v2 >= v1 && x2 > x1) || (v1 >= v2 && x1 > x2)) return ret;

  while (x2 >= x1) {
    if (x1 == x2) {
      ret = 'YES';
      break;
    } else {
      x1 += v1;
      x2 += v2;
    }
  }
  return ret;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
