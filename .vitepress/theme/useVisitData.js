/**
 * 网站访问量统计 hooks
 */
function useVisitData() {
    const script = document.createElement('script')
    script.defer = true
    script.async = true
    // 调用 不蒜子 接口
   script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
    document.head.appendChild(script)
    console.log('不蒜子统计已加载')
  }
  
  export default useVisitData
  