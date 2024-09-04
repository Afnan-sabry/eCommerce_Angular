export interface Product  {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price:number;
  }



const products: Product[] = [
  {
    id: 1,
    name: 'backpacks',
    description: 'This is the first product.',
    imageUrl: '/assets/images/backpacks.jpg',
    price:400
  },
  {
    id: 2,
    name: 'Camera',
    description: 'This is the second product.',
    imageUrl: '/assets/images/camera.jpg',
    price:500

  },
  {
    id: 3,
    name: 'headphone',
    description: 'This is the third product.',
    imageUrl: '/assets/images/headphone.jpg',
    price:200

  },
  {
    id: 4,
    name: 'smartphone',
    description: 'This is the fourth product.',
    imageUrl: '/assets/images/smartphone.jpg',
    price:100

  },
  {
    id: 5,
    name: 'Product 5',
    description: 'This is the fifth product.',
    imageUrl: 'https://picsum.photos/200/304',
    price:700

  },
];
export default products;
