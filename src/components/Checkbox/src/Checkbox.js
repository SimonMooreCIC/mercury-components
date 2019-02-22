import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BLACK, TERTIARY } from '../../../constants/colours';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  GOTHAM
} from '../../../constants';

const StyledCheckbox = styled.label`
  display: block;
  position: relative;
  margin-bottom: 15px;
`;

const StyledInput = styled.input`
    position: absolute;
    z-index: 1;
    top: 0px;
    left: 0px;
    width: 34px;
    height: 34px;
    opacity: 0;
    cursor: pointer;
    &:checked + span:before {
      opacity: 1;
      background: red;
    };
    &:focus + span:before {
      boxShadow: 0 0 0 4px ${TERTIARY};
    }
  },
  { disabled }  => ({
    cursor: disabled ? auto : pointer;
    & + span: {
      opacity: disabled ? .4 : 1;
      pointerEvents: disabled ? none : auto;
    },
  }),
`;

const StyledLabel = styled.span`
  font-family: ${GOTHAM};
  font-weight: 400;
  text-transform: none;
  font-size: ${FONT_SIZE.SIZE_16};
  line-height: ${LINE_HEIGHT.SIZE_16};
  cursor: pointer;
  padding: 10px 10px 9px 50px;
  position: relative;
  display: block;
  color: ${BLACK};
  &:before {
		content: "";
    display: block;
    border: 2px solid ${BLACK};
    background: transparent;
    width: 34px;
    height: 34px;
    position: absolute;
    top: 0;
    left: 0;
	}
  &:after: {
    content: "";
    border: solid;
    borderWidth: 0 0 5px 5px;
    background: transparent;
    border-top-color: transparent;
    width: 17px;
    height: 7px;
    position: absolute;
    top: 10px;
    left: 8px;
    transform: rotate(-45deg);
    zoom: 1;
    opacity: 1;
  }
`;

const Checkbox = ({
  children, className, ...props
}) => (
  <StyledCheckbox className={className}>
    <StyledInput type="checkbox" {...props} />
    <StyledLabel>{children}</StyledLabel>
  </StyledCheckbox>
);

Checkbox.defaultProps = {
  className: undefined,
};

Checkbox.propTypes = {
  /**
   * Text content for checkbox
   */
  children: PropTypes.node.isRequired,
  /**
   * CSS Classname for outermost container
   */
  className: PropTypes.string,
};

export default Checkbox;