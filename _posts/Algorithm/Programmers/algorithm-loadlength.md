---
title: 방문 길이(javascript)
date: 2020-03-21
tags:
  - 알고리즘
  - 프로그래머스
  - 2018 윈터코딩
keywords:
  - 알고리즘
  - 프로그래머스
  - 방문 길이
  - javascript
  - 2018 윈터코딩
---

## <center>[2018 윈터코딩] 방문 길이</center>

**<center>javascript</center>**

---

### 조건

> - 좌표평면의 경계를 넘어가는 명령어는 무시
> - 처음 걸어본 길의 길이를 구하여 return

### 제안사항

> - dirs는 string형으로 주어지며, 'U', 'D', 'R', 'L' 이외에 문자는 주어지지 않습니다.
> - dirs의 길이는 500 이하의 자연수입니다.

### 입출력 예

> | dirs    | answer |
> | --------- | ------ |
> | "ULURRDLLU" | 7      |
> | "LULLLLLLU" | 7      |

### 코드

```javascript
function solution(dirs) {
  let answer = [];
  let gps = [0,0];
  dirs.split("").forEach((value) => {
    let ret = false;
    const pre_gps = gps.concat();
    if (value == "U" && gps[1] < 5)
    {
      gps[1] += 1;
      ret = true;
    }
    else if (value == "D" && gps[1] > -5)
    {
      gps[1] -= 1;
      ret = true;
    }
    else if (value == "R" && gps[0] < 5)
    {
      gps[0] += 1;
      ret = true;
    }
    else if (value == "L" && gps[0] > -5)
    {
      gps[0] -= 1;
      ret = true;
    }
    //길은 양뱡향이 아닌 단방향으로 취급("L,R" => ret : 1)
    const filter = answer.filter(item => {
      return item[0] == pre_gps[0] && item[1] == pre_gps[1] && item[2] == gps[0] && item[3] == gps[1] || item[0] == gps[0] && item[1] == gps[1] && item[2] == pre_gps[0] && item[3] == pre_gps[1]
    })
    if (ret && filter.length == 0)
      answer.push(pre_gps.concat(gps));
    });

  return answer.length;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
