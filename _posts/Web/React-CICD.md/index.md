---
title: React.js CI/CD 구축하기
date: 2020-04-07
tags:
  - React.js
  - CI/CD
keywords:
  - React.js
  - Git Hook
  - husky
  - Github Action
  - Docker
  - Google Cloud Platform
  - Kubernetes
---

## Github action + Docker + GKE를 사용하여 클라우드 배포하기

현재 진행하고 있는 동아리 활동에서 프로젝트 초기환경 구축을 하게 되었다. 이에 대하여 CI/CD를 구축하여 자동 테스트 및 배포를 수행하기로 결정하였다. 또한, 무중단 배포를 하기 위하여 Nginx를 서버로 loadbalancer를 설정하기로 하였다.

AWS에 관련되어서는 자료가 많이 존재하는데 GCP관련해서는 내가 원하는 형태의 자료가 없어 삽질하는 과정이 많이 생겨 직접 남기고자 작성한다.

### 사용 기술

- Jest, Git Hook(husky), Github Action, Docker, Google Cloud Platform(Container Registry, Kubernetes Engine)

### 배포 흐름도

1. 개발자가 git push를 진행 → local에서 Git Hook이 감지하여 unit test 수행 후 결과에 따라 push 진행 및 fail처리
2. develop 브랜치에 pull request 발생 시 Github Action을 통해 현재 코드에 대하여 unit test 진행 후 결과를 issue에 보여줌
3. master 브랜치에 code merge된 경우 Github Action을 통해 Docker image 생성 후 Google Cloud Platfrom에 upload 및 Kubernetes에 배포

## 실제로 CI/CD를 만들어보자!

### React.js 프로젝트 준비하기

프로젝트의 경우 현재, 동아리에서 사용하기로한 React.js를 기준으로 초기 프로젝트를 구성하였다.

```Shell
npx create-react-app '프로젝트이름' --template typescript
```

- 이렇게 생성된 프로젝트에서 `npm start`명령어를 실행하여 프로젝트 환경이 정상적으로 설정된것을 확인한다.

### Jest 설정하기

unit test시 사용할 라이브러리는 `Jest`라는 라이브러리를 사용하기로 하였으며, 해당 라이브러리의 경우 npx로 프로젝트 설치 시 자동적으로 설치된다.

- `npm run test`를 실행한다면 아래와 같은 결과가 나타날 것이다.

  ![Alternate text][firsttest]

- 우리가 필요한 것은 위와같이 추가입력을 통해 테스트하는 것이 아닌 결과에대한 성공/실패가 필요하다.
- 이에 대하여 `package.json`에 아래 설정을 추가하고 해당 명령어를 실행하면 아래 결과와 같이 성공/실패에 대한 결과만을 보여준다!

  ```JSON
  //package.json
  "scripts": {
    ...,
    "test:watch": "react-scripts test --watchAll=false",
  }
  ```

  ![Alternate text][resulttest]

자! 이것으로 CI/CD 배포를 위한 프로젝트 기본적인 준비가 끝났다. 다음으로는 CI/CD에 대한 설정을 진행하겠다.

### Git Hook 설정하기

작업자가 코드를 git에 push하기전에 unit test를 local에서 진행하고자 하였고 이에 대하여 Git hook이 지원하는 것을 검색 결과 알 수 있었다.

그런데 기존 Git hook의 경우 shell 명령어로 작성해야하는 부분이 존재하였고 이에 관련하여 학습하고 진행하기에는 시간이 없어 대체제를 찾는 도중 `husky`라는 라이브러리가 있는것을 알게되었고 `package.json`에 설정만 입력하기만 하면되는 편리함이 존재하여 이를 선택하였다.

- 아래 명령어를 입력하여 husky를 설치한다.

  ```Shell
  npm install husky --save-dev
  ```

- 설치 후 아래와 같이 hook을 사용할 부분과 명령어를 입력해주면 끝이다!🙌
- 참고로, 위의 Jest에서 --watchAll=false을 설정하지 않으면 test 진행 시 `무한루프 효과`를 얻을 수 있다.(false를 지정하는 부분이 공식문서에 없어서 찾는데 힘들었다...)

  ```JSON
  //package.json
  "scripts": {
  },
  "husky": {
    "hooks": {
      "pre-push": "npm test:watch"
    }
  }
  ```

### Github Action 설정하기

CI의 경우 처음에는 기존의 jenkins, travis와 같은 유명한 도구들을 고려하였다. 관련되서 많은 레퍼런스나 예제들이 잘 되어있기에 금방 적용할 것 같았다.

이러한 예제들을 보다가 Github Action이라는 CI를 보게되었는데 GitHub에서 지원해주며 추가적으로 플러그인이나 설정하는 부분이 없이 파일만 생성하면 자동적으로 해주는부분에서 GitHub Action을 선택하였다.

- Github Action의 경우 저장소 탭중에 하나로 존재한다.

  ![Alternate text][github-tab]

- `Actions`을 클릭하면 아래와 같은 화면이 나타며 완성된 템플릿을 제공해 주고 있으며, 해당 템플릿을 사용하거나 새로 작성할 수 있다.

  ![Alternate text][githubaction-template]

- GitHub Actions의 경우 다른 포스트에서 다루기로하고 프로젝트 루트에서 `.github/workflows` 경로에 아래 파일을 생성해 준다.

  ```YAML
  #pr-test.yml
  name: PR Test

  on:
    pull_request:
      types: [opened, reopened]
      branches: [ develop, feature, release ]

  jobs:
    Run Jest:
      runs-on: [ubuntu-latest]
      strategy:
        matrix:
          node-version: [12.x]
      steps:
      - name: npm install
        run: npm install
      - name: run test code
        run: npm run test:watch

      - name: if fail
        uses: actions/github-script@0.8.0
        with:
          github-token: ${{ github.token }}
          script: :|
            const ref = "${{github.ref}}"
            const pull_number = Number(ref.split("/")[2])
            await github.pulls.createReview({
              ...context.repo,
              pull_number,
              body:"테스트코드를 다시 확인해주세요. ",
              event:"REQUEST_CHANGES"
            })
            await github.pulls.update({
              ...context.repo,
              pull_number,
              state:"closed"
            })
        if: failure()
  ```

  ```YAML
  #google.yml
  name: Build and Deploy to GKE

  on:
    pull_request:
      types: [closed]
      branches:
        - master

  # Environment variables available to all jobs and steps in this workflow
  env:
    GKE_PROJECT: ${{ secrets.GKE_PROJECT }}
    GKE_EMAIL: ${{ secrets.GKE_EMAIL }}
    GITHUB_SHA: ${{ github.sha }}
    GKE_ZONE: ${{ secrets.GKE_ZONE }}
    GKE_CLUSTER: ${{ secrets.GKE_CLUSTER }}
    IMAGE: ${{ secrets.IMAGE }}
    REGISTRY_HOSTNAME: ${{ secrets.REGISTRY_HOSTNAME }}
    DEPLOYMENT_NAME: ${{ secrets.DEPLOYMENT_NAME }}

  jobs:
    setup-build-publish-deploy:
      name: Setup, Build, Publish, and Deploy
      runs-on: ubuntu-latest
      steps:

      - name: Checkout
        uses: actions/checkout@v2

      # Setup gcloud CLI
      - uses: GoogleCloudPlatform/github-actions/setup-gcloud@master
        with:
          version: '285.0.0'
          project_id: ${{ secrets.GCP_PROJECT_ID }}
          service_account_email: ${{ secrets.GKE_EMAIL }}
          service_account_key: ${{ secrets.GKE_KEY }}

      # Configure docker to use the gcloud command-line tool as a credential helper
      - run: |
          gcloud auth configure-docker

      # Build the Docker image
      - name: Build
        run: |
          docker build -t "$REGISTRY_HOSTNAME"/"$GKE_PROJECT"/"$IMAGE":"$GITHUB_SHA" \
            --build-arg GITHUB_SHA="$GITHUB_SHA" \
            --build-arg GITHUB_REF="$GITHUB_REF" .
      # Push the Docker image to Google Container Registry
      - name: Publish
        run: |
          docker push $REGISTRY_HOSTNAME/$GKE_PROJECT/$IMAGE:$GITHUB_SHA

      # Set up kustomize
      - name: Set up Kustomize
        run: |
          curl -o kustomize --location https://github.com/kubernetes-sigs/kustomize/releases/download/v3.1.0/kustomize_3.1.0_linux_amd64
          chmod u+x ./kustomize
      # Deploy the Docker image to the GKE cluster
      - name: Deploy
        run: |
          gcloud container clusters get-credentials $GKE_CLUSTER --zone $GKE_ZONE --project $GKE_PROJECT
          ./kustomize edit set image $REGISTRY_HOSTNAME/$GKE_PROJECT/$IMAGE:${GITHUB_SHA}
          ./kustomize build . | kubectl apply -f -
          kubectl rollout status deployment/$DEPLOYMENT_NAME
          kubectl get services -o wide
  ```

- `google.yml`의 경우 이후 GKE배포 단계에서 설명하기로 하며, `pr-test.yml`를 보면 develop, feature, release 브랜치에 pull request가 발생 시 issue가 'opened, reopened'시점에 수행되며 해당 코드에대하여 test 후 실패 시 issue에 리뷰를 달게한다.

- 이제, 해당 파일을 git에 반영 시 브랜치에 pull request시 수행되며 결과를 Action탭에서 볼 수 있다.

  ![Alternate text][githubaction-result]

### 클라우드에 배포하기

이제, 마지막단계로 프로젝트를 build후 Docker image를 만들어 클라우드에서 실행 할 것이다.

1. Docker관련 설정파일 생성

   - Docker의 경우 가상환경에서 실행 되므로 현재 local에 Docker를 설치할 필요는 없다.
   - `.dockerignore`, `Dockerfile` 총 2개의 파일을 프로젝트 루트에서 생성한다.

     ```Docker
     #.dockerignore
     .git
     .hg
     .svn
     .dockerignore

     node_modules
     Dockerfile
     npm-debug.log
     ```

     ```Docker
     #Dockerfile
     FROM node:12 as builder

     WORKDIR /

     COPY package.json ./
     RUN npm install --silent
     COPY . .
     RUN npm run build

     #Nginx에 build 결과물 upload
     FROM nginx:1.17-alpine

     COPY --from=builder /build /usr/share/nginx/html

     EXPOSE 80
     CMD [ "nginx", "-g", "daemon off;" ]
     ```

   - `.dockerignore`의 경우 .gitignore와 같이 Docker build시 제외할 항목에 대하여 기술한다.
   - `Dockerfile`의 경우 node를 통해 build를 한 후 build된 결과물을 nginx에 복사한 후 Docker image를 만든다.

2. GKE 배포

   배포하기에 앞서 우선적으로 GCP에 계정이 존재해야 하므로 GCP에 가입한다.[(링크)](https://console.cloud.google.com/)

   - 가입 후 아래와 같이 새 프로젝트를 하나 생성한다.

     ![Alternate text][gke1]

   - 우선적으로 해당 프로젝트에 접근권한을 설정하기 위하여 "IAM 및 관리자"-"서비스 계정"을 선택한다.

     ![Alternate text][gke2]

     ![Alternate text][gke3]

   - 상단의 "서비스 계정 만들기"를 선택하여 단계별로 진행하며 2단계에서는 아래와 같은 권한을 설정한다.(저장소 관리자의 경우 Storage 탭에 있다)

     ![Alternate text][gke4]

   - 생성 완료시 아래와 같이 키가 생성되며 해당 키를 클릭하여 상제 정보에 들어간다.

     ![Alternate text][gke5]

   - "수정"을 선택 후 "키 만들기"를 선택하여 JSON형태로 만들기를 선택 시 json파일이 다운로드된다. 이 파일의 경우 이후 단계에서 필요함으로 잘 기억해두자

     ![Alternate text][gke6]

   - Docker의 경우 "Container Registry"에 보관될 것이므로 해당 탭을 선택 후 사용설정 버튼을 클릭한다.

   - "Kubernetes Engine"탭을 선택하여 "클러스터"를 선택 후 "클러스터 만들기"를 진행한다.

   - 클러스터의 생성 시 아래와 같이 진행하며 이름의 경우 자유롭게 설정한다. 영역의 경우 `asia-northeast3-c`를 설정한다.(서울)

     ![Alternate text][gke7]

   - 생성 완료 시 아래와 같이 이전 탭에 생성된 것을 볼 수 있다.

     ![Alternate text][gke8]

   이것으로 자동배포를 위한 기본적인 GCP 설정을 완료하였다. 마지막으로 GitHub 저장소에 Action 수행 시 사용할 key값들을 설정해 주면 된다.

3. GitHub Secrets 값 설정

   해당 항목의 경우 Github 저장소의 `Settings-Secrets`에 존재하며 'Add a new secret'를 선택하여 입력 가능하다.

   등록해야할 키의 종류는 아래와 같다.

   | Key               | value                                                                                       |
   | ----------------- | ------------------------------------------------------------------------------------------- |
   | DEPLOYMENT_NAME   | 동적으로 생성할 deployment 이름으로 `GCP-Kubernetes Engine-작업부하`에 생성된다.            |
   | GKE_CLUSTER       | 위에서 생성한 클러스터 이름을 입력한다.                                                     |
   | GKE_EMAIL         | 서비스 계정에서 생성된 email포함 풀 텍스트를 입력한다.                                      |
   | GKE_KEY           | 서비스 계정 만들기에서 다운로드한 json파일 내용을 전부 복사 후 붙여넣기                     |
   | GKE_PROJECT       | GCP에 생성한 프로젝트 이름을 입력한다.                                                      |
   | GKE_ZONE          | 클러스터에서 생성한 영역의 이름을 입력한다.                                                 |
   | IMAGE             | Docker image 이름으로 자유롭게 입력한다.                                                    |
   | REGISTRY_HOSTNAME | gcr.io, us.gcr.io, eu.gcr.io, [asia.gcr.io](http://asia.gcr.io) 중 1개를 선택하여 입력한다. |

   - 이렇게 등록된 키들이 이전에 생성한 `google.yml`에서 `${{ secrets.GKE_PROJECT }}`형태로 사용되게 된다.

4. kustomization 설정파일 생성하기

   이 부분에대해서 찾느라 많은 시간을 소요했던 것 같다. GKE의 경우 Github Action에 템플릿이 존재하는데 해당 템플릿을 실행 시 kustomization.yaml파일이 존재해야 한다.

   - 아래 파일들을 프로젝트에 다음과 같이 생성한다.

     ```YAML
     #kustomization.yaml
     resources:
         - ./k8s/deployment.yaml
         - ./k8s/service.yaml
     ```

     ```YAML
     #./k8s/deployment.yaml
     apiVersion: apps/v1
     kind: Deployment
     metadata:
       name: react-nginx-deployment #deployment 이름으로 위의 Secrets에 입력한 값과 동일하게 맞춘다.
     spec:
       replicas: 3
       selector:
         matchLabels:
             app: react-test #자유롭게 설정
       template:
         metadata:
           labels:
             app: react-test #자유롭게 설정
         spec:
           containers:
             - name: react-test #자유롭게 설정
               image: gcr.io/yapp16-findzone/react-test:latest #image 위치로 추후 동적으로 변경하나 프로젝트-이미지 이름으로 미리 설정해준다.
               ports:
                 - containerPort: 80
     ```

     ```YAML
     #./k8s/service.yaml
     apiVersion: v1
     kind: Service
     metadata:
       name: react-test #Kubernetes Engine-서비스 및 수신에 생성될 이름이다.
       labels:
         app: react-test #자유롭게 설정
     spec:
       ports:
         - name: "80"
           port: 80
           targetPort: 80
       selector:
         app: react-test #deployment에서 containers.name과 동일하게 설정한다.
       type: LoadBalancer
     ```

5. 브랜치 merge하기

   이제 모든 설정은 완료되었다. master 브랜치에 pull request가 완료 시 GKE를 만들고 배포가 될 것이다.

   - 만약, master 브랜치에 pull request가 완료 되고 성공적으로 GitHub Action이 수행 될 시 아래와 같이 설정한 이름으로 deployment, service가 생성되고 `서비스 및 인그레스`의 엔드포인트를 통해서 접근할 수 있다!✌

     ![Alternate text][gke9]

     ![Alternate text][gke10]

참고

- [Git Hook(husky) 라이브러리](https://www.npmjs.com/package/husky)

- [Google 컨테이너식 웹 애플리케이션 배포](https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app?hl=ko)

- [Kustomize를 이용한 쿠버네티스 오브젝트의 선언형 관리](https://kubernetes.io/ko/docs/tasks/manage-kubernetes-objects/kustomization/)

[firsttest]: test1.png '초기테스트'
[resulttest]: test2.png '테스트결과'
[github-tab]: githubaction1.png 'github 탭'
[githubaction-template]: githubaction2.png 'github action 템플릿'
[githubaction-result]: githubaction3.png 'github action결과'
[gke1]: gke1.png '프로젝트생성'
[gke2]: gke2.png '서비스계정'
[gke3]: gke3.png '서비스계정만들기'
[gke4]: gke4.png '권한설정'
[gke5]: gke5.png '서비스계정생성결과'
[gke6]: gke6.png '키만들기'
[gke7]: gke7.png '클러스터설정'
[gke8]: gke8.png '클러스터결과'
[gke9]: gke9.png '동적생성결과1'
[gke10]: gke10.png '동적생성결과2'
