import Video from '@/components/organism/Video'
import HomeLayout from '@/components/templates/HomeLayout'
import React from 'react'

const DetailVideo = () => {
  return (
    <HomeLayout isDetail>
      <div className='grid grid-cols-10 mx-10 gap-5'>
        <div className='col-span-7'>
          <Video />
        </div>
        <div className='col-span-3'>List Card</div>
      </div>
    </HomeLayout>
  )
}

export default DetailVideo