---
title: H-Index(javascript)
date: 2020-04-20
tags:
  - 알고리즘
  - 프로그래머스
  - 정렬
keywords:
  - 알고리즘
  - 프로그래머스
  - H-Index
  - javascript
  - 정렬
---

## <center>[정렬] H-Index</center>

**<center>javascript</center>**

---

### 조건

> - H-Index<sup>[1](https://en.wikipedia.org/wiki/H-index)</sup>를 나타내는 값인 h를 구하고자 합니다.
> - 어떤 과학자가 발표한 논문 `n`편 중, `h`번 이상 인용된 논문이 `h`편 이상이고 나머지 논문이 `h`번 이하 인용되었다면 `h`의 최댓값이 이 과학자의 H-Index
> - 어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하시오

### 제한사항

> - 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
> - 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

### 입출력 예

> | citations       | return |
> | --------------- | ------ |
> | [3, 0, 6, 1, 5] | 3      |

### 코드

```javascript
function solution(citations) {
  const arr = citations.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(Math.min(arr[i], arr.length - i));
  }
  return Math.max(...result);
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
