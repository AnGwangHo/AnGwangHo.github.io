---
title: 숫자 게임(javascript)
date: 2020-05-08
tags:
  - 알고리즘
  - 프로그래머스
  - Summer/Winter Coding(~2018)
keywords:
  - 알고리즘
  - 프로그래머스
  - 숫자 게임
  - javascript
  - Summer/Winter Coding(~2018)
---

## <center>[Summer/Winter Coding(~2018)] 숫자 게임</center>

**<center>javascript</center>**

---

### 조건

> - A 팀원들이 부여받은 수가 출전 순서대로 나열되어있는 배열 A와 i번째 원소가 B팀의 i번 팀원이 부여받은 수를 의미하는 배열 B가 주어질 때, B 팀원들이 얻을 수 있는 최대 승점을 return

### 제한사항

> - A와 B의 길이는 같습니다.
> - A와 B의 길이는 1 이상 100,000 이하입니다.
> - A와 B의 각 원소는 1 이상 1,000,000,000 이하의 자연수입니다.

### 입출력 예

> | A         | B         | result |
> | --------- | --------- | ------ |
> | [5,1,3,7] | [2,2,6,8] | 3      |
> | [2,2,2,2] | [1,1,1,1] | 0      |

### 코드

```javascript
function solution(A, B) {
  var answer = 0;
  let left = 0;
  const len = A.length;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    if (A[left] < B[i]) {
      left++;
      answer++;
    }
  }
  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
