import Image from 'next/image'
import SocialIcon from '../components/socialIcons'
import styles from '../styles/Home.module.css'
import AppModel from '../components/AppModel';
import Head from 'next/head'



export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/hackX.ico" />
        <title>hackX-2022 coming soon</title>
      </Head>
      {/* ----------------------------------------------------------------------------------- */}
      <div className={styles.bgWrap}>
        <div className='stars'></div>
        <div className='stars2'></div>
        <div className='stars3'></div>
      </div>
      <img className={`${styles.animalImg}`} src="hi stickker.png" alt="animal" />
      <SocialIcon />
      <AppModel />
      {/* ----------------------------------------------------------------------------------- */}

      <div className='container mx-auto min-h-screen  grid justify-items-center items-center'>
        <div className="space-y-8 px-4">
          <img className='backdrop-blur' src="logoo.png" width={"100%"} alt="logo" />
          <div >
          </div>
          <div className='text-center'>
            <div className='text-6xl '>
              <span className='font-bold'>COMING</span> SOON !
            </div>
            <div className={`${styles.subTitleText} mt-2 text-base font-bold`}>THE MOST AWAITED INTER - UNIVERSITY STARTUP CHALLENGE</div>
          </div>

        </div>
      </div >
      {/* ----------------------------------------------------------------------------------- */}
    </>
  )
}