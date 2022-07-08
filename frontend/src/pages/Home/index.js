import React from 'react';

import AppContent from '../../components/AppContent';
import AppHeader from '../../components/AppHeader';

import PageTitle from '../../components/PageTitle';

import styles from '../../styles/modules/app.module.scss';

const Home = () => {
  console.log('home');
  return (
    <div className={styles.app__wrapper}>
      <PageTitle>TODO List</PageTitle>
      <AppHeader />
      <AppContent />
    </div>
  );
};

export default Home;
