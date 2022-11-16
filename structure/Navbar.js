import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div id="Header_wrapper">
            <header id="Header">
                <div id="Top_bar">
                    <div className="container">
                        <div className="column one">
                            <div className="top_bar_left clearfix">
                                <div className="logo">
                                    <Link id="logo" href="/" title="Dr. Kubra Esen" data-height="132" data-padding="40">
                                        <img className="logo-main scale-with-grid" src="/assets/images/logoomer1.png" data-retina="/assets/images/logoomer1.png" data-height="132" alt="church3" />
                                        <img className="logo-sticky scale-with-grid" src="/assets/images/logoomer1.png" data-retina="/assets/images/logoomer1.png" data-height="132" alt="church3" />
                                        <img className="logo-mobile scale-with-grid" src="/assets/images/logoomer1.png" data-retina="/assets/images/logoomer1.png" data-height="132" alt="church3" />
                                        <img className="logo-mobile-sticky scale-with-grid" src="/assets/images/logoomer1.png" data-retina="/assets/images/logoomer1.png" data-height="132" alt="church3" />
                                    </Link>
                                </div>
                                <div className="menu_wrapper">
                                    <div className="orb-menu-frame">
                                        <nav id="menu">
                                            <ul id="menu-main-menu-left" className="menu menu-main menu_left">
                                                <li> <a href="/"><span>ANASAYFA</span></a> </li>
                                                <li> <a href="/hakkimizda"><span>HAKKIMIZDA</span></a> </li>
                                                <li> <a href="/tedaviler"><span>TEDAVİLER</span></a> </li>
                                            </ul>
                                            <ul id="menu-main-menu-right" className="menu menu-main menu_right">
                                                <li> <a href="/blog"><span>BLOG</span></a> </li>
                                                <li> <a href="/iletisim"><span>İLETİŞİM</span></a> </li>
                                            </ul>
                                        </nav><a className="responsive-menu-toggle" href="#"><i className="icon-menu-fine"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Navbar