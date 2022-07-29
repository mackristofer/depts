
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lista from './pages/lista';
import Login from './pages/login';
import PrivateRoute from './componentes/rotaprivada';
import Topo from './componentes/topo';

function App() {

  return (
    <>
    <Topo />
    <BrowserRouter>
    <Routes>
      <Route
        path="/lista"
        element={
          <PrivateRoute path="/">
            <Lista />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
