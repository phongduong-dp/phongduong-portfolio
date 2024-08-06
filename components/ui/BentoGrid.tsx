import { cn } from '@/lib/utils';
import React from 'react';
import { BackgroundGradientAnimation } from './GradientBg';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'md:grid-row-7 mx-auto grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-5 lg:gap-8',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        'group/bento relative row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border border-transparent bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
        className
      )}
      style={{
        background: 'rgb(2,9,36)',
        backgroundColor:
          'linear-gradient(90deg, rgba(3,8,29,1) 0%, rgba(22,10,125,1) 70%, rgba(242,237,237,1) 100%)',
      }}
    >
      <div className={`${id === 6 && 'flex h-full justify-center'}`}>
        <div className="absolute h-full w-full">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
        <div
          className={`absolute -bottom-5 right-0 ${id === 5 && 'w-full opacity-80'}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center font-bold text-white"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            'min-h-50 relative flex flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10'
          )}
        >
          <div className="z-10 font-sans font-extralight text-[#c1c2d3] dark:text-neutral-300 md:text-xs lg:text-base">
            {description}
          </div>
          <div className="z-10 max-w-96 font-sans text-lg font-bold text-neutral-600 dark:text-neutral-200 lg:text-3xl">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};
