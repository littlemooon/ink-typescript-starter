import React from 'react'
import chalk from 'chalk'
import { render } from 'ink-testing-library'
import App from '../src/App'

test('greet unknown user', () => {
  const { lastFrame } = render(<App />)

  expect(lastFrame()).toBe(chalk`Hello, {green Stranger}`)
})

test('greet user with a name', () => {
  const { lastFrame } = render(<App name="Jane" />)

  expect(lastFrame()).toBe(chalk`Hello, {green Jane}`)
})
