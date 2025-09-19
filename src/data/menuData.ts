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
    title: "School Menu",
    notes: [
      "Menus are available Monday through Thursday",
      "Orders can be placed for the full month, or every Sunday until noon",
      "Menus will be changed every month",
    "School menu available starting October 15th 2025",
    ],
    sections: [
      // OCTOBRE 2025 (15-30 octobre)
      {
        id: "octobre-semaine3",
        title: "OCTOBER - WEEK 3",
        image: "/Menu/CheeseMacorona.jpg",
        imageAlt: "Riz noir et légumes sautés au tofu",
        items: [
          {
            id: "oct-s3-mercredi",
            title: "Wednesday - Black rice and stir-fried vegetables with tofu",
            description:
              "Black rice, mixed vegetables stir-fried, marinated tofu - Complete vegetarian menu",
            price: "$8",
          },
          {
            id: "oct-s3-jeudi",
            title: "Thursday - Tofu burger and crispy potatoes",
            description: "Vegetarian tofu burger, crispy potato wedges",
            price: "$8",
          },
        ],
      },
      {
        id: "octobre-semaine4",
        title: "OCTOBER - WEEK 4",
        image: "/Menu/Sandwitch.jpg",
        imageAlt: "Plats végétariens variés",
        items: [
          {
            id: "oct-s4-lundi",
            title:
              "Monday - White rice, Black-eyed pea puree, Spinach vegetables",
            description:
              "White rice, creole black-eyed pea puree, sautéed spinach",
            price: "$8",
          },
          {
            id: "oct-s4-mardi",
            title:
              "Tuesday - Mashed potatoes and stir-fried vegetables with chickpeas",
            description:
              "Mashed potatoes, stir-fried mixed vegetables, spiced chickpeas",
            price: "$8",
          },
          {
            id: "oct-s4-mercredi",
            title: "Wednesday - Caesar salad with chicken substitute and bread",
            description:
              "Vegetarian Caesar salad, chicken substitute, fresh bread",
            price: "$8",
          },
          {
            id: "oct-s4-jeudi",
            title: "Thursday - Hot eggplant sandwich",
            description:
              "Hot sandwich with grilled eggplants and creole spices",
            price: "$8",
          },
        ],
      },
      {
        id: "octobre-semaine5",
        title: "OCTOBER - WEEK 5",
        image: "/Menu/Couscous.png",
        imageAlt: "Riz aux pois et légumes",
        items: [
          {
            id: "oct-s5-lundi",
            title: "Monday - Rice with brown peas, Beef substitute stir-fry",
            description:
              "Rice with brown peas, stir-fry with beef substitute protein",
            price: "$8",
          },
          {
            id: "oct-s5-mardi",
            title: "Tuesday - Macaroni with vegetables",
            description:
              "Macaroni with mixed vegetables sautéed and creole sauce",
            price: "$8",
          },
          {
            id: "oct-s5-mercredi",
            title: "Wednesday - Beet salad and bread",
            description:
              "Fresh beet salad, homemade vinaigrette, artisanal bread",
            price: "$8",
          },
          {
            id: "oct-s5-jeudi",
            title: "Thursday - Vegetable fajitas and sautéed potatoes",
            description:
              "Vegetarian fajitas, grilled vegetables, sautéed potatoes",
            price: "$8",
          },
        ],
      },
      // NOVEMBRE 2025 (3-27 novembre)
      {
        id: "novembre-semaine1",
        title: "NOVEMBER - WEEK 1",
        image: "/Menu/BowlOfSomething.jpg",
        imageAlt: "Rice with vegetables and tofu",
        items: [
          {
            id: "nov-s1-lundi",
            title: "Monday - Rice with vegetables and tofu stir-fry",
            description:
              "Fragrant rice, seasonal vegetables, tofu stir-fried with creole spices",
            price: "$8",
          },
          {
            id: "nov-s1-mardi",
            title: "Tuesday - Mashed potatoes and beef vegetable protein stew",
            description: "Creamy mashed potatoes, beef vegetable protein stew",
            price: "$8",
          },
          {
            id: "nov-s1-mercredi",
            title: "Wednesday - Carrot and chili salad with nan bread",
            description: "Spicy carrot salad with chili, traditional nan bread",
            price: "$8",
          },
          {
            id: "nov-s1-jeudi",
            title: "Thursday - Vegetable beef burger",
            description:
              "Vegetarian burger with vegetable beef patty and toppings",
            price: "$8",
          },
        ],
      },
      {
        id: "novembre-semaine2",
        title: "NOVEMBER - WEEK 2",
        image: "/Menu/CheeseMacorona.jpg",
        imageAlt: "Spaghetti with vegetables",
        items: [
          {
            id: "nov-s2-lundi",
            title:
              "Monday - White rice, Brown pea puree, Green cabbage and carrot vegetables",
            description:
              "White rice, brown pea puree, sautéed green cabbage and carrots",
            price: "$8",
          },
          {
            id: "nov-s2-mardi",
            title: "Tuesday - Spaghetti with various vegetable sauce",
            description:
              "Spaghetti with rich sauce made from various seasonal vegetables",
            price: "$8",
          },
          {
            id: "nov-s2-mercredi",
            title: "Wednesday - Cabbage salad and bread",
            description: "Fresh cabbage salad, creole vinaigrette, fresh bread",
            price: "$8",
          },
          {
            id: "nov-s2-jeudi",
            title: "Thursday - Cold vegetable sandwich",
            description:
              "Cold sandwich with fresh vegetables and homemade condiments",
            price: "$8",
          },
        ],
      },
      {
        id: "novembre-semaine3",
        title: "NOVEMBER - WEEK 3",
        image: "/Menu/BowlOfSomething.jpg",
        imageAlt: "Vegetarian lasagna",
        items: [
          {
            id: "nov-s3-lundi",
            title: "Monday - Rice with green peas and broccoli/cauliflower",
            description:
              "Rice with green peas, steamed broccoli and cauliflower",
            price: "$8",
          },
          {
            id: "nov-s3-mardi",
            title: "Tuesday - Vegetarian lasagna",
            description: "Vegetable and cheese lasagna, homemade tomato sauce",
            price: "$8",
          },
          {
            id: "nov-s3-mercredi",
            title: "Wednesday - Baby spinach and quinoa salad",
            description: "Baby spinach salad, quinoa, light vinaigrette",
            price: "$8",
          },
          {
            id: "nov-s3-jeudi",
            title: "Thursday - Beef vegetable protein stew",
            description:
              "Hearty stew with beef vegetable protein and vegetables",
            price: "$8",
          },
        ],
      },
      {
        id: "novembre-semaine4",
        title: "NOVEMBER - WEEK 4",
        image: "/Menu/VegeterienFood.png",
        imageAlt: "Vegetarian shepherd's pie",
        items: [
          {
            id: "nov-s4-lundi",
            title: "Monday - Vegetarian beef shepherd's pie",
            description:
              "Traditional shepherd's pie with vegetarian beef and corn",
            price: "$8",
          },
          {
            id: "nov-s4-mardi",
            title: "Tuesday - Baked potato, broccoli, tofu patty",
            description: "Baked potatoes, steamed broccoli, grilled tofu patty",
            price: "$8",
          },
          {
            id: "nov-s4-mercredi",
            title: "Wednesday - Couscous salad and bread",
            description:
              "Couscous salad with fresh vegetables, artisanal bread",
            price: "$8",
          },
          {
            id: "nov-s4-jeudi",
            title: "Thursday - Pumpkin and ginger soup with bread",
            description: "Creamy pumpkin soup with ginger, fresh bread",
            price: "$8",
          },
        ],
      },
      // DÉCEMBRE 2025 (1-22 décembre)
      {
        id: "decembre-semaine1",
        title: "DECEMBER - WEEK 1",
        image: "/Menu/Sandwitch.jpg",
        imageAlt: "Tofu burger",
        items: [
          {
            id: "dec-s1-lundi",
            title: "Monday - White rice, Green pea puree, Spinach vegetables",
            description:
              "White rice, green pea puree, spinach sautéed with spices",
            price: "$8",
          },
          {
            id: "dec-s1-mardi",
            title:
              "Tuesday - Mashed potatoes and stir-fried vegetables with chickpeas",
            description:
              "Mashed potatoes, stir-fried vegetables, spiced chickpeas",
            price: "$8",
          },
          {
            id: "dec-s1-mercredi",
            title: "Wednesday - Beet Caesar salad and bread",
            description:
              "Caesar salad with beets, creole vinaigrette, fresh bread",
            price: "$8",
          },
          {
            id: "dec-s1-jeudi",
            title: "Thursday - Tofu burger and crispy potatoes",
            description: "Vegetarian tofu burger, crispy potato wedges",
            price: "$8",
          },
        ],
      },
      {
        id: "decembre-semaine2",
        title: "DECEMBER - WEEK 2",
        image: "/Menu/BowlOfSomething.jpg",
        imageAlt: "Vegetarian couscous",
        items: [
          {
            id: "dec-s2-lundi",
            title: "Monday - Couscous with vegetarian beef",
            description: "Traditional couscous with beef vegetable protein",
            price: "$8",
          },
          {
            id: "dec-s2-mardi",
            title: "Tuesday - Sweet potato and vegetable stew",
            description:
              "Hearty stew with sweet potatoes and seasonal vegetables",
            price: "$8",
          },
          {
            id: "dec-s2-mercredi",
            title: "Wednesday - Vegetable quiche",
            description: "Vegetarian quiche with fresh vegetables and cheese",
            price: "$8",
          },
          {
            id: "dec-s2-jeudi",
            title: "Thursday - Vegetarian beef pita",
            description:
              "Pita bread filled with vegetarian beef and fresh vegetables",
            price: "$8",
          },
        ],
      },
      {
        id: "decembre-semaine3",
        title: "DECEMBER - WEEK 3",
        image: "/Menu/Couscous.png",
        imageAlt: "Vegetarian shepherd's pie",
        items: [
          {
            id: "dec-s3-lundi",
            title: "Monday - Black rice and tofu stir-fry",
            description:
              "Fragrant black rice, tofu stir-fried with vegetables and creole spices",
            price: "$8",
          },
          {
            id: "dec-s3-mardi",
            title: "Tuesday - Vegetarian shepherd's pie",
            description:
              "Traditional vegetarian shepherd's pie with plant-based proteins",
            price: "$8",
          },
          {
            id: "dec-s3-mercredi",
            title: "Wednesday - Green salad and tofu patty",
            description: "Fresh green salad accompanied by grilled tofu patty",
            price: "$8",
          },
          {
            id: "dec-s3-jeudi",
            title: "Thursday - Carrot soup and bread",
            description: "Creamy carrot soup with spices, fresh bread",
            price: "$8",
          },
        ],
      },
      {
        id: "decembre-semaine4",
        title: "DECEMBER - WEEK 4",
        image: "/Menu/CheeseMacorona.jpg",
        imageAlt: "Vegetarian lasagna",
        items: [
          {
            id: "dec-s4-lundi",
            title: "Monday - Quinoa and tofu patty",
            description:
              "Quinoa with vegetables accompanied by grilled tofu patty",
            price: "$8",
          },
          {
            id: "dec-s4-mardi",
            title: "Tuesday - Macaroni with tofu",
            description:
              "Macaroni with stir-fried tofu and creole vegetable sauce",
            price: "$8",
          },
          {
            id: "dec-s4-mercredi",
            title: "Wednesday - White rice and vegetable stir-fry",
            description:
              "Fragrant white rice, mixed vegetables stir-fried with spices",
            price: "$8",
          },
          {
            id: "dec-s4-jeudi",
            title: "Thursday - Vegetarian lasagna",
            description: "Vegetable and cheese lasagna, homemade tomato sauce",
            price: "$8",
          },
        ],
      },
    ],
  },
  juices: {
    title: "Juices",
    sections: [
      {
        id: "natural-juices",
        title: "NATURAL JUICES",
        image: "/Menu/StrawberryJus.jpg",
        imageAlt: "Fresh and natural juices",
        items: [
          {
            id: "guava-juice",
            title: "Guava Juice",
            description:
              "Freshly pressed guava juice, authentic tropical flavor",
            price: "$5",
          },
          {
            id: "ginger-juice",
            title: "Ginger Juice",
            description: "Freshly pressed ginger juice, energizing and spicy",
            price: "$5",
          },
          {
            id: "pineapple-juice",
            title: "Pineapple Juice",
            description: "Freshly pressed pineapple juice, tropical sweetness",
            price: "$5",
          },
          {
            id: "carrot-juice",
            title: "Carrot Juice",
            description: "Freshly pressed carrot juice, rich in vitamins",
            price: "$5",
          },
          {
            id: "beet-carrot-juice",
            title: "Beet and Carrot Juice",
            description: "Beet and carrot blend, detoxifying and nutritious",
            price: "$5",
          },
        ],
      },
    ],
  },
  spices: {
    title: "Bless Fourchette Spices",
    sections: [
      {
        id: "vegetable-spices",
        title: "VEGETABLE SPICES",
        image: "/Menu/Epice.jpg",
        imageAlt: "Vegetable spices with no added salt",
        items: [
          {
            id: "pump-fourchette-spices",
            title: "Pump Fourchette Spices",
            description:
              "Spices made with vegetable products, no added salt. Can be used to season different foods prepared at home.",
            price: "$10",
          },
        ],
      },
    ],
  },
  family: {
    title: "Family Menu",
    notes: [
      "Coming Soon on October 1st, 2025! ",
      "Our delicious family meals will be available for pre-order",
      "Perfect portions for families of 4-6 people",
      "Stay tuned for amazing family-friendly dishes!",
      "Delivery available only Friday 11:00 AM to 4:00 PM",
    ],
    sections: [
      {
        id: "family-coming-soon",
        title: "FAMILY FEAST - COMING OCTOBER 1ST, 2025",
        image: "/comingsoon.png",
        imageAlt: "Delicious family meal preparations coming soon",
        items: [
          {
            id: "family-announcement",
            title: "Family Menu Launch - October 1st, 2025",
            description:
              "We're excited to announce our new Family Menu! Perfect for family gatherings, weekend meals, and special occasions. Our chefs are preparing generous portions of hearty, wholesome meals that will bring your family together around the table. Stay tuned for more details!",
            price: "Coming Soon",
          },
          {
            id: "family-features",
            title: "What to Expect",
            description:
              "• Family-sized portions (4-6 servings)\n• Weekly rotating menu with seasonal ingredients\n• Mix of traditional and modern fusion dishes\n• Vegetarian and vegan options available\n• Special holiday menus",
            price: "Starting at $45",
          },
          {
            id: "family-preorder",
            title: "Pre-Order Information",
            description:
              "Pre-orders will open on September 25th, 2025. Be among the first families to experience our new menu! Follow us on social media or subscribe to our newsletter for updates and exclusive early access offers.",
            price: "Reserve Now",
          },
        ],
      },
    ],
  },
};

export const getMenuConfig = (menuType: string = 'school'): MenuConfig => {
  return menuConfigs[menuType] || menuConfigs.school;
};
