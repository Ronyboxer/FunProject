import { useState } from 'react';
import '../css/ChooseMadLibs.css';
import madLibTemplates from './madLibTemplates';
import MadLibSelector from './MadLibSelector';
import PlaceholderForm from './PlaceholderForm';
import StoryResult from './StoryResult';

function extractPlaceholders(template) {
  return Array.from(template.matchAll(/\[([^\]]+)\]/g)).map(m => m[1]);
}

export default function ChooseMadLibs() {
  const [step, setStep] = useState('select');
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [inputs, setInputs] = useState({});

  const template = selectedIdx !== null ? madLibTemplates[selectedIdx].template : '';
  const placeholders = template ? extractPlaceholders(template) : [];

  return (
    <div className="madlibs-app">
      <h1>SillyFillz</h1>
      {step === 'select' && (
        <MadLibSelector templates={madLibTemplates} onSelect={idx => { setSelectedIdx(idx); setStep('fill'); setInputs({}); }} />
      )}
      {step === 'fill' && (
        <PlaceholderForm template={template} placeholders={placeholders} onSubmit={vals => { setInputs(vals); setStep('result'); }} />
      )}
      {step === 'result' && (
        <StoryResult template={template} inputs={inputs} onTryAnother={() => { setStep('select'); setSelectedIdx(null); setInputs({}); }} />
      )}
    </div>
  );
} 