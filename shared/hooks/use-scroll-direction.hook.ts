import { useEffect, useState } from 'react'
export enum ScrollDirection {
  Up = 'up',
  Down = 'down',
  None = 'None',
  Not_set = 'Not_set',
}
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(
    ScrollDirection.None
  )

  useEffect(() => {
    let lastScrollY = window.scrollY
    let lastWheelTimestamp = 0
    const handleScroll = () => {
      const currentTimestamp = Date.now()
      const currentScrollY = window.scrollY

      if (currentTimestamp - lastWheelTimestamp >= 3000) {
        lastWheelTimestamp = currentTimestamp
        if (currentScrollY > lastScrollY) {
          setScrollDirection(ScrollDirection.Down)
        } else if (currentScrollY < lastScrollY) {
          setScrollDirection(ScrollDirection.Up)
        }
      }

      lastScrollY = currentScrollY
    }

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll)

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollDirection
}

export default useScrollDirection
