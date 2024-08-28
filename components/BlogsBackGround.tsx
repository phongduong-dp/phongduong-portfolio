'use client';
import React from 'react';
import { BoxesCore } from '@/components/ui/BackGroundBoxes';
import MagicButton from '@/components/ui/MagicButton';
import { FaHome } from 'react-icons/fa';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

export function BackgroundBoxes() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-900">
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-slate-900 [mask-image:radial-gradient(transparent,white)]" />

      <BoxesCore />
      <TextGenerateEffect
        words="Coming Soon"
        className="text-center text-[40px] md:text-5xl lg:text-6xl"
      />
      <p className="relative z-20 mt-2 text-center text-neutral-300">
        Sharing insights and expert tips on technology and engineering to
        enhance your understanding and approach to modern challenges.
      </p>
      <MagicButton
        title="Back to Home"
        position="right"
        icon={<FaHome />}
        handleClick={() => {
          window.location.href = '/';
        }}
      />
    </div>
  );
}
