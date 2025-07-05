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
 * 计算时间线进度百分比
 * @param timeline 时间线阶段数组
 * @returns 百分比数值（0-100）
 */
export function calculateProgress(timeline: { date: Date }[]): number {
  if (!timeline || timeline.length < 2) return 0;

  const now = new Date();
  const startDate = new Date(timeline[0].date);
  const endDate = new Date(timeline[timeline.length - 1].date);

  // 如果还未开始
  if (now < startDate) return 0;
  // 如果已经结束
  if (now > endDate) return 100;

  // 计算总时长（毫秒）
  const totalDuration = endDate.getTime() - startDate.getTime();
  // 计算已经过去的时长（毫秒）
  const elapsedDuration = now.getTime() - startDate.getTime();

  // 计算进度百分比
  return Math.min(100, (elapsedDuration / totalDuration) * 100);
}

/**
 * 检查是否可以报名
 * @param timeline 时间线阶段数组
 * @returns 是否可以报名
 */
export function canRegister(timeline: { date: Date }[]): boolean {
  if (!timeline || timeline.length < 2) return false;

  const now = new Date();
  const registrationStart = new Date(timeline[0].date); // 报名开始
  const registrationEnd = new Date(timeline[1].date);   // 报名结束（作品提交截止）

  // 如果当前时间在报名开始和结束之间，则可以报名
  return now >= registrationStart && now <= registrationEnd;
}

/**
 * 检查报名是否未开始
 * @param timeline 时间线阶段数组
 * @returns 是否未开始
 */
export function isRegisterNotStarted(timeline: { date: Date }[]): boolean {
  if (!timeline || timeline.length < 2) return false;
  const now = new Date();
  const registrationStart = new Date(timeline[0].date);
  return now < registrationStart;
}

/**
 * 检查报名是否已截止
 * @param timeline 时间线阶段数组
 * @returns 是否已截止
 */
export function isRegisterEnded(timeline: { date: Date }[]): boolean {
  if (!timeline || timeline.length < 2) return false;
  const now = new Date();
  const registrationEnd = new Date(timeline[1].date);
  return now > registrationEnd;
}