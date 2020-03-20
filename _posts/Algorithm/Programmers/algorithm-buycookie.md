---
title: 쿠키 구입(javascript)
date: 2020-03-20
tags:
  - 알고리즘
  - 프로그래머스
  - 2018 윈터코딩
keywords:
  - 알고리즘
  - 프로그래머스
  - 쿠키 구입
  - javascript
  - 2018 윈터코딩
---

## <center>[2018 윈터코딩] 쿠키 구입</center>

**<center>javascript</center>**

---

### 조건

> - 각 바구니 안에 들은 과자 수가 차례로 들은 배열 cookie가 주어질 때(오름차순 정렬)
> - 두 아들이 받을 과자 수는 같아야 합니다(1 <= l <= m, m+1 <= r <= N)
> - A[i] 를 i번 바구니에 들어있는 과자 수라고 했을 때, A[l]+..+A[m] = A[m+1]+..+A[r] 를 만족해야 합니다
> - 한 명의 아들에게 줄 수 있는 가장 많은 과자 수를 return(조건에 맞지 않으면 0을 return)

### 제안사항

> - cookie의 길이는 1 이상 2,000 이하입니다.
> - cookie의 각각의 원소는 1 이상 500 이하인 자연수입니다.

### 입출력 예

> | cookie    | result |
> | --------- | ------ |
> | [1,1,2,3] | 3      |
> | [1,2,4,5] | 0      |

### 코드

```javascript
function solution(cookie) {
  var answer = 0;
  if (cookie.length <= 2) {
    if (cookie.length == 2 && cookie[0] == cookie[1]) {
      answer = cookie[0];
    }
    return answer;
  }

  //이분탐색
  const len = cookie.length - 1;
  for (
    let i = 0;
    i < len;
    i++ //경계선
  ) {
    let presum = cookie[i]; //첫째 총 과자갯수
    let preidx = i; //첫째 마지막에 추가한 바구니 위치
    let postsum = cookie[i + 1]; //둘째 총 과자갯수
    let postidx = i + 1; //둘째 마지막에 추가한 바구니 위치

    //경계선을 기준으로 idx가 0 || len에 도달할때 까지
    while (true) {
      if (presum === postsum)
        //첫째 과자갯수===둘째 과자갯수인 경우
        answer = Math.max(presum, answer); //Max값인 경우에만 변수할당

      if (preidx > 0 && presum <= postsum) {
        //둘째 과자갯수가 더 많은 경우, idx가 0이 될때까지 과자의 총합을 더한다.
        preidx--; //첫째 바구니 하나 더 추가
        presum += cookie[preidx]; //첫째 과자갯수 총합에 더하기
      } else if (postidx < len && presum >= postsum) {
        //첫째 과자갯수가 더 많은 경우, idx가 len이 될때까지 과자의 총합을 더한다.
        postidx++; //둘째 바구니 하나 더 추가
        postsum += cookie[postidx]; //둘째 과자갯수 총합에 더하기
      } //첫째 || 둘째의 바구니 위치가 0 || len에 도달한 경우 loop break
      else break;
    }
  }
  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
