---
title: UIWebView에서 touchend event 미발생
date: 2020-03-23
tags:
  - UIWebView
  - UIWebView Bug
keywords:
  - UIWebView
  - UIWebView Bug
  - iOS
  - touchend
---

## UIWebView에서 화면 밖으로 드래그 시 touchend event 미발생

### 현상

iOS 장비에서 터치 후 기기 밖으로 드래시 touchend event가 미발생하는 현상입니다.

1. iOS App store에서 webview를 검색 후 "WebView - WKWebView and UIWebView rendering"을 다운로드하여 앱을 실행합니다.
2. 상단 3개의 버튼 중 좌측 'UIWebView'를 선택 합니다
3. 샘플 주소를 해당 앱 URL에 입력합니다
  ([**샘플주소**](https://angwangho.github.io/sampleFile/webview/iOS_UIWebView_screenOut.html))
4. 노란색 textarea를 제외한 영역에서 화면밖으로 드래그합니다.
    > 💡화면 우측 Edge영역에서 터치하여 밖으로 드래그 시 현상 재현이 수월하게 됩니다.
5. 4번 동작을 반복 시 touchstart event만 textarea에 보이는 것을 확인합니다.

- Safari브라우저, WKWebView에서는 touchend event 발생

- UIWebView에서 iOS 버전 별로 가로/세로모드에 따라 touchend event 미발생
  >   - iOS 11.2.6 세로모드
  >   - iOS 12.1.1 가로모드

### 해결방안

1. touchend event 발생 유/무 체크
    - touchstart event에서 callback을 사용하여 touchend event 발생 유/무를 체크합니다.
2. WKWebView 사용