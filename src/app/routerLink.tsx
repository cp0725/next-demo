'use client';

import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <Link className={styles.a} href="/page1">page1(服务端-静态结构)</Link>
      <Link className={styles.a} href="/page2">page2(服务端-脚本结构)</Link>
      <Link className={styles.a} href="/page3">page3(客户端-静态结构)</Link>
      <Link className={styles.a} href="/page4">page4(客户端-脚本结构)</Link>
      <Link className={styles.a} href="/page5">page5</Link>
      <Link className={styles.a} href="/page6">page6</Link>
    </div>
  )
}
