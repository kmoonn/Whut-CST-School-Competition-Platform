'use client'

import styles from './index.module.scss'
import { CalendarOutlined } from '@ant-design/icons'

interface NewsItem {
  date: string
  title: string
  link: string
}

interface NewsProps {
  title?: string
  defaultTab?: 'news' | 'notification'
}

const newsData: NewsItem[] = [
  {
    date: '2025-06-18',
    title: '【本科生院】关于组织2025年百度之星程序设计大赛校内选拔赛的通知',
    link: 'http://i.whut.edu.cn/xxtg/znbm/jwc/202506/t20250618_614472.shtml',
  }
]


const NewsItem = ({ date, title }: { date: string; title: string }) => (
    <div className={styles.newsItem}>
      <div className={styles.date}>
        <CalendarOutlined className={styles.icon} />
        {date}
      </div>
      <div className={styles.title}>{title}</div>
    </div>
)

export default function News({ defaultTab = 'news' }: NewsProps) {
  return (
      <div className={styles.news}>
        <h2 className={styles.sectionTitle}>
          赛事动态
          <span>COMPETITION NEWS</span>
          <a href="http://i.whut.edu.cn/xxtg/znbm/jwc/" className={styles.more}>查看更多</a>
        </h2>
        <div className={styles.newsList}>
          {newsData
              .map((news, index) => (
                  <a key={index} href={news.link} className={styles.newsLink}>
                    <NewsItem date={news.date} title={news.title} />
                  </a>
              ))}
        </div>
      </div>
  )
}