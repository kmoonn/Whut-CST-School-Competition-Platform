'use client'

import { Layout, Menu } from 'antd'
import styles from './index.module.scss'
import { useRouter } from 'next/navigation'
import logo from '../../assets/logo.png' 

const { Header: AntHeader } = Layout

export default function Header() {
  const router = useRouter()

  const menuItems = [
    {
      key: 'home',
      label: '首页',
      onClick: () => router.push('/')
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
        <a href="http://10.87.16.143:90/register" target="_blank" rel="noopener noreferrer">
          报名参赛
        </a>
      )
    }
  ]

  const handleMenuClick = ({ key }: { key: string }) => {
    const item = menuItems.find(item => item.key === key)
    if (item?.onClick) {
      item.onClick()
    }
  }

  return (
    <AntHeader className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <div className={styles.logo}>
          <img src={logo.src} alt="Logo" />
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