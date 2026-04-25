import { Injectable } from '@angular/core';
import { MenuItem, Review, ProofItem } from '../models/index';

@Injectable({ providedIn: 'root' })
export class ContentService {

  readonly whatsappNumber  = '593XXXXXXXXX';
  readonly mapsUrl         = 'https://maps.google.com/?q=Pedro+Collazos+y+Bartolomé+Alves,+Quito';
  readonly whatsappUrl     = `https://wa.me/${this.whatsappNumber}?text=Hola!+Quiero+hacer+un+pedido`;
  readonly whatsappOrderUrl= `https://wa.me/${this.whatsappNumber}?text=Hola!+%C2%BFAntojo+de+un+mixto%3F+Escríbenos`;

  readonly proofItems: ProofItem[] = [
    { icon: '🗺️', value: '4.5 ★★★★½', label: 'en Google Maps' },
    { icon: '💬', value: '+2,000',      label: 'opiniones positivas' },
    { icon: '🏆', value: 'Top 3',       label: 'Encebollados Legendarios' },
  ];

  readonly menuItems: MenuItem[] = [

    /* ══════════════════════════════
       1. ENCEBOLLADOS
    ══════════════════════════════ */
    {
      slug: 'encebollado-de-la-casa',
      tag: '⭐ Estrella de la Casa',
      title: 'Encebollado de la Casa',
      description: 'El clásico que nunca falla. Albacora fresca, yuca tierna y la cebolla morada que lo hace único.',
      longDescription: 'Nuestro encebollado es el resultado de años de tradición y sazón heredada. Cada bowl es preparado al momento con los ingredientes más frescos del mercado, siguiendo la receta original que nos convirtió en leyenda del sur de Quito.',
      imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=85',
      imageAlt: 'Encebollado de la Casa Las 5 Esquinas',
      variants: ['Normal', 'Mixto', 'Doble'],

      dishes: [
        {
          name: 'Encebollado de Albacora',
          description: 'El original de la casa. Trozos generosos de albacora fresca en caldo artesanal con yuca tierna y cebolla encurtida.',
          imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=700&q=80',
          badge: 'Más Pedido',
          tags: ['Albacora fresca', 'Caldo artesanal'],
        },
        {
          name: 'Encebollado Mixto',
          description: 'Albacora más camarón jumbo en el mismo bowl. Doble proteína del mar, doble sabor, una sola experiencia.',
          imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=700&q=80',
          badge: 'Favorito',
          tags: ['Albacora + Camarón', 'Porción generosa'],
        },
        {
          name: 'Encebollado de Camarón',
          description: 'Camarones enteros cocinados en nuestro caldo base. Sabor intenso a mar con toda la sazón de siempre.',
          imageUrl: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=700&q=80',
          tags: ['Camarón entero', 'Caldo de casa'],
        },
        {
          name: 'Encebollado Doble',
          description: 'Para el hambre de verdad. El doble de albacora, el doble de yuca y el mismo caldo legendario que nos hizo famosos.',
          imageUrl: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=700&q=80',
          tags: ['Porción XXL', 'Para llenar'],
        },
      ],

      ingredients: [
        { icon: '🐟', name: 'Albacora Fresca',  description: 'Atún de aleta amarilla seleccionado diariamente. Cocido en su propio jugo para conservar todo su sabor.' },
        { icon: '🌿', name: 'Yuca Tierna',       description: 'Yuca criolla cosechada fresca, cocinada hasta alcanzar la textura suave y cremosa que complementa el caldo.' },
        { icon: '🧅', name: 'Cebolla Morada',    description: 'Encurtida con limón, sal y cilantro. El toque fresco y ácido que equilibra el sabor intenso del caldo.' },
        { icon: '🍅', name: 'Tomate y Ají',      description: 'Sofrito base de la casa: tomate maduro, ají amarillo y especias que dan el color y aroma inconfundible.' },
        { icon: '🫙', name: 'Caldo Artesanal',   description: 'Preparado desde las 5 a.m. con cabezas de pescado, hierba buena y limón. El secreto de nuestra sazón legendaria.' },
        { icon: '🌱', name: 'Cilantro y Limón',  description: 'Toque final de cilantro fresco picado y un chorrito de limón que despierta todos los sabores del plato.' },
      ],
    },

    /* ══════════════════════════════
       2. CEVICHES
    ══════════════════════════════ */
    {
      slug: 'ceviches',
      tag: '🦐 Del Mar',
      title: 'Ceviches y Más',
      description: 'Frescura del mar en cada bocado. Preparados al momento con ingredientes frescos y limón recién exprimido.',
      longDescription: 'Cada ceviche sale de nuestra cocina en minutos. Mariscos frescos, limón exprimido al instante y el toque de nuestro aliño secreto. La frescura no se improvisa — aquí es tradición.',
      imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1200&q=85',
      imageAlt: 'Ceviches frescos Las 5 Esquinas',

      dishes: [
        {
          name: 'Ceviche de Camarón',
          description: 'Camarones frescos en jugo de limón y naranja, cebolla morada, tomate y cilantro. Clásico e irresistible.',
          imageUrl: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=700&q=80',
          badge: 'Más Pedido',
          tags: ['Camarón fresco', 'Limón natural'],
        },
        {
          name: 'Ceviche Mixto',
          description: 'Camarón, concha y calamar juntos. El mejor de los tres mundos en una sola porción con jugo picante al gusto.',
          imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=700&q=80',
          badge: 'Favorito',
          tags: ['Camarón + Concha + Calamar'],
        },
        {
          name: 'Ceviche de Concha',
          description: 'Conchas prietas en su propio jugo con limón, cebolla y cilantro. Sabor intenso a mar profundo.',
          imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=700&q=80',
          tags: ['Concha prieta', 'Receta tradicional'],
        },
        {
          name: 'Ceviche de Pescado',
          description: 'Filete de corvina en jugo de limón con ají, tomate y cilantro fresco. Suave, fresco y lleno de sabor.',
          imageUrl: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=700&q=80',
          tags: ['Corvina fresca', 'Sin picante'],
        },
      ],
    },

    /* ══════════════════════════════
       3. ACOMPAÑANTES
    ══════════════════════════════ */
    {
      slug: 'complementos',
      tag: '🍿 Acompañantes',
      title: 'Tus Acompañantes',
      description: 'Canguil crujiente, chifles dorados o arroz blanco. ¡Tú eliges cómo completar tu experiencia!',
      longDescription: 'El encebollado perfecto merece los acompañantes perfectos. Todos preparados al momento, con el mismo cuidado y sazón que ponemos en cada plato de la casa.',
      imageUrl: 'https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=1200&q=85',
      imageAlt: 'Acompañantes y complementos',

      dishes: [
        {
          name: 'Porción de Chifles',
          description: 'Rodajas de plátano verde fritas hasta quedar crujientes y doradas. El acompañante clásico del encebollado costeño.',
          imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&q=80',
          badge: 'Clásico',
          tags: ['Plátano verde', 'Recién fritos'],
        },
        {
          name: 'Arroz Blanco',
          description: 'Arroz de grano largo cocinado en punto perfecto. Ideal para acompañar el caldo o el ceviche.',
          imageUrl: 'https://images.unsplash.com/photo-1536304993881-ff86e0c9ef9?w=700&q=80',
          tags: ['Porción generosa', 'Sin condimentos'],
        },
        {
          name: 'Canguil',
          description: 'Palomitas de maíz criollo tostadas con mantequilla y sal. El snack favorito mientras espera su plato.',
          imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&q=80',
          tags: ['Maíz criollo', 'Con mantequilla'],
        },
        {
          name: 'Patacones',
          description: 'Plátano verde aplastado y frito dos veces hasta quedar crujiente por fuera y suave por dentro. Irresistibles.',
          imageUrl: 'https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=700&q=80',
          tags: ['Doble fritura', 'Recién hechos'],
        },
        {
          name: 'Pan de Yuca',
          description: 'Bolitas de yuca y queso horneadas al momento. Perfectas para mojar en el caldo del encebollado.',
          imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=700&q=80',
          badge: 'Nuevo',
          tags: ['Yuca + Queso', 'Horneado'],
        },
      ],
    },
  ];

  readonly reviews: Review[] = [
    {
      author: 'Carlos M.',
      role: '⭐ Local Guide · Google Maps',
      initial: 'C',
      rating: 5,
      text: 'Este encebollado se encuentra en el top 3 de los legendarios. El sabor es inigualable, siempre vuelvo.',
    },
    {
      author: 'Gabriela López',
      role: 'Google Maps',
      initial: 'G',
      rating: 5,
      text: 'Ambiente acogedor para ir con familia o amigos. Atención de primer nivel. El mixto doble es espectacular.',
    },
    {
      author: 'Rodrigo V.',
      role: 'Google Maps',
      initial: 'R',
      rating: 5,
      text: 'La yuca melosa y el caldo bien sazonado me recuerdan al encebollado que hacía mi abuela. Tradición pura.',
    },
  ];

  getItemBySlug(slug: string): MenuItem | undefined {
    return this.menuItems.find(i => i.slug === slug);
  }
}
