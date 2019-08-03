import * as React from 'react';
import '../css/site.css';

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div>
      <div className='row'>
        <h2>Custom questions</h2>
      </div>
      <div className='row'>
        <h6>You must add at least one question to launch a survey</h6>
      </div>
    </div>
  );
};
