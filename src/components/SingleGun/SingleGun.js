import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = (props) => {
    const [modalData,setModalData] = useState({})

    const {gun,countIncrease} = props;
console.log(gun);

const {name,action,bullet,category,img,price} = gun;
    return (
        <div>
                        <div className="card card-compact w-full h-full bg-base-100 shadow-xl">
            <figure><img className='w-96 h-64' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos cum quia officiis dignissimos blanditiis error.</p>
                <p>{category}</p>
                <p>{action}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">{price}</button>
                </div>
                <div className='mt-4'>
                <button onClick={()=>countIncrease()} className="btn btn-active btn-secondary mr-3">Add To Cart</button>
                <label 
                onClick = {() => setModalData(gun)}
                htmlFor="my-modal-3" className="btn modal-button btn-success">Detailz</label>
                </div>
                {modalData &&(
                    <Modal data={modalData} setModalData={setModalData}></Modal>
                )}
                
            </div>
            </div>
        </div>
    );
};

export default SingleGun;