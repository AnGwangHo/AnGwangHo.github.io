---
title: 가장 큰 수(javascript)
date: 2020-05-22
tags:
  - 알고리즘
  - 프로그래머스
  - 정렬
keywords:
  - 알고리즘
  - 프로그래머스
  - 모의고사
  - javascript
  - 정렬
---

## <center>[정렬] 가장 큰 수</center>

**<center>javascript</center>**

---

### 조건

> - 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요

### 제한사항

> - numbers의 길이는 1 이상 100,000 이하입니다.
> - numbers의 원소는 0 이상 1,000 이하입니다.
> - 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

### 입출력 예

> | numbers           | return    |
> | ----------------- | --------- |
> | [6, 10, 2]        | "6210"    |
> | [3, 30, 34, 5, 9] | "9534330" |

### 코드

```javascript
function solution(numbers) {
  var answer = numbers
    .map(v => v + '')
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join('');
  return answer[0] === '0' ? '0' : answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
