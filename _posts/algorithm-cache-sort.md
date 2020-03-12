---
title: 캐시(javascript)
date: 2020-03-10
tags:
  - 알고리즘
  - 프로그래머스
  - 2018 KAKAO BLIND RECRUITMENT
keywords:
  - 알고리즘
  - 프로그래머스
  - 캐시
  - javascript
  - 2018 KAKAO BLIND RECRUITMENT
---

## <center>[2018 KAKAO BLIND RECRUITMENT][1차] 캐시</center>

**<center>javascript</center>**

---

### 조건

> - 캐시 교체 알고리즘은 LRU(Least Recently Used)를 사용한다.
>
> - cache hit일 경우 실행시간은 1이다.
>
> - cache miss일 경우 실행시간은 5이다.

### 제한사항

> - 캐시 크기(cacheSize)와 도시이름 배열(cities)을 입력받는다.
> - cacheSize는 정수이며, 범위는 0 ≦ cacheSize ≦ 30 이다.
> - cities는 도시 이름으로 이뤄진 문자열 배열로, 최대 도시 수는 100,000개이다.
> - 각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성되며, 대소문자 구분을 하지 않는다. 도시 이름은 최대 20자로 이루어져 있다.

### 입출력 예

> | 캐시크기(cacheSize) | 도시이름(cities)                                                                          | 실행시간 |
> | ------------------- | ----------------------------------------------------------------------------------------- | -------- |
> | 3                   | [Jeju, Pangyo, Seoul, NewYork, LA, Jeju, Pangyo, Seoul, NewYork, LA]                      | 50       |
> | 3                   | [Jeju, Pangyo, Seoul, Jeju, Pangyo, Seoul, Jeju, Pangyo, Seoul]                           | 21       |
> | 2                   | [Jeju, Pangyo, Seoul, NewYork, LA, SanFrancisco, Seoul, Rome, Paris, Jeju, NewYork, Rome] | 60       |
> | 5                   | [Jeju, Pangyo, Seoul, NewYork, LA, SanFrancisco, Seoul, Rome, Paris, Jeju, NewYork, Rome] | 52       |
> | 2                   | [Jeju, Pangyo, NewYork, newyork]                                                          | 16       |
> | 0                   | [Jeju, Pangyo, Seoul, NewYork, LA]                                                        | 25       |

### 코드

```javascript
function solution(cacheSize, cities) {
  var answer = 0;
  let cache = [];

  //LRU(페이지 교체 알고리즘) : 가장 마지막에 사용 된 페이지를 교체
  const cities_len = cities.length;

  if (cacheSize == 0) return cities_len * 5; //캐시크기가 0인 경우 전부 실행시간이 5이기 때문에 반환

  //도시 개수만큼 loop
  for (let i = 0; i < cities_len; i++) {
    const citie = cities[i].toLowerCase(); //도시 이름
    if (cache.indexOf(citie) !== -1) {
      //cache hit
      answer += 1; //1초 추가
      cache.splice(cache.indexOf(citie), 1); //hit 된 도시 배열에서 제거
      cache.push(citie); //가장 최근에 hit됨으로 마지막 index에 위치
    } //cache miss
    else {
      if (cache.length < cacheSize) {
        //cache max size 미 도달
        cache.push(citie);
      } //LRU Logic 실행
      else {
        cache.shift(); //가장 마지막에 사용된 페이지 제거
        cache.push(citie); //새로운 페이지 추가
      }
      answer += 5;
    }
  }
  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
