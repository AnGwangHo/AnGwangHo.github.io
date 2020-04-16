---
title: 베스트앨범(javascript)
date: 2020-04-16
tags:
  - 알고리즘
  - 프로그래머스
  - 해시
keywords:
  - 알고리즘
  - 프로그래머스
  - 베스트앨범
  - javascript
  - 해시
---

## <center>[해시] 배스트앨범</center>

**<center>javascript</center>**

---

### 조건

> - 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
> - 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
> - 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

### 제한사항

> - genres[i]는 고유번호가 i인 노래의 장르입니다.
> - plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
> - genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
> - 장르 종류는 100개 미만입니다.
> - 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
> - 모든 장르는 재생된 횟수가 다릅니다.

### 입출력 예

> | genres                                | plays                      | return       |
> | ------------------------------------- | -------------------------- | ------------ |
> | [classic, pop, classic, classic, pop] | [500, 600, 150, 800, 2500] | [4, 1, 3, 0] |

### 코드

```javascript
function solution(genres, plays) {
  //조건 1. 장르 총 합 순으로 정렬(내림차순)
  //조건 2. 장르 중 높은 플레이순 2개만 출력

  //{총재생수, [{인덱스, 재생수}]}
  //장르를 object의 프로퍼티로 저장, 그 프로퍼티에 {총 재생수, 인덱스 달기}
  if (genres.length === 1) return [0];

  let best_album = {};
  genres.map((genre, index) => {
    if (!best_album[genre]) {
      best_album[genre] = { allplay: plays[index], plays: [{ index: index, play: plays[index] }] };
    } else {
      best_album[genre].allplay += plays[index];
      best_album[genre].plays.push({ index: index, play: plays[index] });
    }
  });

  let sort_array = Object.keys(best_album);
  if (sort_array.length > 1) {
    sort_array.sort((a, b) => {
      return best_album[b].allplay - best_album[a].allplay;
    });
  }

  let answer = [];
  sort_array.map(value => {
    const plays = best_album[value].plays;
    if (plays.length > 1) {
      plays.sort((a, b) => {
        return b.play - a.play;
      });
      answer.push(plays[0].index);
      answer.push(plays[1].index);
    } else answer.push(plays[0].index);
  });
  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
