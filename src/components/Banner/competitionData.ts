import {Competition} from "@/types/api";

export const competitionsData: Competition[] = [
  {
    id: 1,
    name: '第八届中国高校智能机器人创意大赛',
    link:'http://i.whut.edu.cn/xxtg/znbm/jwc/202505/t20250512_611363.shtml',
    officialWebsite: 'http://www.robo-maker.org/dszq/',
    organizer: '信息工程学院',
    participants: 4980,
    timeline: {
      registration: new Date('2025-05-01'),
      formSubmission: new Date('2025-06-02'),
      workSubmission: new Date('2025-07-03'),
      review: new Date('2025-07-04'),
      resultsAnnounced: new Date('2025-07-05'),
    },
  },
  {
    id: 2,
    name: '2025年全国大学生物联网设计竞赛',
    link: 'http://i.whut.edu.cn/xxtg/znbm/jwc/202504/t20250429_610532.shtml',
    officialWebsite: 'https://iot.sjtu.edu.cn/Default.aspx',
    organizer: '信息工程学院',
    participants: 4980,
    timeline: {
      registration: new Date('2025-05-01'),
      formSubmission: new Date('2025-05-10'),
      workSubmission: new Date('2025-05-13'),
      review: new Date('2025-06-04'),
      resultsAnnounced: new Date('2025-06-05'),
    },
  },
  {
    id: 3,
    name: '2025年全国大学生计算机系统能力大赛',
    link: 'http://i.whut.edu.cn/xxtg/znbm/jwc/202505/t20250506_610904.shtml',
    officialWebsite: 'https://os.educg.net/#/',
    organizer: '计算机与人工智能学院',
    participants: 3500,
    timeline: {
      registration: new Date('2025-05-01'),
      formSubmission: new Date('2025-05-02'),
      workSubmission: new Date('2025-05-03'),
      review: new Date('2025-05-04'),
      resultsAnnounced: new Date('2025-05-05'),
    }
  }
]; 