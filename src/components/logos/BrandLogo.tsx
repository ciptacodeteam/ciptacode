import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";

type Props = {
  clickable?: boolean;
};

const BrandLogo = ({ clickable }: Props) => {
  return (
    <div className="flex-center h-auto w-32">
      {clickable ? (
        <Link href={"/"} className="flex-center w-fit">
          <Image
            src={Logo}
            width={120}
            height={120}
            priority
            alt="Ciptacode Logo"
            className="h-full w-full object-contain"
          />
        </Link>
      ) : (
        <Image
          src={Logo}
          width={120}
          height={120}
          priority
          alt="Ciptacode Logo"
          className="h-full w-full object-contain"
        />
      )}
    </div>
  );
};
export default BrandLogo;
