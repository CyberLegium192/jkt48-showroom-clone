import React from 'react'

export const Loading = () => {
    return (
        <div className='space-x-2 flex justify-center items-center h-96 w-full '>
            <span className='sr-only'>Loading...</span>
            <div className='h-5 w-5 bg-red-500  rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-5 w-5 bg-red-500  rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-5 w-5 bg-red-500  rounded-full animate-bounce'></div>
        </div>
    )
}
