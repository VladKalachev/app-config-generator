import './JSONViewer.css';

interface JSONViewerProps {
  value: any;
}

export const JSONViewer = ({ value }: JSONViewerProps) => {
  return (
    <div className="json-wrapper">
      <pre className="json-per">
        {JSON.stringify(value, 0, 2)}
      </pre>
    </div>
  )
} 