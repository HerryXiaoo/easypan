/**
 * 网站访问量统计 hooks
 */
function useVisitData() {
    const script = document.createElement('script')
    script.defer = true
    script.async = true
    // 调用 Vercount 接口
    script.src = 'https://cn.vercount.one/js'
    document.head.appendChild(script)
  }
  
  export default useVisitData
  