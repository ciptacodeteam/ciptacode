import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";

type Props = {
  clickable?: boolean;
};

const BrandLogo = ({ clickable }: Props) => {
  return (
    <>
      {clickable ? (
        <Link href={"/"} className="flex-center w-fit">
          <Image
            src={Logo}
            width={120}
            height={120}
            objectFit="contain"
            alt="Ciptacode Logo"
          />
        </Link>
      ) : (
        <Image
          src={Logo}
          width={120}
          height={120}
          objectFit="contain"
          alt="Ciptacode Logo"
        />
      )}
    </>
  );
};
export default BrandLogo;
