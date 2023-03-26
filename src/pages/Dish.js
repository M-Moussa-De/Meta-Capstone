import React from 'react';
import { useParams } from 'react-router-dom';


function Dish({ dishes }) {
  const { id } = useParams();
  const dish = dishes.find((dish) => dish.id === parseInt(id));
   
  return (
    <div>
      <h1>{dish.name}</h1>
      <p>{dish.description}</p>
      <p>${dish.price}</p>
    </div>
  );
}

export default Dish;
