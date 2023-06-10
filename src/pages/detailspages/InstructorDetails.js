import React, { useMemo } from 'react';
import TrackVisibility from 'react-on-screen';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import { useParams, Link } from 'react-router-dom';
import { slugify } from '../../utils';
import { InstructorCourseSliderParams } from '../../utils/script';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import InstructorData from '../../data/instructor/InstructorData.json';
import { useFirebase } from '../../providers/firebase/FirebaseProvider';
import {} from '../../assets/avatars/1.svg';
import { useQueries } from '@tanstack/react-query';
import CourseCardProgress from '../../components/course/CourseCardProgress';
import { FiRefreshCw } from 'react-icons/fi';
const InstructorDetails = () => {
  const { slug = 'james-carlson' } = useParams();
  const { signOut } = useFirebase();
  const { userData = {}, getDocument, updateUser } = useFirebase();

  const data = InstructorData.filter(instructor => slugify(instructor.name) === slugify(slug));
  const teamMember = data[0];
  const handleAvatarChange = () => {
    const newIndex = ((userData.avatar ?? 6) + 1) % 7;
    updateUser({ avatar: newIndex });
  };
  const userLessons = useMemo(() => {
    return Object.entries(userData.lessons || {}).sort(
      (a, b) => b[1].updatedAt.seconds - a[1].updatedAt.seconds
    );
  }, [userData.lessons]);

  const finishedLessonCount = userLessons.filter(([_, { isFinished }]) => isFinished).length;

  const queries = userLessons.map(([id]) => ({
    queryKey: ['lessons', id],
    queryFn: () =>
      getDocument({
        collectionName: 'lessons',
        id
      })
  }));
  const results = useQueries({ queries });
  const lastLessons = results.map(el => el.data).filter(Boolean);
  const stats = [
    {
      title: 'Yakunlangan',
      number: finishedLessonCount
    },
    {
      title: 'Qolgan darslar',
      number: '20'
    },
    {
      title: 'Daraja',
      number: '17'
    }
  ];

  return (
    <>
      <SEO title="Hisob qaytnomasi" />
      <Layout isLoading={!userData?.uid}>
        <BreadcrumbOne
          title="Hisob qaytnomasi"
          rootUrl="/"
          parentUrl="Asosiy sahifa"
          currentUrl="Hisob qaytnomasi"
        />
        <div className="edu-instructor-profile-area edu-section-gap bg-color-white">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4 pr--55">
                <div className="instructor-profile-left">
                  <div className="inner">
                    <div
                      className="thumbnail"
                      style={{
                        position: 'relative'
                      }}
                    >
                      <img
                        src={require(`../../assets/avatars/${userData.avatar || 1}.svg`)}
                        alt="Team Member"
                      />
                      <button
                        style={{
                          background: 'transparent',
                          border: 'none',
                          position: 'absolute',
                          top: 10,
                          right: 10
                        }}
                        onClick={handleAvatarChange}
                      >
                        <FiRefreshCw />
                      </button>
                    </div>
                    <div className="content">
                      <h5 className="title">{userData.fullname}</h5>
                      <span className="subtitle">
                        {userData.isAdmin ? 'Admin' : 'Tirishqoq talaba'}
                      </span>
                      <div className="contact-with-info">
                        <p>
                          <span>Email:</span>{' '}
                          <a href={`mailto:${userData.email}`}>{userData.email}</a>
                        </p>
                      </div>

                      <div className="contact-btn">
                        <Link to="/" className="edu-btn" onClick={signOut}>
                          Chiqish
                          <i className="icon-arrow-right-line-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="instructor-profile-right">
                  <div className="inner">
                    <div className="section-title text-start">
                      <span className="pre-title">Sizning ma'lumotlaringiz</span>
                      <h3 className="title">Xush kelibsiz, {userData.fullname}</h3>
                    </div>

                    {/* {teamMember.experience && teamMember.experience.length > 0 && (
                      <div className="edu-skill-style mt--65">
                        <div className="section-title text-start mb--30">
                          <span className="pre-title">Rivojlanish</span>
                          <h3 className="title">Hozirgi</h3>
                        </div>
                        <div className="rbt-progress-style-1 row g-5">
                          {teamMember.experience.map((progress, i) => (
                            <div className="col-lg-6" key={i}>
                              <TrackVisibility once className="single-progress">
                                <Skill progress={progress} />
                              </TrackVisibility>
                            </div>
                          ))}
                        </div>
                      </div>
                    )} */}

                    <div className="course-statistic-wrapper bg-color-primary ptb--50 mt--65 radius-small">
                      <div className="row align-items-center g-5">
                        {stats.map((item, i) => (
                          <div className="col-lg-4 colmd-6 col-12 line-separator" key={i}>
                            <div className="course-statistic text-center">
                              <div className="inner">
                                <TrackVisibility once>
                                  {({ isVisible }) =>
                                    isVisible && item.isDecimal !== true ? (
                                      <span className="total">
                                        <CountUp
                                          end={item.number}
                                          duration={1}
                                          delay={0.1}
                                          start={0}
                                        />
                                      </span>
                                    ) : (
                                      ''
                                    )
                                  }
                                </TrackVisibility>
                                <TrackVisibility once>
                                  {({ isVisible }) =>
                                    isVisible && item.isDecimal === true ? (
                                      <span className="total">
                                        <CountUp
                                          end={item.number}
                                          duration={1}
                                          delay={0.1}
                                          start={0}
                                          decimals={1}
                                        />
                                      </span>
                                    ) : (
                                      ''
                                    )
                                  }
                                </TrackVisibility>
                                <p>{item.title}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="edu-course-wrapper pt--65">
                      <div className="section-title text-start mb--20">
                        <span className="pre-title">Darslar</span>
                        <h3 className="title">Oxirgi o'qigan darslaringiz:</h3>
                      </div>
                      {lastLessons.length > 1 ? (
                        <Slider
                          className="instructor-profile-courses course-activation course-activation-item-2 slick-gutter-15 edu-slick-button"
                          {...InstructorCourseSliderParams}
                        >
                          {lastLessons.map(course => (
                            <div key={course.id} className="eduvibe-course-two-single">
                              <CourseCardProgress data={course} />
                            </div>
                          ))}
                        </Slider>
                      ) : !!lastLessons.length ? (
                        <div style={{ maxWidth: 400 }}>
                          <CourseCardProgress data={lastLessons[0]} />
                        </div>
                      ) : (
                        <p>Siz hali birorta darsni o'qimadingiz</p>
                      )}
                    </div>
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
export default InstructorDetails;
