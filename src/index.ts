import products from "./products.json";

class ListaDeCosas {
  name: string;
  cosas: Product[] = [];
  constructor(name: string) {
    // nombre de esta lista
    this.name = name;
  }
  add(nuevaCosa) {
    this.cosas.push(nuevaCosa);
  }
  getCosas() {
    return this.cosas;
  }
}

class Product {
  name: string;
  price: number;
  id: number;
  constructor(name: string, price: number, id: number) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
}

class ListaDeProductos extends ListaDeCosas {
  constructor(name: string) {
    super(name);

    const productosIniciales = products as Product[];

    for (const producto of productosIniciales) {
      this.addProduct(producto);
    }

    this.addProduct(new Product("Producto Nuevo", 999, 4));
  }

  addProduct(product: Product): void {
    let existe = false;

    for (const element of this.cosas) {
      if (product.id === element.id) {
        existe = true;
        break;
      }
    }
    if (!existe) {
      this.cosas.push(product);
    }
  }

  getProduct(id: number): Product | undefined {
    for (const product of this.cosas) {
      if (product.id === id) {
        return product;
      }
    }
    return undefined;
  }

  removeProduct(id: number): void {
    this.cosas = this.cosas.filter((product) => product.id !== id);
  }

  getSortedByPrice(order: string): Product[] {
    const sortedProducts = [...this.cosas];
    if (order === "asc") {
      return sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      return sortedProducts.sort((a, b) => b.price - a.price);
    } else {
      console.warn("El orden especificado no es válido. Usa 'asc' o 'desc'.");
      return sortedProducts;
    }
  }
}

export { ListaDeProductos, Product };
