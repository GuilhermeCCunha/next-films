"use client"
import { useState } from 'react'
import { useRouter } from "next/navigation"

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          
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
