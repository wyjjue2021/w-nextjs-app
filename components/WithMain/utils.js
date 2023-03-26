// 创建面包屑本地缓存
export const setHistoryBreadcrumb = historyBreadcrumb => {
  const historyBreadcrumbStr = JSON.stringify(historyBreadcrumb);
  localStorage.setItem('historyBreadcrumb1', historyBreadcrumbStr);
};
// 读取面包屑本地缓存
export const getHistoryBreadcrumb = () => {
  const historyBreadcrumbStr = localStorage.getItem('historyBreadcrumb1') || '[]';
  const historyBreadcrumb = JSON.parse(historyBreadcrumbStr);
  return historyBreadcrumb;
};
