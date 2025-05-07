'use client';
import { useEffect, useMemo } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = useMemo(() => words.split(' '), [words]);

  useEffect(() => {
    const animation = async () => {
      await animate(
        'span',
        {
          opacity: 1,
          filter: filter ? 'blur(0px)' : 'none',
        },
        {
          duration: duration,
          delay: stagger(0.1),
        }
      );
    };
    animation();
  }, [animate, duration, filter]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="flex flex-wrap justify-center">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={`${idx >= 3 ? 'text-purple' : 'text-black dark:text-white'} mx-1 opacity-0`}
            style={{
              filter: filter ? 'blur(10px)' : 'none',
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn('font-bold', className)}>
      <div className="my-4">
        <div className="leading-snug tracking-wide text-black dark:text-white">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
