"use client"
import { useState } from 'react'
import { useRouter } from "next/navigation"
import styles from './styles.module.scss';

export default function SearchBar() {
  const navigate = useRouter()
  const [inputVal, setInputVal] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    navigate.push(`/movies/search?name=${inputVal}`)

    setInputVal('')
  }

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.searchForm}
          type='text'
          placeholder='Search for movies'
          value={inputVal}
          onChange={handleChange}
          onKeyDown={(e) => e.stopPropagation()}
          onKeyUp={(e) => e.stopPropagation()}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}
