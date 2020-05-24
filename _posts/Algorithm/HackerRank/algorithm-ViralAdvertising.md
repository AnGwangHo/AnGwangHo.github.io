---
title: Viral Advertising(javascript)
date: 2020-05-24
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Viral Advertising
  - javascript
  - Easy
---

## <center>Viral Advertising</center>

**<center>javascript</center>**

---

### Input Format

| 변수 | 값             |
| ---- | -------------- |
| n    | 마케팅 마감 날 |

### 입출력 예

> | n   | return |
> | --- | ------ |
> | 3   | 9      |
> | 4   | 15     |

### 코드

1. 5명으로 시작하며 2로 나눈 몫이 좋아요 수
2. 좋아요 수 * 3이 다음날 공유한 사람 수
3. n Day까지 마케팅 후 총 좋아요 수 return

```javascript
function viralAdvertising(n) {
  let ret = 0;
  let people = 5;
  for (let i = 0; i < n; i++) {
    const liked = Math.floor(people / 2);
    ret += liked;
    people = liked * 3;
  }
  return ret;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
