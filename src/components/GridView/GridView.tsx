import React, { useEffect, useState } from 'react'
import { useWindowSize } from '../../hook/useWindowSize.js'
import styles from '../../styles.module.css'

interface GridViewProps {
  items: any[]
  renderItem: Function
}
const BreakPoints = [
  { name: 'xs', width: 0, col: 1 },
  { name: 'sm', width: 576, col: 2 },
  { name: 'md', width: 768, col: 2 },
  { name: 'lg', width: 992, col: 3 },
  { name: 'xl', width: 1200, col: 4 },
  { name: 'xxl', width: 1600, col: 6 }
]
const GridView = (props: GridViewProps) => {
  const { items, renderItem } = props
  const { width } = useWindowSize()
  const [col, setCol] = useState(1)
  const [gridItems, setGridItems] = useState<any[][]>([])

  useEffect(() => {
    const numberOfCol = getCol(width || window.innerWidth)
    if (numberOfCol !== col) {
      setCol(numberOfCol)
    }
  }, [width])

  useEffect(() => {
    const grid: any[][] = []
    for (let i = 0; i < col; i++) {
      grid.push([])
    }
    items.forEach((item, index) => {
      grid[index % col].push(item)
    })
    setGridItems(grid)
  }, [col, items])

  const getCol = (screenWidth: number) => {
    const [breakPoint] = BreakPoints.filter(
      ({ width }) => width < screenWidth
    ).slice(-1)
    return breakPoint.col || 1
  }

  return (
    <div className={styles.grid_container}>
      {gridItems.map((items, index) => (
        <div
          key={index}
          className={styles.grid_column}
          style={{ flexBasis: `${100 / col}%` }}
        >
          <div className={styles.grid_column_spacing}>
            {items.map((item, i) => (
              <div key={i}>{renderItem(item)}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default GridView
