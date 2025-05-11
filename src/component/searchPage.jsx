import React, { useState } from 'react';
import ItemCard from './ItemCard'; // Make sure the path is correct
import './searchpage.css';

export default function SearchPage() {
  const [selectedType, setSelectedType] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const items = [
    { label: "Bookshelf", price: "$10", type: "Furniture", image: "https://m.media-amazon.com/images/I/71pr1F0VWRL._AC_UF894,1000_QL80_.jpg" },
    { label: "Couch", price: "$15", type: "Furniture", image: "https://images.thdstatic.com/productImages/5bace440-6176-4d76-bc79-9bc3ccc00aaa/svn/brown-magic-home-sofas-couches-cs-b01152169-64_1000.jpg" },
    { label: "Twin Bed", price: "$20", type: "Furniture", image: "https://www.deltachildren.com/cdn/shop/products/wpvrtk1ogcksjxbtuoyi.jpg?v=16239418390" },
    { label: "Round Table", price: "$25", type: "Furniture", image: "https://www.custom-conference-tables.com/wp-content/uploads/2020/05/king-arthur-custom-round-conference-table.jpg" },
    { label: "Clock", price: "$30", type: "Furniture", image: "https://ak1.ostkcdn.com/images/products/is/images/direct/d6f79029e24d3821c64906d561e4070116ef9fca/Metal-Wall-Clock-Retro-Round-Clock.jpg" },
    { label: "Desk", price: "$35", type: "Furniture", image: "https://dijf55il5e0d1.cloudfront.net/images/na/hubertplus/5403300/gcgf15612mapbkgg_ls_1000.jpg" },
    { label: "Projector", price: "$40", type: "Electronic", image: "https://media.wired.com/photos/629feede5da297afa9ff5e6f/master/pass/Home-Theater-Gear-GettyImages-95781853.jpg" },
    { label: "Kitchen Plates", price: "$45", type: "Kitchen Supplies", image: "https://www.lecreuset.com/dw/image/v2/BDRT_PRD/on/demandware.static/-/Sites-le-creuset-master/default/dwa89bc051/images/cat_dinnerware/dinnerware/saesalt_dinnerware_g1.jpg?sw=650&sh=650&sm=fit" },
    { label: "Art Supplies", price: "$50", type: "Art", image: "https://www.artskills.com/media/catalog/product/cache/76027d223f1bcb4d2ba6682c7f99227f/p/7/p7_pa7520_artessentialsstudio_inuse2.jpg" },
    { label: "Vaccum Cleaner", price: "$40", type: "Electronic", image: "https://images.contentstack.io/v3/assets/blt34d3d525a62e8995/blt7d6d7e62bf569493/66e988200742c56541f88f86/upright_vac_carousel_600x720.jpg?branch=master&format=webp&width=360" },
    { label: "Printer", price: "$50", type: "Electronic", image: "https://cdn.thewirecutter.com/wp-content/media/2024/08/laserprinters-2048px-02603-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024" },
    { label: "Knives", price: "$30", type: "Kitchen Supplies", image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Cucina_012.jpg" },
    { label: "Whisk", price: "$10", type: "Kitchen Supplies", image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Schneebesen1.JPG" },
    { label: "Sketch Book", price: "$15", type: "Art", image: "https://i.etsystatic.com/16437030/r/il/782ad4/5491474521/il_570xN.5491474521_l3yd.jpg" },
    { label: "Glitter", price: "$20", type: "Art", image: "https://www.wildflowersnailshop.com/cdn/shop/products/micro_glitter_10g.jpeg?v=1626278285" },

  ];

  const filteredItems = items.filter((item) => {
    const matchType = selectedType ? item.type === selectedType : true;
    const matchPrice = selectedPrice ? item.price.startsWith(selectedPrice) : true;
    return matchType && matchPrice;
  });

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', color: 'black' }}>
      <div>
        <h1 style={{ marginBottom: '100px', textAlign: 'center', marginLeft: '10px' }}>Popular Collection</h1>

        {/* Dropdown Filters */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', marginLeft: '1100px' }}>
          <div>
            <label htmlFor="type" style={{ fontSize: '16px', marginRight: '10px' }}>Type:</label>
            <select
              id="type"
              style={{ padding: '10px', fontSize: '14px' }}
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="Furniture">Furniture</option>
              <option value="Kitchen Supplies">Kitchen Supplies</option>
              <option value="Electronic">Electronic</option>
              <option value="Art">Art</option>
            </select>
          </div>

          <div>
            <label htmlFor="price" style={{ fontSize: '16px', marginRight: '10px' }}>Price:</label>
            <select
              id="price"
              style={{ padding: '10px', fontSize: '14px' }}
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
            >
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

        {/* Grid of Items */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '200px',
            width: '150%',
            maxWidth: '1500px',
            textAlign: 'center',
            marginLeft: '575px'
          }}
        >
          {filteredItems.map((item, index) => (
            <ItemCard
              key={index}
              imgSrc={item.image}
              imgAlt={item.label}
              title={item.label}
              detail={`Price: ${item.price} | Type: ${item.type}`}
              buttonText="View Item"
              link="#"
            />
          ))}
        </div>
      </div>
    </div>
  );
}