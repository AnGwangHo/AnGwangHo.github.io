---
title: 예산(javascript)
date: 2020-05-23
tags:
  - 알고리즘
  - 프로그래머스
  - Summer/Winter Coding(~2018)
keywords:
  - 알고리즘
  - 프로그래머스
  - 예산
  - javascript
  - Summer/Winter Coding(~2018)
---

## <center>[Summer/Winter Coding(~2018)] 예산</center>

**<center>javascript</center>**

---

### 조건

> - 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.
> - 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return

### 제한사항

> - d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
> - d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
> - budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.

### 입출력 예

> | d           | budget | result |
> | ----------- | ------ | ------ |
> | [1,3,2,5,4] | 9      | 3      |
> | [2,2,3,3]   | 10     | 4      |

### 코드

```javascript
function solution(d, budget) {
  var answer = 0;
  const len = d.length;

  d.sort((a, b) => a - b);

  let sum = 0;
  for (let i = 0; i < len; i++) {
    const value = d[i];
    sum += value;

    if (sum > budget) break;
    else answer++;
  }

  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
