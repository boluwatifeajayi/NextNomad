'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    // <Image
    //   onClick={() => router.push('/')}
    //   className="hidden md:block cursor-pointer" 
    //   src="/images/logo.png" 
    //   height="100" 
    //   width="100" 
    //   alt="Logo" 
    // />
    <h3 className="text-green-500 text-xl font-bold">NextNomad</h3>
   );
}
 
export default Logo;
