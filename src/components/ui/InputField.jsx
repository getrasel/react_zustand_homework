import React from 'react'

export default function InputField({ label = "Full Name", type = "text", placeholder = "Enter your full name" }) {
  return (
    <div>
        <label className="block">{label}</label>
        <input 
            type={type} 
            placeholder={placeholder}
            className="block border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-2" 
        />
    </div>
  )
}
