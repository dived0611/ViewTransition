import { Link, useParams } from 'react-router-dom';
import { images } from './Home';
import React from 'react'

export default function ImageDetails() {
  const { id } = useParams();
  const index = Number(id);

  return (
    <div className="image-detail" >
      <Link to="/">
        Back
      </Link>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img alt="" width={600} src={images[index]} />

      </div>
    </div>
  );
}
