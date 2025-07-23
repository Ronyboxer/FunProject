import BUTTON_POSITIONS from './madlibButtonPositions';

export default function MadLibSelector({ templates, onSelect }) {
  return (
    <div className="madlibs-selector">
      <h2 className='madlibs-selector-title'>Select a Mad Lib Story</h2>
      <ul>
        {templates.map((tpl, idx) => {
          const pos = BUTTON_POSITIONS[idx % BUTTON_POSITIONS.length];
          return (
            <li
              key={idx}
              style={{ top: pos.top + '%', left: pos.left + '%', minWidth: 0 }}
            >
              <button className="madlib-random-btn" onClick={() => onSelect(idx)}>{tpl.title}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
} 