import { ProjectType, ServiceType, SkillType } from './type';
import { TbAtom, TbHeartHandshake } from 'react-icons/tb';
import { GoBrowser, GoCommentDiscussion, GoDashboard } from 'react-icons/go';
import { BiTestTube } from 'react-icons/bi';

// <b>태그 사용 가능
export const services: ServiceType[] = [
  {
    title: 'Server Side Rendering',
    about:
      '&nbsp;성능면에서 CSR, SSG, SSR 의 차이점을 명확하게 구분할 수 있고, SEO 의 최적화를 위해 Next.js를 이용한 SSR 구현 방법으로 프로젝트를 진행해 본 경험이 있습니다.',
    Icon: GoBrowser,
  },
  {
    title: 'Collaboration',
    about:
      '&nbsp;· <b>Git-flow</b> 를 이용한 협업에 자신이 있습니다.<br />&nbsp;· <b>Restful API</b> 를 이용한 Backend 개발자 분과의 협업 경험이 있습니다.<br />&nbsp;· <b>Figma</b> 를 이용한 디자이너 분과의 협업 경험이 있습니다.',
    Icon: TbHeartHandshake,
  },
  {
    title: 'Optimization',
    about:
      '&nbsp;React 의 리렌더링 최적화를 하는 방법 및 Webpack 을 이용해서 번들 사이즈를 줄이는 방법으로 성능 최적화를 진행한 경험이 있습니다.',
    Icon: GoDashboard,
  },
  {
    title: 'Atomic Design',
    about:
      '&nbsp;개발의 효율성을 높이기 위해 재사용 가능성을 고려한 디자인 패턴인 Atomic Design 을 사용해 개발해 본 경험이 있습니다.',
    Icon: TbAtom,
  },
  {
    title: 'Communication',
    about:
      '&nbsp;· 실제 배포중인 프로그램 개발에 참여한 경험이 있으며, 그 과정에서 많은 고객 분들과 소통하면서 CS 처리를 해본 경험이 있습니다.<br />&nbsp;· 협업을 하며 Co-Worker 분들과의 효율적인 협업을 위한 소통 방법을 길렀습니다.',
    Icon: GoCommentDiscussion,
  },
  {
    title: 'TDD',
    about: '&nbsp; Jest 와 RTL 를 이용한 TDD 을 해본 경험이 있습니다.',
    Icon: BiTestTube,
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
    name: 'Socket.IO',
    src: '/images/socketio.png',
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
    name: 'Framer Motion',
    src: '/images/framermotion.png',
  },
  {
    name: 'Emotion',
    src: '/images/emotion.png',
  },
  {
    name: 'Jest',
    src: '/images/jest.png',
  },
  {
    name: 'React Testing Library',
    src: '/images/rtl.png',
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
    notion_url:
      'https://magenta-forest-566.notion.site/04bfd200a6314e58af8ad6e9b80521d1',
    deployed_url: 'https://latest-portfolio-three.vercel.app/',
    github_url: 'https://github.com/San-Goon/portfolio-newdesign',
  },
];
