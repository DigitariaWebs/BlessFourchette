export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: string;
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
  image: string;
  imageAlt: string;
}

export interface MenuConfig {
  title: string;
  sections: MenuSection[];
  notes?: string[];
}

export const menuConfigs: Record<string, MenuConfig> = {
  ecole: {
    title: "Menu École",
    notes: [
      "Les menus sont disponibles du lundi au jeudi",
      "Les commandes peuvent être passées pour le mois au complet, sinon à toutes les semaines le dimanche jusqu'à midi",
      "Les menus seront changés à tous les mois"
    ],
    sections: [
      // OCTOBRE 2025 (15-30 octobre)
      {
        id: "octobre-semaine3",
        title: "OCTOBRE - SEMAINE 3",
        image: "/Menu/CheeseMacorona.jpg",
        imageAlt: "Riz noir et légumes sautés au tofu",
        items: [
          {
            id: "oct-s3-mercredi",
            title: "Mercredi - Riz noir et légumes sauté au tofu",
            description: "Riz noir, légumes variés sautés, tofu mariné - Menu végétarien complet",
            price: "$10",
          },
          {
            id: "oct-s3-jeudi",
            title: "Jeudi - Hamburger de tofu et patate rizolé",
            description: "Hamburger végétarien au tofu, patates rizolées croustillantes",
            price: "$10",
          },
        ],
      },
      {
        id: "octobre-semaine4",
        title: "OCTOBRE - SEMAINE 4",
        image: "/Menu/Sandwitch.jpg",
        imageAlt: "Plats végétariens variés",
        items: [
          {
            id: "oct-s4-lundi",
            title: "Lundi - Riz blanc, Purée de pois noir, Légumes épinards",
            description: "Riz blanc, purée de pois noir créole, épinards sautés aux épices",
            price: "$10",
          },
          {
            id: "oct-s4-mardi",
            title: "Mardi - Pomme de terre purée et légumes sauté et pois chiche",
            description: "Purée de pommes de terre, légumes sautés, pois chiches épicés",
            price: "$10",
          },
          {
            id: "oct-s4-mercredi",
            title: "Mercredi - Salade césar au simili de poulet et pain",
            description: "Salade césar végétarienne, simili de poulet, pain frais",
            price: "$10",
          },
          {
            id: "oct-s4-jeudi",
            title: "Jeudi - Sandwich de bergène chaud",
            description: "Sandwich chaud aux aubergines grillées et épices créoles",
            price: "$10",
          },
        ],
      },
      {
        id: "octobre-semaine5",
        title: "OCTOBRE - SEMAINE 5",
        image: "/Menu/ChikenBreast.jpg",
        imageAlt: "Riz aux pois et légumes",
        items: [
          {
            id: "oct-s5-lundi",
            title: "Lundi - Riz au pois brun, Sauté de simili de bœuf",
            description: "Riz aux pois bruns, sauté de protéine végétale au bœuf",
            price: "$10",
          },
          {
            id: "oct-s5-mardi",
            title: "Mardi - Macaroni aux légumes",
            description: "Macaroni avec légumes variés sautés et sauce créole",
            price: "$10",
          },
          {
            id: "oct-s5-mercredi",
            title: "Mercredi - Salade de betterave et pain",
            description: "Salade de betteraves fraîches, vinaigrette maison, pain artisanal",
            price: "$10",
          },
          {
            id: "oct-s5-jeudi",
            title: "Jeudi - Fajitas aux légumes et pomme de terre sauté",
            description: "Fajitas végétariennes, légumes grillés, pommes de terre sautées",
            price: "$10",
          },
        ],
      },
      // NOVEMBRE 2025 (3-27 novembre)
      {
        id: "novembre-semaine1",
        title: "NOVEMBRE - SEMAINE 1",
        image: "/Menu/BowlOfSomething.jpg",
        imageAlt: "Riz aux légumes et tofu",
        items: [
          {
            id: "nov-s1-lundi",
            title: "Lundi - Riz aux légumes et sauté de tofu",
            description: "Riz parfumé, légumes de saison, tofu sauté aux épices créoles",
            price: "$10",
          },
          {
            id: "nov-s1-mardi",
            title: "Mardi - Purée de pomme de terre et ragout de viande végétal au bœuf",
            description: "Purée crémeuse, ragout de protéine végétale au bœuf",
            price: "$10",
          },
          {
            id: "nov-s1-mercredi",
            title: "Mercredi - Salade de carotte et piment avec pain nan",
            description: "Salade de carottes épicée au piment, pain nan traditionnel",
            price: "$10",
          },
          {
            id: "nov-s1-jeudi",
            title: "Jeudi - Burger de bœuf végétal",
            description: "Burger végétarien avec galette de bœuf végétal et garnitures",
            price: "$10",
          },
        ],
      },
      {
        id: "novembre-semaine2",
        title: "NOVEMBRE - SEMAINE 2",
        image: "/Menu/CheeseMacorona.jpg",
        imageAlt: "Spaghetti aux légumes",
        items: [
          {
            id: "nov-s2-lundi",
            title: "Lundi - Riz blanc, Purée de pois brun, Légume de chou vert et carotte",
            description: "Riz blanc, purée de pois bruns, chou vert et carottes sautés",
            price: "$10",
          },
          {
            id: "nov-s2-mardi",
            title: "Mardi - Spaghetti et sauce aux légumes diverses",
            description: "Spaghetti avec sauce riche aux légumes variés de saison",
            price: "$10",
          },
          {
            id: "nov-s2-mercredi",
            title: "Mercredi - Salade de chou et pain",
            description: "Salade de chou fraîche, vinaigrette créole, pain frais",
            price: "$10",
          },
          {
            id: "nov-s2-jeudi",
            title: "Jeudi - Sandwich froide au légume",
            description: "Sandwich froid aux légumes frais et condiments maison",
            price: "$10",
          },
        ],
      },
      {
        id: "novembre-semaine3",
        title: "NOVEMBRE - SEMAINE 3",
        image: "/Menu/BowlOfSomething.jpg",
        imageAlt: "Lasagne végétarienne",
        items: [
          {
            id: "nov-s3-lundi",
            title: "Lundi - Riz au petit pois vert et brocoli/chou fleur",
            description: "Riz aux petits pois verts, brocoli et chou-fleur vapeur",
            price: "$10",
          },
          {
            id: "nov-s3-mardi",
            title: "Mardi - Lasagne végétarienne",
            description: "Lasagne aux légumes et fromage, sauce tomate maison",
            price: "$10",
          },
          {
            id: "nov-s3-mercredi",
            title: "Mercredi - Salade de bébé épinard et quinoa",
            description: "Salade de jeunes épinards, quinoa, vinaigrette légère",
            price: "$10",
          },
          {
            id: "nov-s3-jeudi",
            title: "Jeudi - Ragout de bœuf végétal",
            description: "Ragout consistant de protéine végétale au bœuf et légumes",
            price: "$10",
          },
        ],
      },
      {
        id: "novembre-semaine4",
        title: "NOVEMBRE - SEMAINE 4",
        image: "/Menu/ChikenBreast.jpg",
        imageAlt: "Pâté chinois végétarien",
        items: [
          {
            id: "nov-s4-lundi",
            title: "Lundi - Pâté chinois au bœuf végétarien",
            description: "Pâté chinois traditionnel avec bœuf végétarien et maïs",
            price: "$10",
          },
          {
            id: "nov-s4-mardi",
            title: "Mardi - Pomme de terre au four, brocoli, galette de tofu",
            description: "Pommes de terre au four, brocoli vapeur, galette de tofu grillée",
            price: "$10",
          },
          {
            id: "nov-s4-mercredi",
            title: "Mercredi - Salade de couscous et pain",
            description: "Salade de couscous aux légumes frais, pain artisanal",
            price: "$10",
          },
          {
            id: "nov-s4-jeudi",
            title: "Jeudi - Soupe de courge et gingembre et pain",
            description: "Soupe crémeuse de courge au gingembre, pain frais",
            price: "$10",
          },
        ],
      },
      // DÉCEMBRE 2025 (1-22 décembre)
      {
        id: "decembre-semaine1",
        title: "DÉCEMBRE - SEMAINE 1",
        image: "/Menu/Sandwitch.jpg",
        imageAlt: "Hamburger de tofu",
        items: [
          {
            id: "dec-s1-lundi",
            title: "Lundi - Riz blanc, Purée de pois vert, Légume épinard",
            description: "Riz blanc, purée de pois verts, épinards sautés aux épices",
            price: "$10",
          },
          {
            id: "dec-s1-mardi",
            title: "Mardi - Pomme de terre purée et légume sauté et pois chiche",
            description: "Purée de pommes de terre, légumes sautés, pois chiches épicés",
            price: "$10",
          },
          {
            id: "dec-s1-mercredi",
            title: "Mercredi - Salade césar de betterave et pain",
            description: "Salade césar aux betteraves, vinaigrette créole, pain frais",
            price: "$10",
          },
          {
            id: "dec-s1-jeudi",
            title: "Jeudi - Hamburger de tofu et patate rizolé",
            description: "Hamburger végétarien au tofu, patates rizolées croustillantes",
            price: "$10",
          },
        ],
      },
      {
        id: "decembre-semaine2",
        title: "DÉCEMBRE - SEMAINE 2",
        image: "/Menu/BowlOfSomething.jpg",
        imageAlt: "Couscous végétarien",
        items: [
          {
            id: "dec-s2-lundi",
            title: "Lundi - Couscous et viande végétarienne au bœuf",
            description: "Couscous traditionnel avec protéine végétale au bœuf",
            price: "$10",
          },
          {
            id: "dec-s2-mardi",
            title: "Mardi - Ragout de patate douce et légumes",
            description: "Ragout consistant de patates douces et légumes de saison",
            price: "$10",
          },
          {
            id: "dec-s2-mercredi",
            title: "Mercredi - Quiche aux légumes",
            description: "Quiche végétarienne aux légumes frais et fromage",
            price: "$10",
          },
          {
            id: "dec-s2-jeudi",
            title: "Jeudi - Pita au bœuf végétarien",
            description: "Pain pita garni de bœuf végétarien et légumes frais",
            price: "$10",
          },
        ],
      },
      {
        id: "decembre-semaine3",
        title: "DÉCEMBRE - SEMAINE 3",
        image: "/Menu/ChikenBreast.jpg",
        imageAlt: "Pâté chinois végétarien",
        items: [
          {
            id: "dec-s3-lundi",
            title: "Lundi - Riz noir et sauté de tofu",
            description: "Riz noir parfumé, tofu sauté aux légumes et épices créoles",
            price: "$10",
          },
          {
            id: "dec-s3-mardi",
            title: "Mardi - Pâté chinois végé",
            description: "Pâté chinois végétarien traditionnel avec protéines végétales",
            price: "$10",
          },
          {
            id: "dec-s3-mercredi",
            title: "Mercredi - Salade verte et galette de tofu",
            description: "Salade verte fraîche accompagnée de galette de tofu grillée",
            price: "$10",
          },
          {
            id: "dec-s3-jeudi",
            title: "Jeudi - Soupe de carotte et pain",
            description: "Soupe crémeuse de carottes aux épices, pain frais",
            price: "$10",
          },
        ],
      },
      {
        id: "decembre-semaine4",
        title: "DÉCEMBRE - SEMAINE 4",
        image: "/Menu/CheeseMacorona.jpg",
        imageAlt: "Lasagne végétarienne",
        items: [
          {
            id: "dec-s4-lundi",
            title: "Lundi - Quinoa et galette de tofu",
            description: "Quinoa aux légumes accompagné d'une galette de tofu grillée",
            price: "$10",
          },
          {
            id: "dec-s4-mardi",
            title: "Mardi - Macaroni au tofu",
            description: "Macaroni avec tofu sauté et sauce créole aux légumes",
            price: "$10",
          },
          {
            id: "dec-s4-mercredi",
            title: "Mercredi - Riz blanc et sauté de légumes",
            description: "Riz blanc parfumé, légumes variés sautés aux épices",
            price: "$10",
          },
          {
            id: "dec-s4-jeudi",
            title: "Jeudi - Lasagne végétarienne",
            description: "Lasagne aux légumes et fromage, sauce tomate maison",
            price: "$10",
          },
        ],
      },
    ],
  },
  jus: {
    title: "Jus",
    sections: [
      {
        id: "jus-naturels",
        title: "JUS NATURELS",
        image: "/Menu/StrawberryJus.jpg",
        imageAlt: "Jus frais et naturels",
        items: [
          {
            id: "jus-goyave",
            title: "Jus de Goyave",
            description: "Jus de goyave frais pressé, saveur tropicale authentique",
            price: "$5",
          },
          {
            id: "jus-gingembre",
            title: "Jus de Gingembre",
            description: "Jus de gingembre frais pressé, énergisant et épicé",
            price: "$5",
          },
          {
            id: "jus-ananas",
            title: "Jus d'Ananas",
            description: "Jus d'ananas frais pressé, douceur tropicale",
            price: "$5",
          },
          {
            id: "jus-carotte",
            title: "Jus de Carotte",
            description: "Jus de carotte frais pressé, riche en vitamines",
            price: "$5",
          },
          {
            id: "jus-betterave-carotte",
            title: "Jus de Betterave et Carotte",
            description: "Mélange de betterave et carotte, détoxifiant et nutritif",
            price: "$5",
          },
        ],
      },
    ],
  },
  epices: {
    title: "Épices Pump Fourchette",
    sections: [
      {
        id: "epices-vegetales",
        title: "ÉPICES VÉGÉTALES",
        image: "/Menu/Epice.jpg",
        imageAlt: "Épices végétales sans sel ajouté",
        items: [
          {
            id: "epices-pump-fourchette",
            title: "Épices Pump Fourchette",
            description: "Épices faites avec des produits végétaux, pas de sel ajouté. Peuvent être utilisées pour assaisonner différentes nourritures concoctées à la maison.",
            price: "$10",
          },
        ],
      },
    ],
  },
};

export const getMenuConfig = (menuType: string = 'ecole'): MenuConfig => {
  return menuConfigs[menuType] || menuConfigs.ecole;
};
