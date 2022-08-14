import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PetList from './components/PetList';
import NewPet from './components/NewPet';
import Pet from './components/Pet';
import Header from './components/Header';
import UpdatePet from './components/UpdatePet';

function App() {
  return (
    <BrowserRouter>
      <div >
        <Header />
        <div className="d-flex justify-content-center">
          <Routes >
            <Route path="/" element={<PetList />} />
            <Route path="/new" element={<NewPet />} />
            <Route path="/pet/:id" element={<Pet />} />
            <Route path="/pet/edit/:id" element={<UpdatePet />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
