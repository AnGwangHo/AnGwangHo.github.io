---
title: 파일명 정렬(javascript)
date: 2020-03-10
tags:
  - 알고리즘
  - 프로그래머스
  - 2018 KAKAO BLIND RECRUITMENT
keywords:
  - 알고리즘
  - 프로그래머스
  - 파일명 정렬
  - javascript
  - 2018 KAKAO BLIND RECRUITMENT
---

## <center>[2018 KAKAO BLIND RECRUITMENT][3차] 파일명 정렬</center>

**<center>javascript</center>**

---

### 조건

> - files는 1000 개 이하의 파일명을 포함하는 문자열 배열이다.
>
> - 각 파일명은 100 글자 이하 길이로, 영문 대소문자, 숫자, 공백(" ), 마침표(.), 빼기 부호(-")만으로 이루어져 있다. 파일명은 영문자로 시작하며, 숫자를 하나 이상 포함하고 있다.
>
> - 중복된 파일명은 없으나, 대소문자나 숫자 앞부분의 0 차이가 있는 경우는 함께 주어질 수 있다. (muzi1.txt, MUZI1.txt, muzi001.txt, muzi1.TXT는 함께 입력으로 주어질 수 있다.)

### 제한사항

> 파일명은 크게 HEAD, NUMBER, TAIL의 세 부분으로 구성된다.
>
> - HEAD는 숫자가 아닌 문자로 이루어져 있으며, 최소한 한 글자 이상이다.
> - NUMBER는 한 글자에서 최대 다섯 글자 사이의 연속된 숫자로 이루어져 있으며, 앞쪽에 0이 올 수 있다. 0부터 99999 사이의 숫자로, 00000이나 0101 등도 가능하다.
> - TAIL은 그 나머지 부분으로, 여기에는 숫자가 다시 나타날 수도 있으며, 아무 글자도 없을 수 있다.
>
> | 파일명           | HEAD | NUMBER | TAIL        |
> | ---------------- | ---- | ------ | ----------- |
> | foo9.text        | foo  | 9      | .txt        |
> | foo010bar020.zip | foo  | 010    | bar020.zip  |
> | F-15             | F-   | 15     | (빈 문자열) |
>
> 파일명을 세 부분으로 나눈 후, 다음 기준에 따라 파일명을 정렬한다.
>
> - 파일명은 우선 HEAD 부분을 기준으로 사전 순으로 정렬한다. 이때, 문자열 비교 시 대소문자 구분을 하지 않는다. MUZI와 muzi, MuZi는 정렬 시에 같은 순서로 취급된다.
> - 파일명의 HEAD 부분이 대소문자 차이 외에는 같을 경우, NUMBER의 숫자 순으로 정렬한다. 9 < 10 < 0011 < 012 < 13 < 014 순으로 정렬된다. 숫자 앞의 0은 무시되며, 012와 12는 정렬 시에 같은 같은 값으로 처리된다.
> - 두 파일의 HEAD 부분과, NUMBER의 숫자도 같을 경우, 원래 입력에 주어진 순서를 유지한다. MUZI01.zip과 muzi1.png가 입력으로 들어오면, 정렬 후에도 입력 시 주어진 두 파일의 순서가 바뀌어서는 안 된다.

### 입출력 예

> 입력: [img12.png, img10.png, img02.png, img1.png, IMG01.GIF, img2.JPG]
>
> 출력: [img1.png, IMG01.GIF, img02.png, img2.JPG, img10.png, img12.png]

> 입력: [F-5 Freedom Fighter, B-50 Superfortress, A-10 Thunderbolt II, F-14 Tomcat]
>
> 출력: [A-10 Thunderbolt II, B-50 Superfortress, F-5 Freedom Fighter, F-14 Tomcat]

### 코드

```javascript
function solution(files) {
  let answer = [];
  //HEAD, NUMBER, TAIL 구분
  //NUMBER를 기준으로 앞/뒤 구분 search(정규식)
  let len = files.length;
  const reg = /(\d+)/g; //숫자가 1개이상 매칭되는 정규식(메모리 고려)
  for (let i = 0; i < len; i++) {
    answer.push({ index: i, value: files[i].split(reg) }); //[{index:0~n, value:[HEAD, NUMBER, TAIL]}]
  }

  //sort의 0은 유지 but ECMAscript 명세에 따라 보장은 하지않음(index로 순서보장)
  answer.sort((a, b) => {
    //HEAD의 값을 비교
    const a_head = a.value[0].toLowerCase();
    const b_head = b.value[0].toLowerCase();
    if (a_head < b_head) return -1;
    else if (a_head > b_head) return 1;
    else {
      //HEAD가 같은경우 NUMBER를 비교
      const a_number = Number(a.value[1]); //Number로 앞의 0을 제거
      const b_number = Number(b.value[1]);
      if (a_number > b_number) return 1;
      else if (a_number < b_number) return -1;
      else {
        //HEAD, NUMBER가 같은 경우 index로 순서보장
        if (a.index < b.index) return -1;
        else return 1;
      }
    }
  });

  return answer.map(obj => obj.value.join(''));
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
