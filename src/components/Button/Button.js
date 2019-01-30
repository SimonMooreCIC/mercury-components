import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { NTA_LIGHT, FONT_SIZE } from '../../constants';

import {
  PRIMARY,
  TERTIARY,
  WHITE,
  QUARTERY,
} from '../../constants/colours';

const StyledButton = styled.button`
	background: ${PRIMARY};
	border: 1px solid ${PRIMARY};
	color: WHITE;
    cursor: pointer;
    display: flex;
    align-items: center;
  	justify-content: center;
    font-family: ${NTA_LIGHT};
    font-weight: 400;
    font-size: ${FONT_SIZE.SIZE_14};
	min-width: 105px;
    min-height: 40px;
    outline-offset: '-1px';
    outline: '1px solid transparent';
    padding: '.526315em .789473em .263157em';
	text-decoration: 'none';
	text-transform: uppercase;
    webkit-appearance: 'none';
	webkit-font-smoothing: 'antialiased';
	&:hover {
		background: ${WHITE};
		color: ${PRIMARY};
		border: 1px solid ${PRIMARY};
	}
	&:disabled {
		cursor: default;
		color: ${WHITE};
		background: ${PRIMARY};
		border: 1px solid ${PRIMARY};
		opacity: 0.5;
	}
	&:focus {
		color: ${PRIMARY};
		background: ${QUARTERY};
		border: 1px solid ${PRIMARY};
	}
	':active': {
		position: 'relative',
		top: '0',
		box-shadow: 0 0 0 ${TERTIARY},
	}
	':visited': {
		color: ${TERTIARY},
	}
`;

/**
 * The only true button.
 */
const Button = ({ onClick, disabled, children }) => (
	<StyledButton onClick={onClick} disabled={disabled}>
		{children}
	</StyledButton>
);

Button.propTypes = {
	/** Button label */
	children: PropTypes.node.isRequired,
	/** Disable button */
	disabled: PropTypes.bool,
	/** Gets called when the user clicks on the button */
	onClick: PropTypes.func,
};

Button.defaultProps = {
	onClick: event => {
		// eslint-disable-next-line no-console
		console.log('You have clicked me!', event.target);
	},
};

export default Button;