import Image from "next/image";
import ufscarimage from "@/public/ufscarlogo.png";
export default function Header() {
  return (
    <div>
      <header className="bg-[#1a3d6d] p-2">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Image src={ufscarimage} alt="UFSCAR" width={70} height={70} />
            <h1 className="ml-2 text-2xl font-bold text-white">
              SIGA - UFSCAR
            </h1>
          </div>
        </div>
      </header>
    </div>
  );
}
