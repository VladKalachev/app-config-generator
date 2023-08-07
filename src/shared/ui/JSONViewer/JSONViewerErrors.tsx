import { Alert } from "antd";

interface JSONViewerErrorsProps {
  errors: string[];
}

export const JSONViewerErrors = ({ errors }: JSONViewerErrorsProps) => {
  if (!errors.length) {
    return 
  }

  return  (
    <>
      <div className="list-errors-title">Список ошибок</div>
        {errors.map((value) => (
          <div className="field-error" key={value}>
            <Alert message={`Поля ${value} нет в схеме! Поле не валидное!`} type="error" showIcon/>
            </div>)
        )}
    </>
    )
}