// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import LoginPage from './components/LoginPage';
import Unauthorize from './components/Unauthorize';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          {/* <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/ErrorPage" element={<ErrorPage />} />
          <Route path="/Unauthorize" element={<Unauthorize />} /> */}
          <Route path="" exac element={<LoginPage />} />
          <Route path="HomePage" element={<HomePage />} />
          <Route path="Unauthorize" element={<Unauthorize />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;