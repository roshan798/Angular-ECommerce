export class Product {
  id: string = "";
  name: string = "";
  description: string = "";
  brand: string = "";
  price: number = 0;
  category?: string;
  releaseDate: Date = new Date();
  productAvailable: boolean = false;
  stockQuantity: number = 0;
  imageName?: string;
  imageType?: string;
  imageData?: string
}

/*
{
  id: 1,
  name: Smartphone X,
  description: Latest model with 5G support,
  brand: TechBrand,
  price: 799.99,
  category: Electronics,
  releaseDate: 14-01-2024,
  productAvailable: true,
  stockQuantity: 50,
  imageName: smartphone_x.jpg,
  imageType: image/jpeg,
  imageData: null
}
*/