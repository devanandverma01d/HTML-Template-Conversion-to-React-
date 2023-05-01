import React from 'react'
import AboutUsComponent from '../compnents/AboutComp'
import WhatWeDoComp from '../compnents/WhatWeDoComp'
import BlogCOmp from '../compnents/BlogCOmp'
import ConsultationComp from '../compnents/ConsultationComp'

const Home = () => {
  return (
    <>
        <div className="header_section">
            <div className="banner_section layout_padding">
            <div className="container-fluid">
                <div id="banner_slider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="banner_taital_main">
                            <h1 className="banner_taital">We Provide Law Practice</h1>
                            <p className="banner_text">Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem</p>
                            <div className="readmore_btn active"><a href="#">Read More</a></div>
                            <div className="started_bt"><a href="#">Contact Us</a></div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="banner_img"><img src="assets/images/banner-img.png" alt = "#"/></div>
                        </div>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="banner_taital_main">
                            <h1 className="banner_taital">We Provide Law Practice</h1>
                            <p className="banner_text">Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem</p>
                            <div className="readmore_btn active"><a href="#">Read More</a></div>
                            <div className="started_bt"><a href="#">Contact Us</a></div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="banner_img"><img src="assets/images/banner-img.png" alt = "#"/></div>
                        </div>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="banner_taital_main">
                            <h1 className="banner_taital">We Provide Law Practice</h1>
                            <p className="banner_text">Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem</p>
                            <div className="readmore_btn active"><a href="#">Read More</a></div>
                            <div className="started_bt"><a href="#">Contact Us</a></div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="banner_img"><img src="assets/images/banner-img.png" alt = "#"/></div>
                        </div>
                    </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#banner_slider" role="button" data-slide="prev">
                    <i className="fa fa-arrow-left" />
                </a>
                <a className="carousel-control-next" href="#banner_slider" role="button" data-slide="next">
                    <i className="fa fa-arrow-right" />
                </a>
                </div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="box_section">
            <div className="online_box">
                <div className="online_box_left">
                <div className="online_box_main">
                    <div className="box_left">
                    <div className="right_arrow"><i className="fa fa-arrow-right" /></div>
                    </div>
                    <div className="box_right">
                    <p className="book_text">Book At</p>
                    <h4 className="appoinment_text">Appoinment</h4>
                    </div>
                </div>
                </div>
                <div className="online_box_left active">
                <div className="online_box_main">
                    <div className="box_left">
                    <div className="right_arrow"><i className="fa fa-arrow-right" /></div>
                    </div>
                    <div className="box_right">
                    <p className="book_text active">Get Free</p>
                    <h4 className="appoinment_text active"> Evalution</h4>
                    </div>
                </div>
                </div>
                <div className="online_box_left">
                <div className="online_box_main">
                    <div className="box_left">
                    <div className="right_arrow"><i className="fa fa-arrow-right" /></div>
                    </div>
                    <div className="box_right">
                    <p className="book_text">Pay Invoice</p>
                    <h4 className="appoinment_text">Online</h4>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <WhatWeDoComp />
        <BlogCOmp />
        <AboutUsComponent />
        <div className="customer_section layout_padding">
            <div className="container">
            <div className="row">
                <div className="col-sm-12">
                <h1 className="customer_taital">SATISFIED CLIENT Says</h1>
                </div>
            </div>
            </div>
            <div id="my_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="customer_section_2">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="box_main">
                            <div className="customer_main">
                            <div className="customer_left">
                                <div className="customer_img"><img src="assets/images/customer-img.png" alt="#" /></div>
                            </div>
                            <div className="customer_right">
                                <h3 className="customer_name">Giolio Mark <span className="quick_icon"><img src="assets/images/quick-icon.png" alt="#" /></span></h3>
                                <p className="enim_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <div className="customer_section_2">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="box_main">
                            <div className="customer_main">
                            <div className="customer_left">
                                <div className="customer_img"><img src="assets/images/customer-img.png" alt="#" /></div>
                            </div>
                            <div className="customer_right">
                                <h3 className="customer_name">DenoMark <span className="quick_icon"><img src="assets/images/quick-icon.png" alt="#" /></span></h3>
                                <p className="enim_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <div className="customer_section_2">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="box_main">
                            <div className="customer_main">
                            <div className="customer_left">
                                <div className="customer_img"><img src="assets/images/customer-img.png" alt="#" /></div>
                            </div>
                            <div className="customer_right">
                                <h3 className="customer_name">DenoMark <span className="quick_icon"><img src="assets/images/quick-icon.png" alt="#" /></span></h3>
                                <p className="enim_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                <i className="fa fa-arrow-left" />
            </a>
            <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                <i className="fa fa-arrow-right" />
            </a>
            </div>
        </div>
        <div className="news_section layout_padding">
            <div className="container">
            <h1 className="news_taital">Recent News</h1>
            <div className="news_section_2">
                <div className="news_box">
                <div id="custom_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="news_img"><img src="assets/images/news-img.png" alt="#" /></div>
                    </div>
                    <div className="carousel-item">
                        <div className="news_img"><img src="assets/images/news-img.png" alt="#" /></div>
                    </div>
                    <div className="carousel-item">
                        <div className="news_img"><img src="assets/images/news-img.png" alt="#" /></div>
                    </div>
                    </div>
                    <a className="carousel-control-next" href="#custom_slider" role="button" data-slide="next">
                    <i className="fa fa-arrow-right" />
                    </a>
                </div>
                <h2 className="does_taital">What Does Marijuana Law Mean for You?</h2>
                <p className="dummy_text">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
            </div>
            </div>
        </div>
        <ConsultationComp />
        <div className="copyright_section">i
            <div className="container">
                <p className="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free Html Templates</a></p>
            </div>
        </div>

    </>
  )
}

export default Home