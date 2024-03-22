export function formatTitle (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function formatClass (string) {
  return string.split(/(?=[A-Z])/).join('-').toLowerCase()
}

export function formatAnimationTitle (string) {
  return formatTitle(string.split(/(?=[A-Z])/).join(' '))
}

export function formatCSSClass (string) {
  return formatClass(string.replace('animation', 'animate'))
}
