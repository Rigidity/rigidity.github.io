import {
    FaDiscord,
    FaGithub,
    FaLinkedin,
    FaReddit,
    FaTwitter,
} from 'react-icons/fa';
import styles from './App.module.scss';
import { Social } from './components/Social';

export default function App() {
    return (
        <div className={styles.container}>
            <img className={styles.picture} src='/picture.jpg' />
            <h1 className={styles.header}>Brandon Haggstrom</h1>
            <p className={styles.description}>Software engineer</p>
            <Socials />
        </div>
    );
}

function Socials() {
    return (
        <div className={styles.socials}>
            <Social Icon={FaTwitter} url='https://twitter.com/rigidity16' />
            <Social
                Icon={FaReddit}
                url='https://www.reddit.com/user/RigidityMC'
            />
            <Social
                Icon={FaLinkedin}
                url='https://www.linkedin.com/in/brandon-haggstrom'
            />
            <Social
                Icon={FaDiscord}
                url='https://discord.com/users/239457433938821121'
            />
            <Social Icon={FaGithub} url='https://github.com/Rigidity' />
        </div>
    );
}
