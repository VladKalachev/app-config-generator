
export interface IKeys{
  [key: string]: any;
}

// Получение всех ключей у объекта
export const getKeys = (obj: IKeys): string[] => Object.keys(obj).flatMap(k => Object(obj[k]) === obj[k] 
? [k, ...getKeys(obj[k])] 
: k)