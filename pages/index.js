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
      <img className={styles.animalImg} src="hi stickker.png" alt="animal" />

      {/* <AppModel /> */}
      <SocialIcon />

      <div className='container mx-auto min-h-screen  grid justify-items-center items-center'>
        <div className="space-y-8 px-4">
          <img src="logoo.png" width={"100%"} alt="logo" />
          <div className={styles.countDownContainer}>
            <CountDown />
          </div>


          <div className='text-center'>
            <div className='text-6xl '>
              <b>COMING</b> SOON !
            </div>
            <div className={styles.description}>THE MOST AWAITED INTER - UNIVERSITY STARTUP CHALLENGE</div>
          </div>


        </div>

      </div >
    </>
  )
}

// export default function Home() {
//   return (
//     <>
//       <AppModel />
//       <SocialIcon />
//       <div className={styles.animalContainer}>
//         <Image
//           className={styles.animalImg}
//           alt="background"
//           src={animal}
//           layout="intrinsic"
//           width={383}
//           height={476}
//           quality={100}
//           priority
//         />
//       </div>

//       <img class="object-none object-left-bottom bg-yellow-300 w-24 h-24" src="hi stickker.png" alt={animal} />
//       <div className={styles.bgWrap}>
//         <Image
//           alt="background"
//           src={background}
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//           priority
//         />
//       </div>

//       <Container fixed>
//         <Stack className={styles.stack}>
//           <dv></dv>
//           <div>
//             <Image
//               alt="background"
//               src={logo}
//               // className={styles.image}
//               layout="intrinsic"
//               width={450}
//               height={120}
//               priority
//             />
//           </div>

//           <div>
//             <CountDown />
//           </div>
//           <div className={styles.footer} >
//             <div className={styles.comingSoon}>
//               <b>COMING</b> SOON !
//             </div>
//             <div className={styles.description}>THE MOST AWAITED INTER - UNIVERSITY STARTUP CHALLENGE</div>
//           </div>
//           <div></div>
//         </Stack>
//       </Container>
//     </>
//   )
// }
