import React from 'react'

export const Button = ({onClick, color, text, border, radius, height, width, padding}) => {
  return (
    <div>
        <button 
        onClick={onClick}
        style={{
            backgroundColor: color,
            border,
            borderRadius: radius,
            height,
            width,
            padding
         }}>
        {text}
        </button>
    </div>
  )
}
