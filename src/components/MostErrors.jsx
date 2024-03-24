import React from 'react'


export default function MostErrors() {
  return (
    <ul className='relative flex'>
        <Card/>
        <Card/>
        <Card/>
    </ul>
  )
}



function Card(){
  return (
      <div className='max-w-4xl'></div>
  );
}