export function groupCategories (animations, categories) {
  const organizedCategories = {}
  const animationMap = Object.keys(animations)
  categories.forEach(category => {
    organizedCategories[category] = []
  })
  for (const animation of animationMap) {
    const category = animation.split('-').find((key) => categories.includes(key))
    if (organizedCategories[category]) {
      organizedCategories[category].push(animation)
    } else {
      // eslint-disable-next-line dot-notation
      organizedCategories['miscellaneous'].push(animation)
    }
  }
  return organizedCategories
}
