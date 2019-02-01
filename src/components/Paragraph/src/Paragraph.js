import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { GOTHAM } from '../../../constants';

const StyledParagraph = styled.p`
	margin: 0 0 20px;
	font-family: ${GOTHAM};
}`;

/**
 * The only true button.
 */
const Paragraph = props => <StyledParagraph {...props} />;

Paragraph.propTypes = {
  /** Text in the paragraph */
  children: PropTypes.node.isRequired,
};

export default Paragraph;