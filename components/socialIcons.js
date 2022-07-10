import styles from './socialIcons.module.css'

import { SocialIcon } from 'react-social-icons';
function SocialIcons() {
    return (
        <div className='absolute bottom-0 right-0 m-4 flex space-x-2'>
            <SocialIcon url="https://www.facebook.com/imhackx/" />
            <SocialIcon url="https://www.instagram.com/hackx_uok/?hl=en" />
            <SocialIcon url="https://twitter.com/hackx_uok" />
            <SocialIcon url="https://www.youtube.com/c/hackXUoK/" />
            <SocialIcon onClick={() => console.log("hello")} network='email' />
        </div>
    );
}

export default SocialIcons;