const products = [
  {
    id: "1",
    name: "Iphone 12",
    price: 1000,
    category: "celular",
    img: "holi",
    stock: 25,
    description: "Descripcion de Iphone 12",
  },
  {
    id: "2",
    name: "Xiaomi Poco x4",
    price: 800,
    category: "celular",
    img: "holi",
    stock: 20,
    description: "Descripcion de Iphone 12",
  },
  {
    id: "3",
    name: "Samsung Galaxy S40",
    price: 1200,
    category: "tablet",
    img: "holi",
    stock: 10,
    description: "Descripcion de Iphone 12",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.category === productCategory));
    }, 500);
  });
};
