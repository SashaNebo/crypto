import { useState, useEffect } from "react"

export const useDropdown = (dropdownRef: React.RefObject<HTMLDivElement>) => {
  const [isOpen, setIsOpen] = useState(false)

  const close = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(() => false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", close)
    } else {
      window.removeEventListener("click", close)
    }

    return () => window.removeEventListener("click", close)
  }, [isOpen])

  return { isOpen, setIsOpen }
}
