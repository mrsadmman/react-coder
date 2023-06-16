const products = [
  {
    id: "1",
    nombre: "Trumpeter Malbec",
    img: "https://http2.mlstatic.com/D_NQ_NP_808289-MLA50019891358_052022-O.webp",
    precio: 2500,
    stock: 10,
    category: "wine",
  },

  {
    id: "2",
    nombre: "Angelica Zapata",
    img: "https://http2.mlstatic.com/D_NQ_NP_923502-MLA31183106493_062019-W.webp",
    precio: 10000,
    stock: 10,
    category: "wine",
  },

  {
    id: "3",
    nombre: "The Singleton 15 años",
    img: "https://http2.mlstatic.com/D_NQ_NP_908558-MLA45633173394_042021-W.webp",
    precio: 22500,
    stock: 10,
    category: "whisky",
  },

  {
    id: "4",
    nombre: "The Glenlivet Founders Reserve",
    img: "https://http2.mlstatic.com/D_NQ_NP_789859-MLA44850220471_022021-W.webp",
    precio: 14400,
    stock: 10,
    category: "whisky",
  },

  {
    id: "5",
    nombre: "Monkey Shoulder",
    img: "https://http2.mlstatic.com/D_NQ_NP_932957-MLA52958062135_122022-W.webp",
    precio: 14200,
    stock: 10,
    category: "whisky",
  },

  {
    id: "6",
    nombre: "Aconcagua",
    img: "https://http2.mlstatic.com/D_NQ_NP_794841-MLA50210112874_062022-W.webp",
    precio: 3900,
    stock: 10,
    category: "gin",
  },

  {
    id: "7",
    nombre: "Bulldog",
    img: "https://http2.mlstatic.com/D_NQ_NP_727656-MLA43643273854_102020-W.webp",
    precio: 9360,
    stock: 10,
    category: "gin",
  },

  {
    id: "8",
    nombre: "Monkey 47",
    img: "https://http2.mlstatic.com/D_NQ_NP_918240-MLA43643309657_102020-W.webp",
    precio: 18900,
    stock: 10,
    category: "gin",
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

export const getProductByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === categoryId));
    }, 500);
  });
};
