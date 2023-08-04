import { JSONViewer } from '../../../shared/ui/JSONViewer'
import { Button, Form, Input, InputNumber, notification, Space } from 'antd'
import { useEffect, useState,  memo } from 'react'
const { dialogOpen, dialogSave, ipcRenderer } = window.api

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 20 },
    sm: { span: 12 },
  },
};

export const CreateConfigPage = memo(() => {
  const [form] = Form.useForm();
  const [formValue, setFormValue] = useState({})
     
  useEffect(() => {
    setFormValue(form.getFieldsValue())

    // Импорт файлов
    ipcRenderer.on('open-file-paths', (event: any, file: any)=>{
      form.setFieldsValue(file);
      setFormValue(file);
    });
  }, [])

  const onFinish = (values: any) => {
    setFormValue(values);
    try {
      dialogSave(values);
      // notification.info({ message: "Файл успешно сохранен!" });
    } catch (error) {
      // logging the error
      console.error(error);
      throw error;
    }
  }

  // Импорт файлов
  const handleImportFile = () =>  dialogOpen();

  // Input
  const onChangeItem = (event: any) => {
    const value = event.target.value;
    const nameField = event.target.name;
    form.setFieldValue(nameField, value)
    setFormValue(form.getFieldsValue())
  }

  // Number
  const onChangeNumber = (value: any, name: string) => {
    form.setFieldValue(name, value)
    setFormValue(form.getFieldsValue())
  }
 
  return (
    <>
      {/* Form */}
      <Form 
        form={form}
        onFinish={onFinish}
        initialValues={formValue}
        {...formItemLayout}
      >
        <Form.Item name={["Security", "Jwt", "Issuer"]} label="Issuer" tooltip={"Данное поле отвечает за ..."} rules={[{ required: true, message: 'Обязательное поле' }]}>
          <Input onChange={onChangeItem} placeholder={"Введите значение"} />
        </Form.Item>

        <Form.Item name={["Security", "Jwt", "Audience"]} label="Audience" rules={[{ required: true, message: 'Обязательное поле' }]}>
          <Input onChange={onChangeItem} placeholder={"Введите значение"} />
        </Form.Item>

        <Form.Item name={["Security", "Jwt", "SigningKey"]} label="SigningKey" rules={[{ required: true, message: 'Обязательное поле' }]}>
          <Input onChange={onChangeItem} placeholder={"Введите значение"} />
        </Form.Item>

        <Form.Item name={["Security", "Jwt", "SessionLifetimeMin"]} label="SessionLifetimeMin">
          <InputNumber onChange={(value) => onChangeNumber(value, "SessionLifetimeMin")} placeholder={"Введите значение"}/>
        </Form.Item>
        

      <div className='submit-btn'>
        <Space>
          <Button type="default" onClick={handleImportFile}>
            Импорт конфига
          </Button>
          
          <Button type="primary" htmlType="submit">
            Сохранить конфиг
          </Button>
        </Space>
      </div>
      
      </Form>

      {/* JSON viewer */}
      <JSONViewer value={formValue} />
    </>
  )
});
