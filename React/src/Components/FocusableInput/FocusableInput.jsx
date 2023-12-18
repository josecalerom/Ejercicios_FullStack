import { useEffect, useRef } from "react"

export function FocusableInput() {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current?.focus()
      }, [])

    return (
        <input  ref={inputRef} type="text" />
    )
}