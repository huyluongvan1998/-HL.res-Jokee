import React from 'react';

import brand from '../../images/joke-brand.svg';
import user from '../../images/user.svg';

export const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='brand'>
          <img src={brand} alt='err' />
        </div>
        <div className='user'>
          <div className='user-profile '>
            <div className='user-profile-title grey-1'>Hancrafted By</div>
            <div className='user-profile-name'>Jack</div>
          </div>
          <div className='user-image'>
            <img src={user} alt='err' />
          </div>
        </div>
      </div>
    </header>
  );
};
