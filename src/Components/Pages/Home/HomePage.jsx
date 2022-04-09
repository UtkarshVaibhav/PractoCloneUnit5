import React from 'react';
import { AppoinmentSlider } from './Homepage/AppointmentSlider';
import { ArticleCard } from './Homepage/ArticleCard';
import { ConsultCard } from './Homepage/ConsultCard';
import styles from "./Homepage.module.css"
import DownloadPracto from './Homepage/DownloadPracto';
import { UserFeedBack } from './UserFeedBack/UserFeedBack';
//import { Footer } from './Footer';



const HomePage = () => {
  return (
    <>
      <div className={styles.homepageContainer}>
        <section className={styles.homeConsult}>   
            
          <h2>Consult top doctors online for any health concern</h2>
          <p>Private online consultations with verified doctors in all spedialties</p>
              
          <div className={styles.homeConsultCardContainer}>
            <ConsultCard title="Period doubts or Pregnancy" image={"https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png"}/>
            <ConsultCard title="Period doubts or Pregnancy" image={"https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png"}/>
            <ConsultCard title="Period doubts or Pregnancy" image={"https://www.practo.com/consult/static/images/top-speciality-sexology.svg"}/>
            <ConsultCard title="Period doubts or Pregnancy" image={"https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png"}/>
            <ConsultCard title="Period doubts or Pregnancy" image={"https://www.practo.com/consult/static/images/top-speciality-pediatric.svg"}/>
            <ConsultCard title="Period doubts or Pregnancy" image={"https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png"}/>
          </div>
        </section>
        <section className={styles.homeAppoinments}>
          <h2>Book an appointment for an in-clinic consultation</h2>
          <h3>Find experienced doctors across all specialties</h3>
          <AppoinmentSlider />
        </section>
        <section className={styles.homeTopArticles}>
              <div className={styles.homeTopArticlesInfo}>
                  <h2>Read top articles from health experts</h2>
                  <p>Health articles that keep you informed about good health practices and achieve your goals.</p>
                  <button className={styles.button}>See all articles</button>
              </div>
              <ArticleCard image="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910" category="coronavirus" title="12 Coronavirus Myths and Facts That You Should Be Aware Of" sub="Dr. Diana Borgio"  />
              <ArticleCard image="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c" category="Vitamins and supplements" title="Eating Right to Build Immunity Against Cold and Viral Infections" sub="Dr. Diana Borgio" />
        </section>
      </div>
      <UserFeedBack/>
      <DownloadPracto />
      {/*<Footer />*/}
    </>
  )
}

export { HomePage }