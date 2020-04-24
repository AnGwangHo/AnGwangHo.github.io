---
title: Electronics Shop(javascript)
date: 2020-04-24
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Electronics Shop
  - javascript
  - Easy
---

## <center>Electronics Shop</center>

**<center>javascript</center>**

---

### Input Format

| 변수      | 값                |
| --------- | ----------------- |
| keyboards | [가격, 가격, ...] |
| drives    | [가격, 가격, ...] |
| b         | 예산숫자          |

### 제한사항

> - `keyboards`, `drives` 각 배열 중 1개 씩 선택하여 총 2개를 구입
> - `keyboards`, `drives` 중 가장 비싼 가격의 값을 조합하여 `b`를 초과하지 않는 범위의 값을 반환
> - `b`의 예산을 초과하여 키보드+드라이브를 구입하지 못함

### 입출력 예

> | keyboards | drives  | b   | return |
> | --------- | ------- | --- | ------ |
> | [3,1]     | [5,2,8] | 10  | 9      |
> | [4]       | [5]     | 5   | -1     |

### 코드

1. keyboards, drives의 각 아이템 별 합한 값을 구해야 함
2. 각 아이템 별 합한 값 중 b를 넘는 값은 -1를 반환
3. 2에서 구한 배열 중 가장 큰 값을 반환

```javascript
function getMoneySpent(keyboards, drives, b) {
  let sum_array = keyboards.map(keyboard => {
    const max = Math.max(
      ...drives.map(drive => {
        return keyboard + drive > b ? -1 : keyboard + drive;
      })
    );
    return max;
  });
  return Math.max(...sum_array);
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/challenges/drawing-book/leaderboard
