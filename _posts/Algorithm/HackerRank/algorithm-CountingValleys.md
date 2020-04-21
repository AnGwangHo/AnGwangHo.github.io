---
title: Counting Valleys(javascript)
date: 2020-04-21
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Counting Valleys
  - javascript
  - Easy
---

## <center>Counting Valleys</center>

**<center>javascript</center>**

---

### Input Format

| 변수 | 값                               |
| ---- | -------------------------------- |
| n    | 트래킹한 횟수                    |
| p    | 위/아래 이동한 기록에대한 문자열 |

### 제한사항

> - `U`은 위로 이동, `D`는 아래로 이동
> - 시작지점에서 다시 시작지점의 위치로 왔을 때 계곡 1개를 이동했다고 가정하여 카운팅
> - 위로 이동 후 시작지점으로 내려오는 경우는 계곡으로 카운팅하지 않음

### 입출력 예

> | n   | s              | return |
> | --- | -------------- | ------ |
> | 8   | "UDDDUDUU"     | 1      |
> | 12  | "DDUUDDUDUUUD" | 2      |

### 코드

1. 위로 갔다가 다시 시작지점 위치로 온 경우에 대한 예외처리
2. `D`를 체크하여 시작지점 위치로 돌아온 경우 count 증가
3. `D`, `U`를 비교하여 이동 추적필요

```javascript
function countingValleys(n, s) {
  let stack = [];
  let count = 0;

  for (let char of s) {
    if (!stack.length) stack.push(char);
    else {
      const last_value = stack[stack.length - 1];
      if (last_value != char) stack.pop();
      else stack.push(char);

      if (!stack.length && last_value == 'D') count++;
    }
  }
  return count;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/challenges/drawing-book/leaderboard
