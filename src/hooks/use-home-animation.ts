import {
  AnimationPlaybackControls,
  animate,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function useHomeAnimation() {
  const welcomeText = 'WELCOME';
  const subText = 'Cybersecurity Enthusiast';

  const welcomeCount = useMotionValue(0);
  const subCount = useMotionValue(0);

  const welcomeRounded = useTransform(welcomeCount, (latest) =>
    Math.round(latest),
  );
  const subRounded = useTransform(subCount, (latest) => Math.round(latest));

  const displayWelcome = useTransform(welcomeRounded, (latest) =>
    welcomeText.slice(0, latest),
  );
  const displaySub = useTransform(subRounded, (latest) =>
    subText.slice(0, latest),
  );

  const [isWelcomeDone, setIsWelcomeDone] = useState(false);
  const [isSubStarted, setIsSubStarted] = useState(false);
  const [isSubDone, setIsSubDone] = useState(false);
  const [dotCount, setDotCount] = useState(0);

  const welcomeControls = useRef<AnimationPlaybackControls | null>(null);
  const subControls = useRef<AnimationPlaybackControls | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4);
    }, 500);
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    welcomeControls.current = animate(welcomeCount, welcomeText.length, {
      type: 'tween',
      duration: 1.5,
      ease: 'easeInOut',
      onComplete: () => {
        setIsWelcomeDone(true);
        timeoutRef.current = setTimeout(() => {
          setIsSubStarted(true);
        }, 500);
      },
    });

    return () => {
      welcomeControls.current?.stop();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [welcomeCount, welcomeText.length]);

  useEffect(() => {
    if (isSubStarted && !isSubDone) {
      subControls.current = animate(subCount, subText.length, {
        type: 'tween',
        duration: 1.5,
        ease: 'easeInOut',
        onComplete: () => {
          setIsSubDone(true);
        },
      });
      return () => subControls.current?.stop();
    }
  }, [isSubStarted, isSubDone, subCount, subText.length]);

  const skipAnimation = () => {
    if (isSubDone) return;
    welcomeControls.current?.stop();
    subControls.current?.stop();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    welcomeCount.set(welcomeText.length);
    subCount.set(subText.length);
    setIsWelcomeDone(true);
    setIsSubStarted(true);
    setIsSubDone(true);
  };

  return {
    displayWelcome,
    displaySub,
    isWelcomeDone,
    isSubStarted,
    isSubDone,
    dotCount,
    skipAnimation,
  };
}
