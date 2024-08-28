export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Blogs', link: '/blogs' },
  { name: 'Contact', link: '#contact' },
];

export const myInfo = {
  name: 'Phong Duong',
  title: 'Software Engineer',
  email: 'duonghongphongdp@gmail.com',
};

export const gridItems = [
  {
    id: 1,
    title: 'Tailoring development strategies for optimal your success',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'An engineer with a focus on crafting impactful solutions',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Partnering with you from Concept to Completion',
    description: 'How I work',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: "Let's build something amazing together",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Nam Viet Store',
    des: 'A dynamic platform designed to help users advertise their mechanical equipment and attract potential clients through strategic Search Engine Optimization (SEO) techniques.',
    img: '/namviet-project.png',
    iconLists: [
      'next.svg',
      '/react.svg',
      '/tailwindcss.svg',
      '/ts.svg',
      'vite.svg',
    ],
    link: 'https://github.com/its-rav/namvietstore-fe',
  },

  {
    id: 2,
    title: 'React Weather Application',
    des: 'Check the weather around you and all over the world at a glance. Rely on the accurate weather forecast and adjust your schedule to the weather coming in.',
    img: '/weather-project.png',
    iconLists: ['/react.svg', '/tailwindcss.svg', '/ts.svg'],
    link: 'https://github.com/phongduong-dp/weather-app',
  },
  {
    id: 3,
    title: 'Space X Clone Website',
    des: 'HTML/CSS/JS SpaceX website clone project. It is not the entire website, but the homepage, a few inner pages with the CSS animations, mobile menu and the JavaScript countdown effect.',
    img: '/spaceX-project.png',
    iconLists: ['/html.svg', '/css.svg', '/javascript.svg'],
    link: 'https://github.com/phongduong-dp/spacex-clone',
  },
  {
    id: 4,
    title: 'Construction Management Revit Plug-in',
    des: 'A plug-in using C# implemented Revit API that connects Revit BIM model with MS Project to update construction schedule and concrete quantity in real-time.',
    img: '/revit-project.png',
    iconLists: ['c_sharp.svg', 'dotnet.svg', 'visualstudio.svg'],
    link: 'https://www.youtube.com/watch?v=Lc-XQVOkZk8',
  },
];

export const techStackListFirst = [
  {
    icon: '/next.svg',
    name: 'nextjs',
  },
  {
    icon: '/tailwindcss.svg',
    name: 'tailwindcss',
  },
  {
    icon: '/git.svg',
    name: 'github',
  },
  {
    icon: '/react.svg',
    name: 'react',
  },
  {
    icon: '/dotnet.svg',
    name: 'dotnet',
  },
  {
    icon: '/linux.svg',
    name: 'linux',
  },
  {
    icon: '/vite.svg',
    name: 'vite',
  },
];

export const techStackListSecond = [
  {
    icon: '/ts.svg',
    name: 'typescript',
  },
  {
    icon: '/python.svg',
    name: 'python',
  },
  {
    icon: '/c_sharp.svg',
    name: 'c_sharp',
  },
  {
    icon: '/javascript.svg',
    name: 'javascript',
  },
  {
    icon: '/css.svg',
    name: 'css',
  },
  {
    icon: '/html.svg',
    name: 'htmnl',
  },
];

export const techStackListThird = [
  {
    icon: '/slack.svg',
    name: 'slack',
  },
  {
    icon: '/vscode.svg',
    name: 'vscode',
  },
  {
    icon: '/visualstudio.svg',
    name: 'visualstudio',
  },
  {
    icon: '/rider.svg',
    name: 'rider',
  },
  {
    icon: '/resharper.svg',
    name: 'resharper',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Application Developer',
    desc: 'Developed and maintained applications, created automation tools, and built custom plugins using C# .NET, ensuring seamless integration with existing systems.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
  {
    id: 2,
    title: 'Frontend Engineer Intern',
    desc: 'Assisted in the development of a web-based platform using ReactJS and NextJS, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    name: 'GitHub',
    img: '/git.svg',
    url: 'https://github.com/phongduong-dp',
  },
  {
    id: 2,
    name: 'Twitter',
    img: '/twit.svg',
    url: 'https://x.com/DngHngPhong2',
  },
  {
    id: 3,
    name: 'LinkedIn',
    img: '/link.svg',
    url: 'https://www.linkedin.com/in/phong-duong-hong-3557a8190/',
  },
];

export const techStackLeft = ['React.JS', 'Next.JS', '.NET'];
export const techStackRight = ['TypeScript', 'C#', 'Python'];
