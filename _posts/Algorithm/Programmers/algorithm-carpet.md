---
title: 카펫(javascript)
date: 2020-03-31
tags:
  - 알고리즘
  - 프로그래머스
  - 완전탐색
keywords:
  - 알고리즘
  - 프로그래머스
  - 카펫
  - javascript
  - 완전탐색
---

## <center>[완전탐색] level2 카펫</center>

**<center>javascript</center>**

---

### 조건

> - 빨간색 격자는 카펫 중앙에 위치, 갈색은 카펫 테투리에 그려짐
> - 빨간색 격자는 사각형의 형태로 중앙에 존재해야 함

### 제한사항

> - 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
> - 빨간색 격자의 수 red는 1 이상 2,000,000 이하인 자연수입니다.
> - 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

### 입출력 예

> | brown | red | return |
> | ----- | --- | ------ |
> | 10    | 2   | [4, 3] |
> | 8     | 1   | [3, 3] |
> | 24    | 24  | [8, 6] |

### 코드

```javascript
function solution(brown, red) {
  var answer = [];
  let bflag = false; //정답 구한 경우 loop에서 나오기 위한 변수

  //가로길이를 1부터 red길이까지 loop
  for (let i = 1; i <= red; i++) {
    //세로길이를 1~가로길이 까지 loop
    for (let j = 1; j <= i; j++) {
      const size = i * j; //red의 갯수를 계산
      if (red === size) {
        //red와 같은 경우
        if (brown === (i + 2) * 2 + j * 2) {
          //brown의 갯수와 같은지 판단
          answer = [i + 2, j + 2]; //brown의 경우 red를 감싸는 형태로 존재해야 함
          bflag = true; //가로길이 loop를 break
          break;
        }
      }
    }
    if (bflag) break;
  }

  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
