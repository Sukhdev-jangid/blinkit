import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './common/Header.jsx'
import Banner from './Banner.jsx'
import Category from './Category.jsx'
import Dairy from './Dairy.jsx'
import Footer from './common/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Banner/>
    <Category/>
    <Dairy/>
    <Footer/>
  </StrictMode>,
)
