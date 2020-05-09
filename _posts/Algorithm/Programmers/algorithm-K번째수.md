---
title: K번째수(javascript)
date: 2020-05-09
tags:
  - 알고리즘
  - 프로그래머스
  - 정렬
keywords:
  - 알고리즘
  - 프로그래머스
  - K번째수
  - javascript
  - 정렬
---

## <center>[정렬] K번째수</center>

**<center>javascript</center>**

---

### 조건

> - 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
> - 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return

### 제한사항

> - array의 길이는 1 이상 100 이하입니다.
> - array의 각 원소는 1 이상 100 이하입니다.
> - commands의 길이는 1 이상 50 이하입니다.
> - commands의 각 원소는 길이가 3입니다.

### 입출력 예

> | array                 | commands                          | return    |
> | --------------------- | --------------------------------- | --------- |
> | [1, 5, 2, 6, 3, 7, 4] | [[2, 5, 3], [4, 4, 1], [1, 7, 3]] | [5, 6, 3] |

### 코드

```javascript
function solution(array, commands) {
  var answer = [];
  var start = 0,
    end = 0,
    index = 0;
  var len = commands.length;

  for (var i = 0; i < len; i++) {
    start = commands[i][0] - 1;
    end = commands[i][1];
    index = commands[i][2] - 1;
    answer.push(
      array.slice(start, end).sort(function(a, b) {
        return a - b;
      })[index]
    );
  }
  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
