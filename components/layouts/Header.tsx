import Image from "next/image";

import { Icons } from "@/constants";
import Button from "../common/Button";
const Header = () => {
  return (
    <div>
      <div className="pt-2 bg-[#34967C] w-full h-[92px] flex justify-center items-center gap-4 relative z-0">
        <Image
          src={Icons.CaseMinimalistic}
          alt="Case Minimalistic Logo"
          width={24}
          height={24}
        />
        <p className="text-base text-white font-medium">
          Overseas trip? Get the latest information on travel guides
        </p>
        <Button title="More Info" ContainerStyles=" cursor-pointer" />
      </div>
      <header>
        {/* <Logo />
        <Search />
        <Button /> */}
      </header>
    </div>
  );
};

export default Header;
