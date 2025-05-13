'use client'

import { Layout } from 'antd'
import styles from './page.module.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import Exhibition from 'src/components/Exhibition'
import News from 'src/components/News'

const { Content } = Layout

export default function Home() {
    return (
        <Layout className={styles.layout}>
            <Header />
            <Content>
                <Banner />
                <div className="container">
                    <div className={styles.section}>
                        <News />
                    </div>
                    <div className={styles.section}>
                        <Exhibition />
                    </div>
                </div>
            </Content>
            <Footer />
        </Layout>
    )
}