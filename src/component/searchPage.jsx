import React, { useState } from 'react';
import './searchPage.css';
import Footer from './footer';

export default function SearchPage() {
  const [selectedType, setSelectedType] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Reusable button styles
  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 24px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const items = [
    { label: "Bookshelf", price: "$10", type: "Furniture", image: "https://m.media-amazon.com/images/I/71pr1F0VWRL._AC_UF894,1000_QL80_.jpg", description: "A sturdy wooden bookshelf.", seller: "Alice" },
    { label: "Couch", price: "$15", type: "Furniture", image: "https://images.thdstatic.com/productImages/5bace440-6176-4d76-bc79-9bc3ccc00aaa/svn/brown-magic-home-sofas-couches-cs-b01152169-64_1000.jpg", description: "Comfortable brown couch.", seller: "Bob" },
    { label: "Twin Bed", price: "$20", type: "Furniture", image: "https://www.deltachildren.com/cdn/shop/products/wpvrtk1ogcksjxbtuoyi.jpg?v=16239418390", description: "Twin-size bed frame.", seller: "Carol" },
    { label: "Round Table", price: "$25", type: "Furniture", image: "https://www.custom-conference-tables.com/wp-content/uploads/2020/05/king-arthur-custom-round-conference-table.jpg", description: "Elegant round table.", seller: "Dave" },
    { label: "Clock", price: "$30", type: "Furniture", image: "https://ak1.ostkcdn.com/images/products/is/images/direct/d6f79029e24d3821c64906d561e4070116ef9fca/Metal-Wall-Clock-Retro-Round-Clock.jpg", description: "Metal wall clock.", seller: "Eve" },
    { label: "Desk", price: "$35", type: "Furniture", image: "https://dijf55il5e0d1.cloudfront.net/images/na/hubertplus/5403300/gcgf15612mapbkgg_ls_1000.jpg", description: "Study desk with drawers.", seller: "Frank" },
    { label: "Projector", price: "$40", type: "Electronic", image: "https://media.wired.com/photos/629feede5da297afa9ff5e6f/master/pass/Home-Theater-Gear-GettyImages-95781853.jpg", description: "HD home projector.", seller: "Grace" },
    { label: "Kitchen Plates", price: "$45", type: "Kitchen Supplies", image: "https://www.lecreuset.com/dw/image/v2/BDRT_PRD/on/demandware.static/-/Sites-le-creuset-master/default/dwa89bc051/images/cat_dinnerware/dinnerware/saesalt_dinnerware_g1.jpg?sw=650&sh=650&sm=fit", description: "Set of dinner plates.", seller: "Hank" },
    { label: "Art Supplies", price: "$50", type: "Art", image: "https://www.artskills.com/media/catalog/product/cache/76027d223f1bcb4d2ba6682c7f99227f/p/7/p7_pa7520_artessentialsstudio_inuse2.jpg", description: "Complete art kit.", seller: "Ivy" },
    { label: "Vaccum Cleaner", price: "$40", type: "Electronic", image: "https://images.contentstack.io/v3/assets/blt34d3d525a62e8995/blt7d6d7e62bf569493/66e988200742c56541f88f86/upright_vac_carousel_600x720.jpg?branch=master&format=webp&width=360", description: "Upright vacuum cleaner.", seller: "Jack" },
    { label: "Printer", price: "$50", type: "Electronic", image: "https://cdn.thewirecutter.com/wp-content/media/2024/08/laserprinters-2048px-02603-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024", description: "Laser printer for home office.", seller: "Karen" },
    { label: "Knives", price: "$30", type: "Kitchen Supplies", image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Cucina_012.jpg", description: "Kitchen knife set.", seller: "Leo" },
    { label: "Whisk", price: "$10", type: "Kitchen Supplies", image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Schneebesen1.JPG", description: "Metal whisk for baking.", seller: "Mona" },
    { label: "Sketch Book", price: "$15", type: "Art", image: "https://i.etsystatic.com/16437030/r/il/782ad4/5491474521/il_570xN.5491474521_l3yd.jpg", description: "Sketch book with textured paper.", seller: "Nate" },
    { label: "Glitter", price: "$20", type: "Art", image: "https://www.wildflowersnailshop.com/cdn/shop/products/micro_glitter_10g.jpeg?v=1626278285", description: "Craft glitter set.", seller: "Olivia" },
  ];

  const filteredItems = items.filter((item) => {
    const matchType = selectedType ? item.type === selectedType : true;
    const matchPrice = selectedPrice ? item.price.startsWith(selectedPrice) : true;
    return matchType && matchPrice;
  });

  if (expandedIndex !== null) {
    const item = filteredItems[expandedIndex];

    return (
      <div style={{ backgroundColor: 'white', minHeight: '100vh', color: 'black', padding: 20 }}>
        <h1 className="search-title">{item.label}</h1>
        <div className="expanded-item" style={{
          maxWidth: 600,
          margin: '0 auto',
          border: '1px solid #ccc',
          padding: 20,
          borderRadius: 8,
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          backgroundColor: 'white',
        }}>
          <img
            src={item.image}
            alt={item.label}
            style={{ width: '100%', height: 'auto', marginBottom: 15, objectFit: 'cover' }}
          />
          <p><strong>Price:</strong> {item.price}</p>
          <p><strong>Type:</strong> {item.type}</p>
          <p><strong>Description:</strong> {item.description}</p>
          <p><strong>Seller:</strong> {item.seller}</p>
          <button
            onClick={() => alert(`You contacted ${item.seller}! (Placeholder)`)}
            style={buttonStyle}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
          >
            Contact Seller
          </button>
          <button
            onClick={() => setExpandedIndex(null)}
            style={{ ...buttonStyle, backgroundColor: '#ccc', color: 'black' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#999'}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#ccc';
              e.currentTarget.style.color = 'black';
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  // Normal grid view
  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', color: 'black', padding: 20 }}>
      <h1 className="search-title">Popular Collection</h1>

      <div className="filters">
        <div>
          <label htmlFor="type">Type:</label>
          <select
            id="type"
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
          <label htmlFor="price">Price:</label>
          <select
            id="price"
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

      <div className="card-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: 20,
      }}>
        {filteredItems.map((item, index) => (
          <div key={index} className="item-card-container" style={{
            border: '1px solid #ccc',
            borderRadius: 8,
            padding: 15,
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <img
              src={item.image}
              alt={item.label}
              style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 8, marginBottom: 10 }}
            />
            <h2>{item.label}</h2>
            <p><strong>Price:</strong> {item.price}</p>
            <p><strong>Type:</strong> {item.type}</p>
            <button
              onClick={() => setExpandedIndex(index)}
              style={buttonStyle}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
            >
              Contact Seller
            </button>
          </div>
        ))}
      </div>

      <div className="space-holder"></div>
      <Footer />
    </div>
  );
}