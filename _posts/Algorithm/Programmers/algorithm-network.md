---
title: 네트워크(javascript)
date: 2020-04-02
tags:
  - 알고리즘
  - 프로그래머스
  - 깊이/너비 우선 탐색(DFS/BFS)
keywords:
  - 알고리즘
  - 프로그래머스
  - 네트워크
  - javascript
  - 깊이/너비 우선 탐색(DFS/BFS)
---

## <center>[깊이/너비 우선 탐색(DFS/BFS)] level2 네트워크</center>

**<center>javascript</center>**

---

### 조건

> - 컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.

### 제한사항

> - 컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.
> - 각 컴퓨터는 0부터 n-1인 정수로 표현합니다.
> - i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
> - computer[i][i]는 항상 1입니다.

### 입출력 예

> | n   | computers                         | return |
> | --- | --------------------------------- | ------ |
> | 3   | [[1, 1, 0], [1, 1, 0], [0, 0, 1]] | 2      |
> | 3   | [[1, 1, 0], [1, 1, 1], [0, 1, 1]] | 1      |

### 코드

```javascript
function solution(n, computers) {
  var answer = 0;

  //DFS로 푸는 문제
  const len = computers.length;
  for (let i = 0; i < len; i++) {
    //갯수만큼 loop
    if (computers[i][i] != -1) {
      //방문한 Node인지 체크
      answer++; //현재 시작하는 Node가 Root Node가 됨
      dfs(computers, i, n);
    }
  }

  function dfs(computers, idx, n) {
    for (let j = 0; j < n; j++) {
      //다른 Node에 대하여 전부 탐색해야함
      if (computers[idx][j] == 1 && computers[idx][j] != -1) {
        computers[idx][j] = computers[j][idx] = -1; //탐색한 경우 -1로 설정
        dfs(computers, j, n);
      }
    }
  }

  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
