---
title: 위장(javascript)
date: 2020-04-23
tags:
  - 알고리즘
  - 프로그래머스
  - 해시
keywords:
  - 알고리즘
  - 프로그래머스
  - 위장
  - javascript
  - 해시
---

## <center>[해시] 위장</center>

**<center>javascript</center>**

---

### 조건

> - 스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.
> - 스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return

### 제한사항

> - clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
> - 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
> - 같은 이름을 가진 의상은 존재하지 않습니다.
> - clothes의 모든 원소는 문자열로 이루어져 있습니다.
> - 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '\_' 로만 이루어져 있습니다.
> - 스파이는 하루에 최소 한 개의 의상은 입습니다.

### 입출력 예

> | clothes                                                                        | return |
> | ------------------------------------------------------------------------------ | ------ |
> | [[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]] | 5      |
> | [[crow_mask, face], [blue_sunglasses, face], [smoky_makeup, face]]             | 3      |

### 코드

```javascript
function solution(clothes) {
  var type = [clothes[0][1]];
  var value_array = [[clothes[0][0]]];
  //1. 카테고리 분류
  let len = clothes.length;
  if (len === 1) return 1;

  let item = '';
  for (let i = 1; i < len; i++) {
    item = clothes[i];
    if (type.includes(item[1])) {
      value_array[type.indexOf(item[1])].push(item[0]);
    } else {
      value_array[type.push(item[1]) - 1] = [item[0]];
    }
  }

  //2. 갯수 추출 후 경우의 수 구하기
  var sum = value_array.reduce((a, b) => {
    return a * (b.length + 1);
  }, 1);
  return sum - 1;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
