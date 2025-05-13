'use client'

import { Card } from 'antd'
import styles from './index.module.scss'

const { Meta } = Card

interface ExhibitionProps {
    title?: string
}

export default function Exhibition({ title = '优秀作品' }: ExhibitionProps) {
    return (
        <div className={styles.exhibition}>
            <h2 className={styles.sectionTitle}>
                {title}
                <span>EXCELLENT WORKS</span>
                <a href="#" className={styles.more}>查看更多</a>
            </h2>
            <div className={styles.workGrid}>
                {works.map((work, index) => (
                    <Card
                        key={index}
                        hoverable
                        className={styles.workCard}
                        cover={<img alt={work.title} src={work.image} />}
                    >
                        <Meta
                            title={work.title}
                            description={work.description}
                        />
                    </Card>
                ))}
            </div>
        </div>
    )
}

const works = [
    {
        title: '智能医疗辅助系统',
        description: '2023计算机设计大赛国赛一等奖',
        image: 'https://placeholder.im/300x200.png/cccccc'
    },
    {
        title: '智慧校园导航平台',
        description: '2023计算机设计大赛国赛二等奖',
        image: 'https://placeholder.im/300x200.png/cccccc'
    },
    {
        title: 'AI教育助手',
        description: '2023计算机设计大赛省赛特等奖',
        image: 'https://placeholder.im/300x200.png/cccccc'
    },
    {
        title: '智能家居控制系统',
        description: '2023计算机设计大赛省赛一等奖',
        image: 'https://placeholder.im/300x200.png/cccccc'
    }
]