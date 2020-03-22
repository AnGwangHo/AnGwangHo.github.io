---
title: 소수 만들기(javascript)
date: 2020-03-22
tags:
  - 알고리즘
  - 프로그래머스
  - 2018 윈터코딩
keywords:
  - 알고리즘
  - 프로그래머스
  - 소수 만들기
  - javascript
  - 2018 윈터코딩
---

## <center>[2017 윈터코딩] 소수 만들기</center>

**<center>javascript</center>**

---

### 조건

> - nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return

### 제안사항

> - nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
> - nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

### 입출력 예

> | nums    | result |
> | --------- | ------ |
> | [1,2,3,4] | 1      |
> | [1,2,7,6,4] | 4      |

### 코드

```javascript
function solution(nums) {
  let answer = 0;

  //1. 3자리 숫자 만들기
  const len = nums.length;
  for (let i = 0; i < len; i++)
  {
    for (let j = i+1; j < len; j++)
    {
      for (let k = j+1; k < len; k++)
      {
        const number = nums[i]+nums[j]+nums[k];
        if (isPrime(number))
          answer++;
      }
    }
  }

  //2. 소수 판별(2~number까지 하나씩 비교)
  function isPrime(number)
  {
    if (number < 2) return true;
    for (let i = 2; i < number; i++)
    {
      if (number % i == 0) return false;
    }
    return true;
  }

  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
