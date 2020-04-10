---
title: IE브라우저에서 동기처리 중 script 실행 시 수행 안되는 특성
date: 2020-04-10
tags:
  - IE
  - Browser Bug
keywords:
  - IE
  - script
  - block
  - script 미수행
  - Browser Bug
---

## IE브라우저에서 동기처리 중 script 실행 시 수행 안되는 특성

### 분석

- 현재, IE 브라우저에서 일정시간 script code가 수행 중 event를 발생 시 해당 event가 미발생
- chrome, FF, Edge, Opera 브라우저에서 현상 미발생

### 현상

- 현상의 경우 `sleep`버튼을 클릭 후 `alert`버튼을 클릭 시 재현되며 하단의 iframe 또는 샘플링크에서 확인 가능합니다

  ([**샘플**](https://github.com/AnGwangHo/sampleFile/tree/master/browser/IE스크립트block.html))

<iframe width="100%" height="300" src="https://angwangho.github.io/sampleFile/browser/IE스크립트block.html" frameborder="0" allowfullscreen=""></iframe>

- 현재 `sleep`버튼 click event에서 3초동안 while문을 수행하도록 되어있습니다.

- `alert`버튼의 경우 click event까지 각 event에 대하여 bind되어 console창에서 확인 가능하며 click event에서 alert을 발생합니다.

- while문 수행시간이 약 3초이전의 경우 alert이 발생, 3초 이후의 경우 alert 미발생

- 현재, IE브라우저의 경우 약 3초가량 script를 수행하는 동작이 존재 시 body에서 blur event가 발생하며 수행 중 발생되었던 event가 수행되지 않습니다.

### 해결방안

1. 비동기처리

    - 현재, 샘플과 같이 while, for문 같은 반복문이 3초이상 수행되는 경우 비동기 처리를 통해 이를 회피할 수 있습니다.

2. 반복문 3초미만 수행

    - 반복문이 3초이상 수행되지 않도록 로직적으로 점검을 해볼 필요가 있습니다.
