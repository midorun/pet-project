import { useEffect } from 'react'

export const useDebouncedCb = (
  cb: () => void,
  deps: unknown[],
  delay = 1000
) => {
  useEffect(() => {
    const timer = setTimeout(() => cb(), delay)

    return () => {
      clearTimeout(timer)
    }
  }, [...deps])
}
