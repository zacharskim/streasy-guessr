import Link from "next/link";
import Image from "next/image";
import BuildingIcon from "@/app/building.png"; // adjust path if needed

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b">
      <Link href="/" className="flex items-center">
        <Image src={BuildingIcon} alt="Building Icon" width={24} height={24} className="h-6 w-6 mr-2" />
        <span className="font-bold text-lg">RentQuest</span>
      </Link>

      <nav className="flex gap-4 text-sm uppercase">
        <Link href="/leaderboard" className="hover:underline">
          Leaderboard
        </Link>
        <Link href="/privacy" className="hover:underline">
          More Info
        </Link>
      </nav>
    </header>
  );
}
