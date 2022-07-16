import { SocialIcon } from 'react-social-icons';
function SocialIcons() {
    return (
        <div className='fixed bottom-0 right-0 m-4 flex space-x-2'>
            <SocialIcon bgColor='#0D80EC' fgColor='white' url="https://www.facebook.com/imhackx/" />
            {/* <SocialIcon bgColor='#1D9BF1' fgColor='white' url="https://twitter.com/hackx_uok" /> */}
            <SocialIcon bgColor='white' fgColor='#F93F36' url="https://www.youtube.com/c/hackXUoK/" />
            <SocialIcon bgColor='#E34B73' fgColor='white' url="https://www.instagram.com/hackx_uok/?hl=en" />
            <SocialIcon network='hide' />
        </div>
    );
}

export default SocialIcons;