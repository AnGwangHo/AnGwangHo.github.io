---
title: 튜플(javascript)
date: 2020-05-11
tags:
  - 알고리즘
  - 프로그래머스
  - 2019 카카오 개발자 겨울 인턴십
keywords:
  - 알고리즘
  - 프로그래머스
  - 튜플
  - javascript
  - 2019 카카오 개발자 겨울 인턴십
---

## <center>[2019 카카오 개발자 겨울 인턴십] 튜플</center>

**<center>javascript</center>**

---

### 조건

> - 원소의 개수가 n개이고, 중복되는 원소가 없는 튜플 (a1, a2, a3, ..., an)이 주어질 때
> - 특정 튜플을 표현하는 집합이 담긴 문자열 s가 매개변수로 주어질 때, s가 표현하는 튜플을 배열에 담아 return

### 제한사항

> - s의 길이는 5 이상 1,000,000 이하입니다.
> - s는 숫자와 '{', '}', ',' 로만 이루어져 있습니다.
> - 숫자가 0으로 시작하는 경우는 없습니다.
> - s는 항상 중복되는 원소가 없는 튜플을 올바르게 표현하고 있습니다.
> - s가 표현하는 튜플의 원소는 1 이상 100,000 이하인 자연수입니다.
> - return 하는 배열의 길이가 1 이상 500 이하인 경우만 입력으로 주어집니다.

### 입출력 예

> | s                               | result       |
> | ------------------------------- | ------------ |
> | "{{2},{2,1},{2,1,3},{2,1,3,4}}" | [2, 1, 3, 4] |
> | "{{1,2,3},{2,1},{1,2,4,3},{2}}" | [2, 1, 3, 4] |
> | "{{20,111},{111}}"              | [111, 20]    |
> | "{{123}}"                       | [123]        |
> | "{{4,2,3},{3},{2,3,4,1},{2,3}}" | [3, 2, 4, 1] |

### 코드

1. s의 경우 '{', '}'가 맨 앞/뒤에 고정적으로 주어지므로 해당 값을 제외하고 split처리
2. ','를 기준으로 split시 2차원 배열이 구분이 안되므로 '},'으로 split후 number array가 되도록 후속처리
3. 튜플의 경우 숫자위치가 달라지면 다른 튜플이므로 원소가 가장 작은 array부터 탐색하도록 sort

```javascript
function solution(s) {
  let filterArray = s
    .slice(1, s.length - 1)
    .split('},')
    .map(value =>
      value
        .replace(/{|}/gi, '')
        .split(',')
        .map(value => +value)
    )
    .sort((a, b) => a.length - b.length);
  let answer = [];
  for (let array of filterArray) {
    for (let elem of array) {
      if (answer.every(value => value != elem)) {
        answer.push(elem);
        break;
      }
    }
  }

  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
