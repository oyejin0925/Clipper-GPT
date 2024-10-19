import { BrowserRouter, Routes, Route } from 'react-router-dom';

import styled from 'styled-components';
import Main from './pages/main';
import NavBar from './components/navbar';
import EditStep1 from './pages/edit/editStep1';
import EditStep2 from './pages/edit/editStep2';
import EditStep3 from './pages/edit/editStep3';
import EditStep4 from './pages/edit/editStep4';
import AboutUs from './pages/aboutUs';
import QnA from './pages/qna';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Wrap>
      <NavBar />
          <Container>
            <Routes>
              <Route path='/' element={<Main />}/>
              <Route path='/editstep1' element={<EditStep1 />}/>
              <Route path='/editstep2' element={<EditStep2 />}/>
              <Route path='/editstep3' element={<EditStep3 />}/>
              <Route path='/editstep4' element={<EditStep4 />}/>
              <Route path='/aboutus' element={<AboutUs />}/>
              <Route path='/qna' element={<QnA />}/>
            </Routes>
          </Container>
      </Wrap>
    </div>
  </BrowserRouter>
  )
}

const Wrap = styled.div`
`;
const Container = styled.div`
`;
export default App
