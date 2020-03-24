---
title: 폰켓몬 (javascript)
date: 2020-03-24
tags:
  - 알고리즘
  - 프로그래머스
  - 찾아라 프로그래밍 마에스터
keywords:
  - 알고리즘
  - 프로그래머스
  - 폰켓몬
  - javascript
  - 찾아라 프로그래밍 마에스터
---

## <center>[찾아라 프로그래밍 마에스터] 폰켓몬</center>

**<center>javascript</center>**

---

### 조건

> - 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택
> - 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return

### 제한사항

> - nums는 폰켓몬의 종류 번호가 담긴 1차원 배열입니다.
> - nums의 길이(N)는 1 이상 10,000 이하의 자연수이며, 항상 짝수로 주어집니다.
> - 폰켓몬의 종류 번호는 1 이상 200,000 이하의 자연수로 나타냅니다.
> - 가장 많은 종류의 폰켓몬을 선택하는 방법이 여러 가지인 경우에도, 선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 return 하면 됩니다.

### 입출력 예

> | nums          | result |
> | ------------- | ------ |
> | [3,1,2,3]     | 2      |
> | [3,3,3,2,2,4] | 3      |
> | [3,3,3,2,2,2] | 2      |

### 코드

```javascript
function solution(nums) {
  let max = nums.length / 2; //골라야하는 갯수

  //중복제거
  let stack = [];
  nums.concat().forEach(value => {
    if (stack.indexOf(value) === -1) stack.push(value);
  });

  return stack.length >= max ? max : stack.length;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
