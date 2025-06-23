'use client'

import React from 'react'
import Link from 'next/link'
import { Card } from 'antd'
import styles from './index.module.scss'
import { exhibitionData } from '@/data/exhibitionData'

const { Meta } = Card

export default function Exhibition() {
  return (
    <div className={`section-card ${styles.exhibition}`}>
      <h2 className="section-title">
        优秀作品
        <span>Excellent Works</span>
        <Link href="/exhibition" className="more">
          更多 &gt;
        </Link>
      </h2>
      
      <div className={styles.workGrid}>
        {exhibitionData.map(work => (
          <Link href={work.detailUrl || `/works/${work.id}`} key={work.id}>
            <Card
              hoverable
              cover={<img alt={work.title} src={work.imageUrl} />}
              className={styles.workCard}
            >
              <Meta title={work.title} description={work.description} />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}