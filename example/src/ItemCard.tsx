import React from 'react'
import './index.css'
type ItemCardProps = {
  item: any
}

const ItemCard = ({ item }: ItemCardProps) => {
  const { url, detail, width, height } = item
  return (
    <div className='card_container'>
      <div className='card'>
        <div className='cover'>
          <img
            src={url}
            alt={'a random'}
            crossOrigin='anonymous'
            loading='lazy'
          />
        </div>
        <div className='detail'>
          <p>
            <i>{`${width}x${height}`}</i>
          </p>
          <p className='description'>{detail}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
