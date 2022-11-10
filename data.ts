import { ProjectType, ServiceType, SkillType } from './type';

// <b>태그 사용 가능
export const services: ServiceType[] = [
  {
    title: 'SSR 환경을 구축해보았습니다.',
    about:
      '&nbsp;성능면에서 CSR, SSG, SSR 의 차이점을 명확하게 구분할 수 있고, SEO 의 최적화를 위해 Next.js를 이용한 SSR 구현 방법으로 프로젝트를 진행해 본 경험이 있습니다.',
    Icon: 'Icon',
  },
  {
    title: 'Github 을 이용한 협업 경험이 많습니다.',
    about:
      '&nbsp;회사에 입사했을 때 부터 Github 을 이용해 협업을 해왔고, 그 경험을 토대로 git-flow 에 대한 이해도가 높습니다.',
    Icon: 'Icon',
  },
  {
    title: 'Backend 개발자 분과도 협업을 해보았습니다.',
    about:
      '&nbsp;라스트일마일 / 똑똑한개발자를 다니며 백엔드 개발자 분과 협업을 했습니다. 협업을 하며 Restful API 를 많이 연동 해 보았고, 백엔드 분과의 소통 방법을 배웠습니다.',
    Icon: 'Icon',
  },
  {
    title: '성능 최적화에 관심이 많고 시도해보았습니다.',
    about:
      '&nbsp;React 의 리렌더링 최적화를 하는 방법 및 Webpack 을 이용해서 번들 사이즈를 줄이는 방법으로 성능 최적화를 진행한 경험이 있습니다.',
    Icon: 'Icon',
  },
  {
    title: 'Atomic design 을 이해하고 있습니다.',
    about:
      '&nbsp;개발의 효율성을 높이기 위해 재사용 가능성을 고려한 디자인 패턴인 Atomic design 을 사용해 개발해 본 경험이 있습니다.',
    Icon: 'Icon',
  },
  {
    title: ' 고객 분들과의 소통에 자신이 있습니다.',
    about:
      '&nbsp;실제 배포중인 프로그램 개발에 참여한 경험이 있으며, 그 과정에서 많은 고객 분들과 소통하면서 CS 처리를 해본 경험이 있습니다.',
    Icon: 'Icon',
  },
];

export const mainSkills: SkillType[] = [
  {
    name: 'React.js',
    src: '/images/react.png',
  },
  {
    name: 'Next.js',
    src: '/images/nextjs.png',
  },
  {
    name: 'TypeScript',
    src: '/images/typescript.png',
  },
  {
    name: 'Redux',
    src: '/images/redux.png',
  },
  {
    name: 'React Query',
    src: '/images/reactquery.png',
  },
  {
    name: 'Github',
    src: '/images/github.png',
  },
];

export const experiencedSkills: SkillType[] = [
  {
    name: 'SWR',
    src: '/images/SWR.png',
  },
  {
    name: 'GraphQL',
    src: '/images/graphql.png',
  },
  {
    name: 'Electron',
    src: '/images/electron.png',
  },
  {
    name: 'Chakra-UI',
    src: '/images/chakra.png',
  },
  {
    name: 'Material-UI',
    src: '/images/MUI.png',
  },
  {
    name: 'Tailwind CSS',
    src: '/images/tailwind.png',
  },
  {
    name: 'Emotion',
    src: '/images/emotion.png',
  },
];

export const projects: ProjectType[] = [
  {
    name: '다팔자',
    image_path: '/images/dafalza.png',
    notion_url:
      'https://magenta-forest-566.notion.site/153f21e6b7de4505b3df259aa204a72b',
    deployed_url: 'https://ownerclan.com/V2/info_page/dafalza2.php',
    github_url: '',
  },
  {
    name: '스타우터',
    image_path: '/images/stauter.png',
    notion_url:
      'https://magenta-forest-566.notion.site/Stauter-1a005404c12946149f4ffd521659f22f',
    deployed_url: 'https://stauter.contact',
    github_url: '',
  },
  {
    name: 'E-COMMERCE',
    image_path: '/images/ecommerce.png',
    notion_url:
      'https://magenta-forest-566.notion.site/incourse-run-ae3493ac5d0a4504b6ddf83fd6b56d66',
    deployed_url:
      'https://fastcampas-5-commerce-fe-nwm6-idxtxcuz8-kylecho.vercel.app/login',
    github_url: 'https://github.com/San-Goon/e-commerce-project',
  },
  {
    name: 'Slack',
    image_path: '/images/slack.png',
    notion_url:
      'https://magenta-forest-566.notion.site/slack-c4fe244a9b1f474aa1fa86ca1e7a01b5',
    deployed_url: 'https://slack-clone-one-beta.vercel.app/',
    github_url: 'https://github.com/San-Goon/slack-clone',
  },
  {
    name: 'Portfolio',
    image_path: '/images/portfolio.png',
    notion_url: '',
    deployed_url: '',
    github_url: 'https://github.com/San-Goon/portfolio-newdesign',
  },
];
