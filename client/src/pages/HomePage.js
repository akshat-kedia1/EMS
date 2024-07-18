import React from 'react'
import Layout from '../components/Layout/Layout'
function HomePage() {
  return (
    <Layout>
     <div className='filters'>
     <div>range filters</div>
     <div>
      <button className='btn btn-primary'>Add new</button>
     </div>

     </div>
     <div className='content'></div>
    </Layout>
  )
}

export default HomePage
