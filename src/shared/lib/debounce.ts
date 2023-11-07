export const debounce = (cb: () => void, ms = 2000) => {
  let timeout: NodeJS.Timeout

  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb()
    }, ms)
  }
}
