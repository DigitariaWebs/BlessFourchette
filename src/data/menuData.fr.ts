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
  school: {
    title: "Menu Scolaire",
    notes: [
      "Les menus sont disponibles du lundi au jeudi",
      "Les commandes peuvent être passées pour le mois complet, ou chaque dimanche jusqu'à midi",
      "Les menus changent chaque mois",
      "Menu scolaire disponible à partir du 1er novembre",
      "Nous offrons un BBQ végan gratuit (Beyond Meat, fromage végan, et plus) à toutes les écoles en juin, entièrement payé par nous.",
      "Un jus de fruit est inclus avec chaque repas !",
    ],
    sections: [
      {
        id: "octobre-semaine3",
        title: "OCTOBRE - SEMAINE 3",
        image: "/Menu/CheeseMacorona.jpg",
        imageAlt: "Riz noir et légumes sautés au tofu",
        items: [
          {
            id: "oct-s3-mercredi",
            title: "Mercredi - Riz noir et légumes sautés au tofu",
            description: "Riz noir, légumes variés sautés, tofu mariné - Menu végétarien complet",
            price: "8 $",
          },
          {
            id: "oct-s3-jeudi",
            title: "Jeudi - Burger de tofu et pommes de terre croustillantes",
            description: "Burger végétarien au tofu, quartiers de pommes de terre croustillants",
            price: "8 $",
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
            title: "Lundi - Riz blanc, purée de pois Schwar, épinards",
            description: "Riz blanc, purée de pois Schwar à la créole, épinards sautés",
            price: "8 $",
          },
          {
            id: "oct-s4-mardi",
            title: "Mardi - Purée de pommes de terre et légumes sautés aux pois chiches",
            description: "Purée de pommes de terre, légumes variés sautés, pois chiches épicés",
            price: "8 $",
          },
          {
            id: "oct-s4-mercredi",
            title: "Mercredi - Salade César avec substitut de poulet et pain",
            description: "Salade César végétarienne, substitut de poulet, pain frais",
            price: "8 $",
          },
          {
            id: "oct-s4-jeudi",
            title: "Jeudi - Sandwich chaud aux aubergines",
            description: "Sandwich chaud aux aubergines grillées et épices créoles",
            price: "8 $",
          },
        ],
      },
      {
        id: "octobre-semaine5",
        title: "OCTOBRE - SEMAINE 5",
        image: "/Menu/Couscous.png",
        imageAlt: "Riz aux pois et légumes",
        items: [
          {
            id: "oct-s5-lundi",
            title: "Lundi - Riz aux pois bruns, sauté de bœuf végan",
            description: "Riz aux pois bruns, sauté avec protéine végane de bœuf",
            price: "8 $",
          },
          {
            id: "oct-s5-mardi",
            title: "Mardi - Macaroni aux légumes",
            description: "Macaroni aux légumes variés sautés et sauce créole",
            price: "8 $",
          },
          {
            id: "oct-s5-mercredi",
            title: "Mercredi - Salade de betterave et pain",
            description: "Salade de betterave fraîche, vinaigrette maison, pain artisanal",
            price: "8 $",
          },
          {
            id: "oct-s5-jeudi",
            title: "Jeudi - Fajitas végétariennes et pommes de terre sautées",
            description: "Fajitas végétariennes, légumes grillés, pommes de terre sautées",
            price: "8 $",
          },
        ],
      },
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
            price: "8 $",
          },
          {
            id: "nov-s1-mardi",
            title: "Mardi - Purée de pommes de terre et ragoût de protéine végétale",
            description: "Purée de pommes de terre onctueuse, ragoût de protéine végétale",
            price: "8 $",
          },
          {
            id: "nov-s1-mercredi",
            title: "Mercredi - Salade de carotte et chili avec pain nan",
            description: "Salade de carotte épicée au chili, pain nan traditionnel",
            price: "8 $",
          },
          {
            id: "nov-s1-jeudi",
            title: "Jeudi - Burger végétarien au bœuf",
            description: "Burger végétarien avec galette de bœuf végétal et toppings",
            price: "8 $",
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
            title: "Lundi - Riz blanc, purée de pois bruns, légumes aux chou vert et carotte",
            description: "Riz blanc, purée de pois bruns, chou vert et carottes sautés",
            price: "8 $",
          },
          {
            id: "nov-s2-mardi",
            title: "Mardi - Spaghetti à la sauce aux légumes variés",
            description: "Spaghetti avec sauce riche faite de légumes de saison variés",
            price: "8 $",
          },
          {
            id: "nov-s2-mercredi",
            title: "Mercredi - Salade de chou et pain",
            description: "Salade de chou fraîche, vinaigrette créole, pain frais",
            price: "8 $",
          },
          {
            id: "nov-s2-jeudi",
            title: "Jeudi - Sandwich froid aux légumes",
            description: "Sandwich froid aux légumes frais et condiments maison",
            price: "8 $",
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
            title: "Lundi - Riz aux petits pois verts et brocoli/chou-fleur",
            description: "Riz aux petits pois verts, brocoli et chou-fleur cuits à la vapeur",
            price: "8 $",
          },
          {
            id: "nov-s3-mardi",
            title: "Mardi - Lasagne végétarienne",
            description: "Lasagne aux légumes et fromage, sauce tomate maison",
            price: "8 $",
          },
          {
            id: "nov-s3-mercredi",
            title: "Mercredi - Salade de jeunes épinards et quinoa",
            description: "Salade de jeunes épinards, quinoa, vinaigrette légère",
            price: "8 $",
          },
          {
            id: "nov-s3-jeudi",
            title: "Jeudi - Ragoût de protéine végétale au bœuf",
            description: "Ragoût copieux avec protéine végétale et légumes",
            price: "8 $",
          },
        ],
      },
      {
        id: "novembre-semaine4",
        title: "NOVEMBRE - SEMAINE 4",
        image: "/Menu/VegeterienFood.png",
        imageAlt: "Tarte au bœuf végétarienne",
        items: [
          {
            id: "nov-s4-lundi",
            title: "Lundi - Tarte au bœuf végétarienne",
            description: "Tarte traditionnelle au bœuf végétarien et maïs",
            price: "8 $",
          },
          {
            id: "nov-s4-mardi",
            title: "Mardi - Pommes de terre au four, brocoli, galette de tofu",
            description: "Pommes de terre au four, brocoli vapeur, galette de tofu grillée",
            price: "8 $",
          },
          {
            id: "nov-s4-mercredi",
            title: "Mercredi - Salade de couscous et pain",
            description: "Salade de couscous aux légumes frais, pain artisanal",
            price: "8 $",
          },
          {
            id: "nov-s4-jeudi",
            title: "Jeudi - Soupe à la citrouille et au gingembre avec pain",
            description: "Soupe crémeuse à la citrouille et au gingembre, pain frais",
            price: "8 $",
          },
        ],
      },
      {
        id: "decembre-semaine1",
        title: "DÉCEMBRE - SEMAINE 1",
        image: "/Menu/Sandwitch.jpg",
        imageAlt: "Burger de tofu",
        items: [
          {
            id: "dec-s1-lundi",
            title: "Lundi - Riz blanc, purée de pois verts, légumes aux épinards",
            description: "Riz blanc, purée de pois verts, épinards sautés aux épices",
            price: "8 $",
          },
          {
            id: "dec-s1-mardi",
            title: "Mardi - Purée de pommes de terre et légumes sautés aux pois chiches",
            description: "Purée de pommes de terre, légumes sautés, pois chiches épicés",
            price: "8 $",
          },
          {
            id: "dec-s1-mercredi",
            title: "Mercredi - Salade César aux betteraves et pain",
            description: "Salade César aux betteraves, vinaigrette créole, pain frais",
            price: "8 $",
          },
          {
            id: "dec-s1-jeudi",
            title: "Jeudi - Burger de tofu et pommes de terre croustillantes",
            description: "Burger végétarien au tofu, quartiers de pommes de terre croustillants",
            price: "8 $",
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
            title: "Lundi - Couscous au bœuf végétarien",
            description: "Couscous traditionnel avec protéine végétale de bœuf",
            price: "8 $",
          },
          {
            id: "dec-s2-mardi",
            title: "Mardi - Ragoût de patate douce et légumes",
            description: "Ragoût copieux aux patates douces et légumes de saison",
            price: "8 $",
          },
          {
            id: "dec-s2-mercredi",
            title: "Mercredi - Quiche aux légumes",
            description: "Quiche végétarienne aux légumes frais et fromage",
            price: "8 $",
          },
          {
            id: "dec-s2-jeudi",
            title: "Jeudi - Pita au bœuf végétarien",
            description: "Pain pita garni de bœuf végétarien et légumes frais",
            price: "8 $",
          },
        ],
      },
      {
        id: "decembre-semaine3",
        title: "DÉCEMBRE - SEMAINE 3",
        image: "/Menu/Couscous.png",
        imageAlt: "Tarte au bœuf végétarienne",
        items: [
          {
            id: "dec-s3-lundi",
            title: "Lundi - Riz noir et sauté de tofu",
            description: "Riz noir parfumé, tofu sauté aux légumes et épices créoles",
            price: "8 $",
          },
          {
            id: "dec-s3-mardi",
            title: "Mardi - Tarte au bœuf végétarienne",
            description: "Tarte végétarienne traditionnelle aux protéines végétales",
            price: "8 $",
          },
          {
            id: "dec-s3-mercredi",
            title: "Mercredi - Salade verte et galette de tofu",
            description: "Salade verte fraîche accompagnée de galette de tofu grillée",
            price: "8 $",
          },
          {
            id: "dec-s3-jeudi",
            title: "Jeudi - Soupe à la carotte et pain",
            description: "Soupe crémeuse à la carotte et aux épices, pain frais",
            price: "8 $",
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
            description: "Quinoa aux légumes accompagné de galette de tofu grillée",
            price: "8 $",
          },
          {
            id: "dec-s4-mardi",
            title: "Mardi - Macaroni au tofu",
            description: "Macaroni au tofu sauté et sauce de légumes créole",
            price: "8 $",
          },
          {
            id: "dec-s4-mercredi",
            title: "Mercredi - Riz blanc et légumes sautés",
            description: "Riz blanc parfumé, légumes variés sautés aux épices",
            price: "8 $",
          },
          {
            id: "dec-s4-jeudi",
            title: "Jeudi - Lasagne végétarienne",
            description: "Lasagne aux légumes et fromage, sauce tomate maison",
            price: "8 $",
          },
        ],
      },
    ],
  },
  family: {
    title: "Menu Familial",
    notes: [
      "Bientôt disponible le 1er novembre 2025 !",
      "Nos délicieux repas familiaux seront disponibles pour pré-commande",
      "Portions parfaites pour les familles de 4-6 personnes",
      "Restez à l'écoute pour des plats familiaux incroyables !",
      "Livraison disponible seulement vendredi 11h00 à 16h00",
      "Un jus de fruit est inclus avec chaque repas !",
    ],
    sections: [
      {
        id: "family-coming-soon",
        title: "FESTIN FAMILIAL - DISPONIBLE LE 1ER NOVEMBRE 2025",
        image: "/comingsoon.png",
        imageAlt: "Préparations de repas familiaux délicieux",
        items: [
          {
            id: "family-announcement",
            title: "Lancement du Menu Familial - 1er novembre 2025",
            description: "Nous sommes ravis d'annoncer notre nouveau Menu Familial ! Parfait pour les réunions de famille, les repas de fin de semaine et les occasions spéciales. Nos chefs préparent des portions généreuses de repas copieux et sains qui rassembleront votre famille autour de la table. Restez à l'écoute pour plus de détails !",
            price: "Bientôt disponible",
          },
          {
            id: "family-features",
            title: "Ce qu'il faut attendre",
            description: "• Portions familiales (4-6 personnes)\n• Menu rotatif hebdomadaire avec des ingrédients de saison\n• Mélange de plats traditionnels et de fusion modernes\n• Options végétariennes et véganes disponibles\n• Menus spéciaux pour les fêtes",
            price: "À partir de 45 $",
          },
          {
            id: "family-preorder",
            title: "Information de pré-commande",
            description: "Les pré-commandes ouvriront le 25 septembre 2025. Soyez parmi les premières familles à découvrir notre nouveau menu ! Suivez-nous sur les réseaux sociaux ou abonnez-vous à notre newsletter pour les mises à jour et les offres d'accès anticipé exclusives.",
            price: "Réserver maintenant",
          },
        ],
      },
    ],
  },
  weekend: {
    title: "Menu Fritaille de Fin de Semaine",
    notes: [
      "Disponible du vendredi au dimanche",
      "Les commandes peuvent être passées à l'avance",
      "Pour les commandes de groupe, veuillez les placer à l'avance et indiquer l'heure de livraison souhaitée",
      "Tous les choix de viande sont servis avec : acra, marinade, plantains salés et sucrés, vrai calmar frit (de saison), pikliz, sauce, et choix de beignets de morue ou hareng (choix du chef)",
      "Choix de salade verte ou salade de macaroni inclus",
      "Options de riz disponibles en extras",
    ],
    sections: [
      {
        id: "meat-choices",
        title: "CHOIX DE VIANDE",
        image: "/Menu/TassotBeefGoatLamb.jpg",
        imageAlt: "Plats de viande haïtiens traditionnels",
        items: [
          {
            id: "boeuf-saute-epice",
            title: "Tassot de bœuf sauté épicé",
            description: "Tassot de bœuf sauté épicé, servi avec accompagnements haïtiens traditionnels",
            price: "24,75 $",
          },
          {
            id: "boeuf-frit",
            title: "Tassot de bœuf frit",
            description: "Tassot de bœuf frit, servi avec accompagnements haïtiens traditionnels",
            price: "22,50 $",
          },
          {
            id: "agneau-ail-thym",
            title: "Carré d'agneau à l'ail et thym",
            description: "Carré d'agneau à l'ail et thym, servi avec accompagnements haïtiens traditionnels",
            price: "30,00 $",
          },
          {
            id: "tilapia",
            title: "Poisson tilapia sans arête sans peau",
            description: "Tilapia sans arête sans peau, servi avec accompagnements haïtiens traditionnels",
            price: "23,75 $",
          },
          {
            id: "cabri-saute-epice",
            title: "Tassot de cabri sauté épicé",
            description: "Tassot de cabri sauté épicé, servi avec accompagnements haïtiens traditionnels",
            price: "29,75 $",
          },
          {
            id: "cabri-frit",
            title: "Tassot de cabri frit",
            description: "Tassot de cabri frit, servi avec accompagnements haïtiens traditionnels",
            price: "27,75 $",
          },
        ],
      },
      {
        id: "rice-extras",
        title: "OPTIONS DE RIZ (EXTRA)",
        image: "/Menu/HaitianRiceVarietiesDjon.jpg",
        imageAlt: "Options de riz variées",
        items: [
          {
            id: "riz-noir",
            title: "Riz noir",
            description: "Riz noir traditionnel haïtien",
            price: "6,00 $",
          },
          {
            id: "riz-blanc",
            title: "Riz blanc",
            description: "Riz blanc vapeur",
            price: "3,00 $",
          },
          {
            id: "riz-national",
            title: "Riz aux pois bruns",
            description: "Riz aux pois bruns",
            price: "4,15 $",
          },
        ],
      },
      {
        id: "advance-orders",
        title: "COMMANDES À L'AVANCE",
        image: "/Menu/CaribbeanCodfishBallsCroquettes.png",
        imageAlt: "Articles de commande spéciale",
        items: [
          {
            id: "chiktail-morue",
            title: "Beignets de morue",
            description: "Beignets de morue traditionnels haïtiens",
            price: "12,00 $",
          },
          {
            id: "cornet-morue",
            title: "Croquettes de morue (30 pièces)",
            description: "30 croquettes de morue",
            price: "40,00 $",
          },
          {
            id: "cornet-viande-hache",
            title: "Croquettes de viande hachée (30 pièces)",
            description: "30 croquettes de viande hachée",
            price: "35,00 $",
          },
        ],
      },
      {
        id: "desserts",
        title: "DESSERTS",
        image: "/Menu/HaitianCheesecakePineappleBlueberryCherry.png",
        imageAlt: "Desserts inspirés haïtiens",
        items: [
          {
            id: "gateau-fromage-ananas",
            title: "Gâteau au fromage à l'ananas",
            description: "Gâteau au fromage crémeux avec garniture à l'ananas",
            price: "5,00 $",
          },
          {
            id: "gateau-fromage-bleuet",
            title: "Gâteau au fromage aux bleuets",
            description: "Gâteau au fromage crémeux avec garniture aux bleuets",
            price: "5,00 $",
          },
          {
            id: "gateau-fromage-cerise",
            title: "Gâteau au fromage à la cerise noire",
            description: "Gâteau au fromage crémeux avec garniture à la cerise noire",
            price: "5,00 $",
          },
        ],
      },
      {
        id: "beverages",
        title: "BREUVAGES",
        image: "/Menu/CaribbeanFruitJuicesSoursopPomegranate.jpg",
        imageAlt: "Breuvages tropicaux rafraîchissants",
        items: [
          {
            id: "jus-corosol",
            title: "Jus de corosol",
            description: "Jus de corosol frais",
            price: "4,25 $",
          },
          {
            id: "jus-grenadia",
            title: "Jus de grenade",
            description: "Jus de grenade frais",
            price: "3,50 $",
          },
          {
            id: "jus-ananas",
            title: "Jus d'ananas",
            description: "Jus d'ananas frais",
            price: "3,50 $",
          },
        ],
      },
    ],
  },
  fritaille: {
    title: "Menu Fritaille",
    notes: [
      "Pour les commandes de groupe, vous pouvez les placer à l'avance le vendredi et indiquer l'heure souhaitée pour la livraison",
    ],
    sections: [
      {
        id: "choix-viande-1",
        title: "CHOIX DE VIANDE (1/2)",
        image: "/Menu/TassotBeefGoatLamb.jpg",
        imageAlt: "Tassot de bœuf",
        items: [
          {
            id: "tassot-boeuf-epice",
            title: "Tassot de bœuf sauté épicé",
            description: "Bœuf sauté épicé",
            price: "22,75 $",
          },
          {
            id: "tassot-boeuf-frit",
            title: "Tassot de bœuf frit",
            description: "Bœuf frit",
            price: "20,50 $",
          },
          {
            id: "oxtail-epice",
            title: "Queue de bœuf sauté épicé",
            description: "Queue de bœuf sautée épicée",
            price: "25,50 $",
          },
          {
            id: "tassot-cabri-epice",
            title: "Tassot de cabri sauté épicé",
            description: "Cabri sauté épicé",
            price: "27,75 $",
          },
        ],
      },
      {
        id: "choix-viande-2",
        title: "CHOIX DE VIANDE (2/2)",
        image: "/Menu/TooMuchFood1.jpg",
        imageAlt: "Cabri et poisson",
        items: [
          {
            id: "tassot-cabri-frit",
            title: "Tassot de cabri frit",
            description: "Cabri frit",
            price: "25,00 $",
          },
          {
            id: "poisson-frit",
            title: "Poisson frit",
            description: "Poisson frit",
            price: "30,00 $",
          },
          {
            id: "ailes-poulet-creole",
            title: "Ailes de poulet créoles",
            description: "Ailes de poulet créoles",
            price: "18,50 $",
          },
          {
            id: "boulette-boeuf",
            title: "Boulette de bœuf",
            description: "Boulettes de bœuf",
            price: "16,75 $",
          },
        ],
      },
      {
        id: "inclus-1",
        title: "SERVI AVEC (1/2)",
        image: "/Menu/HaitianRiceVarietiesDjon.jpg",
        imageAlt: "Riz national et accompagnements",
        items: [
          {
            id: "riz-national",
            title: "Riz national",
            description: "Riz national",
            price: "Inclus",
          },
          {
            id: "acra",
            title: "Acra",
            description: "Beignet de morue",
            price: "Inclus",
          },
          {
            id: "marinade",
            title: "Marinade",
            description: "Sauce marinade",
            price: "Inclus",
          },
          {
            id: "plantain",
            title: "Plantain salé et sucré",
            description: "Plantain salé et sucré",
            price: "Inclus",
          },
          {
            id: "lame-frit",
            title: "Calmar frit authentique (de saison)",
            description: "Calmar frit authentique (de saison)",
            price: "Inclus",
          },
        ],
      },
      {
        id: "inclus-2",
        title: "SERVI AVEC (2/2)",
        image: "/Menu/CaribbeanCodfishBallsCroquettes.png",
        imageAlt: "Salade et sauces",
        items: [
          {
            id: "salade-verte",
            title: "Salade verte",
            description: "Salade verte",
            price: "Inclus",
          },
          {
            id: "pikliz",
            title: "Pikliz",
            description: "Légumes marinés épicés",
            price: "Inclus",
          },
          {
            id: "petite-sauce",
            title: "Petite sauce",
            description: "Petite sauce",
            price: "Inclus",
          },
          {
            id: "chiktail-morue",
            title: "Cocktail de morue",
            description: "Cocktail de morue",
            price: "Inclus",
          },
        ],
      },
      {
        id: "extra",
        title: "EXTRAS",
        image: "/Menu/CheeseMacorona.jpg",
        imageAlt: "Accompagnements extra",
        items: [
          {
            id: "extra-riz-national",
            title: "Riz national extra",
            description: "Riz national extra",
            price: "6,00 $",
          },
          {
            id: "extra-sauce",
            title: "Sauce extra",
            description: "Sauce extra",
            price: "1,00 $",
          },
          {
            id: "pate-oeuf",
            title: "Paté aux œuf",
            description: "Paté aux œufs",
            price: "2,00 $",
          },
          {
            id: "pate-morue",
            title: "Paté à la morue",
            description: "Paté à la morue",
            price: "3,00 $",
          },
          {
            id: "chiktail-morue-extra",
            title: "Cocktail de morue extra",
            description: "Cocktail de morue extra",
            price: "12,00 $",
          },
        ],
      },
      {
        id: "breuvage",
        title: "BREUVAGES",
        image: "/Menu/CaribbeanFruitJuicesSoursopPomegranate.jpg",
        imageAlt: "Boissons rafraîchissantes",
        items: [
          {
            id: "sprite",
            title: "Sprite",
            description: "Boisson gazeuse Sprite",
            price: "1,50 $",
          },
          {
            id: "kola-champagne",
            title: "Kola champagne tropical",
            description: "Cola champagne tropical",
            price: "2,00 $",
          },
          {
            id: "malta-froide",
            title: "Malte froide",
            description: "Boisson maltée froide",
            price: "2,50 $",
          },
        ],
      },
    ],
  },
};

export const getMenuConfig = (menuType: string = 'school'): MenuConfig => {
  return menuConfigs[menuType] || menuConfigs.school;
};
