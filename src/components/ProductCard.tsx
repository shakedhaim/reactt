// components/ProductCard.tsx
import React from 'react';
import { ProductAttributes } from '@/lib/models/productModel';
import styles from '../styles/productCardStyles.module.scss';

interface ProductCardProps {
  product: ProductAttributes;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <h3>{product.name}</h3>
      <img src={`/katerin.webp`} alt={product.name} className={styles.productImage} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductCard;
