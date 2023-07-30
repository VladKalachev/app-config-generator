import { JSONViewer } from '../../../shared/ui/JSONViewer'
import demo from '../demo/demo.json'

export const CreateConfigPage = () => {
  return (
    <>
      {/* Form */}
      <div>Form</div>

      {/* JSON viewer */}
      <JSONViewer value={demo} />

      {/* Sava button */}
    </>
  )
}
