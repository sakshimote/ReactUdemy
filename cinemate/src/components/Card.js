import React from 'react'
import {Link} from 'react-router-dom'


export const Card = ({movie}) => {

    const {id,original_title,overview,poster_path}=movie;
  
    const image="https://picsum.photos/200/300";

  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
    <Link to={`/movie/${id}`}>
        <img class="rounded-t-lg" src={image} alt="" />
    </Link>
    <div class="p-5">
        <Link to={`/movie/${id}`}>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
        {/* <Link href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link> */}
    </div>
</div>

  )
}
