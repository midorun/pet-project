type ModsType = Record<string, string | boolean>

const cn = (
  className: string,
  mods: ModsType = {},
  additional?: Array<string | undefined>
) => {
  // eslint-disable-next-line array-callback-return
  const filteredMods = Object.entries(mods).map((entry) => {
    const [key, value] = entry

    if (value) {
      return key
    }
  })

  return [className, ...filteredMods, additional?.join(' ')].join(' ').trim()
}

export default cn
