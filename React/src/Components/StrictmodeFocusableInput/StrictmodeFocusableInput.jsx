import { useEffect, useRef } from "react";

export function StrictmodeFocusableInput() {

    const mountedRef = useRef(false)

  useEffect(() => {
    if(!mountedRef.current){
      mountedRef.current = true
      console.log("Mounting for the first time")
    }else{
      console.log("Mounting updated")
    }
  }, [])

    return (
        <>
        <p>This is the content of the component</p>
        </>
    )
}