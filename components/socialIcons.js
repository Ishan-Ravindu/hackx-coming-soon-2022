import styles from './socialIcons.module.css'

function SocialIcons() {
    return (
        <div className={styles.social}>
            <ul>
                <li><a href="https://www.facebook.com/imhackx/" rel="noopener" target={"_blank"}><span>Facebook</span> <i className="fa fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/hackx_uok/?hl=en" rel="noopener" target={"_blank"}><span>Instagram</span> <i className="fa fa-instagram"></i></a></li>
                <li><a href="https://twitter.com/hackx_uok" rel="noopener" target={"_blank"}><span>Twitter</span> <i className="fa fa-twitter"></i></a></li>
                {/* <li><a href="https://www.linkedin.com/in/teonamushambadze" target={"_blank"}><span>Linkedin</span> <i
                    className="fa fa-linkedin"></i></a>
                </li> */}
                <li><a href="https://www.youtube.com/c/hackXUoK/" rel="noopener" target={"_blank"}><span>Youtube</span> <i className="fa fa-youtube"></i></a></li>
            </ul>
        </div>
    );
}

export default SocialIcons;