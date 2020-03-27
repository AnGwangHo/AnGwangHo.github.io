---
title: 오픈채팅방(javascript)
date: 2020-03-27
tags:
  - 알고리즘
  - 프로그래머스
  - 2019 KAKAO BLIND RECRUITMENT
keywords:
  - 알고리즘
  - 프로그래머스
  - 오픈채팅방
  - javascript
  - 2019 KAKAO BLIND RECRUITMENT
---

## <center>[2019 KAKAO BLIND RECRUITMENT][1차] 오픈채팅방</center>

**<center>javascript</center>**

---

### 조건

> 1. 채팅방에 누군가 들어오면 다음 메시지가 출력된다.
>     - "[닉네임]님이 들어왔습니다."
> 2. 채팅방에서 누군가 나가면 다음 메시지가 출력된다.
>     - "[닉네임]님이 나갔습니다."
> 3. 채팅방에서 닉네임을 변경하는 방법은 다음과 같이 두 가지이다.
>     - 채팅방을 나간 후, 새로운 닉네임으로 다시 들어간다.
>     - 채팅방에서 닉네임을 변경한다.
> 4. 닉네임을 변경할 때는 기존에 채팅방에 출력되어 있던 메시지의 닉네임도 전부 변경된다.

### 제한사항

> - record는 다음과 같은 문자열이 담긴 배열이며, 길이는 1 이상 100,000 이하이다.
> - 다음은 record에 담긴 문자열에 대한 설명이다.
>   - 모든 유저는 [유저 아이디]로 구분한다.
>   - [유저 아이디] 사용자가 [닉네임]으로 채팅방에 입장 - Enter [유저 아이디][닉네임] (ex. Enter uid1234 Muzi)
>   - [유저 아이디] 사용자가 채팅방에서 퇴장 - Leave [유저 아이디] (ex. Leave uid1234)
>   - [유저 아이디] 사용자가 닉네임을 [닉네임]으로 변경 - Change [유저 아이디][닉네임] (ex. Change uid1234 Muzi)
>   - 첫 단어는 Enter, Leave, Change 중 하나이다.
>   - 각 단어는 공백으로 구분되어 있으며, 알파벳 대문자, 소문자, 숫자로만 이루어져있다.
>   - 유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.
>   - 유저 아이디와 닉네임의 길이는 1 이상 10 이하이다.
>   - 채팅방에서 나간 유저가 닉네임을 변경하는 등 잘못 된 입력은 주어지지 않는다.

### 입출력 예

> | record                                                                                                    | result                                                                                                    |
> | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
> | ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"] | ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."] |

### 코드

```javascript
function solution(record) {
  var answer = [];
  const strBuffer = ['님이 들어왔습니다.', '님이 나갔습니다.'];
  let users = {};

  //1. 배열을 역순으로 정렬.
  record.reverse();
  //2. 유저 array에 등록 후 있으면 꺼내오기
  record.forEach(value => {
    const array = value.split(' ');
    if (array.length > 2 && !users[array[1]]) {
      users[array[1]] = array[2];
    }
  });
  record.reverse();

  record.forEach(value => {
    const array = value.split(' ');
    if (array[0] == 'Enter') {
      answer.push(users[array[1]] + strBuffer[0]);
    } else if (array[0] == 'Leave') {
      answer.push(users[array[1]] + strBuffer[1]);
    }
  });
  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
