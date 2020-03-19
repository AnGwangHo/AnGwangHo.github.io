---
title: 괄호 변환(javascript)
date: 2020-03-19
tags:
  - 알고리즘
  - 프로그래머스
  - 2020 KAKAO BLIND RECRUITMENT
keywords:
  - 알고리즘
  - 프로그래머스
  - 괄호 변환
  - javascript
  - 2020 KAKAO BLIND RECRUITMENT
---

## <center>[2020 KAKAO BLIND RECRUITMENT] 괄호 변환</center>

**<center>javascript</center>**

---

### 조건

> - p는 '(' 와 ')' 로만 이루어진 문자열이며 길이는 2 이상 1,000 이하인 짝수입니다.
> - 문자열 p를 이루는 '(' 와 ')' 의 개수는 항상 같습니다.
> - 만약 p가 이미 올바른 괄호 문자열이라면 그대로 return 하면 됩니다.

### 조건사항

> - '(' 의 개수와 ')' 의 개수가 같다면 이를 균형잡힌 괄호 문자열이라고 부릅니다.
> - '('와 ')'의 괄호의 짝도 모두 맞을 경우에는 이를 올바른 괄호 문자열이라고 부릅니다.
> - 예를 들어, "(()))("와 같은 문자열은 균형잡힌 괄호 문자열 이지만 올바른 괄호 문자열은 아닙니다.
> - 반면에 "(())()"와 같은 문자열은 균형잡힌 괄호 문자열 이면서 동시에 올바른 괄호 문자열 입니다.
>
> 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
> 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
> 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
>    - 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
> 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
>    - 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
>    - 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
>    - ')'를 다시 붙입니다.
>    - u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
>    - 생성된 문자열을 반환합니다.

### 입출력 예

> | p          | result     |
> | ---------- | ---------- |
> | "(()())()" | "(()())()" |
> | ")("       | "()"       |
> | "()))((()" | "()(())()" |

### 코드

```javascript
function solution(p) {
  function solve(p)
  {
    if (p == "") //1. Logic 수행
    return p;

    let stack = []; //Stack을 사용하여 균형잡힌 괄호 문자열 분리
    let u="", v="";
    for (let i = 0; i < p.length; i++) //2. Logic 수행
    {
      const now_char = p.charAt(i); //현재 비교할 문자(자주 사용하는 Data의 경우 유지보수 측면을 위하여 변수로 담는다)
      if (i == 0) //최초 수행 시 stack에 push한다
        stack.push(now_char);
      else
      {
        const pre_char = stack[stack.length - 1]; //stack에 마지막에 들어간 문자
        //전제조건에서 '균형잡힌 괄호 문자열'인 경우까지만 나누면 되므로 '올바른 괄호 문자열'인지는 판단하지 않는다.
        if (pre_char === now_char) //이전 문자와 현재 문자가 같은 경우 ["(" == "("] or [")" == ")"] stack에 push한다.
          stack.push(now_char)
        else //다른 경우는 ["(" != ")"] or [")" != "("]인 경우
          stack.pop();

        if (stack.length == 0) //괄호의 쌍이 맞게 나눈 경우(균형잡힌 괄호 문자열인 경우)
        {
          u = p.slice(0, i + 1);
          v = p.slice(i + 1);
          break;
        }
      }
    }

    if (u.charAt(0) === "(") //3. Logic 수행
    {
      return u + solve(v); //3-1. Logic 수행
    }
    else //4. Logic 수행
    {
      u = u.slice(1 , u.length - 1); //4-4. Logic에서 첫 번째, 마지막 문자 제거, 미리 문자열 자르기를하여 혹시 모를 예외방지
      let temp = ""; //4-4. Logic에서 변환된 문자열을 담을 임시변수
      //loop에서 i = 1, len = u.length - 1한 경우 예외발생 가능성 있음(문자열이 1인경우)
      for (let i = 0; i < u.length; i++) //4-4. Logic에서 괄호 방향 뒤집는 loop
      {
        if (u.charAt(i) == "(")
          temp += ")";
        else
          temp += "(";
      }
      return "(" + solve(v) + ")" + temp; //4-1. 4-2. 4-3. 4-4. 수행
    }
    return u + solve(v); //4-5. 수행
  }

  return solve(p);
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
