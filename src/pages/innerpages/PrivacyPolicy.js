import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import { FiExternalLink } from 'react-icons/fi';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO title="Foydali havolalar" />
      <Layout>
        <BreadcrumbOne
          title="Foydali havolalar"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Foydali havolalar"
        />
        <div className="edu-privacy-policy-area edu-privacy-policy edu-section-gap bg-color-white">
          <div className="container">
            <div className="row g-5">
              <div className="content">
                <div className="thumbnail mb--50">
                  <img
                    className="radius-small w-100"
                    src="/images/banner/banner-01/earth.png"
                    alt="Foydali havolalar"
                  />
                </div>

                <h4 className="title">Packet Tracer </h4>
                <p>
                  Packet Tracer - bu tarmoq simulyatori dasturi. U CCNA amaliyot laboratoriyalarini
                  qurishda foydalaniladigan tarmoq qurilmalarini simulyatsiya qiladi. Packet Tracer
                  barcha muhim CCNA laboratoriya qurilmalarini simulyatsiya qilish orqali bu
                  xarajatlarni kamaytiradi. Simulyatsiyaga asoslangan o'quv muhiti talabalar va
                  o'qituvchilarga yordam beradi. Talabalar buyruq satridan marshrutizatorlar va
                  kalitlarni sozlashni o'rganishlari mumkin. Packet Tracer virtual tarmoq
                  qurilmalaridan foydalangan holda vizual sudrab tashlash muammolarini ta'minlaydi.
                  O'qituvchilar Packet Tracer-dan talabalar uchun o'z-o'zini baholaydigan
                  topshiriqlarini yaratish uchun foydalanishlari yoki tarmoq tushunchalarini
                  namoyish qilish uchun foydalanishlari mumkin.
                  <p>
                    <a
                      href="https://www.computernetworkingnotes.com/ccna-study-guide/download-packet-tracer-for-windows-and-linux.html"
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontSize: 16 }}
                    >
                      <FiExternalLink /> Havolaga o'tish
                    </a>
                  </p>
                </p>

                <h4 className="title">GNS3</h4>
                <p>
                  GNS3 butun dunyo bo'ylab yuz minglab tarmoq muhandislari tomonidan virtual va real
                  tarmoqlarga taqlid qilish, sozlash, sinab ko'rish va muammolarni bartaraf etish
                  uchun ishlatiladi. GNS3 sizga noutbukda bir nechta qurilmalardan iborat kichik
                  topologiyani ishlatish imkonini beradi, ko'plab qurilmalar bir nechta serverlarda
                  joylashgan yoki hatto bulutda joylashgan
                  <p>
                    <a
                      href="https://www.gns3.com/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontSize: 16 }}
                    >
                      <FiExternalLink /> Havolaga o'tish
                    </a>
                  </p>
                </p>

                <h4 className="title">Tarmoq boshlang'ich tushunchalari</h4>
                <p>
                  Bu Youtube kanalda kommutator, marshrutizatorlar, ular qanday bog'lanishi,
                  tarmoqning tarkibi, protokollor, shuningdek ma'lumot paketlari internetda qanday
                  harakatlanishi haqida ma'lumotlarga o'tishingiz mumkin. Sizda ingliz tilini bilish
                  talab qilinadi.
                  <p>
                    <a
                      href="https://www.youtube.com/playlist?list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi"
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontSize: 16 }}
                    >
                      <FiExternalLink /> Havolaga o'tish
                    </a>
                  </p>
                </p>

                <h4 className="title">Subnet bo'yicha amaliyot</h4>
                <p>
                  Subnet - IP tarmog'ining mantiqiy bo'linmasi tarmoqni ikki yoki undan ortiq
                  tarmoqqa boʻlish amaliyoti subnetting deb ataladi . Xuddi shu pastki tarmoqqa
                  tegishli bo'lgan kompyuterlar IP manzillarining eng muhim bitlarining bir xil
                  guruhiga murojaat qilishadi . Bu IP-manzilning ikkita maydonga mantiqiy
                  bo'linishiga olib keladi: tarmoq raqami yoki marshrutlash prefiksi va qolgan
                  maydon yoki xost identifikatori . Dam olish maydoni ma'lum bir xost yoki tarmoq
                  interfeysi uchun identifikatordir.
                  <p>
                    <a
                      href="https://subnetipv4.com/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontSize: 16 }}
                    >
                      <FiExternalLink /> Havolaga o'tish
                    </a>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default PrivacyPolicy;
