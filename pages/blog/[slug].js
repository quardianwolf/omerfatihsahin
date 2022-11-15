import { IntroBlog } from '../../structure';

import Image from 'next/image'
import { client, urlFor } from '../../lib/client';

const BlogDetails = ({ blogs, blog, }) => {

  const { image, name, content, _id, slug } = blog;

  return (
    <>
      <IntroBlog key={_id} name={name} slug={slug} />
      <div id="Content">
        <div className="content_wrapper clearfix medyacon">
          <div className="sections_group">
            <div id="post-947" className="post-947 post  format-standard has-post-thumbnail  category-priest">
              <div className="post-wrapper-content">
                <div className="entry-content">
                  <div className="section the_content has_content">
                    <div className="section_wrapper">
                      <div className="the_content_wrapper">
                        <h5>{name}</h5>
                        <p>
                          {content.map((con, i) => {
                            return (
                              <div key={i}>
                                {con.children.map((child, i) => {
                                  return (
                                    <div key={i}>
                                      {child.text}
                                    </div>
                                  )
                                })}
                              </div>
                            )
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section section-post-footer">
                  <div className="section_wrapper clearfix">
                    <div className="column one post-pager"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "blog"] {
    slug {
      current
    }
  }
  `;

  const blogs = await client.fetch(query);

  const paths = blogs.map((blog) => ({
    params: {
      slug: blog.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;
  const blogsQuery = '*[_type == "blog"]'

  const blog = await client.fetch(query);
  const blogs = await client.fetch(blogsQuery);



  return {
    props: { blogs, blog }
  }
}

export default BlogDetails