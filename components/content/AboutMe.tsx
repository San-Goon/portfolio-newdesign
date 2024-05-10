import AnimationContainer from '../utils/AnimationContainer';

export default function AboutMe() {
  const now = new Date();
  const start = new Date(2022, 0);

  const months =
    now.getMonth() -
    start.getMonth() +
    12 * (now.getFullYear() - start.getFullYear());

  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        About me
      </h2>
      <p className="text-base text-gray-400">
        안녕하세요 2년 4개월 경력의 프론트엔드 개발자 조강훈 입니다. 여러가지의
        트렌디한 프론트엔드 라이브러리 사용 경험이 있고, React-native 를 사용한
        앱개발 경험이 있습니다. 또한 백엔드 지식을 쌓기 위해 Node.js, Express
        학습 및 개발 중에 있습니다.
      </p>
    </AnimationContainer>
  );
}
