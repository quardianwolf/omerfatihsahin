import Link from 'next/link';
import React from 'react'

const Banner = ({name, slug}) => {
  
  return (
    <div id="Subheader">
    <div className="container">
      <div className="row">
        <Link href={`${slug.current}`}>
        <h1 className="title" >{name}</h1> 
        </Link>
        </div>
      
    </div>
  </div>
  )
}

export default Banner