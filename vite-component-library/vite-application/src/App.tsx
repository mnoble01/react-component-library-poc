import './App.css'
// import RslibButton from '@mnoble01/rslib-component-library/components/Button';
import ViteButton from '@mnoble01/vite-component-library/components/Button';

function App() {
  return (
    <>
      <h1>Vite Component Library</h1>
      <div className="card">
        <ViteButton
          type="primary"
          label="Vite Primary Button"
          onClick={() => console.log('Rslib Primary Button Clicked')}
        />
      </div>
      <h1>Rslib Component Library</h1>
      <div className="card">
        <RslibButton
          type="primary"
          label="Rslib Primary Button"
          onClick={() => console.log('Rslib Primary Button Clicked')}
        />
      </div>
    </>
  )
}

export default App
