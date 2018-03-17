import React from 'react'
import styled, { css } from 'styled-components'
import * as GLOBALS from '../styles/globals'
import * as TACHYONS from '../styles/tachyons'

const BaseButton = styled.button`
  margin: 0;
  outline: 0;
  font-family: inherit;
  font-size: 100%;
  background: none;
  cursor: pointer;
  border-radius: 2px;
  display: inline-block;
  font-size: ${GLOBALS.SIZES.TEXT_DEFAULT};
  height: ${GLOBALS.SIZES.BUTTON.HEIGHT};
  line-height: ${GLOBALS.SIZES.BUTTON.LINE_HEIGHT};
  ${GLOBALS.SIZES.BUTTON_PADDING}
  vertical-align: middle;
  white-space: nowrap;
  border: 1px solid #dfe3e5;
  color: ${GLOBALS.COLORS.TEXT.PRIMARY};
  background-color: #fff;

  &:hover {
    ${TACHYONS.BORDERS.DOTTED}
    border-color: #0792d4;
  }

  ${props => props.primary && css`
    background: ${GLOBALS.COLORS.BTN_PRIMARY};
    border-color: ${GLOBALS.COLORS.BTN_PRIMARY};
    color: ${GLOBALS.COLORS.TEXT.IN_FILL}
  `}

  ${props => props.danger && css`
    background: ${GLOBALS.COLORS.BTN_DANGER};
    border-color: ${GLOBALS.COLORS.BTN_DANGER};
    color: ${GLOBALS.COLORS.TEXT.IN_FILL}
  `}
`

// export default Button

export default class Button extends BaseButton {
  render() {
    return <BaseButton onClick={this.props.onClick}>{this.props.children}</BaseButton>
  }
}