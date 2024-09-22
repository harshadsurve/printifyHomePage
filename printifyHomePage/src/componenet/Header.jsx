import React from 'react'
import Button from './Button'
function Header() {
  const links=[
    {
    name:"Catalog"
    },
    {
      name:"How it work",
      icon:<i class="ri-arrow-down-s-fill"></i>
    },
    {
       name:"Pricing"
    },
    {
        name:"Blog"
    },
    {
           name:"Services",
           icon:<i class="ri-arrow-down-s-fill"></i>
    },
    {
      name:"Use-cases",
      icon:<i class="ri-arrow-down-s-fill"></i>
    },
    {
      name:"Need help?",
      icon:<i class="ri-arrow-down-s-fill"></i>
    }
  ]
  return (
    <header className=' p-[10px] shadow-sm sticky top-0 z-[9999] items-start'>

    <div className='max-w-[1200px] mx-auto  flex items-center'>
       <div className='w-[160px]'>
         <img src="imgaes/Printifylogo.png" className='w-full' alt=""/>
       </div>
       
       <nav className='flex list-none gap-5 ml-auto text-[16px] font-normal'>
         {
          
            links.map((link, index) => (
               <li key={index} className='flex  hover:text-[#4fb954] cursor-pointer items-center gap-1'>
               {link.name}
               {link.icon}
               </li> 
            ))
            
         }
       </nav>
       <div className='flex ml-auto gap-5'>
         <Button name="Log in" customStyles="hover:text-[#6be772]  mt-1" />
         <Button name="Sing up"customStyles="bg-green-400 hover:bg-green-500 text-white mt-1"/>
       </div>
    </div>
 </header>
  )
}

export default Header