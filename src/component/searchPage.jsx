import React from 'react';
import './searchpage.css';
import ItemCard from './itemCard';
import Footer from './footer'

export default function SearchPage() {
  const items = [
    { label: "Bookshelf", price: "$10.99", type: "Type A", image: "https://m.media-amazon.com/images/I/71pr1F0VWRL._AC_UF894,1000_QL80_.jpg" },
    { label: "Couch", price: "$15.99", type: "Type B", image: "https://images.thdstatic.com/productImages/5bace440-6176-4d76-bc79-9bc3ccc00aaa/svn/brown-magic-home-sofas-couches-cs-b01152169-64_1000.jpg" },
    { label: "Twin Bed", price: "$20.99", type: "Type A", image: "https://www.deltachildren.com/cdn/shop/products/wpvrtk1ogcksjxbtuoyi.jpg?v=16239418390" },
    { label: "Round Table", price: "$25.99", type: "Type C", image: "https://www.custom-conference-tables.com/wp-content/uploads/2020/05/king-arthur-custom-round-conference-table.jpg" },
    { label: "Clock", price: "$30.99", type: "Type B", image: "https://ak1.ostkcdn.com/images/products/is/images/direct/d6f79029e24d3821c64906d561e4070116ef9fca/Metal-Wall-Clock-Retro-Round-Clock.jpg" },
    { label: "Desk", price: "$35.99", type: "Type A", image: "https://dijf55il5e0d1.cloudfront.net/images/na/hubertplus/5403300/gcgf15612mapbkgg_ls_1000.jpg" },
    { label: "Projector", price: "$40.99", type: "Type C", image: "https://media.wired.com/photos/629feede5da297afa9ff5e6f/master/pass/Home-Theater-Gear-GettyImages-95781853.jpg" },
    { label: "Kitchen Plates", price: "$45.99", type: "Type B", image: "https://www.lecreuset.com/dw/image/v2/BDRT_PRD/on/demandware.static/-/Sites-le-creuset-master/default/dwa89bc051/images/cat_dinnerware/dinnerware/saesalt_dinnerware_g1.jpg?sw=650&sh=650&sm=fit" },
    { label: "Art Supplies", price: "$50.99", type: "Type A", image: "https://www.artskills.com/media/catalog/product/cache/76027d223f1bcb4d2ba6682c7f99227f/p/7/p7_pa7520_artessentialsstudio_inuse2.jpg" }
  ];

  return (
    <div className="search-container">
      <h1 className="search-title">Find What You Need</h1>

      <div className="filters">
        <div>
          <label htmlFor="type">Type:</label>
          <select id="type">
            <option value="">Select Type</option>
            <option value="Type A">Type A</option>
            <option value="Type B">Type B</option>
            <option value="Type C">Type C</option>
          </select>
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <select id="price">
            <option value="">Select Price</option>
            <option value="$10">$10</option>
            <option value="$15">$15</option>
            <option value="$20">$20</option>
            <option value="$25">$25</option>
            <option value="$30">$30</option>
            <option value="$35">$35</option>
            <option value="$40">$40</option>
            <option value="$45">$45</option>
            <option value="$50">$50</option>
          </select>
        </div>
      </div>

      <div className="card-grid">
        {items.map((item, index) => (
          <ItemCard
            key={index}
            imgSrc={item.image}
            imgAlt={item.label}
            title={item.label}
            detail={item.price}
            buttonText="Learn More"
            link="/Sell-Guide"
          />
        ))}
      </div>
    </div>
  );
}
