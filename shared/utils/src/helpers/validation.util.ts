const validation = {}

const requirement = ({ type, value }) => {
  const predicate = validation[type]

  return predicate(value)
}

export { requirement }
