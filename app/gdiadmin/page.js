"use client"
import React from 'react'
import BaseLayout from '../components/sidebar/BaseLayout'
import Navbartop from '../components/navbar/Adminnavbar'
import Adminlayout from '../components/admin/Adminlayout'
import ProductList from '../components/admin/productlist/Productlist'

const page = () => {
  return (
    <BaseLayout>
      <Navbartop />
      <main className='my-20'>
        <ProductList heading="Popular Products"/>
      </main>
    </BaseLayout>

  )
}

export default page