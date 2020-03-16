---
title: 비밀지도(javascript)
date: 2020-03-13
tags:
  - 알고리즘
  - 프로그래머스
  - 2018 KAKAO BLIND RECRUITMENT
keywords:
  - 알고리즘
  - 프로그래머스
  - 비밀지도
  - javascript
  - 2018 KAKAO BLIND RECRUITMENT
---

## <center>[2018 KAKAO BLIND RECRUITMENT][1차] 비밀지도</center>

**<center>javascript</center>**

---

### 조건

> 1. 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 공백(" ) 또는벽(#") 두 종류로 이루어져 있다.
> 2. 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 지도 1과 지도 2라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
> 3. 지도 1과 지도 2는 각각 정수 배열로 암호화되어 있다.
> 4. 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.

### 제한사항

> - 1 ≦ n ≦ 16
> - arr1, arr2는 길이 n인 정수 배열로 주어진다.
> - 정수 배열의 각 원소 x를 이진수로 변환했을 때의 길이는 n 이하이다. 즉, 0 ≦ x ≦ 2n - 1을 만족한다.

### 입출력 예

> | 매개변수 | 값                                          |
> | -------- | ------------------------------------------- |
> | n        | 5                                           |
> | arr1     | [9, 20, 28, 18, 11]                         |
> | arr2     | [30, 1, 21, 17, 28]                         |
> | 출력     | ["#####","# # #", "### #", "# ##", "#####"] |

> | 매개변수 | 값                                                         |
> | -------- | ---------------------------------------------------------- |
> | n        | 6                                                          |
> | arr1     | [46, 33, 33 ,22, 31, 50]                                   |
> | arr2     | [27 ,56, 19, 14, 14, 10]                                   |
> | 출력     | ["######", "### #", "## ##", " #### ", " #####", "### # "] |

### 코드

```javascript
function solution(n, arr1, arr2) {
  var answer = [];
  const len = arr1.length;

  //arr1의 row개수(== n)만큼 loop
  for (let i = 0; i < len; i++) {
    //10진수 -> 2진수
    let arr1_row = arr1[i].toString(2);
    let arr2_row = arr2[i].toString(2);

    //2진수로 변경 시 앞의 0이 제외된 부분 추가
    if (arr1_row.length < n) {
      arr1_row = '0'.repeat(n - arr1_row.length) + arr1_row;
    }
    if (arr2_row.length < n) {
      arr2_row = '0'.repeat(n - arr2_row.length) + arr2_row;
    }

    //숫자 -> 문자(# || " ")로 변경
    let str_temp = '';
    for (let j = 0; j < len; j++) {
      if (Math.max(arr1_row.charAt(j), arr2_row.charAt(j)) == 1) str_temp += '#';
      else str_temp += ' ';
    }
    answer.push(str_temp);
  }
  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
