---
title: Designer PDF Viewer(javascript)
date: 2020-05-19
tags:
  - 알고리즘
  - HackerRank
  - Easy
keywords:
  - 알고리즘
  - HackerRank
  - Designer PDF Viewer
  - javascript
  - Easy
---

## <center>Designer PDF Viewer</center>

**<center>javascript</center>**

---

### Input Format

| 변수 | 값                                      |
| ---- | --------------------------------------- |
| h    | 알파벳 순서별 font의 height를 담은 배열 |
| word | 하이라이트를 그릴 알파벳                |

### 입출력 예

> | word   | h                                                                              | return |
> | ------ | ------------------------------------------------------------------------------ | ------ |
> | "abc"  | [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5] | 9      |
> | "zaba" | [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7] | 28     |

### 코드

1. word를 하이트라이트 그리기 위하여 word의 단어 중 font height가 가장 높은 값을 검색
2. word수 \* font height 값을 반환

```javascript
function designerPdfViewer(h, word) {
  //a : 97, z : 122
  let max = 0;
  for (let value of word) {
    const num = h[value.charCodeAt(0) - 97];
    if (num > max) max = num;
  }
  return max * word.length;
}
```

출처: hackerrank Algorithms, https://www.hackerrank.com/
