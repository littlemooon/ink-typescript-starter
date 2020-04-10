import React from 'react'
import { render } from 'ink'
import meow, { StringFlag } from 'meow'
import App from './App'

export type Flags = {
  name?: string
}

const cli = meow<{ name: StringFlag }>(`
  Usage
    $ ink-typescript-starter

  Options
    --name Your name

  Examples
    $ ink-typescript-starter --name=Jane
    Hello, Jane
`)

const flags = cli.flags as Flags

render(React.createElement(App, flags))
