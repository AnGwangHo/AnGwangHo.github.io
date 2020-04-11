---
title: 스킬트리(javascript)
date: 2020-04-11
tags:
  - 알고리즘
  - 프로그래머스
  - Summer/Winter Coding(~2018)
keywords:
  - 알고리즘
  - 프로그래머스
  - 스킬트리
  - javascript
  - Summer/Winter Coding(~2018)
---

## <center>[Summer/Winter Coding(~2018)] 스킬트리</center>

**<center>javascript</center>**

---

### 조건

> - 선행 스킬 순서가 `스파크 → 라이트닝 볼트 → 썬더`일때, 썬더를 배우려면 먼저 라이트닝 볼트를 배워야 하고, 라이트닝 볼트를 배우려면 먼저 스파크를 배워야 합니다.
> - 위 순서에 없는 다른 스킬(힐링 등)은 순서에 상관없이 배울 수 있습니다. 따라서 `스파크 → 힐링 → 라이트닝 볼트 → 썬더`와 같은 스킬트리는 가능하지만, `썬더 → 스파크나 라이트닝 볼트 → 스파크 → 힐링 → 썬더`와 같은 스킬트리는 불가능합니다.
> - 선행 스킬 순서 skill과 유저들이 만든 스킬트리1를 담은 배열 skill_trees가 매개변수로 주어질 때, 가능한 스킬트리 개수를 return 하는 solution 함수를 작성해주세요.

### 제한사항

> - 스킬은 알파벳 대문자로 표기하며, 모든 문자열은 알파벳 대문자로만 이루어져 있습니다.
> - 스킬 순서와 스킬트리는 문자열로 표기합니다.
>   - 예를 들어, C → B → D 라면 CBD로 표기합니다
> - 선행 스킬 순서 skill의 길이는 1 이상 26 이하이며, 스킬은 중복해 주어지지 않습니다.
> - skill_trees는 길이 1 이상 20 이하인 배열입니다.
> - skill_trees의 원소는 스킬을 나타내는 문자열입니다.
>   - skill_trees의 원소는 길이가 2 이상 26 이하인 문자열이며, 스킬이 중복해 주어지지 않습니다.

### 입출력 예

> | skill | skill_trees                       | return |
> | ----- | --------------------------------- | ------ |
> | "CBD" | ["BACDE", "CBADF", "AECB", "BDA"] | 2      |

### 코드

```javascript
function solution(skill, skill_trees) {
  const tress_len = skill_trees.length;
  const pattern = new RegExp('[^' + skill + ']', 'g');
  let answer = 0;

  for (let i = 0; i < tress_len; i++) {
    const skill_check = skill_trees[i].replace(pattern, '');
    const len = skill_check.length;

    if (skill_check.substring(0, len) == skill.substring(0, len)) {
      answer++;
    }
  }

  return answer;
}
```

출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
