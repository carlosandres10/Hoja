import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Encabezado from '../components/molecules/Encabezado';
import Experience from '../components/molecules/experience';
import Estudios from '../components/molecules/Estudios';
import Personales from '../components/molecules/Personales';

function App(){
    return (
        <BrowserRouter>
        <Routes>
           
            <Route path='/' element={<Encabezado/>}/>
        </Routes>
        <Routes>
            <Route path='/' element={<Experience/>}/>

        </Routes>

        <Routes>
            <Route path='/' element={<Estudios/>}/>

        </Routes>

        <Routes>
            <Route path='/' element={<Personales/>}/>

        </Routes>
        
        </BrowserRouter>
      
    );
}

export default App;
