import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
};

const DottedBackground = ({ children }: Props) => {
  return (
    <section className="relative flex w-full items-center justify-center bg-[#F0F4FA] dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:radial-gradient(#d4d4d4_2px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_2px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] dark:bg-black"></div>

      <div className="relative">{children}</div>
    </section>
  );
};
export default DottedBackground;
