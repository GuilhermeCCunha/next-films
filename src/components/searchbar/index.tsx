"use client"
import { useState } from 'react';
import { useRouter } from "next/navigation";
import styles from './styles.module.scss';
import { useSearchParams } from 'next/navigation'

export default function SearchBar() {
  const navigate = useRouter()
  const router = useRouter();
  const searchParams = useSearchParams()
  const search = searchParams.get('name')
  const [inputVal, setInputVal] = useState<string>(search || "")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value)
  }

  const clearInput = () => {
    setInputVal('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let isValid: boolean = !!inputVal.trim()
    if (isValid) {
      router.refresh();
      navigate.push(`/movies/search?name=${inputVal}`)
    }
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
        {inputVal &&
          <button
            onKeyDown={clearInput}
            onMouseDown={clearInput}
          >
            <img src="/close-icon.svg" alt="close-icon" />
          </button>
        }
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}
