import CategoryItem from '@/components/atoms/CategoryItem'
import React from 'react'
import { CATEGORY_DATA } from '@/utils/category-data'

const Category = () => {
  return (
    <div className="flex gap-2.5 overflow-x-scroll w-[80vw]">
      {CATEGORY_DATA.map((item) => (
        <CategoryItem title={item.title} isActive={item.isActive} key={item.title} />
      ))}
    </div>
  )
}

export default Category