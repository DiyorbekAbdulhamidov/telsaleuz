import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductsProps {
  data: Product[];
}

const Products: React.FC<ProductsProps> = ({ data }) => {
  return (
    <div className="products" style={{ padding: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '50px' }}>
      <ul className="product-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', cursor: 'pointer', gap: '20px' }}>
        {data.map((product) => (
          <div key={product.id} className="product" style={{ width: 400, height: 300, background: "lime", borderRadius: 10, padding: 20, color: 'black', display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center', justifyContent: 'center' }}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <span className="material-symbols-outlined toBasket" style={{ fontSize: 40 }}>shopping_cart_checkout</span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Products;
