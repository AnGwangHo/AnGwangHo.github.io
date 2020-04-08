---
title: 프린터(javascript)
date: 2020-04-06
tags:
  - 알고리즘
  - 프로그래머스
  - 스택/큐
keywords:
  - 알고리즘
  - 프로그래머스
  - 프린터
  - javascript
  - 스택/큐
---

## <center>[스택/큐] level2 프린터</center>

**<center>javascript</center>**

---

### 조건

> - 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
> - 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
> - 그렇지 않으면 J를 인쇄합니다.

### 제한사항

> - 현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다.
> - 인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻입니다.
> - location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.

### 입출력 예

> | priorities         | location | return |
> | ------------------ | -------- | ------ |
> | [2, 1, 3, 2]       | 2        | 1      |
> | [1, 1, 9, 1, 1, 1] | 0        | 5      |

### 코드

```javascript
function solution(priorities, location) {
  //중요도, 요청 문서 index
  let target_index = location; //user가 선택한 index
  let answer = 1;
  let first = -1;

  while (priorities.length > 0) {
    //1. 가장 앞에 있는 문서를 추출
    first = priorities.shift();
    //2. 중요도 높은 문서가 존재 시 뒤로 넣음
    if (priorities.some((value, index) => value > first)) {
      priorities.push(first);
    } else {
      if (target_index === 0) {
        break;
      } else answer++;
    }
    /*3. 사용자가 선택한 문서가 중요도가 제일 높지 않은 경우
             현재 대기목록의 맨 끝으로 index를 옮긴다.
        */
    if (target_index === 0) target_index = priorities.length - 1;
    else target_index--;
  }
  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
