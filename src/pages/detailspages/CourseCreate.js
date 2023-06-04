import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import Comment from '../blog/Comment';
import { useQuery } from '@tanstack/react-query';
import { useFirebase } from '../../providers/firebase/FirebaseProvider';
import { formatDate } from '../../utils/date';
import Spinner from '../../components/spinner/Spinner';

const CourseCreate = () => {
  const { id } = useParams();
  const { getDocument } = useFirebase();
  const { data: lesson, isLoading } = useQuery(['lessons', id], () =>
    getDocument({ collectionName: 'lessons', id })
  );
  console.log(lesson);
  if (isLoading) {
    return <Spinner dark center />;
  }

  return (
    <>
      <SEO title={lesson.title} />
      <Layout>
        <BreadcrumbOne
          title={lesson.title}
          rootUrl="/"
          parentUrl="Asosiy sahifa"
          currentUrl="Dars"
        />
        <div className="edu-blog-details-area edu-section-gap bg-color-white">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-10 offset-lg-1">
                <div className="blog-details-1 style-variation3">
                  <div className="content-blog-top">
                    <div className="content-status-top d-flex justify-content-between mb--30 align-items-center">
                      <div className="status-group"></div>
                      <ul className="blog-meta">
                        <li>
                          <i className="icon-calendar-2-line"></i>
                          {formatDate(lesson.createdAt.seconds * 1000)}
                        </li>
                        <li>
                          <i className="icon-discuss-line"></i>
                          {lesson.comment || 2} izoh
                        </li>
                        <li>
                          <i className="icon-time-line"></i>
                          {lesson.duration} minut
                        </li>
                      </ul>
                    </div>

                    <h4 className="title">{lesson.title}</h4>

                    <div className="thumbnail block-alignwide">
                      <img
                        className="radius-small w-100 mb--30"
                        src={lesson.cover_image}
                        alt="Blog Thumb"
                        style={{
                          maxHeight: 600
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="blog-main-content"
                    dangerouslySetInnerHTML={{
                      __html: lesson.content || ''
                    }}
                  ></div>

                  <div className="blog-tag-and-share mt--50">
                    {/* {data.tags && data.tags.length > 0 && (
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
                    )} */}
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
                    <Comment url="" id={id} title={lesson.title} />
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
