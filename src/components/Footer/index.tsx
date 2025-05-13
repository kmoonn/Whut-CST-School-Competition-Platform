'use client'

import { Layout } from 'antd'
import styles from './index.module.scss'

const { Footer: AntFooter } = Layout

export default function Footer() {
  return (
    <AntFooter className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.info}>
            <h3>武汉理工大学计算机与人工智能学院</h3>
            <p>地址：湖北省武汉市洪山区珞狮路122号</p>
            <p>邮编：430070</p>
          </div>
          <div className={styles.links}>
            <h3>快速链接</h3>
            <a href="http://cst.whut.edu.cn/" target="_blank" rel="noopener noreferrer">
              计算机智能学院
            </a>
            <a href="https://zhlgd.whut.edu.cn/" target="_blank" rel="noopener noreferrer">
              智慧理工大
            </a>
            <a href="http://i.whut.edu.cn/" target="_blank" rel="noopener noreferrer">
              综合信息网
            </a>
          </div>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} 武汉理工大学计算机与人工智能学院 版权所有
        </div>
      </div>
    </AntFooter>
  )
} 