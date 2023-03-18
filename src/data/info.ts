type SkillCategory = {
  [key: string]: [string, string][];
};

export interface Info {
  name: string;
  bio: string;
  miniBio: { icon: string; text: string }[];
  socials: { link: string; icon: string; label: string }[];
  skills: SkillCategory;
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
  // portfolio: [],
};
