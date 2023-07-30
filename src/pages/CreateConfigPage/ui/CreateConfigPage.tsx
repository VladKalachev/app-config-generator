import { JSONViewer } from '../../../shared/ui/JSONViewer'
import demo from '../demo/demo.0.1.json'
import { Button, Form, Input, InputNumber} from 'antd'
import { useState } from 'react'
// import * as fs from "fs";

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

  const [formValue, setFormValue] = useState(demo)

  const onFinish = (values: any) => {
    console.log('form value', values)
    setFormValue(values);

    function download(content: any, fileName: string, contentType: string) {
      const a = document.createElement("a");
      const file = new Blob([content], {type: contentType});
      a.href = URL.createObjectURL(file);
      a.download = fileName;
      a.click();
    }

    // download(JSON.stringify(values), 'json.txt', 'text/plain')

    // try {
    //   // reading a JSON file synchronously
    //   fs.writeFileSync("data.json", values);
    // } catch (error) {
    //   // logging the error
    //   console.error(error);
    
    //   throw error;
    // }
  }

  return (
    <>
      {/* Form */}
      <Form 
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
        

        <Button type="primary" htmlType="submit">
          Сохранить конфиг
        </Button>
      </Form>

      {/* JSON viewer */}
      <JSONViewer value={formValue} />
    </>
  )
}
