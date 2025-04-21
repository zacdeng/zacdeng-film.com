import { useState, useLayoutEffect } from "react";

export default function useDevice(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);

    const updateDevice = () => setIsMobile(mq.matches);

    updateDevice(); // Initial check
    mq.addEventListener("change", updateDevice);

    return () => mq.removeEventListener("change", updateDevice);
  }, [breakpoint]);

  return isMobile;
}