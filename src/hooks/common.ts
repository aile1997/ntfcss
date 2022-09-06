export function move() {
  let startX: any
  let direction: any
  const getTouchstartX = (e: any) => {
    startX = e.changedTouches[0].pageX //将手指对应的y轴坐标赋值给data中的startY
  }

  const touchmove = (e: any) => {
    const moveEndX = e.changedTouches[0].pageX
    const X = moveEndX - startX //如果值为正,则代表手指下滑,反则则为上滑,为0则表示点击
    if (X > 0) {
      direction = 'right'
    } else if (X < 0) {
      direction = 'left'
    }
  }

  const touchmoveend = (other: any) => {
    other = direction
    console.log(other)
  }
  return [getTouchstartX, touchmove, touchmoveend]
}
