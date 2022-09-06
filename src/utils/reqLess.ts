export default function (name: string) {
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    //移动端CSS
    require(`../assets/less/phone/${name}`)
  } else {
    //PC端CSS
    require(`../assets/less/pc/${name}`)
  }
}
