import Hero from '@/components/Hero';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const navItems = [
  { name: 'Home', link: '/', icon: <FaHome /> },
  { name: 'About', link: '/about', icon: <FaUser /> },
  { name: 'Projects', link: '/projects', icon: <FaProjectDiagram /> },
  { name: 'Contact', link: '/contact', icon: <FaEnvelope /> },
];

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
    </main>
  );
}
