---
title: 구명보트(javascript)
date: 2020-03-30
tags:
  - 알고리즘
  - 프로그래머스
  - 탐욕법
keywords:
  - 알고리즘
  - 프로그래머스
  - 구명보트
  - javascript
  - 탐욕법
---

## <center>[탐욕법] level2 구명보트</center>

**<center>javascript</center>**

---

### 조건

> - 구명보트에 최대 2명까지 탑승 가능
> - 구명보트의 무게를 초과하여 탑승 불가능

### 제한사항

> - 무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
> - 각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
> - 구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
> - 구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.

### 입출력 예

> | people           | limit | return |
> | ---------------- | ----- | ------ |
> | [70, 50, 80, 50] | 100   | 3      |
> | [70, 80, 50]     | 100   | 3      |

### 코드

```javascript
function solution(people, limit) {
  //limit와 같은 무게의 사람들의 경우 1명만 탑승 가능하므로 제외
  let array = people.filter(value => value < limit);
  let answer = people.length - array.length;

  array.sort((a, b) => b - a); //내림차순으로 정렬
  while (array.length > 0) {
    //배열이 존재하는 동안 loop
    const number = array.pop(); //가장 낮은 몸무게를 배열에서 제외
    const idx = array.findIndex(value => value + number <= limit); //같이 탑승 가능한 최대무게의 승객의 index를 탐색

    if (idx !== -1) {
      //동승 가능한 최대 몸무게의 사람이 있는 경우
      array.splice(0, idx + 1); //동승 가능한 사람의 위치까지 배열에서 제외(앞의 사람들은 혼자만 탑승 가능)
      answer += idx + 1; //동승 가능한 사람 + 혼자만 탑승 가능한 사람들
    } //동승 가능한 사람이 없는 경우
    else {
      answer += len + 1; //전부 혼자 탑승하므로 loop 종료
      break;
    }
  }

  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
