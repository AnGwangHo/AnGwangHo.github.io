---
title: 크레인 인형뽑기 게임(javascript)
date: 2020-06-01
tags:
  - 알고리즘
  - 프로그래머스
  - 2019 카카오 개발자 겨울 인턴십
keywords:
  - 알고리즘
  - 프로그래머스
  - 크레인 인형뽑기 게임
  - javascript
  - 2019 카카오 개발자 겨울 인턴십
---

## <center>[2019 카카오 개발자 겨울 인턴십] 크레인 인형뽑기 게임</center>

**<center>javascript</center>**

---

### 조건

> - 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구니에서 사라지게 됩니다.
> - 크레인 작동 시 인형이 집어지지 않는 경우는 없으나 만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않습니다.

### 제한사항

> - board 배열은 2차원 배열로 크기는 5 x 5 이상 30 x 30 이하입니다.
> - board의 각 칸에는 0 이상 100 이하인 정수가 담겨있습니다.
>   - 0은 빈 칸을 나타냅니다.
>   - 1 ~ 100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나타냅니다.
> - moves 배열의 크기는 1 이상 1,000 이하입니다.
> - moves 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인 자연수입니다.

### 입출력 예

> | board                                                         | moves             | return |
> | ------------------------------------------------------------- | ----------------- | ------ |
> | [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]] | [1,5,3,5,1,2,1,4] | 4      |

### 코드

```javascript
function solution(board, moves) {
  let answer = 0;
  let stack = [];
  let copy_board = board.map(value => [...value]);

  moves.forEach(value => {
    const doll = getDoll(value - 1);

    if (doll) {
      const len = stack.length;
      if (len && stack[len - 1] === doll) {
        stack.pop();
        answer += 2;
      } else stack.push(doll);
    }
  });

  function getDoll(col, row = 0) {
    if (row >= copy_board.length) return 0;

    const doll = copy_board[row][col];

    if (!doll) {
      return getDoll(col, row + 1);
    } else {
      copy_board[row][col] = 0;
    }
    return doll;
  }
  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
