import React, { useEffect } from 'react'

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.classList.add('custom-cursor')
    document.body.appendChild(cursor)

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    })

    return () => {
      document.body.removeChild(cursor)
    }
  }, [])

  return null
}

export default CustomCursor
