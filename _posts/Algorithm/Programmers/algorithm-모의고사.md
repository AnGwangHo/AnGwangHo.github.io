---
title: 모의고사(javascript)
date: 2020-05-05
tags:
  - 알고리즘
  - 프로그래머스
  - 완전탐색
keywords:
  - 알고리즘
  - 프로그래머스
  - 모의고사
  - javascript
  - 완전탐색
---

## <center>[완전탐색] 모의고사</center>

**<center>javascript</center>**

---

### 조건

> - 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return

### 제한사항

> - 시험은 최대 10,000 문제로 구성되어있습니다.
> - 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
> - 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

### 입출력 예

> | answers     | return  |
> | ----------- | ------- |
> | [1,2,3,4,5] | [1]     |
> | [1,3,2,4,2] | [1,2,3] |

### 코드

```javascript
function solution(answers) {
  //answers 정답 배열
  var answer = [];
  var user1 = [1, 2, 3, 4, 5]; //5 * 8 = 40
  var user2 = [2, 1, 2, 3, 2, 4, 2, 5]; //8 *5 = 40
  var user3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //10 * 4 = 40
  var sum = [0, 0, 0];

  var len = answers.length;
  var item = 0;

  for (var i = 0; i < len; i++) {
    item = answers[i];
    if (user1[i % 5] === item) {
      sum[0]++;
    }
    if (user2[i % 8] === item) {
      sum[1]++;
    }
    if (user3[i % 10] === item) {
      sum[2]++;
    }
  }
  function max(a, b) {
    //최대값 함수
    if (a > b) return a;
    else return b;
  }
  var _max = max(max(sum[0], sum[1]), sum[2]); //최대값 입력
  for (var i = 0; i < 3; i++) {
    //최대점수를 가진 수포자 찾기
    if (sum[i] === _max) {
      answer.push(i + 1);
    }
  }
  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
