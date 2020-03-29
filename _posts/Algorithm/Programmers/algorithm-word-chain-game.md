---
title: 영어 끝말잇기(javascript)
date: 2020-03-29
tags:
  - 알고리즘
  - 프로그래머스
  - 2018 서머코딩
keywords:
  - 알고리즘
  - 프로그래머스
  - 영어 끝말잇기
  - javascript
  - 2018 서머코딩
---

## <center>[2018 서머코딩] level2 영어 끝말잇기</center>

**<center>javascript</center>**

---

### 조건

> - 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
> - 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
> - 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
> - 이전에 등장했던 단어는 사용할 수 없습니다.
> - 한 글자인 단어는 인정되지 않습니다.

### 제한사항

> - 끝말잇기에 참여하는 사람의 수 n은 2 이상 10 이하의 자연수입니다.
> - words는 끝말잇기에 사용한 단어들이 순서대로 들어있는 배열이며, 길이는 n 이상 100 이하입니다.
> - 단어의 길이는 2 이상 50 이하입니다.
> - 모든 단어는 알파벳 소문자로만 이루어져 있습니다.
> - 끝말잇기에 사용되는 단어의 뜻(의미)은 신경 쓰지 않으셔도 됩니다.
> - 정답은 [ 번호, 차례 ] 형태로 return 해주세요.
> - 만약 주어진 단어들로 탈락자가 생기지 않는다면, [0, 0]을 return 해주세요.

### 입출력 예

> | n   | words                                                                                                                                | result |
> | --- | ------------------------------------------------------------------------------------------------------------------------------------ | ------ |
> | 3   | [tank, kick, know, wheel, land, dream, mother, robot, tank]                                                                          | [3,3]  |
> | 5   | [hello, observe, effect, take, either, recognize, encourage, ensure, establish, hang, gather, refer, reference, estimate, executive] | [0,0]  |
> | 2   | [hello, one, even, never, now, world, draw]                                                                                          | [1,3]  |

### 코드

```javascript
function solution(n, words) {
  const len = words.length;
  let stack = {}; //object에 property로 저장

  //단어수(words) 만큼 loop
  for (let i = 0; i < len; i++) {
    const word = words[i];
    if (!stack[word]) {
      //단어가 없으면 property에 저장
      //최초 저장이 아닌 경우 && 마지막 문자로 단어를 말하지 않은 경우
      if (i > 0 && words[i - 1].charAt(words[i - 1].length - 1) !== word.charAt(0)) {
        return [(i % n) + 1, Math.ceil((i + 1) / n)]; //몇 번째 사람인지, 몇 번째 차례인지
      } else {
        stack[word] = word; //property에 저장
      }
    } else {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    }
  }
  //탈락자 없는 경우
  return [0, 0];
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
