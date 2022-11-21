import React, { useEffect, useState } from 'react'

import { GridView } from 'dynamic-grid-layout'
import InfiniteScroll from 'react-infinite-scroll-component'
import 'dynamic-grid-layout/dist/index.css'
import ItemCard from './ItemCard'

const App = () => {
  const [items, setItems] = useState<any[]>([])
  useEffect(() => {
    fetchMoreData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renerateRandomItem = () => {
    const width = Math.round(Math.random() * 200) + 500
    const height = Math.round(Math.random() * 200) + 500
    return {
      url: `https://picsum.photos/${width}/${height}`,
      width,
      height,
      detail:
        Math.random() > 0.5
          ? 'A short description'
          : 'A very long description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed odio id turpis fringilla ornare vitae ut libero. Donec sit amet iaculis ligula. Nam at tristique odio, nec mollis sapien. Morbi vel massa metus. Suspendisse porta accumsan turpis. Integer sit amet enim efficitur, semper sem nec, rutrum ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin nunc lorem, fringilla a eros eget, rutrum vehicula ipsum. Vivamus consectetur fringilla porttitor. Etiam tincidunt aliquam nunc nec fermentum. Sed orci urna, porta a mauris a, euismod porttitor nisl. Praesent fringilla dui sed ultrices accumsan. Aenean in ante et enim consequat mollis ac ac dolor.'
    }
  }

  const fetchMoreData = () => {
    const result: any[] = []
    for (let i = 0; i < 20; i++) {
      result.push(renerateRandomItem())
    }
    setItems((prevItems) => [...prevItems, ...result])
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Dynamic grid view</h1>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <GridView
          items={items}
          renderItem={(item: any) => <ItemCard item={item}></ItemCard>}
        />
      </InfiniteScroll>
    </>
  )
}

export default App
