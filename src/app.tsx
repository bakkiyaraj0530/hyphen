import * as React from 'react';
import { Header, Questionaire } from './components';
import './css/site.css';

export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className='main-container'>
      <Header />
      <Questionaire />
    </div>
  );
};
