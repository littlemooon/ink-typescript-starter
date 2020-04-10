import { Color, Text } from 'ink'
import React from 'react'
import { Flags } from './cli'

export default function App({ name }: Flags) {
  return (
    <Text>
      Hello, <Color green>{name ?? 'Stranger'}</Color>
    </Text>
  )
}
