'use client'

import React, { useState } from 'react'
import { Carousel } from 'antd'
import type { CarouselProps } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { competitionsData } from '@/data/competitionsData'
import { bannerData } from '@/data/bannerData'
import { getTimelineStatus, calculateProgress, canRegister, isRegisterNotStarted, isRegisterEnded } from '@/utils/dateUtils'
import type { Competition, TimelinePhase } from '@/types/api'

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
};

export default function Banner() {
  const [selectedCompetition, setSelectedCompetition] = useState<Competition>(competitionsData[0])

  const formatSubtitle = (subtitle: string) => {
    return subtitle.split('\n').map((line, index) => (
        <span key={index}>
        {line}
          <br />
      </span>
    ))
  }

  return (
    <div className={styles.banner}>
      <Carousel
          {...carouselSettings as React.PropsWithChildren<CarouselProps>}
          prevArrow={<CustomPrevArrow />}
          nextArrow={<CustomNextArrow />}
      >
        {bannerData.map((item, index) => (
            <div key={index}>
              <div
                  className={styles.slide}
                  style={{ backgroundImage: `url(${item.backgroundUrl})` }}
              >
                <div className={styles.content}>
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
        <h2>热门赛事</h2>
        <div className={styles.grid}>
          {competitionsData.map((competition) => {
            // 处理长名称
            const displayName = competition.name.length > 40 
              ? `${competition.name.substring(0, 38)}...`
              : competition.name;
              
            return (
              <div
                key={competition.id}
                className={`${styles.item} ${selectedCompetition.id === competition.id ? styles.active : ''}`}
                onClick={() => setSelectedCompetition(competition)}
                title={competition.name} // 添加完整名称作为提示
              >
                {displayName}
              </div>
            );
          })}
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
                <label>承办学院：</label>
                <span>{selectedCompetition.organizer}</span>
              </div>
            </div>

            <div className={styles.timeline}>
              <div className={styles.timelineTrack}>
                <div className={styles.timelinePoints}>
                  {selectedCompetition.timeline.map((phase, index, array) => {
                    const nextDate = array[index + 1]?.date;
                    const status = getTimelineStatus(new Date(phase.date), nextDate ? new Date(nextDate) : undefined);
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
                      window.open('https://raceadmin.cst.whut.tech/', '_blank');
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
                  ) : isRegisterNotStarted(selectedCompetition.timeline) ? '报名未开始' : isRegisterEnded(selectedCompetition.timeline) ? '报名已截止' : '报名未开始'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}