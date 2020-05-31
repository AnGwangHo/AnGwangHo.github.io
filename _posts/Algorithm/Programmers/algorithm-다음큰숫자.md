---
title: 다음 큰 숫자(javascript)
date: 2020-05-31
tags:
  - 알고리즘
  - 프로그래머스
keywords:
  - 알고리즘
  - 프로그래머스
  - 다음 큰 숫자
  - javascript
  - 연습문제
---

## <center>[연습문제] 다음 큰 숫자</center>

**<center>javascript</center>**

---

### 제한사항

> - n은 1,000,000 이하의 자연수 입니다.

### 입출력 예

> | n   | result |
> | --- | ------ |
> | 78  | 83     |
> | 15  | 23     |

### 코드

```javascript
function solution(n) {
  var bit_num = n.toString(2);
  var regx = /1/g;
  var len = bit_num.match(regx).length;
  var bCheck = true;

  while (bCheck) {
    n++;
    let temp_num = n.toString(2);

    if (len == temp_num.match(regx).length) break;
  }

  return n;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
