import { Competition } from "@/types/api";

export const competitionsData: Competition[] = [
  {
    id: 1,
    name: '2025年中国高校计算机大赛-人工智能创意赛校内选拔赛',
    link: '',
    officialWebsite: 'http://aicontest.baidu.com/',
    organizer: '计算机与人工智能学院',
    participants: 0,
    timeline: [
      { label: '校赛报名开始', date: new Date('2025-07-05') },
      { label: '校赛报名表提交截止', date: new Date('2025-07-08') },
      { label: '校赛作品材料提交截止', date: new Date('2025-07-10') }
    ],
  }
]; 