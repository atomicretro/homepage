import React from 'react';

import '../../scss/contact.scss';

const Toolbox = ({ isHidden }) => {
  const tabIndex = isHidden ? '-1' : '0';

  return(
    <div className='contact'>
      toolbox
    </div>
  );
}

export default Toolbox;
