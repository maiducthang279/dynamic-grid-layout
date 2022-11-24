# dynamic-grid-layout

> A dynamic grid layout, inspiration from Pinterest

[![NPM](https://img.shields.io/npm/v/dynamic-grid-layout.svg)](https://www.npmjs.com/package/dynamic-grid-layout) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save dynamic-grid-layout
```

## Usage

```tsx
import React, { Component } from 'react'

import { GridView } from 'dynamic-grid-layout'
import 'dynamic-grid-layout/dist/index.css'

const Item = ({ item }: any) => <p>{item}</p>

const Example = () => {
  const items = ['item1', 'item2']
  return (
    <GridView
      items={items}
      renderItem={(item: any) => <Item item={item}></Item>}
    />
  )
}
```

## License

MIT © [](https://github.com/)
