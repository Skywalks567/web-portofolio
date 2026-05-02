import { animate, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const welcomeControls = animate(welcomeCount, welcomeText.length, {
      type: 'tween',
      duration: 1.5,
      ease: 'easeInOut',
      onComplete: () => {
        setIsWelcomeDone(true);
        setTimeout(() => {
          setIsSubStarted(true);
        }, 500);
      },
    });

    return () => welcomeControls.stop();
  }, [welcomeCount, welcomeText.length]);

  useEffect(() => {
    if (isSubStarted) {
      const subControls = animate(subCount, subText.length, {
        type: 'tween',
        duration: 1.5,
        ease: 'easeInOut',
        onComplete: () => {
          setIsSubDone(true);
        },
      });
      return () => subControls.stop();
    }
  }, [isSubStarted, subCount, subText.length]);

  return {
    displayWelcome,
    displaySub,
    isWelcomeDone,
    isSubStarted,
    isSubDone,
    dotCount,
  };
}
