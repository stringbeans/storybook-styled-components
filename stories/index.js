import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '../components/Button'
import ExtendedButton from '../components/ExtendedButton'

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
  .add('primary', () => (
    <Button onClick={action('clicked')} primary>Primary</Button>
  ))
  .add('danger', () => (
    <Button onClick={action('clicked')} danger>Primary</Button>
  ))

storiesOf('ExtendedButton', module)
  .add('with text', () => (
    <ExtendedButton onClick={action('clicked')}>Hello ExtendedButton</ExtendedButton>
  ))
  .add('with some emoji', () => (
    <ExtendedButton onClick={action('clicked')}>😀 😎 👍 💯</ExtendedButton>
  ))
  .add('primary', () => (
    <ExtendedButton onClick={action('clicked')} primary>Primary</ExtendedButton>
  ))
  .add('danger', () => (
    <ExtendedButton onClick={action('clicked')} danger>Primary</ExtendedButton>
  ))