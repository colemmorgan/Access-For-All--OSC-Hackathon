import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../components/Card';

export default function Sites({sites}) {

    console.log(sites)
    
  return (
    <div>
        <div className="max-w-[80%] mx-auto mt-12">
            <h4 className='text-center text-4xl mb-12'>All UF Sites:</h4>
            <ul className='flex justify-center flex-wrap gap-x-6'>
                {sites.map((site) => <Card key={site.title} site={site}/>)}
            </ul>
        </div>
    </div>
  )
}
