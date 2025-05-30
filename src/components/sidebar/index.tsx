"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useGenresContext } from "@/context/genrescontext";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const { genreList } = useGenresContext();
  const pathname = usePathname();
  let isTransparent = !isOpen && pathname.startsWith("/movie/");

  return (
    <>
      <button
        className={`${styles.sidebarButton} ${isOpen && styles.open} ${
          isTransparent && styles.transparent
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        &nbsp; Movie Lists &nbsp;
      </button>
      <div className={`${styles.sidebar} ${!isOpen && styles.hiddenSidebar}`}>
        {genreList.map((genre) => {
          let href = `/movies/genre/${genre.id}`;
          return (
            <Link
              className={`${pathname === href && styles.active}`}
              key={genre.id}
              href={href}
            >
              {genre.name}
            </Link>
          );
        })}
        <Link className={`${pathname === "/" && styles.active}`} href="/">
          <span className={styles.default}>Home Page</span> 
          <span className={styles.alternative}>Now Playing</span>
        </Link>
      </div>
    </>
  );
}
