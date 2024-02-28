import AnimationContainer from '../utils/AnimationContainer';

const myWorkProcess = [
  {
    id: '1',
    title: '다양한 기술 사용 경험',
    des: '메인으로 다루는 기술들 외에도 입소문이 자자한 프레임워크, 라이브러리는 한번씩 사용해보며 다양한 기술을 실무에 적용할 수 있는 능력이 있습니다.',
    delay: 0.3
  },
  {
    id: '2',
    title: 'SEO 구현 능력',
    des: '검색 엔진 결과에서 가시성을 향상시키는 SEO 전략을 구현하여 더 많은 방문자를 유치시킬 수 있는 능력이 있습니다.',
    delay: 0.4
  },
  {
    id: '3',
    title: '팁 협업 능력',
    des: '저의 생각도 자유롭게 표출하고 동료의 생각도 수용하는 자세로 팀의 능률 및 분위기를 중점적으로 생각하는 협업 능력을 갖고 있습니다.',
    delay: 0.5
  },
  {
    id: '4',
    title: '실무프로세스 경험',
    des: 'JIRA, Git 등을 이용한 계획, 협업 및 Jenkins, AWS, Vercel 을 이용한 배포까지 애자일 프로세스에 능숙한 개발자입니다.',
    delay: 0.6
  },
  {
    id: '5',
    title: '반응형 및 크로스 브라우징 개발',
    des: '다양한 기기 및 브라우저에 일관된 사용자 경험을 제공하기 위한 반응형 및 크로스 브라우징 개발 능력이 있습니다.',
    delay: 0.7
  },
  {
    id: '6',
    title: '테스트 및 디버깅',
    des: 'Jest 를 이용한 TDD 경험이 있으며, 실무에서 배포되어있는 다양한 프로젝트 관리를 통해 테스트 및 디버깅 능력을 키웠습니다.',
    delay: 0.8
  }
];

const ProcessWork = () => {
  return (
    <AnimationContainer customClassName="w-full mb-4">
      <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-12 text-white text-start">
        My Abilities
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 mx-auto">
        {myWorkProcess.map(({ id, title, des, delay }) => (
          <AnimationContainer
            key={id}
            customClassName="rounded border border-gray-800 hover:border-gray-900 bg-[#080809] p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease"
            customDelay={delay}
          >
            <h3 className="font-bold text-1xl tracking-tight text-white text-start">
              {title}
            </h3>

            <p className="mt-2 text-base text-gray-400">{des}</p>
          </AnimationContainer>
        ))}
      </div>
    </AnimationContainer>
  );
};

export default ProcessWork;
