import AnimationContainer from '../utils/AnimationContainer';

export default function ContactMe() {
  return (
    <AnimationContainer customClassName="w-full">
      <h2
        className="font-bold text-2xl md:text-2xl tracking-tight mb-8 text-white text-center lg:text-start"
        id="contact"
      >
        Contact me
      </h2>

      <div className="w-full flex justify-between items-center flex-col mx-auto max-w-screen-xl">
        <div className="w-full flex justify-between items-center flex-col lg:flex-row gap-6 mb-10">
          <a
            href="mailto:joganghun06@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <div className="rounded border border-gray-800 hover:border-gray-900 bg-[#080809] p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease">
              <h6 className="font-bold text-1xl tracking-tight text-white text-start">
                Email
              </h6>
              <p className="text-base mt-2 text-gray-400">
                joganghun06@gmail.com
              </p>
            </div>
          </a>

          <div className="w-full">
            <div className="rounded border border-gray-800 hover:border-gray-900 bg-[#080809] p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease">
              <h6 className="font-bold text-1xl tracking-tight text-white text-start">
                Phone
              </h6>
              <p className="text-base mt-2 text-gray-400">+82 10 6611 2574</p>
            </div>
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
}
