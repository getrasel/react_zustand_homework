import React, { useEffect, useState } from 'react'

export default function NoteText({typetext}) {
  const [text, setText] = useState(typetext)

  useEffect(() => {
    setText(typetext)
  }, [typetext])
  return (
    <div className='flex-1 flex'>
        <textarea 
          className='p-5 text-lg w-full focus-visible:outline-0 resize-none'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
    </div>
  )
}
