export default [
  {
    id: 1,
    user: {
      userId: 2,
      firstName: "Pedro",
      lastName: "Fernandez",
    },
    reservePrice: 2000,
    reservePaymentType: "cash",
    address: {
      addressId: 1,
      street: "Avenida Marcelo T de Alvear 360",
      postalCode: 5000,
      locality: "Cordoba",
      country: "Argentina",
      floor: 8,
      apartment: "D",
      instructions: "Torre 1",
      phone: 3804634845,
      label: "Casa",
    },
    dateTime: "2024-07-16T02:30:00-03:00",
    service: "electricity",
    status: "scheduled",
    worker: {
      workerId: 7,
      firstName: "Valentino",
      lastName: "Gaggio",
      profilePicture: "../../assets/images/data/7",
    },
    place: "at-home",
    description: "Tengo un cable quemado en la pared",
    paymentType: "cash",
    price: null,
    rating: null,
    warranty: null,
  },
  {
    id: 2,
    user: {
      userId: 2,
      firstName: "Pedro",
      lastName: "Fernandez",
    },
    reservePrice: 2000,
    reservePaymentType: "cash",
    address: {
      addressId: 1,
      street: "Marcelo T de Alvear 360",
      postalCode: 5000,
      locality: "Cordoba",
      country: "Argentina",
      floor: 8,
      apartment: "D",
      instructions: "Torre 1",
      phone: 3804634845,
      label: "Casa",
    },
    dateTime: "2024-07-16T17:30:00-03:00",
    service: "gardening",
    status: "cancelled",
    worker: {
      workerId: 3,
      firstName:
        "Luciano fs fg fg fg gf fg gf gf fg fg sdffsdfsdfsd ds  fsd fsd sdfsdf d",
      lastName: "Dovidio",
      profilePicture: "../../assets/images/data/2",
    },
    place: "at-home",
    description: "Cortar el cesped",
    paymentType: "cash",
    price: 10000,
    rating: null,
    warranty: null,
    cancellation: {
      cancelledBy: "Joaquin Vietto Herrera",
      reason: "User unavailable",
    },
  },
  {
    id: 3,
    user: {
      userId: 2,
      firstName: "Pedro",
      lastName: "Fernandez",
    },
    reservePrice: 2000,
    reservePaymentType: "credit_card",
    address: {
      addressId: 8,
      street: "San Luis 145",
      postalCode: 5000,
      locality: "Cordoba",
      country: "Argentina",
      floor: null,
      apartment: null,
      instructions: null,
      phone: 3804634785,
    },
    dateTime: "2024-07-16T17:30:00-03:00",
    service: "plumbing",
    status: "finished",
    worker: {
      workerId: 2,
      firstName: "Calixto",
      lastName: "Crespo",
      profilePicture: "../../assets/images/data/3",
    },
    place: "on-site",
    description: null,
    paymentType: "credit_card",
    price: 50000,
    rating: 5,
    warranty: 15,
    cancellation: {
      cancelledBy: null,
      reason: null,
    },
  },
];
