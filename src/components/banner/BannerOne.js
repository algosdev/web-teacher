import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollTo } from 'react-scroll';

const BannerOne = () => {
  return (
    <div className="slider-area banner-style-1 bg-image height-940 d-flex align-items-center">
      <div className="container eduvibe-animated-shape">
        <div className="row g-5 row--40 align-items-center">
          <div className="order-2 order-xl-1 col-lg-12 col-xl-6">
            <div className="banner-left-content">
              <div className="inner">
                <div className="content">
                  <span className="pre-title">Zamonaviy soha</span>
                  <h1 className="title">
                    <span>"Kommutatsiya</span> va <span>marshrutizatsiya"</span> fanini birgalikda
                    o'rganamiz
                  </h1>
                  <p className="description">
                    Oz oz📚 o'rganib, dono👨🏻‍🎓 bo'lur, Qatra qatra💦 yig'ilib, daryo🌊 bo'lur!
                    <p>
                      <cite>Alisher Navoiy</cite>
                    </p>
                  </p>
                  <div className="read-more-btn">
                    <Link className="edu-btn" to="/lessons">
                      Darslarni boshlash <i className="icon-arrow-right-line-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 order-xl-2 col-lg-12 col-xl-6 banner-right-content">
            <div className="row g-5">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="edu-card card-type-6 radius-small">
                  <div className="inner">
                    <div className="thumbnail">
                      <Link to="/course-details/2">
                        <img
                          className="w-100"
                          src="images/banner/banner-01/network.jpeg"
                          alt="Course Meta"
                        />
                      </Link>
                      <div className="top-position status-group left-top">
                        <span className="eduvibe-status status-01 bg-primary-color">Internet</span>
                      </div>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <Link to="/course-details/2">Internetning qanday tuzilgan?</Link>
                      </h6>
                      <div className="card-bottom">
                        <p>
                          Tarmoqning asosiy elementlari bo'lgan kommutator va marshrutizatorlar
                          ishlash jarayonlari bilan tanishamiz
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="video-thumbnail eduvibe-hero-one-video">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/images/banner/banner-01/switch.jpeg"
                      alt="Video Images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
          <div className="shape shape-1">
            <img src="/images/shapes/shape-01.png" alt="Shape Thumb" />
          </div>
          <div className="shape shape-2">
            <img src="/images/shapes/shape-02.png" alt="Shape Thumb" />
          </div>
          <div className="shape shape-3">
            <img src="/images/shapes/shape-03.png" alt="Shape Thumb" />
          </div>
          <div className="shape shape-4">
            <img src="/images/shapes/shape-04.png" alt="Shape Thumb" />
          </div>
          <div className="shape shape-5">
            <img src="/images/shapes/shape-05.png" alt="Shape Thumb" />
          </div>
          <div className="shape shape-6">
            <img src="/images/shapes/shape-05-05.png" alt="Shape Thumb" />
          </div>
        </div>

        <div className="shape-round">
          <img src="/images/banner/banner-01/shape-27.png" alt="Shape Images" />
        </div>
      </div>

      <div className="scroll-down-btn">
        <ScrollTo className="round-btn" to="about-us" spy={true} smooth={true} duration={200}>
          <i className="icon-arrow-down-s-line"></i>
        </ScrollTo>
      </div>
    </div>
  );
};
export default BannerOne;
