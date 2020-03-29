---
title: 예상 대진표(javascript)
date: 2020-03-28
tags:
  - 알고리즘
  - 프로그래머스
  - 탐욕법
keywords:
  - 알고리즘
  - 프로그래머스
  - 예상 대진표
  - javascript
  - 탐욕법
---

## <center>[탐욕법] level2 예상 대진표</center>

**<center>javascript</center>**

---

### 조건

> - 단, A번 참가자와 B번 참가자는 서로 붙게 되기 전까지 항상 이긴다고 가정합니다.
> - 몇 번째 라운드에 만나는지 반환

### 제한사항

> - N : 2<sup>1</sup> 이상 2<sup>20</sup> 이하인 자연수 (2의 지수 승으로 주어지므로 부전승은 발생하지 않습니다.)
> - A, B : N 이하인 자연수 (단, A ≠ B 입니다.)

### 입출력 예

> | N   | A   | B   | answer |
> | --- | --- | --- | ------ |
> | 8   | 4   | 7   | 3      |

### 코드

```javascript
function solution(n, a, b) {
  let answer = 0;
  while (a != b) {
    answer++;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
