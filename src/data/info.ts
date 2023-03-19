type SkillCategory = {
  [key: string]: [string, string][];
};

export interface Info {
  name: string;
  bio: string;
  miniBio: { icon: string; text: string }[];
  socials: { link: string; icon: string; label: string }[];
  skills: SkillCategory;
  portfolio: {
    title: string;
    live: string | null;
    gitHub: string;
    image: string;
    stack: string[];
    data: { start: string; end: string };
  }[];
}

export const info: Info = {
  name: '강민규',
  bio: '저는 React와 Next.js를 좋아하는 프론트엔드 개발자입니다.',
  miniBio: [
    {
      icon: 'fas fa-globe',
      text: 'based in the Seoul, Korea',
    },
    {
      icon: 'fa fa-envelope',
      text: 'kagrin97@gmail.com',
    },
  ],
  socials: [
    {
      link: '/resume/강민규_이력서(resume).pdf',
      icon: 'fa fa-file',
      label: 'View my Resume',
    },
    {
      link: 'https://kagrin97-blog.vercel.app/',
      icon: 'fa fa-blog',
      label: 'Visit my blog',
    },
    {
      link: 'https://github.com/kagrin97',
      icon: 'fa fa-github',
      label: 'Visit my github',
    },
  ],
  skills: {
    Languages: [
      ['TypeScript', '하'],
      ['JavaScript', '하'],
      ['HTML/CSS', '하'],
      ['Python', '하'],
    ],
    Frameworks: [
      ['React', '하'],
      ['Next.js', '하'],
      ['Redux', '하'],
      ['React-query', '최하'],
      ['Express', '최하'],
      ['Tailwind CSS', '하'],
      ['Material UI', '하'],
    ],
    Databases: [['MongoDB', '최하']],
    Cloud: [
      ['AWS EC2', '최하'],
      ['Vercel', '하'],
      ['Cloudinary', '하'],
    ],
    Tools: [
      ['Git', '하'],
      ['GitHub', '하'],
      ['Postman', '최하'],
      ['npm', '하'],
      ['yarn', '최하'],
    ],
  },
  portfolio: [
    {
      title: 'NextJS-myblog : NextJS를 사용해서 실제 운영중인 블로그',
      live: 'https://kagrin97-blog.vercel.app/',
      gitHub: 'https://github.com/kagrin97/NextJS-myblog',
      image: '/imgs/아바타.jpg',
      stack: ['NextJS', 'contentlayer', 'tailwind', 'vercel', 'PWA'],
      data: {
        start: '2022-06-30',
        end: '~',
      },
    },
    {
      title: 'My Calendar : 자신만의 캘린더를 가지고 해당 날짜에 메모 할수있는 어플리케이션',
      live: 'https://my-calendar-mern.vercel.app/',
      gitHub: 'https://github.com/kagrin97/MyCalendar-MERN',
      image: '/imgs/아바타.jpg',
      stack: ['React', 'Express', 'monggodb', 'atlas', 'AWS', 'EC2', 'Cloudinary', 'Vercel', 'PWA'],
      data: {
        start: '2023-01-30',
        end: '2023-02-28',
      },
    },
    {
      title: '주식투자 BackOffice : 원티드 프론트엔드 교육과정에서 협업해 만든 관리자 페이지',
      live: null,
      gitHub: 'https://github.com/wanted-fe-6/pre-onboarding-assignment-week-4-1-team-1',
      image: '/imgs/아바타.jpg',
      stack: ['React', 'mui', 'emotion', 'eslint', 'prettier', 'husky'],
      data: {
        start: '2022-09-16',
        end: '2022-09-15',
      },
    },
  ],
};
