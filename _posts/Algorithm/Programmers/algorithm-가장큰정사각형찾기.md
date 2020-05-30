---
title: 가장 큰 정사각형 찾기(javascript)
date: 2020-05-30
tags:
  - 알고리즘
  - 프로그래머스
keywords:
  - 알고리즘
  - 프로그래머스
  - 가장 큰 정사각형 찾기
  - javascript
  - 연습문제
---

## <center>[연습문제] 가장 큰 정사각형 찾기</center>

**<center>javascript</center>**

---

### 제한사항

> - 표(board)는 2차원 배열로 주어집니다.
> - 표(board)의 행(row)의 크기 : 1,000 이하의 자연수
> - 표(board)의 열(column)의 크기 : 1,000 이하의 자연수
> - 표(board)의 값은 1또는 0으로만 이루어져 있습니다.

### 입출력 예

> | board                                     | return |
> | ----------------------------------------- | ------ |
> | [[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]] | 9      |
> | [[0,0,1,1],[1,1,1,1]]                     | 4      |

### 코드

```javascript
function solution(board) {
  if (!board) return 0;

  const width = board[0].length;
  const heigth = board.length;

  if (heigth == 1) return board[0].filter(value => value === 1).length;

  let max = 0;
  for (let i = 1; i < heigth; i++) {
    const row = board[i];
    for (let j = 1; j < width; j++) {
      if (row[j] === 1) {
        //좌측, 상단, 좌측상단 중 최소값에 +1
        row[j] = Math.min(row[j - 1], board[i - 1][j], board[i - 1][j - 1]) + 1;

        if (row[j] > max) {
          max = row[j];
        }
      }
    }
  }

  return Math.pow(max, 2);
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
