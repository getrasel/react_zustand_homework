import React from 'react'

export default function NoteText({typetext}) {
  return (
    <div className='flex-1 flex'>
        <textarea className='p-5 text-lg w-full focus-visible:outline-0 resize-none'>{typetext}</textarea>
    </div>
  )
}
