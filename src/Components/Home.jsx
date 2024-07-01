// Import necessary dependencies
// import React from "react";
import logo from "../assets/company_Logo.png";
import { Link } from "react-router-dom";
import "./Home.css";
// import Footer from "./Footer";
// import Consultancy from "./Consultanecy";

// Define the Home component
const Home = () => {
  return (
    <>
      <div className="main">
        <div className="heading">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <h1 className="title">
            Welcome to Advent Poly - Your Trusted Partner in BOPP & BOPET
          </h1>
        </div>
        <div className="navbar">
          <Link to="/" className="btns">
            Home
          </Link>
          <Link to="/aboutus" className="btns">
            About us
          </Link>
          <Link to="/products" className="btns">
            Products
          </Link>
          <Link to="/contactus" className="btns">
            Contact us
          </Link>
          <Link to="/consultancy" className="btns">
            Consultancy
          </Link>
          <div className="search">
            <input type="text" className="searchbar" placeholder="Search" />
            <button className="submit" type="submit">
              Submit
            </button>
          </div>
        </div>
        <div className="part2">
          <div className="div1">
            At Advent Poly, we specialize in providing high-quality BOPP
            (Biaxially Oriented Polypropylene) and BOPET (Biaxially Oriented
            Polyethylene Terephthalate) materials to businesses across
            industries. With a commitment to excellence and customer
            satisfaction, we have established ourselves as a trusted partner for
            all your packaging and printing needs.
          </div>
          <div className="div2">
            <h2>Why Choose Us</h2>
            <div className="div21">
              <h3>We Are Your Trusted Partner</h3>
              <p>
                Discover the brilliance of our BOPP and BOPET films – where
                quality meets innovation. Elevate your packaging and printing
                needs with our trusted expertise and unwavering commitment to
                excellence. Choose Advent Poly for superior materials, unmatched
                reliability, and a partnership that sets your business apart.
              </p>
            </div>
          </div>
          <div className="div21">
            <h3>Premium Quality:</h3>
            <p>
              {`We understand the importance of quality in your business
              operations. That's why we source our BOPP and BOPET materials from
              reputable manufacturers known for their consistency and
              reliability.`}
            </p>
          </div>
          <div className="div31">
            <h3>Wide Range of Products:</h3>
            <p>
              Whether you need BOPP films for packaging applications or BOPET
              films for printing projects, we offer a diverse range of products
              to suit your specific requirements.
            </p>
          </div>
          <div className="div41">
            <h3>Competitive Pricing:</h3>
            <p>
             {` We believe that quality should never come at the expense of
              affordability. That's why we strive to offer competitive pricing
              on all our products, ensuring that you get the best value for your
              investment.`}
            </p>
          </div>
          <div className="div51">
            <h3>Exceptional Customer Service:</h3>
            <p>
              Your satisfaction is our top priority. Our team of dedicated
              professionals is here to assist you every step of the way, from
              product selection to post-sales support.
            </p>
          </div>
          <div className="div3">
            <h2>Our Products</h2>
          </div>
          <div className="div61">
            <h3>BOPP Films:</h3>
            <p>
              Our BOPP films are ideal for a wide range of packaging
              applications, including food packaging, labeling, and lamination.
              With excellent clarity, strength, and printability, our BOPP films
              deliver superior performance and aesthetics.
            </p>
          </div>
          <div className="div71">
            <h3>BOPET Films:</h3>
            <p>
              Our BOPET films are perfect for printing applications, such as
              labels, flexible packaging, and graphic arts. With outstanding
              dimensional stability, heat resistance, and barrier properties,
              our BOPET films ensure optimal results for your printing projects.
            </p>
          </div>
          {/* <div className="div81">
            <h2>Consultancy</h2>
            <p>
              Welcome to [Your Consultancy Name] - Your Expert Partner in Flexible Packaging Solutions
              At [Your Consultancy Name], we specialize in providing innovative and sustainable flexible packaging solutions tailored to meet the unique needs of your business. With years of experience and a deep understanding of the industry, we are committed to delivering excellence in every aspect of flexible packaging.
            </p>
            <h3>Our Approach</h3>
            <p>
              We believe that flexibility is key in today's dynamic market environment. That's why we offer a comprehensive range of flexible packaging solutions designed to adapt to your specific requirements. Whether you're looking for pouches, bags, wraps, or films, we have the expertise to deliver solutions that enhance the functionality, shelf appeal, and sustainability of your products.
            </p>
            <h3>Innovative Solutions</h3>
            <p>
              Our team of experts stays at the forefront of industry trends and technological advancements to bring you innovative packaging solutions that set your products apart. From barrier technologies to eco-friendly materials, we leverage the latest innovations to ensure your packaging meets the highest standards of quality and performance.
            </p>
            <h3>Sustainability Focus</h3>
            <p>
              We understand the importance of sustainability in today's business landscape. That's why we offer sustainable packaging options that reduce environmental impact without compromising on quality or functionality. Whether it's recyclable materials, bio-based films, or compostable packaging, we help you make environmentally responsible choices that resonate with your customers.
            </p>
            <h3>Client-Centric Approach</h3>
            <p>
              At [Your Consultancy Name], we prioritize client satisfaction above all else. We work closely with you to understand your unique challenges and objectives, providing personalized solutions that exceed your expectations. Our dedicated team is committed to delivering results on time and within budget, ensuring a seamless experience from concept to production.
            </p>
            <h3>Why Choose Us?</h3>
            <ul>
              <li>Expertise: Our team brings years of experience and industry knowledge to every project.</li>
              <li>Innovation: We stay ahead of the curve with cutting-edge technologies and materials.</li>
              <li>Sustainability: We offer eco-friendly solutions that align with your sustainability goals.</li>
              <li>Client Focus: Your success is our priority, and we go above and beyond to meet your needs.</li>
            </ul>
            <h3>Get in Touch</h3>
            <p>
              Ready to explore the possibilities of flexible packaging for your business? Contact us today to learn more about our services and how we can help you achieve your packaging goals. Let's embark on a journey of innovation and sustainability together.
            </p>
            <h2>Exploring Market Trends in BOPP, BOPET, and CPP: Insights from [Your Consultancy Name]</h2>
            <p>
              As leaders in the packaging industry, staying informed about the latest market trends is crucial for making informed decisions and staying ahead of the competition. At [Your Consultancy Name], we pride ourselves on our in-depth knowledge and expertise in the BOPP, BOPET, and CPP sectors. Here are some key trends shaping these markets:
            </p>
            <h3>1. Sustainable Packaging Solutions</h3>
            <p>
              The demand for sustainable packaging solutions continues to grow across industries. Manufacturers are increasingly adopting BOPP, BOPET, and CPP films that offer eco-friendly alternatives to traditional packaging materials. This trend is driven by consumer preferences for environmentally conscious products and regulatory pressure to reduce plastic waste.
            </p>
            <h3>2. Technological Advancements</h3>
            <p>
              Advancements in film manufacturing technologies are driving innovation in the BOPP, BOPET, and CPP markets. Manufacturers are investing in state-of-the-art equipment and processes to improve product performance, enhance barrier properties, and expand the range of applications for these films. This includes developments in metallization, coating, and printing technologies to meet the evolving needs of customers.
            </p>
            <h3>3. Growing Demand in Food and Beverage Industry</h3>
            <p>
              The food and beverage industry remains a major consumer of BOPP, BOPET, and CPP films due to their excellent barrier properties, versatility, and cost-effectiveness. As consumer preferences shift towards convenience and on-the-go consumption, the demand for flexible packaging solutions continues to rise. This trend is driving innovation in packaging formats such as pouches, sachets, and wraps to meet the demands of modern consumers.
            </p>
            <h3>4. Focus on Product Differentiation</h3>
            <p>
              In today's competitive market landscape, brands are increasingly using packaging as a tool for product differentiation and brand identity. BOPP, BOPET, and CPP films offer a wide range of customization options, including high-quality printing, embossing, and specialty finishes. Brands are leveraging these capabilities to create eye-catching packaging designs that stand out on the shelf and enhance consumer engagement.
            </p>
            <h3>5. Shift Towards Digitalization</h3>
            <p>
              Digitalization is transforming the packaging industry, enabling greater efficiency, flexibility, and customization. With the rise of digital printing technologies, brands can now produce short runs, versioned packaging, and personalized designs cost-effectively. This trend is driving demand for BOPP, BOPET, and CPP films that are compatible with digital printing processes, opening up new opportunities for packaging innovation.
            </p>
            <h3>Partner with [Your Consultancy Name]</h3>
            <p>
              At [Your Consultancy Name], we are committed to helping our clients navigate the dynamic landscape of the BOPP, BOPET, and CPP markets. With our industry expertise, market insights, and strategic guidance, we empower businesses to make informed decisions and capitalize on emerging opportunities. Contact us today to learn how we can support your packaging needs and drive your business forward.
            </p>
          </div> */}
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

// Export the Home component
export default Home;
