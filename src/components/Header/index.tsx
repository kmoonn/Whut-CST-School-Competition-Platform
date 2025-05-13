'use client'

import { Layout, Menu } from 'antd'
import styles from './index.module.scss'
import { useRouter } from 'next/navigation'

const { Header: AntHeader } = Layout

const menuItems = [
  {
    key: 'home',
    label: '首页',
    onClick: (router: any) => router.push('/')
  },
  {
    key: 'news',
    label: (
        <a href="http://i.whut.edu.cn/xxtg/znbm/jwc/" target="_blank" rel="noopener noreferrer">
          校赛通知
        </a>
    )
  },
  {
    key: 'services',
    label: (
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          报名参赛
        </a>
    )
  }
]

export default function Header() {
  const router = useRouter()

  const handleMenuClick = ({ key }: { key: string }) => {
    const item = menuItems.find(item => item.key === key)
    if (item?.onClick) {
      item.onClick(router)
    }
  }

  return (
      <AntHeader className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <div className={styles.logo}>
            <img src="/images/logo.png" alt="Logo" />
            <span>赛事中心</span>
          </div>
          <Menu
              mode="horizontal"
              items={menuItems}
              onClick={handleMenuClick}
              className={styles.menu}
          />
        </div>
      </AntHeader>
  )
}