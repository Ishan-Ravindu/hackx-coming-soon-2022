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
import animal from "../assets/hi stickker.png"

export default function Home() {
  return (
    <>

      <SocialIcon />
      <div className={styles.animalContainer}>
        <Image
          className={styles.animalImg}
          alt="background"
          src={animal}
          layout="intrinsic"
          width={383}
          height={476}
          quality={100}
          priority
        />
      </div>
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

      <Container maxWidth="lg">
        <Stack className={styles.stack}>
          <div className={styles.imgContainer}>
            <Image
              alt="background"
              src={logo}
              className={styles.image}
              width={450}
              height={120}
              quality={100}
              priority
            />
            <Divider orientation="vertical" flexItem />

          </div>

          <div>
            <CountDown />
          </div>
          <div className={styles.footer} >
            <div className={styles.comingSoon}>
              <b>COMING</b> SOON !
            </div>
            <div className={styles.description}>THE MOST AWAITED INTER - UNIVERSITY STARTUP CHALLENGE</div>
          </div>
        </Stack>
      </Container>
    </>
  )
}
