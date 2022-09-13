import React, { useEffect, useState } from 'react'
import {Navbar,Hero,Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer} from './Components'
import styles from './style'



const App = () => {

  let [arrowState,setArrowState]=useState('down')

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=150){
        setArrowState('up')
      }
      else {
        setArrowState('down')

      }
    })

  },[])

let handelGo=(name)=>{
  if(name==='up'){
    window.scrollTo(0,0)
  }
  if(name==='down'){
    let len=document.body.scrollHeight
    // window.outerHeight
    window.scrollTo(0,len)
  }
}

  return (
    <div className='bg-primary w-full overflow-hidden'>
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
  


  <div className={`${styles.boxWidth}`}>

    <Navbar/>

  </div>
     </div>


    <div className={`bg-primary ${styles.flexStart}`}>
   <div className={`${styles.boxWidth}`}>
<Hero/>
   </div>
    </div>


    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
   <div className={`${styles.boxWidth}`}>
<Stats/>
<Business/>
<Billing/>
<CardDeal/>
<Testimonials/>
<Clients/>
<CTA/>
<Footer/>
   </div>
    </div>




<div 
className='fixed bottom-[12px]
right-[25px]
text-white
animate-bounce
w-[50px]
h-[50px]
z-[6]
bg-white
rounded-full
'>

  {
    arrowState==='down' ?
  
<img 
alt='img'
src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWTsPJqNEwxav3Do6NwxHF8t6TaSbqTq32FU84m5VH7A&s'
className='
rounded-full
cursor-pointer
'
onClick={()=>handelGo('down')}
/>

:

<img 
alt='img'
src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Eo_circle_red_arrow-up.svg/512px-Eo_circle_red_arrow-up.svg.png?20200417173148'
className='
rounded-full
cursor-pointer
'
onClick={()=>handelGo('up')}

/>


}
</div>

    </div>
  )
}

export default App