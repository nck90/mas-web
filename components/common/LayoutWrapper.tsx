import React, { ReactNode, useEffect, useRef } from 'react';
import { Header, Footer, FloatingButton } from 'components/common';
import { useRouter } from 'next/router';
import { IntroSection } from 'components/home';
import PATH from 'constants/path';
import smoothscroll from 'smoothscroll-polyfill'; // Safari 에서 smooth 효과 적용

interface LayoutWrapperProps {
  children: ReactNode;
}

function LayoutWrapper({ children }: LayoutWrapperProps) {
  const { asPath } = useRouter();
  const outerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<any>(null);
  const scrollEventRef = useRef(false);

  //@Note 페이지 이동 시에도 항상 스크롤 맨 위 고정
  useEffect(() => {
    smoothscroll.polyfill();
    if (!outerRef.current) return;
    outerRef.current.scrollIntoView({
      behavior: 'auto',
      block: 'start',
      inline: 'nearest',
    });
  }, [asPath]);

  // 랜딩페이지 IntroSection Scroll 이벤트
  useEffect(() => {
    if (asPath === PATH.Home) {
      const outerRefCurrent = outerRef.current;
      if (!outerRefCurrent) return;

      const wheelAnimationHandler = (e: WheelEvent) => {
        e.preventDefault();

        if (!scrollEventRef.current) {
          scrollEventRef.current = true;
          const { deltaY } = e;
          if (deltaY > 0) {
            contentRef.current.scrollIntoView({
              behavior: 'smooth',
            });
          }

          setTimeout(() => {
            outerRefCurrent.removeEventListener('wheel', wheelAnimationHandler);
          }, 1000);
        }
      };

      outerRefCurrent.addEventListener('wheel', wheelAnimationHandler);
      return () =>
        outerRefCurrent.removeEventListener('wheel', wheelAnimationHandler);
    }
  }, [asPath]);

  return (
    <div ref={outerRef}>
      {asPath === PATH.Home && <IntroSection />}
      <Header />
      <div ref={contentRef}>{children}</div>
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default LayoutWrapper;
