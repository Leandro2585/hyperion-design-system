import { colors } from '@hyperion-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => (
    <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: getContrast(color, '#FFF') < 2.5 ? '#363636' : '#FFF',
        }}
      >
        <strong>${key}</strong>
        <span>{color}</span>
      </div>
    </div>
  ))
}
