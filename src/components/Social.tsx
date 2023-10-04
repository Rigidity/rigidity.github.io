import { IconType } from 'react-icons';
import styles from './Social.module.scss';

export interface SocialProps {
    Icon: IconType;
    url: string;
}

export function Social({ Icon, url }: SocialProps) {
    return (
        <>
            <a className={styles.social} href={url} target='_blank'>
                <Icon size={50} />
            </a>
        </>
    );
}
