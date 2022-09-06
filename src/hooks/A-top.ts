import { ElNotification } from 'element-plus'
import 'element-plus/theme-chalk/el-notification.css'

export function useNotification() {
  const open1 = () => {
    ElNotification({
      title: 'Success',
      message: 'This is a success message',
      type: 'success'
    })
  }

  const open2 = () => {
    ElNotification({
      title: 'Warning',
      message: 'This is a warning message',
      type: 'warning'
    })
  }

  const open3 = () => {
    ElNotification({
      title: 'Info',
      message: 'This is an info message',
      type: 'info'
    })
  }

  const open4 = () => {
    ElNotification({
      title: 'Error',
      message: 'This is an error message',
      type: 'error'
    })
  }
  return [open1, open2, open3, open4]
}

export function jumps() {
  const jump = (index: number) => {
    // 用 class="d_jump" 添加锚点
    const jump: any = document.querySelectorAll('.d_jump')
    let setTimeouts: any

    const total = jump[index].offsetTop
    let distance =
      document.documentElement.scrollTop ||
      window.pageYOffset ||
      document.body.scrollTop
    // 平滑滚动，时长500ms，每10ms一跳，共50跳
    let step = total / 50
    if (total > distance) {
      setTimeouts = setInterval(smoothDown, 1)
      // smoothDown()
    } else {
      const newTotal = distance - total
      step = newTotal / 50
      setTimeouts = setInterval(smoothUp, 1)
    }
    function smoothDown() {
      if (distance < total) {
        distance += step
        document.body.scrollTop = distance
        document.documentElement.scrollTop = distance
      } else {
        document.body.scrollTop = total
        document.documentElement.scrollTop = total
        clearInterval(setTimeouts)
      }
    }
    function smoothUp() {
      if (distance > total) {
        distance -= step
        document.body.scrollTop = distance
        document.documentElement.scrollTop = distance
      } else {
        document.body.scrollTop = total
        document.documentElement.scrollTop = total
        clearInterval(setTimeouts)
      }
    }
  }
  return jump
}
