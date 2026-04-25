export interface Ingredient {
  name: string;
  description: string;
  icon: string;
}

export interface Dish {
  name: string;
  description: string;
  imageUrl: string;
  badge?: string;        // ej. "Más Pedido", "Nuevo"
  tags?: string[];       // ej. ["Con camarón", "Picante suave"]
}

export interface MenuItem {
  slug: string;
  tag: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  imageAlt: string;
  variants?: string[];
  ingredients?: Ingredient[];
  dishes?: Dish[];       // ← platos específicos de la categoría
}

export interface Review {
  author: string;
  role: string;
  text: string;
  rating: number;
  initial: string;
}

export interface ProofItem {
  icon: string;
  value: string;
  label: string;
}
