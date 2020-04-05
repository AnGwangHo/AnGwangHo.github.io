---
title: 기능개발(javascript)
date: 2020-04-05
tags:
  - 알고리즘
  - 프로그래머스
  - 스택/큐
keywords:
  - 알고리즘
  - 프로그래머스
  - 기능개발
  - javascript
  - 스택/큐
---

## <center>[스택/큐] level2 기능개발</center>

**<center>javascript</center>**

---

### 조건

> - 첫 번째 작업이 완료 되어야 배포가 이루어 짐.
> - 그 이전에 완료된 작업의 경우 첫 번째 작업이 완료 될때까지 대기 후 같이 배포 됨.

### 제한사항

> - 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
> - 작업 진도는 100 미만의 자연수입니다.
> - 작업 속도는 100 이하의 자연수입니다.
> - 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

### 입출력 예

> | progresses | speeds   | return |
> | ---------- | -------- | ------ |
> | [93,30,55] | [1,30,5] | [2,1]  |

### 코드

```javascript
function solution(progresses, speeds) {
  //현재 작업률-index가 작을 수록 우선순위 높음, 진행속도 배열
  let answer = []; //정답을 담을 배열
  let need_days = []; //작업을 완료하기 위한 day를 담는 배열

  const len = progresses.length;
  for (let i = 0; i < len; i++) {
    //1. 작업을 완료하기 위한 날짜를 구하여 배열에 담는다.(소수점 올림하여 처리)
    need_days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let count = 0; //배포 시의 기능 개수
  let max = 0; //작업의 필요한 Day중 가장 큰 값을 담는 변수
  need_days.forEach((value, index) => {
    //배포 가능한 경우
    if (value > max) {
      max = value;
      //index-0인 경우 배포하지 않음
      if (index > 0) {
        answer.push(count);
        count = 0;
      }
    }
    count++;
  });
  //마지막 배포 Day에 대한 기능 갯수를 넣어줌
  //forEach에 할 시 index를 조건문으로 체크해야 하므로 현재 배열의 길이만큼 계속 체크하는 오버헤드 존재
  answer.push(count);

  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
