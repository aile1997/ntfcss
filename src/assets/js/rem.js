function myReady(fn) {
  //对于现代浏览器，对DOMContentLoaded事件的处理采用标准的事件绑定方式
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn, false)
  } else {
    IEContentLoaded(fn)
  }
  //IE模拟DOMContentLoaded
  function IEContentLoaded(fn) {
    var d = window.document
    var done = false

    //只执行一次用户的回调函数init()
    var init = function () {
      if (!done) {
        done = true
        fn()
      }
    }
    ;(function () {
      try {
        // DOM树未创建完之前调用doScroll会抛出错误
        d.documentElement.doScroll('left')
      } catch (e) {
        //延迟再试一次~
        setTimeout(arguments.callee, 50)
        return
      }
      // 没有错误就表示DOM树创建完毕，然后立马执行用户回调
      init()
    })()
    //监听document的加载状态
    d.onreadystatechange = function () {
      // 如果用户是在domReady之后绑定的函数，就立马执行
      if (d.readyState == 'complete') {
        d.onreadystatechange = null
        init()
      }
    }
  }
}
function setRem() {
  // var windowWidth = window.screen.width
  //1、获得设计稿尺寸
  let ulSize
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    ulSize = 790
  } else {
    ulSize = 1920
  }

  //2、获得当前视口的宽度
  let winSize = document.documentElement.clientWidth
  //3、计算布局视口的缩小比例
  let rate = winSize / ulSize

  document.documentElement.style.fontSize = 100 * rate + 'px'
}

//setRem()在页面加载结束执行
myReady(function () {
  setRem()
})
onresize = setRem
