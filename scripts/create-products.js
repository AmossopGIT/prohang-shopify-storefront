import fetch from 'node-fetch';

// Your Shopify store details
const STORE_DOMAIN = 'prohang.myshopify.com';
const ADMIN_ACCESS_TOKEN = 'your-admin-api-token-here'; // Replace with your actual Admin API token

const products = [
  {
    title: 'ProHang 1.5m Aluminum Washing Line',
    body_html: 'Rust-free, maintenance-free 1.5m aluminum washing line. Perfect for small spaces and apartments. Wall-mounted foldaway design saves space when not in use.',
    vendor: 'ProHang',
    product_type: 'Washing Line',
    tags: 'washing-line, aluminum, rust-free, wall-mounted, foldaway, small-spaces',
    status: 'active',
    variants: [
      {
        title: 'Default Title',
        price: '2500.00',
        sku: 'PROHANG-15M-ALU',
        inventory_policy: 'deny',
        fulfillment_service: 'manual',
        inventory_management: 'shopify',
        inventory_quantity: 100,
        weight: 5.0,
        weight_unit: 'kg',
        requires_shipping: true,
        taxable: true
      }
    ],
    options: [
      {
        name: 'Title',
        values: ['Default Title']
      }
    ],
    images: [
      {
        src: 'https://prohang.co.za/images/prohang-lines.png',
        alt: 'ProHang 1.5m Aluminum Washing Line - Rust Free Wall Mounted'
      }
    ]
  },
  {
    title: 'ProHang 2m Aluminum Washing Line + Free Installation',
    body_html: 'Premium 2m rust-free aluminum washing line with FREE professional installation included. Maintenance-free design perfect for medium to large households.',
    vendor: 'ProHang',
    product_type: 'Washing Line',
    tags: 'washing-line, aluminum, rust-free, free-installation, 2m, premium',
    status: 'active',
    variants: [
      {
        title: 'Default Title',
        price: '2750.00',
        compare_at_price: '3200.00',
        sku: 'PROHANG-2M-ALU-INSTALL',
        inventory_policy: 'deny',
        fulfillment_service: 'manual',
        inventory_management: 'shopify',
        inventory_quantity: 50,
        weight: 7.0,
        weight_unit: 'kg',
        requires_shipping: true,
        taxable: true
      }
    ],
    options: [
      {
        name: 'Title',
        values: ['Default Title']
      }
    ],
    images: [
      {
        src: 'https://prohang.co.za/images/prohang-lines-pegs.png',
        alt: 'ProHang 2m Aluminum Washing Line with Free Installation'
      }
    ]
  },
  {
    title: 'ProHang Aluminum Pegs - Accessory Pack',
    body_html: 'Premium aluminum pegs that never rust, break, or stain your clothes. Perfect accessory for your ProHang washing line system.',
    vendor: 'ProHang',
    product_type: 'Accessory',
    tags: 'pegs, aluminum, accessory, rust-free, durable, clothes-pegs',
    status: 'active',
    variants: [
      {
        title: 'Default Title',
        price: '149.00',
        sku: 'PROHANG-PEGS-ALU',
        inventory_policy: 'deny',
        fulfillment_service: 'manual',
        inventory_management: 'shopify',
        inventory_quantity: 200,
        weight: 0.5,
        weight_unit: 'kg',
        requires_shipping: true,
        taxable: true
      }
    ],
    options: [
      {
        name: 'Title',
        values: ['Default Title']
      }
    ],
    images: [
      {
        src: 'https://prohang.co.za/images/prohang-peg.png',
        alt: 'ProHang Aluminum Pegs - Rust Free Washing Line Accessory'
      }
    ]
  }
];

async function createProducts() {
  console.log('Creating ProHang products in Shopify store...');
  
  const createdProducts = [];
  
  for (const product of products) {
    try {
      console.log(`Creating product: ${product.title}`);
      
      const response = await fetch(`https://${STORE_DOMAIN}/admin/api/2024-04/products.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': ADMIN_ACCESS_TOKEN,
        },
        body: JSON.stringify({ product }),
      });
      
      if (!response.ok) {
        const error = await response.text();
        console.error(`Failed to create ${product.title}:`, error);
        continue;
      }
      
      const result = await response.json();
      createdProducts.push(result.product);
      
      console.log(`✅ Created: ${result.product.title}`);
      console.log(`   Product ID: ${result.product.id}`);
      console.log(`   Variant ID: ${result.product.variants[0].id}`);
      console.log(`   Handle: ${result.product.handle}`);
      console.log('');
      
    } catch (error) {
      console.error(`Error creating ${product.title}:`, error);
    }
  }
  
  // Generate updated mock data with real IDs
  console.log('\n🎉 Products created! Here are the real IDs to update your mock data:');
  console.log('\nUpdate your collections.all.tsx with these real IDs:');
  
  createdProducts.forEach((product, index) => {
    console.log(`
Product ${index + 1}:
  id: 'gid://shopify/Product/${product.id}',
  variants: {
    nodes: [{
      id: 'gid://shopify/ProductVariant/${product.variants[0].id}',
      availableForSale: true,
      selectedOptions: [{name: 'Title', value: 'Default Title'}]
    }]
  }`);
  });
}

// Run the script if called directly
createProducts().catch(console.error);

export { createProducts }; 