export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Blog', link: '#blog' },
  { name: 'Contact', link: '#contact' },
];

export const myInfo = {
  name: 'Phong Duong',
  title: 'Software Engineer',
  email: 'duonghongphongdp@gmail.com',
  description:
    'I am a Frontend Developer with a passion for building interactive web applications. I specialize in React.js, Next.js, and TailwindCSS.',
};

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
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
    title: 'Engineering enthusiast with a passion for problem solving.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a JS Animation library',
    description: 'Where am I',
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
    title: '3D Solar System Planets to Explore',
    des: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    img: '/p1.svg',
    iconLists: [
      '/react.svg',
      '/tailwindcss.svg',
      '/ts.svg',
      '/three.svg',
      '/fm.svg',
    ],
    link: 'https://github.com/adrianhajdin?tab=repositories',
  },
  {
    id: 2,
    title: 'Yoom - Video Conferencing App',
    des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    img: '/p2.svg',
    iconLists: [
      '/next.svg',
      '/tailwindcss.svg',
      '/ts.svg',
      '/linux.svg',
      '/c.svg',
    ],
    link: 'https://github.com/adrianhajdin/zoom-clone',
  },
  {
    id: 3,
    title: 'AI Image SaaS - Canva Application',
    des: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
    img: '/p3.svg',
    iconLists: [
      '/react.svg',
      '/tailwindcss.svg',
      '/ts.svg',
      '/three.svg',
      '/c.svg',
    ],
    link: 'https://github.com/adrianhajdin/ai_saas_app',
  },
  {
    id: 4,
    title: 'Animated Apple Iphone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: '/p4.svg',
    iconLists: [
      '/next.svg',
      '/tailwindcss.svg',
      '/ts.svg',
      '/three.svg',
      '/gsap.svg',
    ],
    link: 'https://github.com/adrianhajdin/iphone',
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
    title: 'Frontend Engineer Intern',
    desc: 'Assisted in the development of a web-based platform using ReactJS and NextJS, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Application Developer',
    desc: 'Developed and maintained WPF applications, created automation tools, and built custom plugins using C# .NET, ensuring seamless integration with existing systems.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
  },
  {
    id: 2,
    img: '/twit.svg',
  },
  {
    id: 3,
    img: '/link.svg',
  },
];

export const techStackLeft = ['React.JS', 'Next.JS', 'TailwindCSS'];
export const techStackRight = ['TypeScript', 'C#', 'Python'];
