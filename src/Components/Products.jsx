// import React from 'react'
import './Products.css';

const Products = () => {
  return (
    <div className="products-container">
      <h1 className="products-title">Our Products</h1>
      <div className="product">
        <h2>BOPP Films</h2>
        <div className="product-header">
          <img src="https://tse3.mm.bing.net/th?id=OIP.JZ8n6ZNzUvbUAtrjzQnYHQAAAA&pid=Api&P=0&h=180" alt="BOPP Films" className="product-image-top-right"/>
        </div>
        <p className="product-description">Our range of BOPP films includes various types suitable for diverse packaging applications. Known for their excellent clarity, strength, and printability, BOPP films are ideal for food packaging, labeling, and lamination.</p>
        <ul className="product-features">
          <li>High tensile strength</li>
          <li>Excellent transparency and gloss</li>
          <li>Good moisture barrier properties</li>
        </ul>
      </div>
      <div className="product">
        <h2>BOPET Films</h2>
        <div className="product-header">
          <img src="https://5.imimg.com/data5/SELLER/Default/2022/8/RC/NW/HY/110017439/clear-bopet-film-1000x1000.jpeg" alt="BOPET Films" className="product-image-top-right"/>
        </div>
        <p className="product-description">BOPET films are perfect for printing applications such as labels, flexible packaging, and graphic arts. These films offer outstanding dimensional stability, heat resistance, and barrier properties, ensuring optimal results for your printing projects.</p>
        <ul className="product-features">
          <li>Superior strength and durability</li>
          <li>Excellent thermal stability</li>
          <li>High resistance to chemicals</li>
        </ul>
      </div>
      <div className="product">
        <h2>CPP Films</h2>
        <div className="product-header">
          <img src="http://scientex.com.my/wp-content/uploads/2018/02/030518_00157-Printed-CPP-Film-CPP-Page-t.jpg" alt="CPP Films" className="product-image-top-right"/>
        </div>
        <p className="product-description">CPP films are versatile and cost-effective packaging solutions known for their excellent sealability, clarity, and barrier properties. They find applications in various industries, including food packaging, pharmaceuticals, cosmetics, and more. With their ability to withstand high temperatures, CPP films are ideal for both hot-fill and retort applications, making them a preferred choice for a wide range of packaging needs.</p>
      </div>
      <div className="product-gallery">
        <h2>Product Gallery</h2>
        <div className="gallery">
          <img src="https://tse3.mm.bing.net/th?id=OIP.GfNxpqR1GP2IbrSZOsLGSQHaEK&pid=Api&P=0&h=180" alt="Gallery Image 1" className="gallery-image"/>
          <img src="https://grace.com/content/dam/grace-site/english/blog/detail-hero/blog-hero-rolled-film-polyethylene.jpg" alt="Gallery Image 2" className="gallery-image"/>
          <img src="https://c8.alamy.com/compfr/c1a4rc/production-de-fils-de-coton-dans-une-usine-de-textile-c1a4rc.jpg" alt="Gallery Image 3" className="gallery-image"/>
          <img src="https://tse2.mm.bing.net/th?id=OIP.EXJ9hNAlpR3iuPj-0qLwOQHaEj&pid=Api&P=0&h=180" alt="Gallery Image 4" className="gallery-image"/>
        </div>
      </div>
    </div>
  );
}

export default Products;