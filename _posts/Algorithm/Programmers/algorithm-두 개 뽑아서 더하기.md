---
title: 두 개 뽑아서 더하기(javascript)
date: 2020-10-02
tags:
  - 알고리즘
  - 프로그래머스
  - 월간 코드 챌린지 시즌1
keywords:
  - 알고리즘
  - 프로그래머스
  - 월간 코드 챌린지 시즌1
  - javascript
---

## <center>[월간 코드 챌린지 시즌1] 두 개 뽑아서 더하기</center>

**<center>javascript</center>**

---

### 조건

> - 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

### 제한사항

> - numbers의 길이는 2 이상 100 이하입니다.
>   - numbers의 모든 수는 0 이상 100 이하입니다.

### 입출력 예

> | numbers     | return        |
> | ----------- | ------------- |
> | [2,1,3,4,1] | [2,3,4,5,6,7] |
> | [5,0,2,7]   | [2,5,7,9,12]  |

### 코드

```javascript
function solution(numbers) {
  const answer = [];
  const len = numbers.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const sum = numbers[i] + numbers[j];
      if (!answer.some(value => value === sum)) {
        answer.push(sum);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
