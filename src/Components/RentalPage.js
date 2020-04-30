import React, { useState, useEffect } from 'react';
import RentalCard from './RentalCard';
import AxiosWithAuth from '../Utils/AxiosWithAuth';
import Search from './Search';

//------REACTSTRAP---------------
import { Spinner } from 'reactstrap';

function RentalPage() {
  const userId = localStorage.getItem('userId');

  const today = new Date().toISOString();

  const returnRent = theDate => {
    console.log(theDate);

    let newDay = new Date();
    newDay.setDate(newDay.getDate() + theDate);
    let dateString = newDay.toISOString();
    let returnDay = dateString.slice(0, 10);
    return returnDay;
  };

  //--------------------State--------------------
  const [rentals, setRentals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [itemRent, setItemRent] = useState({
    return_date: '',
    start_date: today.slice(0, 10),
    details: rentals.details,
    renter_id: parseInt(userId),
    owner_id: rentals.owner_id,
    equipment_id: rentals.id,
  });

  console.log(itemRent);
  //-------------------Backend Call--------------

  useEffect(() => {
    getRentals();
  }, []);

  const getRentals = () => {
    AxiosWithAuth()
      .get('/api/equipment')
      .then(res => {
        console.log('Grabbed all the equipments', res.data);
        setRentals(res.data);
      })
      .catch(err => {
        console.log('Could not grab the equipments', err);
      });
  };

  const rentNow = item => {
    setItemRent({
      ...itemRent,
      return_date: returnRent(item.timeframe),
      details: item.details,
      owner_id: item.owner_id,
      equipment_id: item.id,
    });


    AxiosWithAuth().post(`/api/equipment`, itemRent)
    .then(res =>{
      console.log(res);
      getRentals();
    })
    .catch(err =>{
      console.log(err);
    })
  }

  //--------------Handlers-----------------
  const onRentClick = evt => {
    //In here will be a axios PUT to make the the current equipment to become rented
    console.log('I haven been clicked', evt);
  };

  const searchChangeHandler = evt => {
    setSearchTerm(evt.target.value);
  };

  //------------------Search filters--------------------------
  const filterRentals = rentals.filter(rental => {
    return rental.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  //----------------LOADING---------------------
  if (!rentals.length) {
    return (
      <div className='spinner-container'>
        <Spinner
          className='spinner-movement'
          style={{ width: '3rem', height: '3rem' }}
        />
      </div>
    );
  }

  return (
    <div>
      <div className='search-container'>
        <Search searchChangeHandler={searchChangeHandler} />
      </div>
      <div className='rentals-container'>
        {filterRentals.map(rental => {
          return (
            <RentalCard
              key={rental.id}
              product={rental}
              rentNow={rentNow}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RentalPage;
