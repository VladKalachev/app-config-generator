import { JSONViewer } from '../../../shared/ui/JSONViewer'
import demo from '../demo/demo.0.1.json'
import { Button, Form, Input, InputNumber, notification, Space } from 'antd'
import { useEffect, useState, useMemo } from 'react'
const { dialogOpen, dialogSave, ipcRenderer } = window.api

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

export const CreateConfigPage = () => {
  const [form] = Form.useForm();
  const [formValue, setFormValue] = useState({})

  useEffect(() => {
    ipcRenderer.on('open-file-paths', (event: any, file: any)=>{
      form.setFieldsValue(file);
      setFormValue(file);
    });
  }, [])

  const onFinish = (values: any) => {
    console.log('form value', values)
    setFormValue(values);

    try {
      dialogSave(values);

      // window.electron.openDialog();
      // console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))
      // fs.writeFileSync("data.json", JSON.stringify(values));
      // notification.info({ message: "Файл успешно сохранен!" });
    } catch (error) {
      // logging the error
      console.error(error);
      throw error;
    }
  }

  const handleImportFile = () => {
    dialogOpen();
  }
 
  return (
    <>
      {/* Form */}
      <Form 
        form={form}
        onFinish={onFinish} 
        style={{ maxWidth: 600 }} 
        // onFieldsChange={(_, allFields: any) => {
        //   console.log('onFieldsChange', allFields)
        //   setFormValue(allFields);
        // }}
        {...formItemLayout}
        initialValues={formValue}
      >
        <Form.Item name={["Security", "Jwt", "Issuer"]} label="Issuer" >
          <Input />
        </Form.Item>

        <Form.Item name={["Security", "Jwt", "Audience"]} label="Audience">
          <Input />
        </Form.Item>

        <Form.Item name={["Security", "Jwt", "SigningKey"]} label="SigningKey">
          <Input />
        </Form.Item>

        <Form.Item name={["Security", "Jwt", "SessionLifetimeMin"]} label="SessionLifetimeMin">
          <InputNumber />
        </Form.Item>
        

      <Space>
        <Button type="default" onClick={handleImportFile}>
          Импорт конфига
        </Button>
        
        <Button type="primary" htmlType="submit">
          Сохранить конфиг
        </Button>
      </Space>
      
      </Form>

      {/* JSON viewer */}
      <JSONViewer value={formValue} />
    </>
  )
}
