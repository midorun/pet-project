export const setQueryParams = (params: Record<string, string>) => {
  const urlSearchParams = new URLSearchParams(window.location.search)

  Object.entries(params).forEach((entry) => {
    if (entry[1]) {
      urlSearchParams.set(entry[0], entry[1])
    }
  })

  const url = `?${urlSearchParams.toString()}`

  window.history.replaceState(null, '', url)
}
