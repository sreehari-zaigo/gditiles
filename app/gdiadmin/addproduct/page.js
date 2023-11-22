"use client"
import React from 'react'
import Adminlayout from '@/app/components/admin/Adminlayout'
import Navbartop from '@/app/components/navbar/Adminnavbar'
import BaseLayout from '@/app/components/sidebar/BaseLayout'

const page = () => {
  return (
    <BaseLayout>
      <Navbartop />
      <main className='my-20'>
        <Adminlayout/>
      </main>
    </BaseLayout>

  )
}

export default page