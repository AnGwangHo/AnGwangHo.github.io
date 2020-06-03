---
title: 뉴스 클러스터링(javascript)
date: 2020-06-03
tags:
  - 알고리즘
  - 프로그래머스
  - 2018 KAKAO BLIND RECRUITMENT
keywords:
  - 알고리즘
  - 프로그래머스
  - 뉴스 클러스터링
  - javascript
  - 2018 KAKAO BLIND RECRUITMENT
---

## <center>[2018 KAKAO BLIND RECRUITMENT] 뉴스 클러스터링</center>

**<center>javascript</center>**

---

### 조건

> - 입력으로는 str1과 str2의 두 문자열이 들어온다. 각 문자열의 길이는 2 이상, 1,000 이하이다.
> - 입력으로 들어온 문자열은 두 글자씩 끊어서 다중집합의 원소로 만든다. 이때 영문자로 된 글자 쌍만 유효하고, 기타 공백이나 숫자, 특수 문자가 들어있는 경우는 그 글자 쌍을 버린다. 예를 들어 ab+가 입력으로 들어오면, ab만 다중집합의 원소로 삼고, b+는 버린다.
> - 다중집합 원소 사이를 비교할 때, 대문자와 소문자의 차이는 무시한다. AB와 Ab, ab는 같은 원소로 취급한다.

### 제한사항

> - 유사도 값은 0에서 1 사이의 실수이므로, 이를 다루기 쉽도록 65536을 곱한 후에 소수점 아래를 버리고 정수부만 출력한다.

### 입출력 예

> | str1      | str2        | answer |
> | --------- | ----------- | ------ |
> | FRANCE    | french      | 16384  |
> | handshake | shake hands | 65536  |
> | aa1+aa2   | AAAA12      | 43690  |
> | E=M\*C^2  | e=m\*c^2    | 65536  |

### 코드

```javascript
function solution(str1, str2) {
  const regex = /^[a-z]*$/;
  const lower_str1 = str1.toLowerCase();
  const lower_str2 = str2.toLowerCase();
  let map1 = new Map();
  let map2 = new Map();
  let answer = 65536;

  if (lower_str1 === lower_str2) {
    return answer;
  }

  let len = lower_str1.length - 1;
  for (let i = 0; i < len; i++) {
    const word = lower_str1.slice(i, i + 2);
    if (regex.test(word)) {
      if (map1.has(word)) {
        map1.set(word, map1.get(word) + 1);
      } else {
        map1.set(word, 1);
      }
    }
  }

  len = lower_str2.length - 1;
  for (let i = 0; i < len; i++) {
    const word = lower_str2.slice(i, i + 2);
    if (regex.test(word)) {
      if (map2.has(word)) {
        map2.set(word, map2.get(word) + 1);
      } else {
        map2.set(word, 1);
      }
    }
  }

  let intersection = 0;
  let union = 0;
  map1.forEach((value, key) => {
    if (map2.has(key)) {
      const value2 = map2.get(key);
      if (value > value2) {
        intersection += value2;
        union += value;
      } else {
        intersection += value;
        union += value2;
      }
    } else {
      union += value;
    }
  });
  map2.forEach((value, key) => {
    if (!map1.has(key)) {
      union += value;
    }
  });

  return Math.floor((intersection / union) * answer);
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
