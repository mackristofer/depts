
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lista from './lista';
import Login from './login';
import PrivateRoute from './rotaprivada';
import Topo from './topo';

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
