
// Получение всех ключей у объекта
export const getKeys = (obj: any) => Object.keys(obj).flatMap(k => Object(obj[k]) === obj[k] 
? [k, ...getKeys(obj[k])] 
: k)