import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import React from "react";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '武汉理工大学计算机学科竞赛赛事服务中心',
  description: '提供赛事信息、在线报名、新闻动态等服务',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="zh-CN">
      <head>
        <meta name="theme-color" content="#1677ff" />
      </head>
      <body className={inter.className}>{children}</body>
      </html>
  )
}