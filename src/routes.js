import React from 'react';
import { Route } from 'react-router-dom';
import Dish from './../../pages/Dish';

export function DishRoute({ dishes }) {
  return <Route exact path="/pages/dish/:id" element={<Dish dishes={dishes} />} />;
}
