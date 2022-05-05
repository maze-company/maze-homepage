# MAZE homepage

MAZE의 홈페이지 웹사이트 소스코드입니다. [Astro](https://astro.build/)와 [TailwindCSS](https://tailwindcss.com/)에 기반해 만들어졌습니다.

**목차:**

- [Setup](#setup)
- [Getting started](#getting-started)
- [Commands](#commands)
- [Deployment](#deployment)
- [Project structure](#project-structure)

## Setup

이 프로젝트는 Node.js 16 이상, npm v8 이상의 환경에서 작업할 것을 요구합니다. 작업할 컴퓨터에 이를 만족하는 개발 환경이 이미 준비되지 않았다면, [nvm](https://github.com/nvm-sh/nvm)(Node Version Manager)을 사용할 것을 권합니다.

또한 IDE/텍스트 에디터로는 Microsoft의 [Visual Studio Code](https://code.visualstudio.com/)(VS Code)를 설치해 사용하기 권합니다. VS Code 환경에서 Astro와 TailwindCSS에서 제공하는 공식 extension들을 설치하면 linting, syntax highlighting, autocompletion 등 개발에 많은 도움을 받을 수 있습니다.

이들 extension에 대한 자세한 정보는 ["Astro extension for VS Code" 문서](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)와 ["TailwindCSS extension for VS Code" 문서](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)를 각각 참고하세요. VS Code에 extension을 설치하는 법에 대한 설명으로는 ["Extension Marketplace" 문서](https://code.visualstudio.com/docs/editor/extension-marketplace)를 참고하세요.

## Getting started

개발 환경이 마련되었다면 이 프로젝트의 개발을 시작하기 위해서 다음의 명령어들을 실행해 주세요:

```sh
# 1. 작업할 위치에서 이 repository를 클론
git clone https://github.com/maze-company/maze-homepage.git

# 2. 생성된 프로젝트 위치로 이동
cd maze-homepage

# 3. 프로젝트에 필요한 모듈들을 설치
npm install

# 4. (선택사항) 개발 서버(dev server) 실행
npm run dev
```

## Commands

이 프로젝트의 root 위치(`/`)에서 다음의 명령어를 실행할 수 있습니다:

| 명령어            | 동작 내용                                               |
| :---------------- | :------------------------------------------------------ |
| `npm run dev`     | `localhost:3000`에서 개발 서버(dev server)를 실행합니다 |
| `npm run build`   | `/dist/`에 production 사이트를 생성합니다               |
| `npm run preview` | production 사이트를 로컬 환경에서 미리보기 합니다       |

## Deployment

`npm run build` 명령어를 실행해 `/dist/`에 생성되는 production 사이트는 GitHub Actions를 통해 GitHub Pages에 호스팅하는 방식으로 배포합니다. GitHub Actions에 대해서는 [GitHub Actions 공식 문서 사이트](https://docs.github.com/en/actions)를 참고하세요. GitHub Pages에 대해서는 [GitHub Pages 공식 문서 사이트](https://docs.github.com/en/pages)를 참고하세요.

## Project Structure

이 프로젝트의 기본적인 구조는 다음과 같습니다:

```
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   └── pages/
│       └── index.astro
├── .prettierrc
├── astro.config.mjs
├── tailwind.config.cjs
├── tsconfig.json
└── package.json
```

### `/public/`

production 사이트에서 사용할 이미지 파일 등 각종 static asset들을 위한 directory입니다.

여기에 놓인 asset들은 프로덕션 사이트 생성 시 별다른 절차를 거치지 않은 채 `/dist/` directory에 그대로 복사됩니다.

### `/src/`

Astro 사이트의 소스 코드 directory입니다.

#### `/src/components/`

사이트에 쓰일 `.astro` 컴포넌트 파일들을 위한 directory입니다.

해당 Astro 프로젝트에 React, Vue 등 그외 다른 프레임워크를 통합해 사용할 경우 해당 프레임워크의 컴포넌트 파일들도 이곳에 둘 수 있습니다.

자세한 내용은 Astro의 ["Components" 문서](https://docs.astro.build/en/core-concepts/astro-components/)를 참고하세요.

#### `/src/layouts/`

사이트에 쓰일 `.astro` 레이아웃 컴포넌트 파일들을 위한 directory입니다.

자세한 내용은 Astro의 ["Layouts" 문서](https://docs.astro.build/en/core-concepts/layouts/)를 참고하세요.

#### `/src/pages/`

사이트에 쓰일 `.astro` 페이지 파일을 위한 directory 입니다.

이곳에 위치한 `.astro` 페이지 파일들에 기반해 사이트의 라우트가 구성됩니다. `index.astro` 파일은 사이트의 root route인 `/`가 되며 그 외의 `.astro` 페이지들은 각 파일 이름에 해당하는 route가 됩니다. (예시: `/src/pages/about.astro`는 사이트의 `/about` route에 해당.)

자세한 내용은 Astro의 ["Pages" 문서](https://docs.astro.build/en/core-concepts/astro-pages/)를 참고하세요.

### `.prettierrc`

코드 포맷을 위한 Prettier의 환경 설정 파일입니다.

자세한 내용은 Prettier의 ["Configuration Files" 문서](https://prettier.io/docs/en/configuration.html)를 참고하세요:

### `astro.config.mjs`

Astro 프로젝트의 환경 설정 파일입니다.

자세한 내용은 ["Configuring Astro" 문서](https://docs.astro.build/en/guides/configuring-astro/)와 ["Configuration Reference" 문서](https://docs.astro.build/en/reference/configuration-reference/)를 참고하세요.

Astro 프로젝트에서 TailwindCSS를 사용하기 위해서는 이 환경 설정 파일 내에서 공식 integration인 `@astrojs/tailwind`를 적용해야 합니다. 여기에 대해서는 `@astrojs/tailwind`의 [GitHub README 문서](https://github.com/withastro/astro/tree/main/packages/integrations/tailwind)를 참고하세요.

### `tailwind.config.cjs`

TailwindCSS 프로젝트 환경 설정 파일입니다.

자세한 내용은 TailwindCSS의 ["Configuration" 문서](https://tailwindcss.com/docs/configuration)를 참고하세요.

### `tsconfig.json`

TypeScript 환경 설정 파일입니다.

자세한 내용은 TypeScript의 ["What is a tsconfig.json" 문서](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)와 ["TSConfig Reference" 문서](https://www.typescriptlang.org/tsconfig)를 참고하세요

Astro의 frontmatter에서 TypeScript를 사용할 수 있습니다. 여기에 대해서는 Astro의 ["TypeScript" 문서](https://docs.astro.build/en/guides/typescript/)를 참고하세요.
