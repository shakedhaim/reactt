// pages/index.js
import { ProductAttributes } from '@/lib/models/productModel';
import {Layout} from '../layouts/Layout';
import { fetchAllProducts } from '@/lib/services/productsService';
import ProductCard from '@/components/ProductCard';
import styles from '../styles/productCardStyles.module.scss';

interface HomeProps {
    products: ProductAttributes[];
  }
  

const HomePage = ({products}: HomeProps) => {
    return (
        <Layout>
          <div className={styles.productCardsContainer}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
      </Layout>
    );
};

export const getStaticProps = async () => {
    const products = await fetchAllProducts();
  
    return {
      props: {
        products,
      },
      revalidate: 60 * 60, // Revalidate every hour
    };
  }



export default HomePage;
