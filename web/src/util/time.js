/**
 * 格式化日期时间 yyyy-mm-dd hh:mm
 * @param date
 * @return {string}
 */
export const formatDateTime = (date) => {
  date = new Date(date);
  const y = date.getFullYear(),
    m = date.getMonth() + 1,
    d = date.getDate(),
    h = date.getHours(),
    minute = date.getMinutes();
  return `${y}-${fixedZero(m)}-${fixedZero(d)} ${fixedZero(h)}:${fixedZero(minute)}`;
};

/**
 * 前补零
 * @param num
 * @return {*}
 */
const fixedZero = (num = 0) => {
  return (num > 9 ? num : `0${num}`);
};
