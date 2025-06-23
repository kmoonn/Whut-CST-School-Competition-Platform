/**
 * 获取时间线状态：已完成、当前、即将到来
 */
export function getTimelineStatus(date: Date, nextDate?: Date): 'completed' | 'current' | 'upcoming' {
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

/**
 * 计算赛事进度百分比
 */
export function calculateProgress(timeline: {
  registration: Date;
  formSubmission: Date;
  workSubmission: Date;
  review?: Date;
  resultsAnnounced?: Date;
}): number {
  const now = new Date();
  now.setSeconds(0);
  now.setMilliseconds(0);
  
  // 过滤掉undefined的时间点
  const phases = [
    timeline.registration,
    timeline.formSubmission,
    timeline.workSubmission,
    timeline.review,
    timeline.resultsAnnounced
  ].filter(Boolean).map(date => {
    if (!(date instanceof Date)) return null;
    const d = new Date(date);
    d.setSeconds(0);
    d.setMilliseconds(0);
    return d;
  }).filter(Boolean) as Date[];

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

/**
 * 检查当前是否在报名阶段
 */
export function canRegister(timeline: {
  registration: Date;
  formSubmission: Date;
}): boolean {
  const now = new Date();
  const registrationStart = new Date(timeline.registration);
  const registrationEnd = new Date(timeline.formSubmission);

  return now >= registrationStart && now <= registrationEnd;
} 