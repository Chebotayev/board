
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';

const Loader = () => <div className='loader-wrapper'>
  <FontAwesomeIcon className='loader' icon={faSpinner} />
</div>

export default Loader;