import React, { FunctionComponent } from 'react'

const RecoilSVG: FunctionComponent = () => {
  return (
    <>
      <svg fill='none' width='600px' height='600px' viewBox='0 0 450 450'>
        <rect fill='aliceblue' height='95' rx='10' width='90' />
        <circle cx='43.5' cy='18.5' fill='#121212' fill-opacity='1' r='7.5' />
        <circle cx='43.5' cy='81.5' fill='#121212' fill-opacity='1' r='7.5' />
        <g stroke='#121212' stroke-width='3'>
          <path d='M43.999 25C42.5 37 57.5 34 57.5 42.5c0 5-5.878 6.365-13.501 7C37.999 50 30 50 30 58s16 5.5 13.999 17M34.132 33.353c0 15.289 23.15 18.289 23.15 32.62' />
        </g>
      </svg>
    </>
  )
}
export default RecoilSVG
