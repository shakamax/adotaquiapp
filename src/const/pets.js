const pets = [
  {
    pet: 'gatos',
    pets: [
      {
        id: '1',
        name: 'Perigas',
        image: require('../assets/cat1.png'),
        type: 'Vira-lata',
        age: '5 Anos',
        sex: 'femea',
        distance: '1.2km'
      },
      {
        id: '2',
        name: 'Sr Gato',
        image: require('../assets/cat2.png'),
        type: 'mi-kê',
        age: '2 Anos',
        sex: 'macho',
        distance: '5.1km'

      },
      {
        id: '3',
        name: 'Nala',
        image: require('../assets/cat3.png'),
        type: 'Norueguês',
        age: '2 Anos',
        sex: 'femea',
        distance: '2km'

      },
    ],
  },
  {
    pet: 'cachorros',
    pets: [
      {
        id: '1',
        name: 'Senhor Catioro',
        image: require('../assets/dog1.png'),
        type: 'Pastor alemão',
        age: '2 anos',
        sex: 'macho',
        distance: '7.1km'
      },
      {
        id: '2',
        name: 'Max',
        image: require('../assets/dog2.png'),
        type: 'Vira-lata',
        age: '2 anos',
        sex: 'macho',
        distance: '4.2km'
      },
    ],
  },
  {
    pet: 'pássaros',
    pets: [
      {
        id: '1',
        name: 'Pipoco',
        image: require('../assets/bird1.png'),
        type: 'Papagaio',
        age: '2 anos',
        sex: 'macho',
        distance: '0.8km'
      },
      {
        id: '2',
        name: 'Zé marreta',
        image: require('../assets/bird2.png'),
        type: 'Papagaio',
        age: '4 anos',
        sex: 'macho',
        distance: '3.2km'
      },
    ],
  },
  {
    pet: 'coelhos',
    pets: [
      {
        id: '1',
        name: 'Perna Longa',
        image: require('../assets/bunny1.png'),
        type: 'Coelho Rex',
        age: '1 ano',
        sex: 'macho',
        distance: '1.7km'
      },
      {
        id: '2',
        name: 'Carioca',
        image: require('../assets/bunny2.png'),
        type: 'Angorá',
        age: '1 ano',
        sex: 'femea',
        distance: '1km'
      },
    ],
  },
];

export default pets;
