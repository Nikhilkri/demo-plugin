import React from 'react';
import MonacoEditor from '@monaco-editor/react';

function Editor({ code, onChange }) {
  return (
    <div>
      <h2>Edit Your Code</h2>
      <MonacoEditor
        height="500px"
        language="java"
        theme="vs-dark"
        value={code}
        onChange={onChange}
        options={{ minimap: { enabled: false } }}
      />
    </div>
  );
}

export default Editor;
