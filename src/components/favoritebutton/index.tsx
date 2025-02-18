"use client"
import { removeMovie, addMovie, verifyMovie } from "@/utils/helpers";
import { useEffect, useState } from "react";

export default function FavoriteButton(props: { id: string }) {
  const [hasMovie, setHasMovie] = useState<boolean | null>(null)

  useEffect(() => {
    setHasMovie(verifyMovie(props.id))
  }, [])

  if (hasMovie === null) return null

  return (
    <>
      {hasMovie ?
        <button onClick={() => {
          removeMovie(props.id);
          setHasMovie(false);
        }}>
          Remove from Favorites
        </button> :
        <button onClick={() => {
          addMovie(props.id);
          setHasMovie(true);
        }}>
          Add to Favorites
        </button>
      }
    </>
  )
}
