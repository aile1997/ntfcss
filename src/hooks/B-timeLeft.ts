export function showtime(data: string) {
  const nowtime = new Date(), //获取当前时间
    endtime = new Date(data) //定义结束时间
  const lefttime = endtime.getTime() - nowtime.getTime(), //距离结束时间的毫秒数
    leftd = Math.floor(lefttime / (1000 * 60 * 60 * 24)), //计算天数
    lefth = Math.floor((lefttime / (1000 * 60 * 60)) % 24), //计算小时数
    leftm = Math.floor((lefttime / (1000 * 60)) % 60), //计算分钟数
    lefts = Math.floor((lefttime / 1000) % 60) //计算秒数
  return [leftd, lefth, leftm, lefts] //返回倒计时的字符串
}
