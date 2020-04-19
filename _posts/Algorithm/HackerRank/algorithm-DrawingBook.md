---
title: Drawing Book(javascript)
date: 2020-04-19
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Drawing Book
  - javascript
  - Easy
---

## <center>Drawing Book</center>

**<center>javascript</center>**

---

### Input Format

| 변수 | 값               |
| ---- | ---------------- |
| n    | 전체 페이지 개수 |
| p    | 찾아야할 페이지  |

### 제한사항

> - Book의 경우 좌/우 총 2개의 page로 구성
> - 1 Page는 항상 오른쪽 페이지에 존재
> - `p` Page를 탐색 할 때 1 Page, 마지막 Page 총 2군대에서 탐색 가능하며 Page를 넘겨서 탐색
> - 가장 최소의 비용으로 Page를 넘겨서 `p` Page를 탐색하여 반환

### 입출력 예

> | n   | p   | return |
> | --- | --- | ------ |
> | 6   | 2   | 1      |
> | 5   | 4   | 0      |

### 코드

1. 전체 Page 수 `n`에 대하여 좌/우 page로 묶인 경우를 계산
2. `p`Page가 1번 결과에서 어디에 위치하는지를 계산
3. 첫 번째, 마지막 페이지 총 2곳에서 가장 최소의 비용으로 탐색한 결과를 반환

```javascript
function pageCount(n, p) {
  const pages = Math.floor(n / 2) + 1;
  const target_page = Math.floor(p / 2) + 1;
  return Math.min(pages - target_page, target_page - 1);
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/challenges/drawing-book/leaderboard
