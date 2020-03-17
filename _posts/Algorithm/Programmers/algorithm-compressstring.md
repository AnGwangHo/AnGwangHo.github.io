---
title: 문자열 압축(javascript)
date: 2020-03-17
tags:
  - 알고리즘
  - 프로그래머스
  - 2020 KAKAO BLIND RECRUITMENT
keywords:
  - 알고리즘
  - 프로그래머스
  - 문자열 압축
  - javascript
  - 2020 KAKAO BLIND RECRUITMENT
---

## <center>[2020 KAKAO BLIND RECRUITMENT] 문자열 압축</center>

**<center>javascript</center>**

---

### 조건

> - 문자열을 1개 이상의 단위로 잘라서 압축하여 더 짧은 문자열로 표현할 수 있는지 방법을 찾아보려고 합니다.
> - ababcdcdababcdcd의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 2개 단위로 잘라서 압축한다면 2ab2cd2ab2cd로 표현할 수 있습니다.
> - 다른 방법으로 8개 단위로 잘라서 압축한다면 2ababcdcd로 표현할 수 있으며, 이때가 가장 짧게 압축하여 표현할 수 있는 방법입니다.
> - 압축할 문자열 s가 매개변수로 주어질 때, 위에 설명한 방법으로 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return

### 제한사항

> - s의 길이는 1 이상 1,000 이하입니다.
> - s는 알파벳 소문자로만 이루어져 있습니다.

### 입출력 예

> | s                          | result |
> | -------------------------- | ------ |
> | "aabbaccc"                 | 7      |
> | "ababcdcdababcdcd"         | 9      |
> | "abcabcdede"               | 8      |
> | "abcabcabcabcdededededede" | 14     |
> | "xababcdcdababcdcd"        | 17     |

### 코드

```javascript
function solution(s) {
  let answer = s; //문자열 그대로 반환
  const cut_len = s.length / 2; //문자열 길이 / 2까지만 압축가능
  const str_len = s.length; //문자열 길이만큼 loop 돌면서 자르는 단위 증가

  for (
    let i = 1;
    i <= cut_len;
    i++ //문자열 n개 단위 자르기(1~s.length/2)
  ) {
    let temp_str = ''; //임시로 압축한 문자열 저장하는 변수
    let cut_str = s.slice(0, i); //최초 n개 단위로 자른 문자
    let count = 1; //최초 문자열 자를 시 count 1로 초기화

    for (
      let j = i;
      j < str_len;
      j += i //문자열 길이만큼 loop(i만큼 증가)
    ) {
      const str = s.slice(j, j + i);
      if (cut_str == str) {
        //기준이 되는 문자와 같은 경우
        count++; //숫자 증가
      } //n개만큼 자른 문자가 반복되지 않는 경우
      else {
        temp_str += count > 1 ? count + cut_str : cut_str; //count 갯수를 기준으로 압축 문자 or 기존 문자 저장
        cut_str = str; //기준 문자열을 새로운 n개만큼 자른 문자로 대체
        count = 1; //count 갯수 초기화
      }
    }

    if (cut_str) {
      //for-loop 후 마지막 문자에 대하여 추가적으로 반영
      temp_str += count > 1 ? count + cut_str : cut_str;
    }

    if (answer.length > temp_str.length) {
      //압축문자가 더 작은 경우에만 answer 갱신
      answer = temp_str;
    }
  }

  return answer.length;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
