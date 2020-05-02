---
title: 체육복(javascript)
date: 2020-05-02
tags:
  - 알고리즘
  - 프로그래머스
  - 탐욕법(Greedy)
keywords:
  - 알고리즘
  - 프로그래머스
  - 체육복
  - javascript
  - 탐욕법(Greedy)
---

## <center>[탐욕법] 체육복</center>

**<center>javascript</center>**

---

### 조건

> - 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다.
> - 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
> - 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return

### 제한사항

> - 전체 학생의 수는 2명 이상 30명 이하입니다.
> - 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
> - 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
> - 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
> - 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

### 입출력 예

> | n   | lost   | reserve   | return |
> | --- | ------ | --------- | ------ |
> | 5   | [2, 4] | [1, 3, 5] | 5      |
> | 5   | [2, 4] | [3]       | 4      |
> | 3   | [3]    | [1]       | 2      |

### 코드

```javascript
function solution(n, lost, reserve) {
  let answer = 0;
  let len = lost.length;
  for (var i = 0; i < len; i++) {
    const dump_user = lost[i];
    if (reserve.indexOf(dump_user) > -1) {
      reserve.splice(reserve.indexOf(dump_user), 1);
      lost.splice(i, 1);
    }
  }
  len = lost.length;
  answer = n - len;
  for (var i = 0; i < len; i++) {
    const lost_user = lost[i];
    if (reserve.indexOf(lost_user) > -1) {
      reserve.splice(reserve.indexOf(lost_user), 1);
      answer++;
    } else if (reserve.indexOf(lost_user - 1) > -1) {
      reserve.splice(reserve.indexOf(lost_user - 1), 1);
      answer++;
    } else if (reserve.indexOf(lost_user + 1) > -1) {
      reserve.splice(reserve.indexOf(lost_user + 1), 1);
      answer++;
    }
  }

  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
