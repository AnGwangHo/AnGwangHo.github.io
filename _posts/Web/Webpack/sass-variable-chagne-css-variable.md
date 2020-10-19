---
title: Scss변수 → css변수로 build하기
date: 2020-10-20
tags:
  - webpack
  - scss build
keywords:
  - webpack
  - sass
  - scss
  - scss build
  - scss variable
  - css variable
  - scss variable change css variable
---

## Scss변수 → css변수로 build하기

### 개요

사내 프로젝트에서 style의 경우 `scss`를 사용하여 개발을 진행하고 있었는데, style만을 사용자에게 제공해야하는 경우가 생겼다. 기존의 방식은 `*.umd.js`파일로 통합되어 배포되고 있는 부분에 추가적으로 style을 배포해야하는데, scss변수를 css변수로 전환하는 부분에서 삽질을 많이하여, 도움이 되고자 기록을 남긴다.

### 해결 과정

우선, 프로젝트에서는 webpack을 사용해 bundle을 하고 있기 때문에 loader에서 변수를 convert해주는 부분이 존재하는지 찾아보았다.

1. **~~webpack loader 유/무~~**
    - scss-loader를 사용하고 있는데, 옵션으로 제공되는 부분을 서칭 → 미제공
    - 추가적인 loader를 검색. `sass-resources-loader`를 찾았으나, css변수로 변환 X
2. **~~수동으로 parsing 후 file 생성~~**
    - loader가 없을 시 수동으로 parsing을 해야겠다고 생각하였고, 특정 `*.scss`를 node에서 읽어와서 parsing하여 `*.css` file을 생성하도록 구현하였다.
    - 이렇게 적용하던 중, 다른 프로젝트를 염탐하다가 build로 css 변수로 전환하는 프로젝트를 발견해서 이를 분석하기 시작했다.([material-design](https://github.com/material-components/material-components-web/blob/master/packages/mdc-theme/_theme.scss))
3. **`*.scss`에 css문법으로 정의한 파일추가**
    - `*.scss`파일에서 아래와 같이 css문법으로 정의하여 build에 포함

      ```scss
      @import "color.scss"; //sass 변수가 정의된 file

      :root {
          --primary100: #{$primary100};
      };
      ```

    - 위와 같이 css문법으로 정의한 file을 생성 후, webpack config파일의 entry에 포함 후 build를 하였더니 수동 parsing보다 깔끔하게 해결되었다!

## 결론

- **`*.scss`에 css문법으로 정의한 파일추가 할 것**
  - `*.scss`파일을 생성 후 import한 scss변수를 정의한 css변수에 할당([관련 sass공식사이트](https://sass-lang.com/documentation/breaking-changes/css-vars))

    ```scss
    @import "color.scss"; //scss 변수가 정의된 file

    :root {
      --primary100: #{$primary100};
    };
    ```

  - webpack config파일의 entry에 포함
  
    ```javascript
    module.exports = {
      entry: {
        foo: ["src/index.ts", "styles/variable.scss"],
      },
      ...
    }
    ```

## 기타 팁

1. **Webpack bundle시 css file 생성하는 법**
    - `MiniCssExtractPlugin` 플러그인을 사용 ([설정방법](https://webpack.js.org/plugins/mini-css-extract-plugin/))
    - webpack에 아래와 같이 가장 최상위에 플러그인을 위치

      ```javascript
      module: {
        rules: [
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader',
              'sass-loader',
            ],
          },
        ],
      }
      ```

2. **Webpack dart-sass설정**

    sass에서 @use, @forward, ... 등 여러 문법 등을 사용하기 위해서는 node-sass가 아닌 dart-sass를 사용해야하며, 추후 `sass-loader`의 경우 dart-sass만 지원을 하기로 예정되어있으므로 dart-sass사용은 필수가 되었다.

    - dart-sass 설치

      ```bash
      npm i -D sass
      ```

    - webpack config 설정([공식사이트](https://webpack.js.org/loaders/sass-loader/#implementation))

      ```javascript
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
                    implementation: require('sass'), // <- 이 부분을 추가하면 된다.
                  },
                },
              ],
            },
          ],
        },
      };
      ```

    - dart-sass를 통해 작성된 `*.scss`파일의 경우 사용하는 측에서도 dart-sass를 지원해야 사용 가능하다.

3. **sass map을 사용하여 css변수 정의를 편하게 하기**
    - css변수로 변경 시 변수를 일일이 입력하는 하드코딩이 필요하다.
    - 이러한 부분을 간결화하고 추후 입력을 안해도 되도록 sass map을 사용하여, 구현하자

      ```scss
      //variable.scss
      $colors: () !default;
      $colors: map-merge (
          (
            "yellow100": (
              "light": yellow,
              "dark": yellow,
            ),
            "yellow200": (
              "light": yellow,
              "dark": yellow,
            ),
            ...
          ),
          $colors
      );
      ```

      ```scss
      //css-variable.scss
      @use "variable";

      :root {
          @each $name, $map in variable.$colors {
            @each $mode, $color in $map {
              --#{$mode}-#{$name}: #{$color};
            }
          }
      };
      ```

    - 위와 같이 구현 시의 장점은 css변수로 변환하는 부분에 대해서 더 이상 신경쓰지 않아도 된다는 점이다. 또한, scss변수를 map으로 관리함으로써 가독성 또한, 명확해 진다.
