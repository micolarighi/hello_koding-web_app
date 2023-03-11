import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const AdjacentPostCard = ({ post, position }) => (
  <>
    <div className="flex flex-col rounded-lg absolute items-center justify-center w-full h-full">
      <p className="text-white font-semibold text-xl text-center">{post.title}</p>
    </div>
    <Link href={`/post/${post.slug}`}><span className="z-10 cursor-pointer absolute w-full h-24" /></Link>
    {position === 'LEFT' && (
      <div className="absolute arrow-btn bottom-5 text-center py-3 cursor-pointer bg-blue-500 left-4 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </div>
    )}
    {position === 'RIGHT' && (
      <div className="absolute arrow-btn bottom-5 text-center py-3 cursor-pointer bg-blue-500 right-4 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    )}
  </>
);

export default AdjacentPostCard;
