import { Link } from 'react-router-dom';

export const images = [
  "../public/conseltation.png"  
  // ... more images ...
];
import React from 'react'

export default function Home() {
  return (
    <div className="image-list">
      <h1>Image List</h1>
      <div>
        {images.map((src, idx) => (
          <Link
          
            key={src}
            to={`/image/${idx}`}
            // viewTransition is not supported in React out of the box yet
          >
            <p>Image Number {idx}</p>
            <img alt="" width={400} className=" contain-layout w-[400px] " src={src} />
          </Link>
        ))}
      </div>
    </div>
  );
}
