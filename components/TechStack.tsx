import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCard';
import {
  techStackListFirst,
  techStackListSecond,
  techStackListThird,
} from '@/data';

const TechStack = () => {
  return (
    <div className="py-20">
      <h1 className="heading mb-10">
        My current stack of <span className="text-purple">Innovation</span>
      </h1>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards
          items={techStackListFirst}
          direction="right"
          speed="slow"
          pauseOnHover={true}
        />
      </div>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards
          items={techStackListSecond}
          direction="left"
          speed="slow"
          pauseOnHover={true}
        />
      </div>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards
          items={techStackListThird}
          direction="right"
          speed="slow"
          pauseOnHover={true}
        />
      </div>
    </div>
  );
};

export default TechStack;
