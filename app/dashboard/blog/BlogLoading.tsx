import React from 'react'

const a: number[] = [1, 2, 3, 4]
export default function BlogLoading() {
  return (
    <div className='w-full flex flex-wrap justify-between gap-5 '>
        {a.map((i) => (
            <div key={i} className='w-72 shadow-lg bg-white rounded-xl flex overflow-hidden'>
                <div className='h-full flex-[.5] loading'></div>
                <div className='h-full flex-1 flex flex-col justify-center p-4 gap-2'>
                    <div className='h-4 loading rounded w-2/4'></div>
                    <div className='h-4 loading rounded w-3/4'></div>
                    <div className='h-4 loading rounded w-3/4'></div>
                </div>
            </div>
        ))}
    </div>
  )
}
