import React from 'react'
import styles from './style';
import { Billing,Buisness,Button,CardDeal,Clients,CTA,Stats,Footer,Testimonials,Hero,GetStarted,Navbar,FeedbackCard} from './components'
<com></com>
const App = () => (

  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Buisness/> 
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Clients/> 
        <CTA/> 
        <Footer/> 
      </div>
    </div>
  </div>
);

// 5rdBXMdiN%UMgL@)3Btk 000host password
export default App