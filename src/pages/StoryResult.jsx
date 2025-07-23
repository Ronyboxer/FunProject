export default function StoryResult({ template, inputs, onTryAnother }) {
  let result = template;
  Object.entries(inputs).forEach(([key, value]) => {
    result = result.replaceAll(`[${key}]`, value);
  });
  return (
    <div className="madlibs-result">
      <h2>Your Mad Libs Story</h2>
      <p className="madlibs-story-text">{result}</p>
      <button onClick={onTryAnother}>Try Another</button>
    </div>
  );
} 