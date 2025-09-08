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
  },
  {
    id: 2,
    name: '2025年全球校园人工智能算法精英大赛校内选拔赛',
    link: 'http://i.whut.edu.cn/xxtg/znbm/jwc/202507/t20250707_615955.shtml',
    officialWebsite: 'https://www.aicomp.cn/',
    organizer: '计算机与人工智能学院',
    timeline: [
      { label: '报名开始', date: new Date('2025-07-07') },
      { label: '其他赛道报名截止时间', date: new Date('2025-09-20') },
      { label: '算法挑战赛报名截止时间', date: new Date('2025-10-10') },
    ],
  },
  {
    id: 3,
    name: '2025年第22届全国大学生信息安全与对抗技术竞赛“智能安全赛”校内选拔赛',
    link: 'http://i.whut.edu.cn/xxtg/znbm/jwc/',
    officialWebsite: 'https://www.isclab.org.cn/',
    organizer: '计算机与人工智能学院',
    timeline: [
      { label: '报名开始', date: new Date('2025-09-08') },
      { label: '校赛材料提交截止时间', date: new Date('2025-09-26') },
      { label: '官网报名截止时间', date: new Date('2025-09-30') },
    ],
  }
]; 