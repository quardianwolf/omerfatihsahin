import Link from 'next/link'
import React from 'react'
import { client, urlFor } from '../lib/client'

const blog = ({ blogs }) => {
  return (
    <>
      <div id="Subheader">
        <div className="container">
          <div className="row">
            <h1 className="title" >BLOG</h1> </div>
        </div>
      </div>
      <div id="Content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hr className="no_line" style={{ margin: "0 auto 60px" }} /> </div>
            <div className="col-12 column_blog">
              <div className="blog_wrapper isotope_wrapper">
                <div className="posts_group lm_wrapper grid col-3" style={{ maxWidth: "100%" }}>
                  {blogs.map((blog, i) => {
                    const { image, slug, name, summary } = blog
                    return (
                      <div className="post-item isotope-item clearfix author-admin post" key={i}>
                        <>
                          <Link href={`/blog/${slug.current}`}>
                            <div className="image_frame post-photo-wrapper scale-with-grid image">
                              <div className="image_wrapper">

                                <div className="mask"></div><img src={urlFor(image && image[0])} className="tedavi-orta" loading="lazy" />
                              </div>
                            </div>
                            <div className="post-desc-wrapper">
                              <div className="post-desc">
                                <div className="post-title">
                                  <h4 className="entry-title">{name}</h4> </div>
                                <div className="post-excerpt" style={{color: "black"}}> {summary} </div>
                              </div>
                            </div>
                          </Link>
                        </>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "blog"]';
  const blogs = await client.fetch(query);

  return {
    props: { blogs }
  }
}


export default blog