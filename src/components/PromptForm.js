import React, { useState } from 'react';

function PromptForm({ onGenerate }) {
  const [prompt, setPrompt] = useState('');
  const [version, setVersion] = useState('1.20');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://your-vercel-app.vercel.app/api/generate', {  // Replace with your Vercel URL later
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, version })
      });
      if (!response.ok) throw new Error('Generation failed');
      const { code, jarUrl } = await response.json();
      onGenerate(code, jarUrl);
    } catch (error) {
      console.error(error);
      alert('Error generating plugin');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your plugin, e.g., 'A simple shop with GUI for Spigot'"
      />
      <select value={version} onChange={(e) => setVersion(e.target.value)}>
        <option value="1.18.2">1.18.2</option>
        <option value="1.20">1.20</option>
        {/* Add more versions */}
      </select>
      <button type="submit" disabled={loading}>{loading ? 'Generating...' : 'Generate'}</button>
    </form>
  );
}

export default PromptForm;
