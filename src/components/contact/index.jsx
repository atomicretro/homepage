import React from 'react';

import '../../scss/contact.scss';

const Contact = ({ isHidden }) => {
  const tabIndex = isHidden ? '-1' : '0';

  return(
    <div className='contact'>
      <a href='mailto:ajcuccia+dev@gmail.com' tabIndex={ tabIndex }>Email</a>
      <a href='https://www.github.com/atomicretro' rel='noopener noreferrer' target='_blank' tabIndex={ tabIndex }>GitHub</a>
      <a href='https://www.linkedin.com/in/alec-cuccia' rel='noopener noreferrer' target='_blank' tabIndex={ tabIndex }>LinkedIn</a>
    </div>
  );
}

export default Contact;
