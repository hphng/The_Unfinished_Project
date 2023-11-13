import React from 'react'

export default function Bars() {
  return (
      <div>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 16"
          strokeWidth={1}
          stroke="currentColor"
          className="w-4 h-4"
          style={{ width: '24px', height: '24px' }}
      >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.5 4.5h11M2.5 8h11m-11 3h11"
          />
          </svg>
      </div>
  )
}
