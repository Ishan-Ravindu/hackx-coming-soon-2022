import Head from 'next/head'
import Image from 'next/image'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import CountDown from '../components/CountDown'
import SocialIcon from '../components/socialIcons'
import styles from '../styles/Home.module.css'
import background from '../assets/back2.jpg'
import logo from "../assets/logoo.png"
import animal from "../public/hi stickker.png"
import AppModel from '../components/AppModel';



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

          <div className={styles.countDownContainer}>
            <CountDown />
          </div>


          <div className='text-center'>
            <div className='text-6xl '>
              <span className='font-bold'>COMING</span> SOON !
            </div>
            <div className='mt-2 font-bold'>THE MOST AWAITED INTER - UNIVERSITY STARTUP CHALLENGE</div>
          </div>


        </div>

      </div >
    </>
  )
}

