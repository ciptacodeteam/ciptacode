import { useMotionValue, useSpring, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

const AnimatedNumber = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0" + suffix);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest) + suffix);
    });
    return () => unsubscribe();
  }, [springValue, suffix]);

  return <span ref={ref}>{displayValue}</span>;
};
export default AnimatedNumber;
