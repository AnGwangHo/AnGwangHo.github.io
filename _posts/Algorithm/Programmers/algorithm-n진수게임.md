---
title: n진수 게임(javascript)
date: 2020-06-04
tags:
  - 알고리즘
  - 프로그래머스
  - 2018 KAKAO BLIND RECRUITMENT
keywords:
  - 알고리즘
  - 프로그래머스
  - n진수 게임
  - javascript
  - 2018 KAKAO BLIND RECRUITMENT
---

## <center>[3차] n진수 게임</center>

**<center>javascript</center>**

---

### 조건

> - 튜브가 말해야 하는 숫자 t개를 공백 없이 차례대로 나타낸 문자열. 단, `10`~`15`는 각각 대문자 `A`~`F`로 출력한다.

### 제한사항

> - 유사도 값은 0에서 1 사이의 실수이므로, 이를 다루기 쉽도록 65536을 곱한 후에 소수점 아래를 버리고 정수부만 출력한다.

### 입출력 예

> | n   | t   | m   | p   | result             |
> | --- | --- | --- | --- | ------------------ |
> | 2   | 4   | 2   | 1   | "0111"             |
> | 16  | 16  | 2   | 1   | "02468ACE11111111" |
> | 16  | 16  | 2   | 2   | "13579BDF01234567" |

### 코드

```javascript
function solution(n, t, m, p) {
  let answer = '';
  let stack = '';

  let num = 0;
  while (stack.length < t * m) {
    stack += Number(num)
      .toString(n)
      .toUpperCase();
    num++;
  }

  //p, p+m, p+m+m... => (p-1)+(i*m) 스택에서 꺼내는 index
  for (let i = 0; i < t; i++) {
    answer += stack.charAt(p - 1 + i * m);
  }

  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
