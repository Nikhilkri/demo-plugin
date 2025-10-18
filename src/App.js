import React, { useState } from 'react';
import PromptForm from './components/PromptForm';
import Editor from './components/Editor';

function App() {
  const [code, setCode] = useState('');
  const [jarUrl, setJarUrl] = useState('');

  const handleGenerate = (generatedCode, url) => {
    setCode(generatedCode);
    setJarUrl(url);
  };

  return (
    <div>
      <h1>Minecraft AI Plugin Generator</h1>
      <PromptForm onGenerate={handleGenerate} />
      {code && <Editor code={code} onChange={setCode} />}
      {jarUrl && <a href={jarUrl} download>Download JAR</a>}
    </div>
  );
}

export default App;
