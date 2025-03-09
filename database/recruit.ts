import { FieldNameTypes } from 'components/recruit/RecruitField';
import { DeveloperFieldName } from 'components/recruit/RecruitField/RecruitDeveloper';
import Yapp from 'constants/yapp';

/**
 * 작성 Tip
 * - 줄바꿈은 <br /> 태그를 넣어주세요!
 * - <span class="test">테스트</span> 과 같은 html 태그와 class 를 넣어서 사용할 수 있습니다!
 */

/* 현재 모집중이면 true 아니면 false */
export const IS_RECRUITING = false;

/** Banner  */
export const RECRUIT_BANNER = {
  title: '신입 부원 모집이 시작되었습니다!',
  description: `아래 지원하기 버튼을 통해<br />구글폼에서 지원하실 수 있습니다!`,
  buttonName: `5기에서 만나요!`,
};

export const RECRUIT_BANNER_ACTIVE = {
  title: `YAPP<br class="mobile" /> ${Yapp.YAPP_GENERATION}기 모집`,
  description: `YAPP ${Yapp.YAPP_GENERATION}기에서 4개월간 활동할<br class="mobile" /> PM(기획자)/디자이너/개발자 신입 회원을<br class="mobile" /> 모집합니다.<br class="desktop" /> 
    IT 분야에 대한 열정과 의지가<br class="mobile" /> 넘치고, 동아리에서 다양한 사람들과 즐겁게<br class="mobile" /> 활동하고 싶은 분들의 많은 지원 바랍니다!`,
  buttonName: `${Yapp.YAPP_GENERATION}기 지원하기`,
};

export const NEXT_GENERATION_RECRUIT_LINK = '구글 폼 작성';

/** 모집 개요 */
export const RECRUIT_OVERVIEW = {
  title: '모집 개요',
  overviewContents: [
    {
      subTitle: '인재상',
      description: `책임감을 가지고 팀과 함께 프로덕트를 만들어나갈 수 있는 누구나`,
    },
    {
      subTitle: '지원자격',
      description: `<li>매주 수요일 방과후에 진행되는 전공 동아리 시간에 참여할 수 있는 분</li>
      <li>항상 열정적이고 최선을 다하시는 분</li>
      <span class="small">중복 동아리 활동 불가</span>
      `,
    },
    {
      subTitle: '지원방법',
      description: `1차 서류
      <div class="smallGrey">지원폼 작성</div>
      2차 면접
      <div class="smallGrey">면접 이후 최종합격</div>`,
    },
  ],
};

/* 모집 일정 */
export const RECRUIT_SCHEDULE = {
  title: '모집 일정',
  schedules: [
    {
      subTitle: '서류 접수',
      description: `1차 서류 2025. 3. 10. (월)
      ~ 3. 12. (수) 23:59

      2차 서류 2025. 3. 13. (목) ~ 3. 16. (일) 23:59`,
    },
    {
      subTitle: '면접 일정',
      description: `1차 2025. 3. 13. (목)
      2차 2025. 3. 17(월)
     `,
    },
    {
      subTitle: '최종 발표',
      description: `2025. 3. 18. (화)`,
    },
  ],
};

/* 자주 묻는 질문 */
export const RECRUIT_FAQ = {
  title: '자주 묻는 질문',
  faqs: [
    {
      subTitle: 'MAS는 어떤 동아리인가요?',
      description: `MAS는 “My Ability Share”의 약자로, 미림마이스터고의 전공 동아리입니다. 이 동아리는 다양한 공모전과 프로젝트에 참여하며 실무 경험을 쌓고, 전공 스터디를 통해 학습을 심화시킬 수 있는 기회를 제공합니다. 또한, 동아리원 간의 친목과 협력을 강조하여 서로의 능력을 공유하고 성장할 수 있는 환경을 제공합니다.`,
      isOpen: false,
    },
    {
      subTitle: '실력이 뛰어난 사람만 지원할 수 있나요?',
      description: `MAS는 열정과 성실을 가장 중요하게 생각하는 동아리입니다. 실력이 뛰어난 사람만 지원할 수 있는 곳이 아니라, 열정과 성실을 바탕으로 성장하고자 하는 사람이라면 누구나 환영합니다. 실력이 좋더라도 열정과 성실이 없으면 좋은 결과를 얻기 어렵다고 생각하며, 동아리 팀원들은 열정과 성실이 실력보다 더 중요한 요소라고 믿고 있습니다. 또한, 원활한 소통이 중요하므로 동아리 활동에 적극적으로 참여할 수 있는 사람을 기다립니다.`,
      isOpen: false,
    },
    {
      subTitle: '정기 모임(세션)은 언제, 어디서 하나요?',
      description: `정기 모임은 매주 수요일 방과후에 진행합니다! 장소는 매월 동아리 장소가 달라집니다.`,
      isOpen: false,
    },
    {
      subTitle: '동아리 활동은 어떤 게 있나요?',
      description: `MAS의 동아리 활동은 다양한 공모전과 프로젝트 참여를 중심으로 이루어집니다. 동아리원들은 전공 스터디를 통해 학습을 심화하고, 실무 경험을 쌓을 수 있는 기회를 제공합니다. 또한, 동아리 내부에서 아이디어를 공유하고 협업하여 포트폴리오를 구성할 수 있는 활동도 포함됩니다. 활동을 통해 서로의 능력을 나누고, 열정과 성실을 바탕으로 함께 성장하는 경험을 할 수 있습니다.`,
      isOpen: false,
    },
  ],
};

/* 모집 분야 */
export const RECRUIT_FIELD_NAMES: FieldNameTypes[] = ['디자이너', '개발자'];

export const RECRUIT_DEVELOPER_FIELD_NAMES: DeveloperFieldName[] = [
  'iOS',
  'Android',
  'Web',
  'Server',
  // 'Flutter',
];

/* PM */
export const RECRUIT_EXPLAIN_PROJECT_MANAGER = {
  content1: `작성예정.
  `,
  content2: `작성예정`,
  content3: `작성예정`,
};

/* 디자이너 */
export const RECRUIT_EXPLAIN_DESIGNER = {
  content1: `개발자와 함께 다양한 프로젝트와 공모전을 진행합니다.
기획을 바탕으로 아이디어에 따라
UX/UI 디자인을 담당합니다.
  `,
  content2: `UX/UI 디자인에 관심이 있는 분
다른 동아리원과 열린 자세로 소통하며 협업할 수 있는 분`,
};

/* iOS */
export const RECRUIT_EXPLAIN_IOS_DEVELOPER = {
  content1: `디자이너와 함께 다양한 프로젝트와 공모전을 진행합니다.
기획을 바탕으로 아이디어에 따라 프론트 엔드, 백엔드 개발을 담당합니다.
  `,
  content2: `1. 프론트엔드(HTML, CSS, JavaScript, React 등) 또는 백엔드(Node.js, Firebase 등)에 관심이 있고, 배워보고 싶은 분
2. 다른 동아리원과 열린 자세로 소통하며 협업할 수 있는 분`,
  content3: `작성예정`,
};

/* Android */
export const RECRUIT_EXPLAIN_ANDROID_DEVELOPER = {
  content1: `디자이너와 함께 다양한 프로젝트와 공모전을 진행합니다.
기획을 바탕으로 아이디어에 따라 프론트 엔드, 백엔드 개발을 담당합니다.
  `,
  content2: `1. 프론트엔드(HTML, CSS, JavaScript, React 등) 또는 백엔드(Node.js, Firebase 등)에 관심이 있고, 배워보고 싶은 분
2. 다른 동아리원과 열린 자세로 소통하며 협업할 수 있는 분`,
  content3: `작성예정`,
};

/* Web */
export const RECRUIT_EXPLAIN_WEB_DEVELOPER = {
  content1: `디자이너와 함께 다양한 프로젝트와 공모전을 진행합니다.
기획을 바탕으로 아이디어에 따라 프론트 엔드, 백엔드 개발을 담당합니다.
  `,
  content2: `1. 프론트엔드(HTML, CSS, JavaScript, React 등) 또는 백엔드(Node.js, Firebase 등)에 관심이 있고, 배워보고 싶은 분
2. 다른 동아리원과 열린 자세로 소통하며 협업할 수 있는 분`,
  content3: `작성예정`,
};

/* Server */
export const RECRUIT_EXPLAIN_SERVER_DEVELOPER = {
  content1: `디자이너와 함께 다양한 프로젝트와 공모전을 진행합니다.
기획을 바탕으로 아이디어에 따라 프론트 엔드, 백엔드 개발을 담당합니다.
  `,
  content2: `1. 프론트엔드(HTML, CSS, JavaScript, React 등) 또는 백엔드(Node.js, Firebase 등)에 관심이 있고, 배워보고 싶은 분
2. 다른 동아리원과 열린 자세로 소통하며 협업할 수 있는 분`,
  content3: `작성예정`,
};
/* Flutter (24기 기준 Cross-Flatform flutter 팀만 모집 <= 최종적으로 모집 안하면 닫기) */
export const RECRUIT_EXPLAIN_FLUTTER_DEVELOPER = {
  content1: `작성예정.
  `,
  content2: `작성예정`,
  content3: `작성예정`,
};

/* 문의 사항 */
export const RECRUIT_ENQUIRY = {
  title: '더 궁금하신 내용이 있거나<br /> 문의 사항이 있으신가요?',
  description: `마스 지원 관련 문의는<br class="mobile" /> 마스 공식 인스타 디엠으로 문의주세요!.<br/>
  <span class="ps">(마스 공식 계정은 항상 열려있습니다)</span>`,
  buttonName: '문의 하기',
  buttonLink: 'https://www.instagram.com/mas_mirim/',
};
