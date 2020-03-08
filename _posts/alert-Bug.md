---
title: alert 사용 시 브라우저별 script처리 및 event가 다른 현상
date: 2020-03-08
tags:
  - alert
  - Browser Bug
keywords:
  - alert
  - Browser Bug
---

## window의 내장함수인 alert()을 사용 시 브라우저별로 script 처리 및 event가 다른 현상

### 문법

```javascript
window.alert([message]) | alert([message]);
//message에 경고 대화상자 창에 표시할 텍스트를 입력합니다.
```

### 현상

- 현상 확인의 경우 하단의 iframe 또는 샘플링크에서 확인 가능합니다
  ([**샘플**](https://angwangho.github.io/sampleFile/window_method/alert.html))

<iframe width="100%" height="300" src="https://angwangho.github.io/sampleFile/window_method/alert.html" frameborder="0" allowfullscreen=""></iframe>

- mousedown event에서 alert()을 실행 시 브라우저 별 event 발생이 다르며 script 처리 방식에 차이가 존재합니다.

  - IE11, Edge와 같이 OS, 브라우저 버전에 따라 차이가 존재합니다.

- 브라우저별 확인 결과 크게 3가지로 분류가 가능합니다.
  1. event 미발생 : mouseup event가 발생 X
     - chrome, IE11(win7)
  2. event 발생 : alert 실행 중 mouseup event가 발생
     - IE11(win10), Edge(18)
     - Edge(18)의 경우 mouseup event가 발생하나 alert, confirm를 실행 시 해당 동작이 수행되지 않습니다.
  3. event block 후 발생 : alert 창이 닫힌 후 event 발생
     - FireFox

### 해결방안

1. 실행 시점 변경
   - alert 발생 시 창이 닫혔는지 알 수 있는 방안이 없으며, 브라우저 별 script처리 및 event 발생 차이가 존재
   - 실행 시점을 mouseup, click event으로 변경하여 호출
