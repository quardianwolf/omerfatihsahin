import Link from 'next/link'
import React from 'react'

const Intro = ({name, slug}) => {
  return (
    <div id="Intro" className=" full-screen introSec" >
			<div className="intro-inner">
            <Link href={`${slug.current}`}>
				<h1 className="intro-title">{name}</h1>
            </Link>
			</div>
			<div className="intro-next"> <i className="icon-down-open-big"></i> </div>
		</div>
  )
}

export default Intro