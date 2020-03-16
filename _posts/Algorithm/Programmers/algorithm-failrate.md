---
title: 실패율(javascript)
date: 2020-03-15
tags:
  - 알고리즘
  - 프로그래머스
  - 2019 KAKAO BLIND RECRUITMENT
keywords:
  - 알고리즘
  - 프로그래머스
  - 실패율
  - javascript
  - 2019 KAKAO BLIND RECRUITMENT
---

## <center>[2019 KAKAO BLIND RECRUITMENT] 실패율</center>

**<center>javascript</center>**

---

### 조건

> - 실패율은 다음과 같이 정의한다.
>   - 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
> - 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하라

### 제한사항

> - 스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
> - stages의 길이는 1 이상 200,000 이하이다.
> - stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
>   - 각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
>   - 단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
> - 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
> - 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.

### 입출력 예

> | N   | stages                   | result      |
> | --- | ------------------------ | ----------- |
> | 5   | [2, 1, 2, 6, 2, 4, 3, 3] | [3,4,2,1,5] |
> | 4   | [4,4,4,4,4]              | [4,1,2,3]   |

### 코드

```javascript
function solution(N, stages) {
  var answer = [];
  var stack = [];
  let users = stages.length;
  //[] {stage, 실패율}
  for (var i = 1; i <= N; i++) {
    const len = stages.filter(value => value === i).length;
    if (len === 0) {
      stack.push({ index: i, ratio: 0 });
    } else {
      stack.push({ index: i, ratio: len / users });
      users -= len;
    }
  }

  stack.sort((a, b) => {
    if (b.ratio === a.ratio) {
      return a.index - b.index;
    } else {
      return b.ratio - a.ratio;
    }
  });

  return stack.map(value => value.index);
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
