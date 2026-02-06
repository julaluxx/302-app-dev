import React from 'react';
import { View, ScrollView } from 'react-native';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductCardExample() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ScrollView>
  );
}
