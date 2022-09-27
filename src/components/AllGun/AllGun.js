import React, { useState } from 'react';
import { useEffect } from 'react';
import SingleGun from '../SingleGun/SingleGun';


const AllGun = ({countIncrease}) => {
const [guns, setGuns] = useState ([])

useEffect (() =>{
fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
.then(res => res.json())
.then(data => setGuns(data))

},[])

    return (
        <div className='mt-12'>
            <div className='my-4'>
            <h2 className='text-4xl'>Fake Gun Store</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Officiis voluptatum expedita earum vel voluptatibus odit nobis quia voluptas temporibus aperiam!</p>
         
            </div>
            
        <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
             {
            guns.map(gun => (
                <SingleGun gun={gun} countIncrease={countIncrease}/>
            ))}
        </div>
        </div> 
       
            
        
    );
};

export default AllGun;