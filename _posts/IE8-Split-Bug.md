---
title: IE8 Split Bug
date: 2020-03-03
tags:
  - IE
  - Split
  - Browser Bug
keywords:
  - IE8
  - Split Bug
  - Browser Bug
---

# split()함수에 Regex를 사용 시 ""값이 return되지 않는 문제

고객이 네트워크 속도 문제로 인해 필요없는 파일을 load하지 않기로 하였다. 이에 대해서 특정 js파일을 load제외하였는데 그로인해 IE8에서 textsize를 계산할 때 다른점이 발견되었다.
이러한 부분을 조사 중 IE8에서 split()에 정규식 공백문자(" ")를 사용 시 반환되는 배열에 empty string("")값이 제외되는 문제가 발생하였다.

- String.split() syntax

  String.split([separator[, limit]])
  separator : 끊을 문자 or 정규식
  limit : 몇 개 까지 자를 지에 대한 숫자

만약 " ab c d e fg 123 "와 같은 문자열이 있다고 하자. 이 문자열에 대하여 " " 공백문자를 기준으로 자르고자 한다. 그렇다면 split()함수에 " "공백을 인자로 사용 시 ""을 포함한 배열이 반환 될 것이다. 근데, 만약 정규식을 사용 한다면 어떻게 될까?

보통 정규식을 사용 시 다음과 같이 사용을 할 것이다

var reg = /abc/;
var reg = new RegExp("abc");

두 방식의 차이는 컴파일 시점의 차이로 첫 번째 방식의 경우 스크립트가 load되는 시점에 컴파일 되며 두 번째의 경우는 정규식이 실행되는 시점에 컴파일 된다. 만약, 상수와 같이 고정된 조건에 대해서 사용하는 경우 첫 번째 방식을 사용하며, 조건이 변경되는 경우는 두 번째 방식을 사용하면 될 것이다.

## 테스트

실행결과의 경우 아래에서 확인 가능하며, 해당 파일은 GitHub 저장소에 업로드되어있다.([**저장소**](https://github.com/AnGwangHo/sampleFile))

[https://angwangho.github.io/sampleFile/window_method/split.html](https://angwangho.github.io/sampleFile/window_method/split.html)

위 샘플에서 확인하였듯이 split()에 정규식을 사용하게 된다면 아래와 같이 empty stirng이 제외된 결과가 나올 것이다.

    //IE8 이하
    "   ab c d e   fg 123   ".split(" "); //["", "", "", "ab", "c", "d", "e", "", "", "fg", "123", "", "", ""]
    "   ab c d e   fg 123   ".split(/\s/); //["ab", "c", "d", "e", "fg", "123"]

위 방식의 경우 동일하게 스페이스 문자를 기준으로 자르도록 하였다. 그러나 결과는 다르게 발생되었다. 문자열로 공백 문자를 인자로 준 경우 empty string값이 포함되어 배열이 반환되었으나 정규식을 사용한 경우 ""인 값들이 제외되고 배열이 반환되었다. 이를 해결하고자 다음과 같은 방안을 세우고 시도를 해보았다.

## 해결방안

1. ~~new RegExp("\\s")를 사용~~
   - ""값이 제외되어 반환
2. ~~정규식 문법을 수정~~
   - 다양한 방법으로 조건을 변경하였으나 ""값이 제외되어 반환되었다.
     ex) /(\s)/, /[\s\xA0]/, / /g, /[ \f\n\r\t\v]/, /\u0020/(공백문자 유니코드)

위와 같은 해결방안을 세우고 시도하였으나 ""값이 제외되고 반환되었다. 따로 해결이 가능한 부분이 없었으며 다음과 같은 결론을 내렸다.

## 처리결과

우선적으로 고객이 제외한 js파일에서 String.split함수에 대해서 오버라이딩이 되어있어 IE8이하에서 split(/\s/)시 ""값이 포함된 배열이 반환되었다. 이러한 부분에 대해서 고객에게 split함수에 대해서 오버라이딩된 코드를 적용하도록 가이드하였다. 만약, 외부에서 IE8이하 브라우저를 지원해야하는 경우가 존재한다면 아래의 코드를 적용하면 된다.

- 코드

        /*!
         * Cross-Browser Split 1.1.1
         * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
         * Available under the MIT License
         * ECMAScript compliant, uniform cross-browser split method
         */

        /**
         * Splits a string into an array of strings using a regex or string separator. Matches of the
         * separator are not included in the result array. However, if `separator` is a regex that contains
         * capturing groups, backreferences are spliced into the result each time `separator` is matched.
         * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
         * cross-browser.
         * @param {String} str String to split.
         * @param {RegExp|String} separator Regex or string to use for separating the string.
         * @param {Number} [limit] Maximum number of items to include in the result array.
         * @returns {Array} Array of substrings.
         * @example
         *
         * // Basic use
         * split('a b c d', ' ');
         * // -> ['a', 'b', 'c', 'd']
         *
         * // With limit
         * split('a b c d', ' ', 2);
         * // -> ['a', 'b']
         *
         * // Backreferences in result array
         * split('..word1 word2..', /([a-z]+)(\d+)/i);
         * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
         */
        var split;

        // Avoid running twice; that would break the `nativeSplit` reference
        split = split || function (undef) {

            var nativeSplit = String.prototype.split,
                compliantExecNpcg = /()??/.exec("")[1] === undef, // NPCG: nonparticipating capturing group
                self;

            self = function (str, separator, limit) {
                // If `separator` is not a regex, use `nativeSplit`
                if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
                    return nativeSplit.call(str, separator, limit);
                }
                var output = [],
                    flags = (separator.ignoreCase ? "i" : "") +
                            (separator.multiline  ? "m" : "") +
                            (separator.extended   ? "x" : "") + // Proposed for ES6
                            (separator.sticky     ? "y" : ""), // Firefox 3+
                    lastLastIndex = 0,
                    // Make `global` and avoid `lastIndex` issues by working with a copy
                    separator = new RegExp(separator.source, flags + "g"),
                    separator2, match, lastIndex, lastLength;
                str += ""; // Type-convert
                if (!compliantExecNpcg) {
                    // Doesn't need flags gy, but they don't hurt
                    separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
                }
                /* Values for `limit`, per the spec:
                 * If undefined: 4294967295 // Math.pow(2, 32) - 1
                 * If 0, Infinity, or NaN: 0
                 * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
                 * If negative number: 4294967296 - Math.floor(Math.abs(limit))
                 * If other: Type-convert, then use the above rules
                 */
                limit = limit === undef ?
                    -1 >>> 0 : // Math.pow(2, 32) - 1
                    limit >>> 0; // ToUint32(limit)
                while (match = separator.exec(str)) {
                    // `separator.lastIndex` is not reliable cross-browser
                    lastIndex = match.index + match[0].length;
                    if (lastIndex > lastLastIndex) {
                        output.push(str.slice(lastLastIndex, match.index));
                        // Fix browsers whose `exec` methods don't consistently return `undefined` for
                        // nonparticipating capturing groups
                        if (!compliantExecNpcg && match.length > 1) {
                            match[0].replace(separator2, function () {
                                for (var i = 1; i < arguments.length - 2; i++) {
                                    if (arguments[i] === undef) {
                                        match[i] = undef;
                                    }
                                }
                            });
                        }
                        if (match.length > 1 && match.index < str.length) {
                            Array.prototype.push.apply(output, match.slice(1));
                        }
                        lastLength = match[0].length;
                        lastLastIndex = lastIndex;
                        if (output.length >= limit) {
                            break;
                        }
                    }
                    if (separator.lastIndex === match.index) {
                        separator.lastIndex++; // Avoid an infinite loop
                    }
                }
                if (lastLastIndex === str.length) {
                    if (lastLength || !separator.test("")) {
                        output.push("");
                    }
                } else {
                    output.push(str.slice(lastLastIndex));
                }
                return output.length > limit ? output.slice(0, limit) : output;
            };

            // For convenience
            String.prototype.split = function (separator, limit) {
                return self(this, separator, limit);
            };

            return self;

        }();

### 참고자료

1. 정규식 테스트 사이트

   [Non breaking space - Regex Tester/Debugger](https://www.regextester.com/105851)

2. MS 공식 사이트

   [Regular Expression Syntax (Scripting)](<https://docs.microsoft.com/en-us/previous-versions//1400241x(v=vs.85)?redirectedfrom=MSDN>)

3. split 함수 재정의코드

   [JavaScript split Bugs: Fixed!](http://blog.stevenlevithan.com/archives/cross-browser-split)
