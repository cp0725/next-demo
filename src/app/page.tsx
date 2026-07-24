

import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import RouterLink from './routerLink'

export default function Home() {
  return (
    <div className={styles.page}>
      <RouterLink></RouterLink>
    </div>
  )
}
