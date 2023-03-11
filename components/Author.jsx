import React from 'react';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-blue-500">
    <div className=" left-0 right-0 -top-14">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={author.name}
        height="100"
        width="100"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="text-white mt-4 text-4xl font-bold">{author.name}</h3>
    <p className="text-white text-ls">{author.bio}</p>
  </div>
);

export default Author;
