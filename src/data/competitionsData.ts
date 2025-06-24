import { Competition } from "@/types/api";

export const competitionsData: Competition[] = [
  {
    id: 1,
    name: '2025年中国高校计算机大赛-人工智能创意赛校内选拔赛',
    link: 'http://i.whut.edu.cn/xxtg/znbm/jwc/202506/t20250624_614953.shtml',
    officialWebsite: 'http://aicontest.baidu.com/',
    organizer: '计算机与人工智能学院',
    timeline: [
      { label: '报名开始', date: new Date('2025-06-24') },
      { label: '作品材料提交截止', date: new Date('2025-07-04') }
    ],
  }
]; 