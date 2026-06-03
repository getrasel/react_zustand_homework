import React from 'react'

export default function Button({type, children, loading = false}) {
  return (
    <div>
        <button 
            type={type}
            className="w-full bg-blue-500 text-white py-2 rounded-md mt-2 cursor-pointer hover:bg-blue-600 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={loading}
        >
            {loading ? "Loading..." : children}
        </button>
    </div>
  )
}
