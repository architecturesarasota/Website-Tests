import '@mapbox/mbx-assembly/dist/assembly.js';
import '@mapbox/mbx-assembly/dist/assembly.css';

function App() {
    return (
        <div className='App h-viewport-full'>
            <h1>Mapbox Storytelling Demo</h1>
            <iframe
                height='100%'
                width='100%'
                style={{ border: 'none' }}
                src={import.meta.env.BASE_URL + '/storytelling.html'}
                title="Storytelling Map"
            />
        </div>
    );
}

export default App;
