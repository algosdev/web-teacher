import React from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from '../../providers/firebase/FirebaseProvider';
import { FiCheck, FiLock } from 'react-icons/fi';

const CourseCardProgress = ({ data, classes }) => {
  const { userData } = useFirebase();
  const stayDuration = userData.lessons[data.id]?.stayDuration || 0;
  const percentage = Math.min(100, Math.floor((stayDuration / (data.duration * 60)) * 100));
  const hasQuizPassed = userData.quizzes?.[data.quiz.id]?.hasPassed;
  const viewersCount = Object.keys(data.viewers || {}).length;
  return (
    <div className={`edu-card card-type-5 radius-small ${classes ? classes : ''}`}>
      <div className="inner">
        <div className="thumbnail">
          <Link
            to={process.env.PUBLIC_URL + `/lessons/${data.id}`}
            style={{
              maxHeight: 200,
              minHeight: 200
            }}
          >
            <img
              style={{ objectFit: 'cover', maxWidth: 400 }}
              src={data.cover_image}
              alt="Course Thumb"
            />
          </Link>
          <div className="wishlist-top-right">
            <button className="wishlist-btn">
              <i className="icon-Heart"></i>
            </button>
          </div>
        </div>
        <div className="content">
          <div className="">
            <div
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <span>{percentage}% &nbsp;</span>
              <div className="linear-progress">
                <div className={`current-progression linear-progress-${percentage}`}></div>
              </div>
            </div>
            {hasQuizPassed ? <FiCheck /> : <FiLock />}
            Sinov testidan {hasQuizPassed ? "o'tdingiz" : "o'tmadingiz"}
          </div>
          <h6 className="title">
            <Link to={process.env.PUBLIC_URL + `/lessons/${data.id}`}>{data.title}</Link>
          </h6>
          <ul className="edu-meta meta-01">
            <li>
              <i className="icon-time-line"></i>
              {data.duration} daqiqa
            </li>
            <li>
              <i className="icon-group-line"></i>
              {viewersCount} o'quvchi
            </li>
          </ul>
          <div className="card-bottom">
            <div className="read-more-btn">
              <Link className="btn-transparent" to={process.env.PUBLIC_URL + `/lessons/${data.id}`}>
                Darsni {percentage === 100 ? "ko'rish" : 'davom ettirish'}
                <i className="icon-arrow-right-line-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseCardProgress;
