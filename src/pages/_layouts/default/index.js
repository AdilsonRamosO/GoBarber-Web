import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function DefaultLayot({ children }) {
  return <Wrapper>{children}</Wrapper>
  
}

DefaultLayot.propTypes = {
    children: PropTypes.element.isRequired,
};