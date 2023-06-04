import React, { useMemo } from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import CourseData from '../../data/course/CourseData.json';
import { useQueries, useQuery } from '@tanstack/react-query';
import { useFirebase } from '../../providers/firebase/FirebaseProvider';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import CourseCard from '../../components/course/CourseCard';
import Spinner from '../../components/spinner/Spinner';

const CourseOne = () => {
  const CourseItems = CourseData.slice(0, 9);
  const { getDocuments, getReference } = useFirebase();
  const { data = [], isLoading } = useQuery(['categories'], () =>
    getDocuments({ collectionName: 'categories' })
  );
  const sortedCategories = useMemo(() => data.sort((a, b) => a - b), [data]);

  const queries = sortedCategories.map(category => ({
    queryKey: ['lessons', { categoryId: category.id }],
    queryFn: () =>
      getDocuments({
        collectionName: 'lessons',
        filters: [
          {
            key: 'category',
            operator: '==',
            value: getReference({ collectionName: 'categories', id: category.id })
          }
        ]
      })
  }));
  const results = useQueries({ queries });

  if (isLoading) {
    return <Spinner dark center />;
  }
  return (
    <>
      <SEO title="Darslar" />
      <Layout>
        <BreadcrumbOne title="Darslar" rootUrl="/" parentUrl="Asosiy sahifa" currentUrl="Darslar" />
        <div className="edu-course-area edu-section-gap bg-color-white">
          {sortedCategories.map((category, index) => (
            <div className="container" key={category.id}>
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle initiallyVisible classes="text-center" title={category.title} />
                </div>
              </div>
              <div className="row g-5 mt--10" style={{ minHeight: 500 }}>
                {results[index].isLoading ? (
                  <Spinner />
                ) : (
                  results[index].data.map(item => (
                    <div className="col-12 col-sm-6 col-lg-4" key={item.id}>
                      <CourseCard data={item} />
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
          <div className="container">
            <div className="row g-5 mt--10">
              {CourseItems.map(item => (
                <div className="col-12 col-sm-6 col-lg-4" key={item.id}>
                  <CourseCard data={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CourseOne;
