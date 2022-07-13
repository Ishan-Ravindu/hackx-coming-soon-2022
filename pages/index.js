import Image from 'next/image'
import SocialIcon from '../components/socialIcons'
import styles from '../styles/Home.module.css'
import background from '../public/back2.jpg'
import AppModel from '../components/AppModel';
import Head from 'next/head'



export default function Home() {
  return (
    <>
      {/* ----------------------------------------------------------------------------------- */}
      <div className={styles.bgWrap}>
        <Image
          alt="background"
          src={background}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
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