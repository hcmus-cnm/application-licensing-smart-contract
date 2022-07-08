import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import Button from './components/Button';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import License from './components/License';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';
import ManageLicens from './pages/ManageLicenses';
import Navigation from './components/Navigation';

function App() {
  return (
    // <>
    //   <div className="container">
    //     <PageTitle>TODO List</PageTitle>
    //     <div className={styles.app__wrapper}>
    //       <AppHeader />
    //       <AppContent />
    //       {/* <License /> */}
    //     </div>
    //   </div>
    //   <Toaster
    //     position="bottom-right"
    //     toastOptions={{
    //       style: {
    //         fontSize: '1.4rem',
    //       },
    //     }}
    //   />
    // </>
    <BrowserRouter>
      <div className="container">
        <Navigation />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/manage-licenses" element={<ManageLicens />} />
        </Routes>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
