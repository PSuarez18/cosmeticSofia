import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Opinions from '../components/Opinions/Opinions'

const Services = () => {
  return (
    <div className='service-page'>
        <header>
            <NavBar/>
        </header>

        <main>
            <Opinions/>

        </main>

        <footer>

        </footer>
    </div>
  )
}

export default Services