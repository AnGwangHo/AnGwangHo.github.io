---
title: 무지의 먹방 라이브(javascript)
date: 2020-04-03
tags:
  - 알고리즘
  - 프로그래머스
  - 2018 KAKAO BLIND RECRUITMENT
keywords:
  - 알고리즘
  - 프로그래머스
  - 무지의 먹방 라이브
  - javascript
  - 2018 KAKAO BLIND RECRUITMENT
---

## <center>[(2018년)KAKAO BLIND RECRUITMENT] 무지의 먹방 라이브</center>

**<center>javascript</center>**

---

### 조건

> - 무지는 1번 음식부터 먹기 시작하며, 회전판은 번호가 증가하는 순서대로 음식을 무지 앞으로 가져다 놓는다.
> - 마지막 번호의 음식을 섭취한 후에는 회전판에 의해 다시 1번 음식이 무지 앞으로 온다.
> - 무지는 음식 하나를 1초 동안 섭취한 후 남은 음식은 그대로 두고, 다음 음식을 섭취한다.
> - 다음 음식이란, 아직 남은 음식 중 다음으로 섭취해야 할 가장 가까운 번호의 음식을 말한다.
> - 회전판이 다음 음식을 무지 앞으로 가져오는데 걸리는 시간은 없다고 가정한다.

### 제한사항

> - food_times 는 각 음식을 모두 먹는데 필요한 시간이 음식의 번호 순서대로 들어있는 배열이다.
> - k 는 방송이 중단된 시간을 나타낸다.
> - 만약 더 섭취해야 할 음식이 없다면 -1을 반환하면 된다.

### 입출력 예

> | food_times | k   | result |
> | ---------- | --- | ------ |
> | [3,1,2]    | 5   | 1      |

### 코드

```javascript
function solution(food_times, k) {
  let sortFoodTimes = [];
  const len = food_times.length;

  //1. {index, time} 구조의 배열로 생성
  //2. time 오름차순으로 정렬
  sortFoodTimes = food_times
    .map((time, index) => {
      return { index: index + 1, time };
    })
    .sort((a, b) => {
      return a.time - b.time;
    });

  //3. K를 넘어가는 순간을 찾아서 반환
  for (let i = 0; i < len; i++) {
    const food_time = sortFoodTimes[i].time; //index의 음식을 먹는데 필요한 시간
    const remains_foods_len = len - i; //남은 음식의 갯수
    const roop_time = (food_time - (i == 0 ? 0 : sortFoodTimes[i - 1].time)) * remains_foods_len; //현재 roop의 음식을 먹는데 걸리는 시간

    if (k < roop_time) {
      return sortFoodTimes.slice(i).sort((a, b) => a.index - b.index)[k % remains_foods_len].index;
    }
    k -= roop_time; //먹은 음식들의 시간을 제외
  }

  return -1;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
