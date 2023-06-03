import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import Comment from '../blog/Comment';
import PostData from '../../data/blog/PostData.json';
import Editor from '../../components/editor';

const CourseCreate = () => {
  const { id = 1 } = useParams();
  const blogId = parseInt(id, 10);
  const dataItem = PostData.filter(blog => blog.id === blogId);
  const data = dataItem[0];
  return (
    <>
      <SEO title={data.title} />
      <Layout>
        <BreadcrumbOne title={data.title} rootUrl="/" parentUrl="Home" currentUrl="Blog Details" />
        <div className="edu-blog-details-area edu-section-gap bg-color-white">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-10 offset-lg-1">
                <div className="blog-details-1 style-variation3">
                  <div className="content-blog-top">
                    <div className="content-status-top d-flex justify-content-between mb--30 align-items-center">
                      <div className="status-group">
                        <Link
                          className="text-uppercase eduvibe-status status-05 color-primary w-600"
                          to={
                            process.env.PUBLIC_URL +
                            `/category/${slugify(data.categories.slice(0, 1))}`
                          }
                        >
                          {data.categories.slice(0, 1)}
                        </Link>
                      </div>
                      <ul className="blog-meta">
                        <li className="blog-author">
                          <img
                            src="/images/blog/author/author-small/author.png"
                            alt="Blog Images"
                          />{' '}
                          <Link to={process.env.PUBLIC_URL + `/author/${slugify(data.author)}`}>
                            {data.author}
                          </Link>
                        </li>
                        <li>
                          <i className="icon-calendar-2-line"></i>
                          {data.date}
                        </li>
                        <li>
                          <i className="icon-discuss-line"></i>
                          {data.comment}
                        </li>
                        <li>
                          <i className="icon-time-line"></i>
                          {data.readingTime}
                        </li>
                      </ul>
                    </div>

                    <h4 className="title">{data.title}</h4>

                    <div className="thumbnail block-alignwide">
                      <img
                        className="radius-small w-100 mb--30"
                        src={`${process.env.PUBLIC_URL}/images/blog/blog-details-01/${data.image}`}
                        alt="Blog Thumb"
                      />
                    </div>
                  </div>

                  <Editor />

                  <div className="blog-tag-and-share mt--50">
                    {data.tags && data.tags.length > 0 && (
                      <div className="blog-tag">
                        <div className="tag-list bg-shade">
                          {data.tags.map((tag, i) => {
                            return (
                              <Link key={i} to={process.env.PUBLIC_URL + `/tag/${slugify(tag)}`}>
                                {tag}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                    <div className="eduvibe-post-share">
                      <span>Share: </span>
                      <a className="linkedin" href="#">
                        <i className="icon-linkedin"></i>
                      </a>
                      <a className="facebook" href="#">
                        <i className="icon-Fb"></i>
                      </a>
                      <a className="twitter" href="#">
                        <i className="icon-Twitter"></i>
                      </a>
                      <a className="youtube" href="#">
                        <i className="icon-youtube"></i>
                      </a>
                    </div>
                  </div>

                  <div className="blog-author-wrapper">
                    <div className="thumbnail">
                      <img
                        src="/images/blog/author/author-medium/author-02.jpg"
                        alt="Author Images"
                      />
                    </div>
                    <div className="author-content">
                      <h6 className="title">John Smith</h6>
                      <p>
                        Jhon Smith is an author, blogger, and designer living in a suburb of
                        Washington, DC. When she’s not designing, blogging, or writing, Owen can be
                        found with her head in a book or pinning like a madman.
                      </p>
                      <ul className="social-share icon-transparent">
                        <li>
                          <a href="#">
                            <i className="icon-Fb"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-Pinterest"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-Twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="blog-pagination">
                    <div className="row g-5">
                      <div className="col-lg-6">
                        <div className="blog-pagination-list style-variation-2">
                          <a href="#">
                            <i className="ri-arrow-left-s-line"></i>
                            <span>
                              Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac
                            </span>
                          </a>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="blog-pagination-list style-variation-2 next-post">
                          <a href="#">
                            <span>
                              Tempus imperdiet nulla malesuada pellentesque elit eget gravida
                            </span>
                            <i className="ri-arrow-right-s-line"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="edu-comment-form mt--50">
                    <Comment url="" id={data.id} title={data.title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CourseCreate;
