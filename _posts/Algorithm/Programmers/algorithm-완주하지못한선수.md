---
title: 완주하지 못한 선수(javascript)
date: 2020-04-28
tags:
  - 알고리즘
  - 프로그래머스
  - 해시
keywords:
  - 알고리즘
  - 프로그래머스
  - 완주하지 못한 선수
  - javascript
  - 해시
---

## <center>[해시] 완주하지 못한 선수</center>

**<center>javascript</center>**

---

### 조건

> - 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주
> - 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return

### 제한사항

> - 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
> - completion의 길이는 participant의 길이보다 1 작습니다.
> - 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
> - 참가자 중에는 동명이인이 있을 수 있습니다.

### 입출력 예

> | participant                             | completion                       | return   |
> | --------------------------------------- | -------------------------------- | -------- |
> | [leo, kiki, eden]                       | [eden, kiki]                     | "leo"    |
> | [marina, josipa, nikola, vinko, filipa] | [josipa, filipa, marina, nikola] | "vinko"  |
> | [mislav, stanko, mislav, ana]           | [stanko, ana, mislav]            | "mislav" |

### 코드

```javascript
function solution(participant, completion) {
  //참여자, 완주자
  let key = new Map();
  let len = completion.length;

  for (let i = 0; i < len; i++) {
    if (!key.has(completion[i])) {
      key.set(completion[i], 1);
    } else {
      key.set(completion[i], key.get(completion[i]) + 1);
    }
  }

  len = participant.length;
  let count = 0;

  for (let i = 0; i < len; i++) {
    if (!key.has(participant[i])) {
      return participant[i];
    } else {
      count = key.get(participant[i]);
      if (count === 0) {
        return participant[i];
      } else key.set(participant[i], --count);
    }
  }
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
