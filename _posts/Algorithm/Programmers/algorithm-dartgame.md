---
title: 다트게임(javascript)
date: 2020-03-15
tags:
  - 알고리즘
  - 프로그래머스
  - 2018 KAKAO BLIND RECRUITMENT
keywords:
  - 알고리즘
  - 프로그래머스
  - 다트게임
  - javascript
  - 2018 KAKAO BLIND RECRUITMENT
---

## <center>[2018 KAKAO BLIND RECRUITMENT][1차] 다트게임</center>

**<center>javascript</center>**

---

### 조건

> 1. 다트 게임은 총 3번의 기회로 구성된다.
> 2. 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
> 3. 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
> 4. 옵션으로 스타상(_) , 아차상(#)이 존재하며 스타상(_) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
> 5. 스타상(_)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(_)의 점수만 2배가 된다. (예제 4번 참고)
> 6. 스타상(_)의 효과는 다른 스타상(_)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(\*) 점수는 4배가 된다. (예제 4번 참고)
> 7. 스타상(\*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
> 8. Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
> 9. 스타상(\*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.

### 제한사항

> - 점수는 0에서 10 사이의 정수이다.
> - 보너스는 S, D, T 중 하나이다.
> - 옵선은 \*이나 # 중 하나이며, 없을 수도 있다.

### 입출력 예

> | 예제 | dartResult | answer | 설명                                                            |
> | ---- | ---------- | ------ | --------------------------------------------------------------- |
> | 1    | 1S2D\*3T   | 37     | 1<sup>1</sup> \* 2 + 2<sup>2</sup> \* 2 + 3<sup>3</sup>         |
> | 2    | 1D2S#10S   | 9      | 1<sup>2</sup> + 2<sup>1</sup> \* (-1) + 10<sup>1</sup>          |
> | 3    | 1D2S0T     | 3      | 1<sup>2</sup> + 2<sup>1</sup> + 0<sup>3</sup>                   |
> | 4    | 1S*2T*3S   | 23     | 1<sup>1</sup> \* 2 \* 2 + 2<sup>3</sup> \* 2 + 3<sup>1</sup>    |
> | 5    | 1D#2S\*3S  | 5      | 1<sup>2</sup> \* (-1) \* 2 + 2<sup>1</sup> \* 2 + 3<sup>1</sup> |
> | 6    | 1T2D3D#    | -4     | 1<sup>3</sup> + 2<sup>2</sup> + 3<sup>2</sup> \* (-1)           |
> | 7    | 1D2S3T\*   | 59     | 1<sup>2</sup> + 2<sup>1</sup> \* 2 + 3<sup>3</sup> \* 2         |

### 코드

```javascript
function solution(dartResult) {
  //점수 - [정수][S|D|T]
  //옵션 - * | # | ""
  //Math.pow(x,y) x의 y제곱
  let stack = []; //다트 점수를 넣을 배열(총 길이 : 3)
  let score = { S: 1, D: 2, T: 3 }; //영역에 따른 제곱 수
  let count = 0; //숫자 영역을 체크하기 위한 count 값(10인 경우)
  const len = dartResult.length;

  //dartResult길이만큼 loop
  for (let i = 0; i < len; i++) {
    let data = dartResult.charAt(i);
    if (+data != data) {
      //number로 변환 시 현재 text와 동일한지 판단(문자인 경우 NaN)
      if (score[data]) {
        //현재 문자가 영역인 경우
        stack.push(Math.pow(dartResult.slice(i - count, i), score[data]));
        count = 0;
      } else {
        const invariable = data === '*' ? 2 : -1; //스타상, 아차상에 따른 상수 설정
        const len = stack.length; //자주 사용되는 점수배열의 길이 값을 변수로 할당
        if (invariable == 2 && len > 1) {
          //스타상인 경우 앞의 값도 2배를 해줘야함으로 현재 몇 번째 기회인지를 체크한다.
          stack[len - 2] = stack[len - 2] * invariable;
        }
        stack[len - 1] = stack[len - 1] * invariable; //스타상, 아차상 둘 다 동일하게 현재 점수에 대하여 곱하기 연산 수행
      }
    } else {
      count++; //숫자 영역 체크를 위한 카운트
    }
  }

  return stack.reduce((acc, value) => acc + value, 0); //배열의 합 반환
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
