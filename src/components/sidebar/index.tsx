"use client";
import Link from "next/link";
import { useState } from "react";
import { useGenresContext } from "@/context/genrescontext";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const { genreList } = useGenresContext();

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>&nbsp; Genres &nbsp;</button>
      <div>
        {genreList.map((genre) => {
          let href = `/movies/genre/${genre.id}`;
          return (
            <Link key={genre.id} href={href}>
              {genre.name}
            </Link>
          );
        })}
        <Link href="/">Home</Link>
      </div>
    </>
  );
}
