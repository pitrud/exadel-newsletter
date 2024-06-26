"use client"

import { useState } from "react";
import Autocomplete from "./autocomplete";
import Image from "next/image";

export default function HeaderSearch() {
  const [searching, setSearching] = useState(false);
  const toggleSearching = () => setSearching(!searching);

  return searching ? (
    <Autocomplete />
  ) : (
    <button className="relative h-3 md:h-4 w-4" onClick={toggleSearching}>
      <Image src="/icon-loupe.svg" fill alt="" />
    </button>
  );
}
