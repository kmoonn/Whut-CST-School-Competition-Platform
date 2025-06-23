'use client'

import React from 'react'
import Link from 'next/link'
import { ClockCircleOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { newsData } from '@/data/newsData'

export default function News() {
  return (
    <div className={`section-card ${styles.news}`}>
      <h2 className="section-title">
        通知公告
        <span>News & Notification</span>
        <Link href="/news" className="more">
          更多 &gt;
        </Link>
      </h2>
      
      <div className={styles.newsList}>
        {newsData.map(item => (
          <Link href={item.link} key={item.id} className={styles.newsLink}>
            <div className={styles.newsItem}>
              <div className={styles.date}>
                <ClockCircleOutlined className={styles.icon} />
                {item.date}
              </div>
              <div className={styles.title}>{item.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}