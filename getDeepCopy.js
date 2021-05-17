const isObject = o => typeof o === 'object'

function getDeepCopy(obj) {
  let newObj;
  for (const key in obj) {

    if (isObject(obj[key])) {
      newObj = { ...obj }
      newObj[key] = { ...getDeepCopy(obj[key]) }
    }

    if (Array.isArray(obj[key])) {
      newObj[key] = [...obj[key]]
    }

  }
  return newObj;
}
const newObj = getDeepCopy(obj);
