import { Image } from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col h-auto sm:flex-row m-5 items-center justify-between">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem Icon={HomeIcon} title="HOME" />
        <HeaderItem Icon={LightningBoltIcon} title="TRENDING" />
        <HeaderItem Icon={BadgeCheckIcon} title="VERIFIED" />
        <HeaderItem Icon={CollectionIcon} title="COLLECTIONS" />
        <HeaderItem Icon={SearchIcon} title="SEARCH" />
        <HeaderItem Icon={UserIcon} title="ACCOUNT" />
      </div>
      <img src="hulu-white.png" width={200} height={100} />
    </header>
  );
}

export default Header;
