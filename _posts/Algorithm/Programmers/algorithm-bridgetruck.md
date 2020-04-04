---
title: 다리를 지나는 트럭(javascript)
date: 2020-04-04
tags:
  - 알고리즘
  - 프로그래머스
  - 스택/큐
keywords:
  - 알고리즘
  - 프로그래머스
  - 다리를 지나는 트럭
  - javascript
  - 스택/큐
---

## <center>[스택/큐] level2 다리를 지나는 트럭</center>

**<center>javascript</center>**

---

### 조건

> - 트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.
> - 트럭이 다리에 완전히 오르지 않은 경우, 이 트럭의 무게는 고려하지 않습니다.

### 제한사항

> - bridge_length는 1 이상 10,000 이하입니다.
> - weight는 1 이상 10,000 이하입니다.
> - truck_weights의 길이는 1 이상 10,000 이하입니다.
> - 모든 트럭의 무게는 1 이상 weight 이하입니다.

### 입출력 예

> | 경과 시간 | 다리를 지난 트럭 | 다리를 건너는 트럭 | 대기 트럭 |
> | --------- | ---------------- | ------------------ | --------- |
> | 0         | []               | []                 | [7,4,5,6] |
> | 1~2       | []               | [7]                | [4,5,6]   |
> | 3         | [7]              | [4]                | [5,6]     |
> | 4         | [7]              | [4,5]              | [6]       |
> | 5         | [7,4]            | [5]                | [6]       | s |
> | 6~7       | [7,4,5]          | [6]                | []        |
> | 8         | [7,4,5,6]        | []                 | []        |

### 코드

```javascript
/**
 *@param bridge_length 다리 길이
 *@param weight 다리가 버티는 무게(하중)
 *@param truck_weights 다리를 건널 트럭들의 배열(value:트럭무게)
 **/
function solution(bridge_length, weight, truck_weights) {
  let time = 0, //다리를 건너는 시간을 담는 변수
    cross_trucks = [], //다리를 건너는 중인 트럭들의 배열({time,weight}, ...)
    copy_trucks = truck_weights.concat(), //truck_weights의 copy하여 대기트럭 배열로 사용(다리 진입 시 배열에서 제거)
    bridge_weight = 0; //현재 다리를 건너는 트럭 무게의 총 합(이 변수는 weight값보다 작거나 같아야한다)

  //경과시간을 나타내는 loop(대기 중인 트럭이 있거나 다리를 건너는 트럭이 있는 동안 시간을 체크한다)
  while (copy_trucks.length > 0 || cross_trucks.length > 0) {
    time++;
    const truck = copy_trucks[0]; //다리 진입 대기중인 하나의 트럭

    //다리를 지난 트럭 Logic
    if (cross_trucks[0] && cross_trucks[0].time + bridge_length === time) {
      bridge_weight -= cross_trucks.shift().weight; //다리를 건너는 트럭배열에서 제거 및 현재 건너는 트럭들의 무게에서 뺀다.
    }

    //다리를 건너는 트럭 Logic(현재 다리에 진입할려는 트럭이 건너는 트럭들의 무게와 더했을 때 weight보다 낮은 경우 진입)
    if (weight >= bridge_weight + truck) {
      bridge_weight += truck;
      cross_trucks.push({ time: time, weight: truck }); //다리를 건너는 트럭 배열에 추가
      copy_trucks.shift(); //대기트럭 배열에서 제거
    }
  }

  return time;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
