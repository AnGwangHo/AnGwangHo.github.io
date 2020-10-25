---
title: webpack에서 dart-sass사용하기
date: 2020-10-25
tags:
  - webpack
  - sass
keywords:
  - webpack
  - sass
  - scss
  - dart-sass
  - sass-loader
  - fibers
---

## 개요

- sass-loader에서 추후 버전에서 node-sass를 deprecated를 하고 dart-sass만을 지원할 것이라는 소식을 들었다. 또한, sass의 @use, @forward같은 문법을 사용하기 위해 적용해보았다.

## 적용하기

현재, webpack4에 node-sass기반의 sass-loader를 사용하고 있다는 것을 가정하고 진행한다.

1. **sass 설치**

    fibers의 경우 `render()`사용 시 비동기 로딩(`renderSync()`)의 성능만큼 향상시키기 위해서 사용한다.

    ```bash
    npm i -D sass fibers
    ```

2. **webpack config 수정**

    - 아래 코드의 경우 webpack 공식 홈페이지에 존재한다.([공식 사이트](https://webpack.js.org/loaders/sass-loader/#implementation))

        ```jsx
        module.exports = {
        module: {
            rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        implementation: require('sass'), //dart-sass 적용
                        sassOptions: {
                            fiber: require('fibers'), //fibers 적용
                        },
                    },
                },
                ],
            },
            ],
        },
        };
        ```

## 결론

- dart-sass의 경우 간단하게 `sass`를 설치하고 webpack의 설정에서 sass-loader의 옵션에 추가해주기만 하면 심플하게 사용 가능하다.

- 이렇게 적용을 하였다면, 기존에 sass의 `@import`만 사용하던 시절에서 벗어나 `@use`, `@forward`를 사용할 수 있을 것이다.

- 마지막으로 `@use`나 `@forward`같은 dart-sass를 사용하는`*.scss`파일을 배포하게 된다면 사용하는 측에서 dart-sass를 사용하지 않는다면 에러가 발생한다.