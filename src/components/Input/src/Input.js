import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { PRIMARY, BLACK, ERROR_COLOUR } from '../../../constants/colours';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  GOTHAM,
} from '../../../constants';

const StyledInput = styled.input`
	  box-sizing: border-box;
	  font-family: ${GOTHAM},
	  webkit-font-smoothing: antialiased;
	  MozOsxFontSmoothing: grayscale;
	  font-weight: 400;
	  text-transform: none;
	  font-size: ${FONT_SIZE.SIZE_16};
	  line-height: ${LINE_HEIGHT.SIZE_16};
	  ${MEDIA_QUERIES.LARGESCREEN}: {
		font-size: ${FONT_SIZE.SIZE_19};
		line-height: ${LINE_HEIGHT.SIZE_19};
		width: 50%;
	  };
	  width: 100%;
	  padding: 5px 4px 4px;
	  border: 2px solid ${BLACK};
	  &:focus: {
		outline: 3px solid ${PRIMARY};
		outlineOffset: 0;
	  },
	},
	({ error, errorColor }) => ({
	  border: error ? 4px solid ${ERROR_COLOUR} : undefined,
	}),
`;

const Input = ({ type, ...props }) => <StyledInput type={type} {...props} />;

Input.propTypes = {
	/**
	 * HTML `<Input />` type
	 */
	type: PropTypes.string,
};

Input.defaultProps = {
	type: 'text',
};

export default Input;