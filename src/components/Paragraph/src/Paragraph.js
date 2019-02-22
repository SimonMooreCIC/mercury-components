import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { GOTHAM } from '../../../constants';

const StyledParagraph = styled.p`
	margin: 0 0 20px;
	font-family: ${GOTHAM};
}`;

const Paragraph = props => <StyledParagraph {...props} />;

Paragraph.propTypes = {
  /** Text in the paragraph */
  children: PropTypes.node.isRequired,
};

export default Paragraph;