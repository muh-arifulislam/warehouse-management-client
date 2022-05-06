import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse, faCircleCheck, faUsers, faTruck } from '@fortawesome/free-solid-svg-icons';
import './ServiceCount.css';
const ServiceCount = () => {
    const [stockItem, setStockItem] = useState(0);
    const [deliveredItem, setDeliveredItem] = useState(0);
    useEffect(() => {
        fetch('https://limitless-falls-03357.herokuapp.com/total-item')
            .then(res => res.json())
            .then(data => {
                setStockItem(data.totalItem);
                setDeliveredItem(data.totalSold);
            })
    }, []);
    return (
        <section className=' service-count'>
            <div className='container row mx-auto'>
                <div className='col-lg-4'>
                    <CountUp start={0} end={stockItem} decimal={4} delay={0} duration={2}>
                        {({ countUpRef }) => (
                            <div className='d-flex flex-column align-items-center'>
                                <p><FontAwesomeIcon icon={faWarehouse} className='fs-1'></FontAwesomeIcon></p>
                                <span className='fs-1' ref={countUpRef} />
                                <p className='fs-4'>Stock Item</p>
                            </div>
                        )}
                    </CountUp>
                </div>
                <div className='col-lg-4'>
                    <CountUp start={0} end={deliveredItem} decimal={4} delay={0} duration={2}>
                        {({ countUpRef }) => (
                            <div className='d-flex flex-column align-items-center'>
                                <p><FontAwesomeIcon icon={faTruck} className='fs-1'></FontAwesomeIcon></p>
                                <span className='fs-1' ref={countUpRef} />
                                <p className='fs-4'>Delivered Item</p>
                            </div>
                        )}
                    </CountUp>
                </div>
                <div className='col-lg-4'>
                    <CountUp start={0} end={100} decimal={4} delay={0} duration={2}>
                        {({ countUpRef }) => (
                            <div className='d-flex flex-column align-items-center'>
                                <p><FontAwesomeIcon icon={faUsers} className='fs-1'></FontAwesomeIcon></p>
                                <span className='fs-1' ref={countUpRef} />
                                <p className='fs-4'>Client</p>
                            </div>
                        )}
                    </CountUp>
                </div>
            </div>
        </section>
    );
};

export default ServiceCount;