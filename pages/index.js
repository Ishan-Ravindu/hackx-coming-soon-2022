import Head from 'next/head'
import Image from 'next/image'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import CountDown from '../components/CountDown'
import SocialIcon from '../components/socialIcons'
import styles from '../styles/Home.module.css'
import background from '../assets/peter-gargiulo-cGNCepznaV8-unsplash.jpg'
import logo from "../assets/hackX.png"

export default function Home() {
  return (
    <>
      <SocialIcon />
      <div className={styles.bgWrap}>
        <Image
          alt="background"
          src={background}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <Container maxWidth="lg">
        <Box sx={{ height: '100vh', display: "flex", justifyContent: "center", alignItems: "center" }} >
          <Stack spacing={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div>
              <Image
                alt="background"
                src={logo}
                width={560}
                height={250}
                quality={100}
              />
            </div>
            <div style={{ margin: "0" }} className={styles.title}><h2>Inter University Startup Challenge</h2></div>
            <div>
              <CountDown />
            </div>
            <div className={styles.subTitle} style={{ marginTop: "40px" }}><h1>COMING SOON !</h1></div>
          </Stack>
        </Box>
      </Container>



    </>
  )
}
