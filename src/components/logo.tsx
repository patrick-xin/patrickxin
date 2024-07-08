import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="inline-block">
      <Image alt="logo-image" src="/logo.svg" height={32} width={32} />
    </Link>
  );
}

export default Logo;
