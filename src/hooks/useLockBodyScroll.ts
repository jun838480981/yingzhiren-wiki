import { useEffect } from 'react';

let lockCount = 0;

/** 在弹层 / 抽屉打开时锁定页面滚动，允许多个弹层安全叠加。 */
export function useLockBodyScroll(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;

    lockCount += 1;
    document.body.classList.add('scroll-locked');

    return () => {
      lockCount = Math.max(0, lockCount - 1);
      if (lockCount === 0) {
        document.body.classList.remove('scroll-locked');
      }
    };
  }, [locked]);
}
