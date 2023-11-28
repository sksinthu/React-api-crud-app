import './App.css';
import Create from './components/create/create';
import Read from './components/read/read';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Update from './components/update/update';

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Routes>
            <Route path='/create' element={<Create />} />
          </Routes>
        </div>
        <div style={{ marginTop: 20 }}>
          <Routes>
            <Route path='/read' element={<Read />} />
          </Routes>
        </div>

        <Routes>
          <Route path='/update' element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
