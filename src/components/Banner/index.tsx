'use client'

import React, { useState } from 'react'
import { Carousel } from 'antd'
import type { CarouselProps } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { competitionsData } from '@/data/competitionsData'
import Image from 'next/image'

const CustomPrevArrow: React.FC<any> = (props) => {
  const { className, onClick } = props
  return (
      <div className={`${className} ${styles.customArrow} ${styles.prevArrow}`} onClick={onClick}>
        <LeftOutlined />
      </div>
  )
}

const CustomNextArrow: React.FC<any> = (props) => {
  const { className, onClick } = props
  return (
      <div className={`${className} ${styles.customArrow} ${styles.nextArrow}`} onClick={onClick}>
        <RightOutlined />
      </div>
  )
}

const carouselSettings: CarouselProps = {
  autoplay: true,
  dots: { className: styles.dots },
  arrows: true,
  customPaging: () => (
      <div className={styles.customDot} />
  )
}

const carouselItems = [
  {
    title: '2025年中国高校计算机大赛-人工智能创意赛校内选拔赛',
    subtitle: '参赛作品须基于百度飞桨及文心大模型相关技术，在飞桨AI Studio星河社区完成相关模型开发、模型部署、模型调用和产品托管/上线的全流程。',
    background: 'http://aicontest.baidu.com/images/2025/banner.jpg',
    logo: 'http://aicontest.baidu.com/images/home_logo.png'
  }
]

export default function Banner() {
  const [selectedCompetition, setSelectedCompetition] = useState(competitionsData[0])

  const formatSubtitle = (subtitle: string) => {
    return subtitle.split('\n').map((line, index) => (
        <span key={index}>
        {line}
          <br />
      </span>
    ))
  }

  function getTimelineStatus(date: Date, nextDate?: Date) {
    const now = new Date();
    if (nextDate) {
      if (date <= now && now <= nextDate) {
        return 'current';
      }
    }

    if (date < now) {
      return 'completed';
    } else if (date.toDateString() === now.toDateString()) {
      return 'current';
    }
    return 'upcoming';
  }

  function calculateProgress(timeline: any[]) {
    const now = new Date();
    now.setSeconds(0);
    now.setMilliseconds(0);
    
    // 获取所有日期点
    const phases = timeline.map(phase => {
      const d = new Date(phase.date);
      d.setSeconds(0);
      d.setMilliseconds(0);
      return d;
    });

    // 找到当前所处的阶段区间
    for (let i = 0; i < phases.length - 1; i++) {
      const currentPhaseStart = phases[i];
      const currentPhaseEnd = phases[i + 1];

      if (now >= currentPhaseStart && now <= currentPhaseEnd) {
        // 计算当前阶段的进度
        const totalDuration = currentPhaseEnd.getTime() - currentPhaseStart.getTime();
        const currentProgress = now.getTime() - currentPhaseStart.getTime();
        const phasePercentage = Math.round((currentProgress / totalDuration) * 10000) / 10000;

        // 计算总进度
        const segmentSize = 100 / (phases.length - 1);
        return Math.round((i * segmentSize + segmentSize * phasePercentage) * 100) / 100;
      }
    }

    // 如果时间在最后一个日期之后
    if (now > phases[phases.length - 1]) {
      return 100;
    }

    // 如果时间在第一个日期之前
    if (now < phases[0]) {
      return 0;
    }

    return 0; // 默认返回
  }

  function canRegister(timeline: any[]) {
    const now = new Date();
    if (timeline.length < 2) return false;
    
    const registrationStart = new Date(timeline[0].date);
    const registrationEnd = new Date(timeline[1].date);

    return now >= registrationStart && now <= registrationEnd;
  }

  return (
    <div className={styles.banner}>
      <Carousel
          {...carouselSettings}
          prevArrow={<CustomPrevArrow />}
          nextArrow={<CustomNextArrow />}
      >
        {carouselItems.map((item, index) => (
            <div key={index}>
              <div
                  className={styles.slide}
                  style={{ backgroundImage: `url(${item.background})` }}
              >
                <div className={styles.content}>
                  <div className={styles.logo}>
                    <Image
                        src={item.logo}
                        alt="Competition Logo"
                        className={styles.logoImage}
                        width={100}
                        height={100}
                        style={{
                          width: '100%',
                          height: 'auto',
                        }}
                        priority
                    />
                  </div>
                  <h1 className={styles.title}>
                    {item.title}
                    <span className={styles.subtitle}>{formatSubtitle(item.subtitle)}</span>
                  </h1>
                </div>
              </div>
            </div>
        ))}
      </Carousel>

      <div className={styles.competitions}>
        <h2>目前赛事</h2>
        <div className={styles.grid}>
          {competitionsData.map((competition) => (
            <div
              key={competition.id}
              className={`${styles.item} ${selectedCompetition.id === competition.id ? styles.active : ''}`}
              onClick={() => setSelectedCompetition(competition)}
            >
              {competition.name}
            </div>
          ))}
        </div>

        <div className={styles.competitionInfo}>
          <div className={styles.infoCard}>
            <div className={styles.infoHeader}>
              <h3>{selectedCompetition.name}</h3>
              <div className={styles.linkGroup}>
                {selectedCompetition.link && (
                    <a href={selectedCompetition.link} className={styles.schoolLink}>
                      校赛通知
                    </a>
                )}
                {selectedCompetition.officialWebsite && (
                    <a href={selectedCompetition.officialWebsite} className={styles.officialLink}>
                      比赛官网
                    </a>
                )}
              </div>
            </div>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <label>校内承办学院：</label>
                <span>{selectedCompetition.organizer}</span>
              </div>
              <div className={styles.infoItem}>
                <label>校赛报名人数：</label>
                <span>{selectedCompetition.participants}</span>
              </div>
            </div>

            <div className={styles.timeline}>
              <div className={styles.timelineTrack}>
                <div className={styles.timelinePoints}>
                  {selectedCompetition.timeline.map((phase, index, array) => {
                    const nextDate = array[index + 1]?.date;
                    const status = getTimelineStatus(phase.date, nextDate);
                    const isInProgress = status === 'current' && nextDate;

                    return (
                        <React.Fragment key={index}>
                          <div className={`${styles.timelinePoint} ${styles[status]}`}>
                            <div className={styles.point} />
                            <div className={styles.label}>{phase.label}</div>
                            <div className={styles.date}>
                              {new Date(phase.date).toLocaleDateString('zh-CN', {
                                month: '2-digit',
                                day: '2-digit'
                              })}
                            </div>
                          </div>

                          {/* 添加中间状态节点 */}
                          {index < array.length - 1 && (
                              <div className={`${styles.timelineMiddlePoint} ${
                                  isInProgress ? styles.active : ''
                              }`}>
                                <div className={styles.middlePoint} />
                                {isInProgress && (
                                    <div className={styles.currentIndicator}>
                                      {index === 0 ? '报名进行中' :
                                          index === 1 ? '等待提交作品' :
                                              index === 2 ? '等待校赛评审' :
                                                  index === 3 ? '等待结果公布' : ''}
                                    </div>
                                )}
                              </div>
                          )}
                        </React.Fragment>
                    );
                  })}
                </div>
                <div className={styles.timelineLine}>
                  <div
                      className={styles.timelineProgress}
                      style={{
                        width: `${calculateProgress(selectedCompetition.timeline).toFixed(2)}%`
                      }}
                  />
                </div>
              </div>
              <div className={styles.registerButtonContainer}>
                <button
                    className={styles.registerButton}
                    onClick={() => {
                      const baseUrl = 'http://example.com/register';
                      const url = `${baseUrl}?competitionId=${selectedCompetition.id}&competitionName=${encodeURIComponent(selectedCompetition.name)}`;
                      window.open('http://10.87.16.143:90/register', '_blank');
                    }}
                    disabled={!canRegister(selectedCompetition.timeline)}
                >
                  {canRegister(selectedCompetition.timeline) ? (
                      <>
                        我要报名
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                        </svg>
                      </>
                  ) : '报名未开始'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 