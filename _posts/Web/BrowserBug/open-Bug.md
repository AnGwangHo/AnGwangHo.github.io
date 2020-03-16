---
title: window.open()시 width, height값이 설정한 값과 다른 현상
date: 2020-03-09
tags:
  - open
  - window.open
  - Browser Bug
keywords:
  - open
  - window.open
  - Browser Bug
---

## window.open()시 width, height값이 설정한 값과 다른 현상

- window의 내장함수인 open()을 사용 시 브라우저별로 값이 다르게 나타나는 현상

### 문법

```javascript
window.open(URL, name, specs, replace);
```

- specs에 "width=pixels", "height=pixels"값을 입력하여 크기를 설정 가능합니다.

```javascript
window.resizeTo(aWidth, aHeight);
```

- aWidth, aHeight 설정 시 window의 outerWidth, outerHeight값이 설정한 값으로 변경됩니다.

### 현상

- 현상 확인의 경우 하단의 iframe 또는 샘플링크에서 확인 가능합니다
  ([**샘플**](https://angwangho.github.io/sampleFile/window_method/open_main.html))

<iframe width="100%" height="300" src="https://angwangho.github.io/sampleFile/window_method/open_main.html" frameborder="0" allowfullscreen=""></iframe>

- 최초 확인 시 IE11, Edge, chorme(win10/win8), Opera 브라우저에서 설정한 값과 다르게 크기가 설정되는 것을 확인하였습니다.(2019.11.20기준)
  - window open() 시 window의 innerWidth,innerHight값이 specs에서 설정한 width, height값과 같아야 합니다.
- window.resizeTo() 함수 사용 시 Edge 브라우저에서 값이 다르게 설정 됩니다.

### 해결방안

1. 변경 후 값 재보정
   - 얼만큼 잘못된 값이 설정될지는 실행 전 알 수 없습니다.
   - 이에 대하여 설정 된 후 보정을 통하여 원하는 값으로 설정되도록 합니다.
     - resize event에서 설정 값, outer/inner의 차이를 통해 값 보정
