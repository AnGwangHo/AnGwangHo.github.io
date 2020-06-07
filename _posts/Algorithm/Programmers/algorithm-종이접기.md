---
title: 종이접기(javascript)
date: 2020-06-07
tags:
  - 알고리즘
  - 프로그래머스
  - Summer/Winter Coding(2019)
keywords:
  - 알고리즘
  - 프로그래머스
  - 종이접기
  - javascript
  - Summer/Winter Coding(2019)
---

## <center>[Summer/Winter Coding(2019)] 종이접기</center>

**<center>javascript</center>**

---

### 조건

> - 직사각형 종이를 n번 접으려고 합니다. 이때, 항상 오른쪽 절반을 왼쪽으로 접어 나갑니다.

### 제한사항

> - 종이를 접는 횟수 n은 1 이상 20 이하의 자연수입니다.
> - 종이를 접었다 편 후 생긴 굴곡이 ∨ 모양이면 0, ∧ 모양이면 1로 나타냅니다.
> - 가장 왼쪽의 굴곡 모양부터 순서대로 배열에 담아 return 해주세요.

### 입출력 예

> | n   | result                |
> | --- | --------------------- |
> | 1   | [0]                   |
> | 2   | [0, 0, 1]             |
> | 3   | [0, 0, 1, 0, 0, 1, 1] |

### 코드

```javascript
function solution(n) {
  let answer = [0];

  for (let i = 1; i < n; i++) {
    const reverse = answer.map(value => value ^ 1).reverse();
    answer.push(0);
    for (let num of reverse) {
      answer.push(num);
    }
  }
  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
