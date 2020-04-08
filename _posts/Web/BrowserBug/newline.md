---
title: 마지막 문자가 개행문자인 경우 무시되는 현상
date: 2020-04-08
tags:
  - 개행문자
  - Browser Bug
keywords:
  - 개행문자
  - Browser Bug
---

## 마지막 문자가 개행문자인 경우 무시되는 현상

### 현상

- HTML Tag의 마지막 문자가 단독으로 존재하는 개행문자인 경우 개행처리를 하지 않음

### 현상 확인 방법

1. DOM에 value 직접 셋팅

   <div>
   <div style="background: yellow; border: 2px solid black; display: inline-block; color:black;">
   단독 개행문자(Enter)
   </div>
   <div style="background: yellow; border: 2px solid black; display: inline-block; color:black;">
   단독 개행문자(br Tag)</div>
   </div>

2. script를 사용하여 innerHTML의 value 변경
    - \n, \r\n, br tag를 마지막에 추가하여 value 변경

### 해결 방안

- 개행문자(\n, br tag, etc...)를 하나 더 추가하여 개행처리가 되도록 한다.

  <div style="background: yellow; border: 2px solid black; display: inline-block; color:black;">
  br Tag 2번 사용<br />
  <br /></div>

- textarea tag를 사용 한다.(단일 개행문자 적용가능)

### 테스트 환경

- IE11, Chrome, FF, Edge, Opera, Safari

### 기타

- innerHTML만이 아닌 textcontent로 개행문자를 적용 시 동일하게 현상 발생