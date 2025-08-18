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
            alt="Ciptacode Logo"
            className="object-contain"
          />
        </Link>
      ) : (
        <Image
          src={Logo}
          width={120}
          height={120}
          alt="Ciptacode Logo"
          className="object-contain"
        />
      )}
    </>
  );
};
export default BrandLogo;
