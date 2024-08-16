import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    <footer className="mg-[100px] w-full pb-10 md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to transform{' '}
          <span className="text-purple">your challenges</span> into Solutions ?!
        </h1>
        <p className="my-5 text-center text-white-100 md:mt-10">
          Let&apos;s collaborate to bring your ideas to life. Connect with us
          and take the first step toward innovative solutions that make a
          difference.
        </p>
        <a href="mailto:duonghongphong.dp@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-small font-light md:text-base md:font-normal">
          Copyright © 2024 Phong Duong
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((item) => (
            <div
              key={item.id}
              className="mt-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 saturate-150 backdrop-blur-lg backdrop-filter"
            >
              <img src={item.img} alt={item.id} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
