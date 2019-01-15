export const USERS = {
    1: {
      id: 1,
      email: 'prem@investec.com',
      password: 'test'
    }
  };


  export const COURSES = {
    0: {
      id: 0,
      description: 'Fancy porridge on a budget recipe',
      iconUrl:
        '//cdn.friendsoftheearth.uk/sites/default/files/styles/body_text_image/public/media/images/d8%20cheap%20porridge.png?itok=eb-3phNz',
      courseListIcon:
        '//cdn.friendsoftheearth.uk/sites/default/files/styles/body_text_image/public/media/images/d8%20cheap%20porridge.png?itok=eb-3phNz',
      longDescription:
        // tslint:disable-next-line:max-line-length
        'Put the oats/grains and milk or water in a saucepan. Bring to the boil and simmer for 4-5 minutes, stirring occasionally – or if using a microwave, cook for 5 minutes and stir halfway through. Add some fruit for extra taste, and serve however you fancy. If you want breakfast on the move, pour into a jam jar to eat later (it’s great cold). Or try experimenting with Bircher muesli – that’s cold porridge with added grated apple and lemon juice to you and me.',
      category: 'BEGINNER',
      lessonsCount: 3,
      promo: true
    },
    1: {
      id: 1,
      description: 'Topped vegetable mash recipe',
      iconUrl:
        '//cdn.friendsoftheearth.uk/sites/default/files/styles/body_text_image/public/media/images/d8%20cheap%20mash.png?itok=03V-l7y9',
      courseListIcon:
        '//cdn.friendsoftheearth.uk/sites/default/files/styles/body_text_image/public/media/images/d8%20cheap%20mash.png?itok=03V-l7y9',
      longDescription:
        // tslint:disable-next-line:max-line-length
        'Boil up a pot of water and add your root veg, peeled and roughly chopped. At the same time, chop and fry your onion or leek, and grate your cheese. When the veg is soft, drain and mash with a bit of butter. Then top with your fried veg and sprinkle with cheese. Delicious.',
      category: 'BEGINNER',
      lessonsCount: 3,
      promo: true
    },
    2: {
      id: 2,
      description: 'Savoury cheese pudding recipe',
      longDescription:
        // tslint:disable-next-line:max-line-length
        'Crumble the bread in a mixing bowl. Add enough milk to make it fairly soft. Add eggs, grated cheese and seasoning, and mix well until it’s the consistency of mashed potato. Put in a greased baking dish and sprinkle with seeds and a little cheese. Cook in a medium oven for about 1 hour til crunchy on top. This meat-free recipe is from Patsy.',
      iconUrl:
        // tslint:disable-next-line:max-line-length
        '//cdn.friendsoftheearth.uk/sites/default/files/styles/body_text_image/public/media/images/d8%20cheap%20cheese%20pudding.png?itok=EHnaPCmx',
      courseListIcon:
        // tslint:disable-next-line:max-line-length
        '//cdn.friendsoftheearth.uk/sites/default/files/styles/body_text_image/public/media/images/d8%20cheap%20cheese%20pudding.png?itok=EHnaPCmx',
      category: 'ADVANCED',
      lessonsCount: 6,
      promo: false
    },
    3: {
      id: 3,
      description: 'Easy stuffed potatoes recipe',
      longDescription:
        // tslint:disable-next-line:max-line-length
        'Peel the potatoes and slice off the end so they can stand upright. Scoop out the insides, leaving a well about 2.5cm thick (keep the insides to use as mash or to thicken soup). Fry the onion, then add any leftover meat or Quorn and vegetables to warm through. Season and thicken with gravy (or baked beans). Add the mix to the hollow potatoes, piling up above the top. Oil the potatoes, then put on a baking tray and roast them in a hot oven for 30-40 minutes. Add a little cheese if you fancy.',
      iconUrl:
        // tslint:disable-next-line:max-line-length
        '//cdn.friendsoftheearth.uk/sites/default/files/styles/body_text_image/public/media/images/d8%20cheap%20filled%20potatoes.png?itok=oM5Oy51K',
      courseListIcon:
        // tslint:disable-next-line:max-line-length
        '//cdn.friendsoftheearth.uk/sites/default/files/styles/body_text_image/public/media/images/d8%20cheap%20filled%20potatoes.png?itok=oM5Oy51K',
      category: 'ADVANCED',
      lessonsCount: 8,
      promo: false
    },
    4: {
      id: 4,
      description: 'Mums standby oatflake fritters recipe',
      iconUrl:
        // tslint:disable-next-line:max-line-length
        '//cdn.friendsoftheearth.uk/sites/default/files/styles/body_text_image/public/media/images/d8%20cheap%20oat%20fritters_0.jpg?itok=Ts6zL88n',
      // tslint:disable-next-line:max-line-length
      courseListIcon:
        '//cdn.friendsoftheearth.uk/sites/default/files/styles/body_text_image/public/media/images/d8%20cheap%20oat%20fritters_0.jpg?itok=Ts6zL88n',
      longDescription:
        // tslint:disable-next-line:max-line-length
        'Mix everything into a batter with a sticky consistency. Heat a frying pan greased with a very small quantity of oil, until a drop of the batter starts sizzling. Lower the heat and fry large spoonfuls of the batter until they begin to brown, then turn them to cook the other side.',
      category: 'INTERMEDIATE',
      lessonsCount: 7,
      promo: false
    }
  };

  export const LESSONS = {
    1: {
      id: 1,
      description:
        'A variety of root vegetables (try sweet potato, swede or parsnips alongside your regular carrots and potatoes)',
      duration: '350g',
      seqNo: 1,
      courseId: 1
    },
    2: {
      id: 2,
      description: 'An onion or leek (or both)',
      duration: '1-2',
      seqNo: 2,
      courseId: 1
    },
    3: {
      id: 3,
      description:
        'Some cheese (look out for great vegan cheese substitutes in the shops)',
      duration: '50g',
      seqNo: 3,
      courseId: 1
    },
    // Security Course
    4: {
      id: 4,
      description:
        'half loaf bread (you could use mashed potato instead of some of the bread, if you have some left over)',
      duration: '300g',
      seqNo: 1,
      courseId: 2
    },

    5: {
      id: 5,
      description:
        'half lb cheddar cheese (this recipe is pretty dairy heavy, so might be best left to the vegetarians)',
      duration: '100g',
      seqNo: 2,
      courseId: 2
    },

    6: {
      id: 6,
      description: 'Eggs or vegan equivalent',
      duration: '2',
      seqNo: 3,
      courseId: 2
    },

    7: {
      id: 7,
      description:
        'Milk (amount depends on freshness of the bread), for vegans coconut milk',
      duration: '150ml',
      seqNo: 4,
      courseId: 2
    },

    8: {
      id: 8,
      description: 'Seasoning',
      duration: '10g',
      seqNo: 5,
      courseId: 2
    },
    9: {
      id: 9,
      description: 'Seeds eg sunflower, sesame, pumpkin, if desired.',
      duration: '10g',
      seqNo: 6,
      courseId: 2
    },
    // PWA course

    10: {
      id: 10,
      description: 'Large potatoes',
      duration: '500g',
      seqNo: 1,
      courseId: 3
    },
    11: {
      id: 11,
      description: 'Leftover mince (or Quorn mince)',
      duration: '200g',
      seqNo: 2,
      courseId: 3
    },
    12: {
      id: 12,
      description: 'Leftover vegetables, chopped',
      duration: '250g',
      seqNo: 3,
      courseId: 3
    },
    13: {
      id: 13,
      description: 'Onion, chopped',
      duration: '1 qty',
      seqNo: 4,
      courseId: 3
    },

    14: {
      id: 14,
      description: 'Oil',
      duration: '4 large spoons',
      seqNo: 5,
      courseId: 3
    },
    15: {
      id: 15,
      description: 'Baked beans (or gravy)',
      duration: '200g',
      seqNo: 6,
      courseId: 3
    },
    16: {
      id: 16,
      description: 'View Service Workers HTTP Interception Features In Action',
      duration: '06:07',
      seqNo: 7,
      courseId: 3
    },
    17: {
      id: 17,
      description: 'Service Workers Error Handling - Serving The Offline Page',
      duration: '5:38',
      seqNo: 8,
      courseId: 3
    },
    18: {
      id: 18,
      description: 'milk or water',
      duration: '350ml',
      seqNo: 1,
      courseId: 0
    },
    19: {
      id: 19,
      // tslint:disable-next-line:max-line-length
      description:
        'Oats – mix it up a bit by mixing a variety of grains like rye, barley or quinoa in with your porridge oats',
      duration: '25g per person',
      seqNo: 2,
      courseId: 0
    },
    20: {
      id: 20,
      description: 'Fruit (whatever takes your fancy)',
      duration: '25g',
      seqNo: 3,
      courseId: 0
    },
    21: {
      id: 21,
      description: 'Porridge oats',
      duration: '30g',
      seqNo: 1,
      courseId: 4
    },
    22: {
      id: 22,
      description: 'Cheese or vegan cheese',
      duration: '30g',
      seqNo: 2,
      courseId: 4
    },
    23: {
      id: 23,
      description: 'egg or a large spoonful of chickpea (gram) flour)',
      duration: '1 qty',
      seqNo: 3,
      courseId: 4
    },
    24: {
      id: 24,
      description: 'Onion pieces',
      duration: '2-3 qty',
      seqNo: 4,
      courseId: 4
    },
    25: {
      id: 25,
      description:
        'A spoonful of some fluid, such as milk, veggie stock or apple juice (the slight acidity of the apple is actually great with cheese)',
      duration: '2-3 spoons',
      seqNo: 5,
      courseId: 4
    },
    26: {
      id: 26,
      description:
        'Some oil (try to avoid vegetable oil that contains soya from deforested areas)',
      duration: '2-3 spoons',
      seqNo: 6,
      courseId: 4
    },
    27: {
      id: 27,
      description:
        'Seasoning – pepper, salt, and any spice that takes your fancy, like cumin seeds.',
      duration: '10g',
      seqNo: 7,
      courseId: 4
    }
  };

  export function findCourseById(courseId: number) {
    return COURSES[courseId];
  }

  export function findLessonsForCourse(courseId: number) {
    return Object.values(LESSONS).filter(lesson => lesson.courseId === courseId);
  }

  export function authenticate(email: string, password: string) {
    const user: any = Object.values(USERS).find(u => u.email === email);

    if (user && user.password === password) {
      return user;
    } else {
      return undefined;
    }
  }

