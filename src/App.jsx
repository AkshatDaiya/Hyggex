import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './partials/Navbar'
import Breadcrumbs from './partials/Breadcrumbs';
import Carousel from './partials/Carousel';
import Divider from './partials/Divider';
import FAQ from './partials/FAQ';

function App() {



  return (
    <BrowserRouter>
      <main id='Page'>

        {/* Navbar */}
        <Navbar />

        <section id='pageSection' className='w-11/12 mx-auto mt-[72px]'>

          {/* Breadcrumbs */}
          <Breadcrumbs />

          {/* Carousel */}
          <Carousel />

          {/* Divider */}
          <Divider />

          {/* FAQ */}
          <FAQ />

        </section>
      </main>
    </BrowserRouter>
  )

}

export default App
