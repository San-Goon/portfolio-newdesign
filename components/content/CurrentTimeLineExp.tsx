'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';
import ShowSkills from '@/components/utils/ShowSkills';

export default function CurrentTimeLineExp() {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          (주)레이슬론 | 대리 | dec. 2022 - may. 2024
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          LG전자 협력사 직원으로 근무하며 프론트엔드 개발자로서 LG ThinQ App
          전반적인 데이터를 관리하는 Back-Office (Admin, Dashboard) 개발 담당을
          하였습니다. Dashboard 개발을 하며 amcharts, highcharts 를 이용, 데이터
          시각화를 하였습니다.
        </TimelineEvent.Description>
        <div>
          <h3 className="font-bold text-1xl md:text-1xl tracking-tight text-white my-2 text-start">
            Used Skills
          </h3>
          <div className="flex items-center flex-wrap gap-1 mb-1">
            <ShowSkills
              skills={['TypeScript', 'React', 'Next.js', 'Redux', 'TurboRepo']}
            />
          </div>
        </div>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          똑똑한개발자 | 인턴 | sep. 2022 - nov. 2022
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          디자이너 및 백엔드 개발자와 협업하며 Stauter 개발에 참여하였습니다.
        </TimelineEvent.Description>
        <div>
          <h3 className="font-bold text-1xl md:text-1xl tracking-tight text-white my-2 text-start">
            Used Skills
          </h3>
          <div className="flex items-center flex-wrap gap-1 mb-1">
            <ShowSkills
              skills={[
                'TypeScript',
                'React',
                'Next.js',
                'TanStack Query',
                'Redux'
              ]}
            />
          </div>
        </div>
      </TimelineEvent>

      <TimelineEvent last>
        <TimelineEvent.Title>
          (주)라스트일마일 | 사원 | nov. 2021 - jul. 2022
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          다팔자 프로그램 개발 담당 및 사내 Back-Office 개발 담당을 하였습니다.
        </TimelineEvent.Description>
        <div>
          <h3 className="font-bold text-1xl md:text-1xl tracking-tight text-white my-2 text-start">
            Used Skills
          </h3>
          <div className="flex items-center flex-wrap gap-1 mb-1">
            <ShowSkills
              skills={['TypeScript', 'React', 'Redux', 'Electron', 'GraphQL']}
            />
          </div>
        </div>
      </TimelineEvent>
    </Timeline>
  );
}
