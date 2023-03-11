import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { relative } from 'path';

const PostCard = ({ post }) => (
        <Link href={`/post/${post.slug}`}>
  <div className='bg-white shadow-md p-3 rounded lg:col-span-1 mt-5 mx-3 col-span-1 cursor-pointer'>
      <div className="relative overflow-hidden shadow-md mb-4">
        {/* <img src={post.featuredImage.url} className="object-top  h-100 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" /> */}
      </div>
      <h1 className="transition duration-700 text-center mb-2 cursor-pointer hover:text-blue-700 text-2xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block text-center items-center justify-center mb-4 w-full">
        <div className="flex items-center justify-center mb-4 lg:w-full lg:mb-0 w-full mr-8 items-center">
        </div>
        <div className="font-medium text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
        </div>
      </div>
      <p className="text-center text-sm text-gray-700 font-normal px-4 mb-4">
        {post.excerpt}
      </p>
         
    </div>
        </Link>
);

export default PostCard;
