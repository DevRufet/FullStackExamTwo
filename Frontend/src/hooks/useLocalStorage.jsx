import React, { useEffect, useState } from 'react'

function useLocalStorage(key,initial) {
    const [local, setlocal] = useState(localStorage.getItem(key)? JSON.parse(localStorage.getItem(key)):initial)
    useEffect(() => {
    localStorage.setItem(key,JSON.stringify(local))
    }, [key,initial])
    
  return [local,setlocal]
}

export default useLocalStorage