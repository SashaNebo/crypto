"use client"

import { useState } from "react"

export const Form = () => {
  const [value, setValue] = useState<string>("")
  return (
    <form
      className="flex flex-nowrap mt-12 pl-6 pr-2 py-2 bg-color-bg border border-color-border rounded-[30px]"
      onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        className="w-full min-w-[100px] bg-transparent border-none outline-none placeholder:text-sm placeholder:text-color-text leading-[1.4] placeholder:opacity-50"
        type="email"
        id="email"
        placeholder="Type your Email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        role="button"
        className="ml-4 px-4 py-2 text-sm font-bold leading-[1.4] text-white bg-[#D7D7E5] rounded-[22px] dark:bg-[#352E40]"
        type="submit"
        value="Subscribe"
      />
    </form>
  )
}
