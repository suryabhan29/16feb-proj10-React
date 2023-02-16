import React from 'react'
import Header from './components/Header';
import Aside from './components/layouts/Aside';
import Footer from './components/layouts/Footer';
import Section from './components/layouts/Section';
import './Style.css';


export default function App() {
  return (
    <>
        <Header />
        <main>
            <div className='container s_cont h-100'>
                <div className='row h-100'>
                    <Aside cls="s_leftaside">leftaside</Aside>
                    <Section></Section>
                    <Aside cls="s_Rightaside">Right aside</Aside> 
                </div>
        
            </div>
    </main>
        <Footer/>
  </>
  )
}
