import Head from 'next/head'
import Image from 'next/image'



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper";

import { client, urlFor } from '../lib/client';
import Link from 'next/link';



export default function Home({ tedavilers, sliderData, hakkimdaData, blogData }) {
  return (
    <div id='content'>
      <section id='heroSection'>

        <div id="hero" className="section">

          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
          >
            {sliderData.map((slider, index) => {
              const { image, name_1, name_2, name_3, desc, button_text, button_link } = slider
              return (
                <SwiperSlide key={index} data-background={urlFor(image && image[0])} style={{ zIndex: "999" }}>
                  <img src={urlFor(image && image[0])} />
                  <div className='sliderBox2'>
                    <h2> {name_1} <br /> {name_2} <br /> {name_3} </h2>
                    <h5 id="slider-1-slide-1-layer-3" class="sliderAciklama" style={{ zIndex: "9" }, { fontFamily: "Roboto" }, { color: "white" }}>{desc}</h5>
                    <a id="slider-1-slide-1-layer-4" class="anasayfaButon" href="{button_link}">{button_text}&nbsp;&nbsp;<i class="icon-right-thin"></i> </a>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>



        </div>
      </section >

      <section id='hakkimdaa'>
        <div id="hakkimda" className="section">
          <div className="container">
            <div className="row">
              {hakkimdaData.map((hakkimda, index) => {
                const { image, summary, name } = hakkimda;
                return (
                  <>
                    <div className="col-md-6 kolon1">
                      <div className="image_frame image_item no_link scale-with-grid no_border">
                        <div className="image_wrapper">
                          <img className="scale-with-grid"
                            src={urlFor(image && image[0])}
                            alt="church3-home-pic3" width="780" height="910" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 kolon2" style={{ padding: '70px 3% 0' }}>
                      <h2>
                        {name}
                      </h2>
                      <hr className="no_line noline1" style={{ margin: "0 auto 30px auto" }} />
                      <p style={{ color: "#F5F5F5" }}>
                        {summary}
                      </p>
                      <hr className="no_line noline2" style={{ margin: "0 auto 50px auto" }} />
                      <ul className="list_custom" style={{ color: "#F5F5F5;" }}>
                        <li>

                        </li>
                      </ul>
                      <hr className="no_line noline3" style={{ margin: "0 auto 30px auto" }} />
                      <a className="button has-icon button_right button_size_2" href="hakkimizda" style={{ color: "fff;" }}>
                        <span className="button_label" style={{ color: "white" }}>Daha Fazla</span>
                        <span className="button_icon">  <i className="icon-right-thin" style={{ color: "ffffff!important;" }}></i></span>
                      </a>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </section >

      <section >
        <div id="siyah" className="section">
          <div className="container">



            <div className="row">
              <div className="col-12">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_divider">
                    <hr className="no_line" style={{ margin: "0 auto 80px auto" }} />
                  </div>
                </div>
              </div>

              <div className="col-md-6" style={{ padding: "0 4% 0 0" }}>
                <div className="row">
                  <div className="col-12">
                    <div className="column_attr clearfix mobile_align_center" style={{ padding: "10px 0 0" }}>
                      <h6 style={{ color: "#626974;" }}>Uzman Doktor Ömer Fatih Şahin<span style={{ marginLeft: "30px" }}
                        className="themecolor">⸻</span></h6>
                      <hr className="no_line" style={{ margin: "0 auto 30px auto" }} />
                      <h2>
                        TEDAVİLER
                      </h2>
                      <hr className="no_line" style={{ margin: "0 auto 30px auto" }} />

                    </div>
                  </div>
                  {tedavilers.map((tedavi, index) => {
                    const { image, name } = tedavi;
                    return (
                      <div className="col-md-6 text-center">
                        <a href="">
                          <div className="icon_box icon_position_top no_border">
                            <div className="image_wrapper"><img
                              src={urlFor(image && image[0])}
                              className="scale-with-grid" width="77px" height="80px" /> </div>
                            <hr className="no_line" style={{ margin: "0 auto 20px" }} />
                            <div className="desc_wrapper">
                              <div className="desc">
                                <p style={{ color: "#F5F5F5;" }}>
                                  {name}
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    )
                  })}
                  <div className="col-12">
                    <hr className="no_line" style={{ margin: "0 auto 35px auto" }} />
                  </div>
                  <div className="col-12"> <a className="button has-icon button_right button_size_2" href="/tr/tedaviler"
                    style={{ color: "#fff;" }}><span className="button_label">TÜM TEDAVİLER
                    </span> <span className="button_icon"><i className="icon-right-thin"
                      style={{ color: "#ffffff!important;" }}></i></span></a> </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-12">
                    <div className="image_frame image_item no_link scale-with-grid no_border">
                      <div className="image_wrapper"><img className="scale-with-grid"
                        src="assets/images/omerfatih2.png"
                        alt="church3-home-pic2" width={"780"} height={"845"} /> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div id='haberr' className="section" >
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="placeholder"> &nbsp; </div>
              </div>
              <div className="col-md-8 text-center">
                <h3>HABERLER</h3>
                <h5>VE</h5>
                <hr className="no_line" style={{ margin: "0 auto 39px auto" }} />
                <h2>İLGİNİZİ ÇEKEBİLECEK YAZILAR</h2>
              </div>
              <div className="col-12">
                <hr className="no_line" style={{ margin: "0 auto 40px auto" }} />
              </div>
              <div className="col-12 column_blog">
                      <div className="column_filters">
                        <div className="blog_wrapper isotope_wrapper clearfix">
                       
                   
                          <div className="posts_group lm_wrapper col-3 grid" style={{ maxWidth: "100%" }}>
                          {blogData.map((blog, index) => {
                  const { image, name, summary, slug } = blog;
                  return (
                            <div className="post-item isotope-item clearfix post">
                              <>
                              <Link href={`/blog/${slug.current}`}>
                                <div className="image_frame post-photo-wrapper scale-with-grid image">
                                  <div className="image_wrapper">
                                    <div className="mask"></div><img style={{ width: "1000px", height: "200px" }}
                                      src={urlFor(image && image[0])}
                                      className="scale-with-grid wp-post-image" loading="lazy" />
                                    <div className="image_links double"> <i className="icon-search"></i><i className="icon-link"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="post-desc-wrapper">
                                  <div className="post-desc">
                                    <div className="post-title">
                                      <h4 className="entry-title">
                                        {name}
                                      </h4>
                                    </div>
                                    <div className="post-excerpt">
                                      <p style={{color: "black"}}>{summary}</p>
                                    </div>
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
        </div>
      </section>
    </div >

  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "tedaviler"]';
  const tedavilers = await client.fetch(query);

  const sliderQuery = '*[_type == "slider"]';
  const sliderData = await client.fetch(sliderQuery);

  const hakkimdaQuery = '*[_type == "hakkimda"]';
  const hakkimdaData = await client.fetch(hakkimdaQuery);

  const blogQuery = '*[_type == "blog"]';
  const blogData = await client.fetch(blogQuery);

  return {
    props: { tedavilers, sliderData, hakkimdaData, blogData }
  }
}