interface Size {
  indents: string
  fontSize: string
  lineHeight: string
}

const getSize = (size: string): Size => {
  switch (size) {
    case 'small':
      return {
        indents: '2px 8px',
        fontSize: 'small.semiIncreased',
        lineHeight: 'medium',
      }
    case 'medium':
      return {
        indents: '2px 10px',
        fontSize: 'small.semiLarge',
        lineHeight: 'small',
      }
    case 'large':
      return {
        indents: '4px 12px',
        fontSize: 'small.semiLarge',
        lineHeight: 'small',
      }

    default:
      return {
        indents: '2px 8px',
        fontSize: 'small.semiIncreased',
        lineHeight: 'medium',
      }
  }
}

export { getSize }
