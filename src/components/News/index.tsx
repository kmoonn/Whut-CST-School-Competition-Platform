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
    date: '05-12',
    title: '【本科生院】关于举办第八届中国高校智能机器人创意大赛校赛的通知',
    link: 'http://i.whut.edu.cn/xxtg/znbm/jwc/202505/t20250512_611363.shtml',
  },
  {
    date: '05-12',
    title: '【本科生院】关于公布第二十七届中国机器人及人工智能大赛校赛结果的通知',
    link: 'http://i.whut.edu.cn/xxtg/znbm/jwc/202505/t20250512_611344.shtml',
  },
  {
    date: '06-21',
    title: '2024"中国高校计算机大赛——人工智能创意赛"赛事启动...',
    link: '#',
  },
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
          <a href="#" className={styles.more}>查看更多</a>
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