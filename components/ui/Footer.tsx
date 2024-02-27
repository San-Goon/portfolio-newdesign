import AnimationContainer from '../utils/AnimationContainer';

const Footer = () => {
  return (
    <footer className="w-full lg:max-w-screen-md flex flex-col justify-center items-center mx-auto">
      <hr className="w-full border-1 border-gray-800 mb-8" />
      <AnimationContainer customClassName="w-full grid place-items-center grid-cols-3 gap-1 lg:gap-4 pb-8 sm:grid-cols-3 mx-3">
        <div className="flex flex-col space-y-4"></div>
      </AnimationContainer>
    </footer>
  );
};

export default Footer;
