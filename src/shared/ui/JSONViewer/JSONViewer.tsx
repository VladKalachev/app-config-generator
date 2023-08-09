import Highlighter from "react-highlight-words";
import demo from '../../../pages/CreateConfigPage/scheme/scheme1.json'
import { getKeys } from '../../../shared/lib/getKeys';
import './JSONViewer.css';
import { JSONViewerErrors } from './JSONViewerErrors';

interface JSONViewerProps {
  value: any;
}

export const JSONViewer = ({ value }: JSONViewerProps) => {

  // TODO
  // 1. СФормировать массив  всех ключей объекта
  // 2. Сформировать массив ключей объекта из схема
  // 3. Сравнить два массива, элементы которых нет в схеме сформировать в отдельный массив
  // 4. Написать функция с подсветкой всех значений которые будут переданны в массиве 

  // Формируем массив всех ключей объекта по выбранной схеме
  const arraySchema = getKeys(demo)
  // Формируем массив всех ключей объекта из текущей формы
  const currentValueArray = getKeys(value);
  // Убираем из массива ключей текущей формы все ключи которые совпадают со схемой
  const validationArray = currentValueArray.filter((val: string) => !arraySchema.includes(val));

  return (
    <>
      {/* List Error */}
      <div className="list-errors">
        <JSONViewerErrors errors={validationArray} />
      </div>

      <div className="json-wrapper">
        {/* JSON */}
        <pre className="json-per">
          <Highlighter 
          searchWords={validationArray}
          highlightStyle={{ background: "red" }}
          textToHighlight={JSON.stringify(value, null, 2)}
          />
        </pre>
      </div>
    </>

  )
} 