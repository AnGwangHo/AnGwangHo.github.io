---
title: 큰 수 만들기(javascript)
date: 2020-04-13
tags:
  - 알고리즘
  - 프로그래머스
  - 탐욕법(Greedy)
keywords:
  - 알고리즘
  - 프로그래머스
  - 큰 수 만들기
  - javascript
  - 탐욕법(Greedy)
---

## <center>[탐욕법(Greedy)] 큰 수 만들기</center>

**<center>javascript</center>**

---

### 조건

> - 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.
> - number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return

### 제한사항

> - number는 1자리 이상, 1,000,000자리 이하인 숫자입니다.
> - k는 1 이상 number의 자릿수 미만인 자연수입니다.

### 입출력 예

> | number       | k   | return   |
> | ------------ | --- | -------- |
> | "1924"       | 2   | "94"     |
> | "1231234"    | 3   | "3234"   |
> | "4177252841" | 4   | "775841" |

### 코드

```javascript
function solution(number, k) {
  var b = [];
  for (var i = 0; i < number.length; i++) {
    var c = number[i];
    while (k > 0 && b.length > 0 && b[b.length - 1] < c) {
      b.pop();
      k--;
    }
    b.push(c);
  }

  b.splice(b.length - k, k);

  return b.join('');
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
