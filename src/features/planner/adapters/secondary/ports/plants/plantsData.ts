import { PlantData } from './fakePlantAdapter.ts';

export const plantsDatabase: PlantData[] = [
  {
    id: '1',
    name: 'ail',
    compatibilityPlants: [
      {
        id: '7',
        name: 'bette a carde',
      },
      {
        id: '8',
        name: 'betterave',
      },
      {
        id: '11',
        name: 'camomille',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '14',
        name: 'celeri',
      },
      {
        id: '15',
        name: 'celerirave',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '26',
        name: 'courge et citrouille',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '30',
        name: 'fenouil',
      },
      {
        id: '32',
        name: 'fraisier',
      },
      {
        id: '33',
        name: 'framboisier',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '38',
        name: 'marjolaine',
      },
      {
        id: '45',
        name: 'panais',
      },
      {
        id: '48',
        name: 'poireau',
      },
      {
        id: '55',
        name: 'thym',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 10,
      distanceBetweenLines: 30,
      seedsPerM2: 40,
      plantsPerM2: 40,
      plantsPerPerPerson: 15,
      m2PerPerson: 0.38,
      link: 'https://jardinierdudimanche.fr/cultiver-de-l-ail-guide-complet/',
    },
  },
  {
    id: '2',
    name: 'aneth',
    compatibilityPlants: [
      {
        id: '8',
        name: 'betterave',
      },
      {
        id: '10',
        name: 'brocoli',
      },
      {
        id: '18',
        name: 'chicoree',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '31',
        name: 'feves',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '41',
        name: 'navet',
      },
      {
        id: '43',
        name: 'oignon',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
  {
    id: '3',
    name: 'artichaut',
    compatibilityPlants: [
      {
        id: '4',
        name: 'asperge',
      },
      {
        id: '5',
        name: 'aubergine',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '26',
        name: 'courge et citrouille',
      },
      {
        id: '31',
        name: 'feves',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '52',
        name: 'radis',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 80,
      distanceBetweenLines: 100,
      seedsPerM2: 1,
      plantsPerM2: 1,
      plantsPerPerPerson: 2,
      m2PerPerson: 2.0,
      link: 'https://www.fermedesaintemarthe.com/reussir-la-culture-de-lartichaut-p-6628',
    },
  },
  {
    id: '4',
    name: 'asperge',
    compatibilityPlants: [
      {
        id: '3',
        name: 'artichaut',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '42',
        name: "oeillet d'inde",
      },
      {
        id: '46',
        name: 'persil',
      },
      {
        id: '48',
        name: 'poireau',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '52',
        name: 'radis',
      },
      {
        id: '54',
        name: 'sauge',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 50,
      distanceBetweenLines: 150,
      seedsPerM2: 3,
      plantsPerM2: 3,
      plantsPerPerPerson: 2,
      m2PerPerson: 0.67,
      link: 'https://www.agrobio-bretagne.org/voy_content/uploads/2021/12/Web_27-ASPERGE.pdf',
    },
  },
  {
    id: '5',
    name: 'aubergine',
    compatibilityPlants: [
      {
        id: '3',
        name: 'artichaut',
      },
      {
        id: '9',
        name: 'bourrache',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '17',
        name: 'cerise de terre',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '29',
        name: 'estragon',
      },
      {
        id: '31',
        name: 'feves',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '42',
        name: "oeillet d'inde",
      },
      {
        id: '46',
        name: 'persil',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '50',
        name: 'poivron',
      },
      {
        id: '55',
        name: 'thym',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 50,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 2,
      m2PerPerson: 0.5,
      link: 'https://www.jardiner-malin.fr/fiche/aubergine.html',
    },
  },
  {
    id: '6',
    name: 'basilic',
    compatibilityPlants: [
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
  {
    id: '7',
    name: 'betteacarde',
    compatibilityPlants: [
      {
        id: '1',
        name: 'ail',
      },
      {
        id: '14',
        name: 'celeri',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '43',
        name: 'oignon',
      },
    ],
    spacing: {
      plantationType: ['ligne', 'volée'],
      distanceBetweenGrains: 30,
      distanceBetweenLines: 40,
      seedsPerM2: 24,
      plantsPerM2: 12,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.33,
      link: 'https://www.jardiner-malin.fr/fiche/bette-blette.html',
    },
  },
  {
    id: '8',
    name: 'betterave',
    compatibilityPlants: [
      {
        id: '1',
        name: 'ail',
      },
      {
        id: '2',
        name: 'aneth',
      },
      {
        id: '14',
        name: 'celeri',
      },
      {
        id: '15',
        name: 'celerirave',
      },
      {
        id: '18',
        name: 'chicoree',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '27',
        name: 'echalote',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '41',
        name: 'navet',
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '52',
        name: 'radis',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 10,
      distanceBetweenLines: 30,
      seedsPerM2: 80,
      plantsPerM2: 40,
      plantsPerPerPerson: 10,
      m2PerPerson: 0.25,
      link: 'https://www.gerbeaud.com/jardin/fiches/betterave-semis-culture-recolte.php',
    },
  },
  {
    id: '9',
    name: 'bourrache',
    compatibilityPlants: [
      {
        id: '5',
        name: 'aubergine',
      },
      {
        id: '17',
        name: 'cerise de terre',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '26',
        name: 'courge et citrouille',
      },
      {
        id: '32',
        name: 'fraisier',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '41',
        name: 'navet',
      },
      {
        id: '50',
        name: 'poivron',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
  {
    id: '10',
    name: 'brocoli',
    compatibilityPlants: [
      {
        id: '2',
        name: 'aneth',
      },
      {
        id: '11',
        name: 'camomille',
      },
      {
        id: '12',
        name: 'capucine',
      },
      {
        id: '14',
        name: 'celeri',
      },
      {
        id: '15',
        name: 'celerirave',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '38',
        name: 'marjolaine',
      },
      {
        id: '40',
        name: 'menthe',
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '44',
        name: 'origan',
      },
      {
        id: '45',
        name: 'panais',
      },
      {
        id: '46',
        name: 'persil',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '51',
        name: 'pommedeterre',
      },
      {
        id: '53',
        name: 'romarin',
      },
      {
        id: '54',
        name: 'sauge',
      },
      {
        id: '55',
        name: 'thym',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 30,
      distanceBetweenLines: 40,
      seedsPerM2: 24,
      plantsPerM2: 8,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.5,
      link: 'https://www.terrevivante.org/contenu/brocoli-culture-semis-entretien-recolte/',
    },
  },
  {
    id: '11',
    name: 'camomille',
    compatibilityPlants: [
      {
        id: '1',
        name: 'ail',
      },
      {
        id: '10',
        name: 'brocoli',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '31',
        name: 'feves',
      },
      {
        id: '43',
        name: 'oignon',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
  {
    id: '12',
    name: 'capucine',
    compatibilityPlants: [
      {
        id: '10',
        name: 'brocoli',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '26',
        name: 'courge et citrouille',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '51',
        name: 'pommedeterre',
      },
      {
        id: '52',
        name: 'radis',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
  {
    id: '13',
    name: 'carotte',
    compatibilityPlants: [
      {
        id: '1',
        name: 'ail',
      },
      {
        id: '5',
        name: 'aubergine',
      },
      {
        id: '18',
        name: 'chicoree',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '22',
        name: 'ciboulette',
      },
      {
        id: '27',
        name: 'echalote',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '38',
        name: 'marjolaine',
      },
      {
        id: '41',
        name: 'navet',
      },
      {
        id: '42',
        name: "oeillet d'inde",
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '46',
        name: 'persil',
      },
      {
        id: '48',
        name: 'poireau',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '50',
        name: 'poivron',
      },
      {
        id: '52',
        name: 'radis',
      },
      {
        id: '53',
        name: 'romarin',
      },
      {
        id: '54',
        name: 'sauge',
      },
      {
        id: '55',
        name: 'thym',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      plantationType: ['ligne', 'volée'],
      distanceBetweenGrains: 10,
      distanceBetweenLines: 30,
      seedsPerM2: 120,
      plantsPerM2: 40,
      plantsPerPerPerson: 16,
      m2PerPerson: 0.4,
      link: 'https://www.hauert.com/ch-fr/offre/particuliers/guide/detail/semer-soigner-et-recolter-les-carottes',
    },
  },
  {
    id: '14',
    name: 'celeri',
    compatibilityPlants: [
      {
        id: '1',
        name: 'ail',
      },
      {
        id: '7',
        name: 'bette a carde',
      },
      {
        id: '8',
        name: 'betterave',
      },
      {
        id: '10',
        name: 'brocoli',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '22',
        name: 'ciboulette',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '26',
        name: 'courge et citrouille',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '30',
        name: 'fenouil',
      },
      {
        id: '31',
        name: 'feves',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '48',
        name: 'poireau',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '52',
        name: 'radis',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 30,
      distanceBetweenLines: 35,
      seedsPerM2: 30,
      plantsPerM2: 10,
      plantsPerPerPerson: 2,
      m2PerPerson: 0.2,
      link: 'https://www.gerbeaud.com/jardin/fiches/celeri-branche.php3',
    },
  },
  {
    id: '15',
    name: 'celerirave',
    compatibilityPlants: [
      {
        id: '1',
        name: 'ail',
      },
      {
        id: '8',
        name: 'betterave',
      },
      {
        id: '10',
        name: 'brocoli',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '22',
        name: 'ciboulette',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '26',
        name: 'courge et citrouille',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '30',
        name: 'fenouil',
      },
      {
        id: '31',
        name: 'feves',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '44',
        name: 'origan',
      },
      {
        id: '48',
        name: 'poireau',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '51',
        name: 'pommedeterre',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 40,
      distanceBetweenLines: 40,
      seedsPerM2: 18,
      plantsPerM2: 6,
      plantsPerPerPerson: 2,
      m2PerPerson: 0.33,
      link: 'https://www.gerbeaud.com/jardin/fiches/celeri-rave-semis-culture-recolte.php',
    },
  },
  {
    id: '16',
    name: 'cerfeuil',
    compatibilityPlants: [
      {
        id: '22',
        name: 'ciboulette',
      },
      {
        id: '32',
        name: 'fraisier',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '46',
        name: 'persil',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
  {
    id: '17',
    name: 'cerise de terre',
    compatibilityPlants: [
      {
        id: '5',
        name: 'aubergine',
      },
      {
        id: '9',
        name: 'bourrache',
      },
      {
        id: '44',
        name: 'origan',
      },
      {
        id: '46',
        name: 'persil',
      },
      {
        id: '54',
        name: 'sauge',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
  {
    id: '18',
    name: 'chicoree',
    compatibilityPlants: [
      {
        id: '2',
        name: 'aneth',
      },
      {
        id: '8',
        name: 'betterave',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '26',
        name: 'courge et citrouille',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '48',
        name: 'poireau',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '52',
        name: 'radis',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 30,
      distanceBetweenLines: 40,
      seedsPerM2: 8,
      plantsPerM2: 8,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.5,
      link: 'https://www.fermedesaintemarthe.com/reussir-la-culture-de-la-chicoree-p-18169',
    },
  },
  {
    id: '19',
    name: 'chou',
    compatibilityPlants: [
      {
        id: '2',
        name: 'aneth',
      },
      {
        id: '3',
        name: 'artichaut',
      },
      {
        id: '7',
        name: 'bette a carde',
      },
      {
        id: '8',
        name: 'betterave',
      },
      {
        id: '9',
        name: 'bourrache',
      },
      {
        id: '11',
        name: 'camomille',
      },
      {
        id: '12',
        name: 'capucine',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '14',
        name: 'celeri',
      },
      {
        id: '15',
        name: 'celerirave',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '40',
        name: 'menthe',
      },
      {
        id: '42',
        name: "oeillet d'inde",
      },
      {
        id: '44',
        name: 'origan',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '51',
        name: 'pommedeterre',
      },
      {
        id: '53',
        name: 'romarin',
      },
      {
        id: '54',
        name: 'sauge',
      },
      {
        id: '55',
        name: 'thym',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 50,
      distanceBetweenLines: 60,
      seedsPerM2: 27,
      plantsPerM2: 9,
      plantsPerPerPerson: 2,
      m2PerPerson: 0.22,
      link: 'https://www.jardiner-malin.fr/fiche/chou.html',
    },
  },
  {
    id: '20',
    name: 'choudebruxelles',
    compatibilityPlants: [
      {
        id: '2',
        name: 'aneth',
      },
      {
        id: '3',
        name: 'artichaut',
      },
      {
        id: '7',
        name: 'bette a carde',
      },
      {
        id: '8',
        name: 'betterave',
      },
      {
        id: '9',
        name: 'bourrache',
      },
      {
        id: '12',
        name: 'capucine',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '14',
        name: 'celeri',
      },
      {
        id: '15',
        name: 'celerirave',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '40',
        name: 'menthe',
      },
      {
        id: '41',
        name: 'navet',
      },
      {
        id: '42',
        name: "oeillet d'inde",
      },
      {
        id: '44',
        name: 'origan',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '51',
        name: 'pommedeterre',
      },
      {
        id: '53',
        name: 'romarin',
      },
      {
        id: '54',
        name: 'sauge',
      },
      {
        id: '55',
        name: 'thym',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 60,
      distanceBetweenLines: 60,
      seedsPerM2: 4,
      plantsPerM2: 4,
      plantsPerPerPerson: 2,
      m2PerPerson: 0.5,
      link: 'https://www.gammvert.fr/conseils-idees/semer-et-planter-les-choux-de-bruxelles',
    },
  },
  {
    id: '21',
    name: 'choufleur',
    compatibilityPlants: [
      {
        id: '2',
        name: 'aneth',
      },
      {
        id: '3',
        name: 'artichaut',
      },
      {
        id: '7',
        name: 'bette a carde',
      },
      {
        id: '8',
        name: 'betterave',
      },
      {
        id: '9',
        name: 'bourrache',
      },
      {
        id: '11',
        name: 'camomille',
      },
      {
        id: '12',
        name: 'capucine',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '14',
        name: 'celeri',
      },
      {
        id: '15',
        name: 'celerirave',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '40',
        name: 'menthe',
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '44',
        name: 'origan',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '51',
        name: 'pommedeterre',
      },
      {
        id: '53',
        name: 'romarin',
      },
      {
        id: '54',
        name: 'sauge',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 60,
      distanceBetweenLines: 70,
      seedsPerM2: 4,
      plantsPerM2: 4,
      plantsPerPerPerson: 2,
      m2PerPerson: 0.5,
      link: 'https://www.fermedesaintemarthe.com/reussir-la-culture-du-chou-fleur-p-21881',
    },
  },
  {
    id: '22',
    name: 'ciboulette',
    compatibilityPlants: [
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '14',
        name: 'celeri',
      },
      {
        id: '15',
        name: 'celerirave',
      },
      {
        id: '16',
        name: 'cerfeuil',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '32',
        name: 'fraisier',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
  {
    id: '23',
    name: 'concombre',
    compatibilityPlants: [
      {
        id: '1',
        name: 'ail',
      },
      {
        id: '2',
        name: 'aneth',
      },
      {
        id: '4',
        name: 'asperge',
      },
      {
        id: '8',
        name: 'betterave',
      },
      {
        id: '10',
        name: 'brocoli',
      },
      {
        id: '11',
        name: 'camomille',
      },
      {
        id: '12',
        name: 'capucine',
      },
      {
        id: '14',
        name: 'celeri',
      },
      {
        id: '15',
        name: 'celerirave',
      },
      {
        id: '18',
        name: 'chicoree',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '22',
        name: 'ciboulette',
      },
      {
        id: '27',
        name: 'echalote',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '30',
        name: 'fenouil',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '37',
        name: 'mais',
      },
      {
        id: '38',
        name: 'marjolaine',
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '44',
        name: 'origan',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '55',
        name: 'thym',
      },
      {
        id: '56',
        name: 'tomate',
      },
      {
        id: '57',
        name: 'tournesol',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 60,
      distanceBetweenLines: 120,
      seedsPerM2: 6,
      plantsPerM2: 2,
      plantsPerPerPerson: 2,
      m2PerPerson: 1.0,
      link: 'https://jardinage.lemonde.fr/dossier-297-concombre-cucumis-sativus-gros-cornichon.html',
    },
  },
  {
    id: '24',
    name: 'courgette',
    compatibilityPlants: [
      {
        id: '1',
        name: 'ail',
      },
      {
        id: '2',
        name: 'aneth',
      },
      {
        id: '4',
        name: 'asperge',
      },
      {
        id: '8',
        name: 'betterave',
      },
      {
        id: '10',
        name: 'brocoli',
      },
      {
        id: '11',
        name: 'camomille',
      },
      {
        id: '12',
        name: 'capucine',
      },
      {
        id: '14',
        name: 'celeri',
      },
      {
        id: '15',
        name: 'celerirave',
      },
      {
        id: '18',
        name: 'chicoree',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '22',
        name: 'ciboulette',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '27',
        name: 'echalote',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '30',
        name: 'fenouil',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '37',
        name: 'mais',
      },
      {
        id: '38',
        name: 'marjolaine',
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '44',
        name: 'origan',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '55',
        name: 'thym',
      },
      {
        id: '56',
        name: 'tomate',
      },
      {
        id: '57',
        name: 'tournesol',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 80,
      distanceBetweenLines: 80,
      seedsPerM2: 4,
      plantsPerM2: 2,
      plantsPerPerPerson: 2,
      m2PerPerson: 1.0,
      link: 'https://jardinierdudimanche.fr/comment-cultiver-des-courgettes-au-jardin/',
    },
  },
  {
    id: '25',
    name: 'coriande',
    compatibilityPlants: [
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '51',
        name: 'pommedeterre',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
  {
    id: '26',
    name: 'courgeetcitrouille',
    compatibilityPlants: [
      {
        id: '1',
        name: 'ail',
      },
      {
        id: '3',
        name: 'artichaut',
      },
      {
        id: '9',
        name: 'bourrache',
      },
      {
        id: '12',
        name: 'capucine',
      },
      {
        id: '14',
        name: 'celeri',
      },
      {
        id: '15',
        name: 'celerirave',
      },
      {
        id: '18',
        name: 'chicoree',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '37',
        name: 'mais',
      },
      {
        id: '40',
        name: 'menthe',
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '44',
        name: 'origan',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '52',
        name: 'radis',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 100,
      distanceBetweenLines: 100,
      seedsPerM2: 3,
      plantsPerM2: 1,
      plantsPerPerPerson: 2,
      m2PerPerson: 2.0,
      link: 'https://jardinierdudimanche.fr/planter-butternut-au-jardin/',
    },
  },
  {
    id: '27',
    name: 'echalote',
    compatibilityPlants: [
      {
        id: '8',
        name: 'betterave',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '32',
        name: 'fraisier',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 15,
      distanceBetweenLines: 30,
      seedsPerM2: 28,
      plantsPerM2: 28,
      plantsPerPerPerson: 15,
      m2PerPerson: 0.54,
      link: 'https://www.terrevivante.org/contenu/culture-echalote-semis-entretien-recolte/',
    },
  },
  {
    id: '28',
    name: 'epinard',
    compatibilityPlants: [
      {
        id: '1',
        name: 'ail',
      },
      {
        id: '4',
        name: 'asperge',
      },
      {
        id: '5',
        name: 'aubergine',
      },
      {
        id: '10',
        name: 'brocoli',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '14',
        name: 'celeri',
      },
      {
        id: '15',
        name: 'celerirave',
      },
      {
        id: '18',
        name: 'chicoree',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '31',
        name: 'feves',
      },
      {
        id: '32',
        name: 'fraisier',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '37',
        name: 'mais',
      },
      {
        id: '38',
        name: 'marjolaine',
      },
      {
        id: '39',
        name: 'melon',
      },
      {
        id: '41',
        name: 'navet',
      },
      {
        id: '42',
        name: "oeillet d'inde",
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '48',
        name: 'poireau',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '52',
        name: 'radis',
      },
      {
        id: '55',
        name: 'thym',
      },
    ],
    spacing: {
      plantationType: ['ligne', 'volée'],
      distanceBetweenGrains: 15,
      distanceBetweenLines: 30,
      seedsPerM2: 84,
      plantsPerM2: 28,
      plantsPerPerPerson: 10,
      m2PerPerson: 0.36,
      link: 'https://www.nortene.fr/dossier/614/culture-epinards',
    },
  },
  {
    id: '29',
    name: 'estragon',
    compatibilityPlants: [
      {
        id: '5',
        name: 'aubergine',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
  {
    id: '30',
    name: 'fenouil',
    compatibilityPlants: [
      {
        id: '1',
        name: 'ail',
      },
      {
        id: '14',
        name: 'celeri',
      },
      {
        id: '15',
        name: 'celerirave',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '41',
        name: 'navet',
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '48',
        name: 'poireau',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 20,
      distanceBetweenLines: 30,
      seedsPerM2: 30,
      plantsPerM2: 15,
      plantsPerPerPerson: 2,
      m2PerPerson: 0.13,
      link: 'https://www.autourdupotager.com/fenouil/',
    },
  },
  {
    id: '31',
    name: 'feves',
    compatibilityPlants: [
      {
        id: '2',
        name: 'aneth',
      },
      {
        id: '3',
        name: 'artichaut',
      },
      {
        id: '5',
        name: 'aubergine',
      },
      {
        id: '11',
        name: 'camomille',
      },
      {
        id: '14',
        name: 'celeri',
      },
      {
        id: '15',
        name: 'celerirave',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '37',
        name: 'mais',
      },
      {
        id: '51',
        name: 'pommedeterre',
      },
    ],
    spacing: {
      plantationType: ['Poquet'],
      distanceBetweenGrains: 20,
      distanceBetweenLines: 15,
      seedsPerM2: 90,
      plantsPerM2: 30,
      plantsPerPerPerson: 10,
      m2PerPerson: 0.33,
      link: 'https://www.zollinger.bio/blog/les-semis-8/la-culture-des-feves-zollinger-bio-126',
    },
  },
  {
    id: '32',
    name: 'fraisier',
    compatibilityPlants: [
      {
        id: '1',
        name: 'ail',
      },
      {
        id: '9',
        name: 'bourrache',
      },
      {
        id: '16',
        name: 'cerfeuil',
      },
      {
        id: '22',
        name: 'ciboulette',
      },
      {
        id: '27',
        name: 'echalote',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '48',
        name: 'poireau',
      },
      {
        id: '52',
        name: 'radis',
      },
      {
        id: '54',
        name: 'sauge',
      },
      {
        id: '55',
        name: 'thym',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 6,
      plantsPerM2: 6,
      plantsPerPerPerson: 6,
      m2PerPerson: 1.0,
      link: null,
    },
  },
  {
    id: '33',
    name: 'framboisier',
    compatibilityPlants: [
      {
        id: '1',
        name: 'ail',
      },
      {
        id: '36',
        name: 'lavande',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 50,
      distanceBetweenLines: 120,
      seedsPerM2: 2,
      plantsPerM2: 2,
      plantsPerPerPerson: 2,
      m2PerPerson: 1.0,
      link: null,
    },
  },
  {
    id: '34',
    name: 'haricots',
    compatibilityPlants: [
      {
        id: '3',
        name: 'artichaut',
      },
      {
        id: '5',
        name: 'aubergine',
      },
      {
        id: '8',
        name: 'betterave',
      },
      {
        id: '9',
        name: 'bourrache',
      },
      {
        id: '10',
        name: 'brocoli',
      },
      {
        id: '12',
        name: 'capucine',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '14',
        name: 'celeri',
      },
      {
        id: '15',
        name: 'celerirave',
      },
      {
        id: '18',
        name: 'chicoree',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '26',
        name: 'courge et citrouille',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '32',
        name: 'fraisier',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '37',
        name: 'mais',
      },
      {
        id: '39',
        name: 'melon',
      },
      {
        id: '41',
        name: 'navet',
      },
      {
        id: '42',
        name: "oeillet d'inde",
      },
      {
        id: '45',
        name: 'panais',
      },
      {
        id: '51',
        name: 'pommedeterre',
      },
      {
        id: '52',
        name: 'radis',
      },
      {
        id: '53',
        name: 'romarin',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 10,
      distanceBetweenLines: 40,
      seedsPerM2: 48,
      plantsPerM2: 24,
      plantsPerPerPerson: 10,
      m2PerPerson: 0.42,
      link: 'https://www.fermedesaintemarthe.com/reussir-la-culture-des-haricots-commun-p-7687',
    },
  },
  {
    id: '35',
    name: 'salade',
    compatibilityPlants: [
      {
        id: '1',
        name: 'ail',
      },
      {
        id: '2',
        name: 'aneth',
      },
      {
        id: '4',
        name: 'asperge',
      },
      {
        id: '7',
        name: 'bette a carde',
      },
      {
        id: '8',
        name: 'betterave',
      },
      {
        id: '12',
        name: 'capucine',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '16',
        name: 'cerfeuil',
      },
      {
        id: '18',
        name: 'chicoree',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '27',
        name: 'echalote',
      },
      {
        id: '31',
        name: 'feves',
      },
      {
        id: '32',
        name: 'fraisier',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '38',
        name: 'marjolaine',
      },
      {
        id: '39',
        name: 'melon',
      },
      {
        id: '41',
        name: 'navet',
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '45',
        name: 'panais',
      },
      {
        id: '48',
        name: 'poireau',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '51',
        name: 'pommedeterre',
      },
      {
        id: '52',
        name: 'radis',
      },
      {
        id: '55',
        name: 'thym',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      plantationType: ['ligne', 'volée'],
      distanceBetweenGrains: 30,
      distanceBetweenLines: 30,
      seedsPerM2: 48,
      plantsPerM2: 12,
      plantsPerPerPerson: 10,
      m2PerPerson: 0.83,
      link: 'https://jardinierdudimanche.fr/comment-cultiver-la-salade-au-potager/',
    },
  },
  {
    id: '36',
    name: 'lavande',
    compatibilityPlants: [
      {
        id: '33',
        name: 'framboisier',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
  {
    id: '37',
    name: 'mais',
    compatibilityPlants: [
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '26',
        name: 'courge et citrouille',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '31',
        name: 'feves',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '39',
        name: 'melon',
      },
      {
        id: '46',
        name: 'persil',
      },
      {
        id: '49',
        name: 'pois',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 25,
      distanceBetweenLines: 30,
      seedsPerM2: 12,
      plantsPerM2: 12,
      plantsPerPerPerson: 10,
      m2PerPerson: 0.83,
      link: 'https://www.fermedesaintemarthe.com/reussir-la-culture-du-mais-p-21907',
    },
  },
  {
    id: '38',
    name: 'marjolaine',
    compatibilityPlants: [
      {
        id: '1',
        name: 'ail',
      },
      {
        id: '10',
        name: 'brocoli',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '39',
        name: 'melon',
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '46',
        name: 'persil',
      },
      {
        id: '48',
        name: 'poireau',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '50',
        name: 'poivron',
      },
      {
        id: '51',
        name: 'pommedeterre',
      },
      {
        id: '52',
        name: 'radis',
      },
      {
        id: '53',
        name: 'romarin',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
  {
    id: '39',
    name: 'melon',
    compatibilityPlants: [
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '37',
        name: 'mais',
      },
      {
        id: '38',
        name: 'marjolaine',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '52',
        name: 'radis',
      },
      {
        id: '55',
        name: 'thym',
      },
      {
        id: '56',
        name: 'tomate',
      },
      {
        id: '57',
        name: 'tournesol',
      },
    ],
    spacing: {
      plantationType: ['Poquet'],
      distanceBetweenGrains: 80,
      distanceBetweenLines: 100,
      seedsPerM2: 6,
      plantsPerM2: 2,
      plantsPerPerPerson: 2,
      m2PerPerson: 1.0,
      link: 'https://www.aujardin.info/plantes/melon.php',
    },
  },
  {
    id: '40',
    name: 'menthe',
    compatibilityPlants: [
      {
        id: '10',
        name: 'brocoli',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '26',
        name: 'courge et citrouille',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '52',
        name: 'radis',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
  {
    id: '41',
    name: 'navet',
    compatibilityPlants: [
      {
        id: '2',
        name: 'aneth',
      },
      {
        id: '8',
        name: 'betterave',
      },
      {
        id: '9',
        name: 'bourrache',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '30',
        name: 'fenouil',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '45',
        name: 'panais',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '53',
        name: 'romarin',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 15,
      distanceBetweenLines: 30,
      seedsPerM2: 84,
      plantsPerM2: 28,
      plantsPerPerPerson: 6,
      m2PerPerson: 0.21,
      link: 'https://www.promessedefleurs.com/conseil-plantes-jardin/fichefamille/navet-semis-culture-entretien-recolte/',
    },
  },
  {
    id: '42',
    name: "oeillet d'inde",
    compatibilityPlants: [
      {
        id: '4',
        name: 'asperge',
      },
      {
        id: '5',
        name: 'aubergine',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '48',
        name: 'poireau',
      },
      {
        id: '50',
        name: 'poivron',
      },
      {
        id: '51',
        name: 'pommedeterre',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
  {
    id: '43',
    name: 'oignon',
    compatibilityPlants: [
      {
        id: '2',
        name: 'aneth',
      },
      {
        id: '3',
        name: 'artichaut',
      },
      {
        id: '7',
        name: 'bette a carde',
      },
      {
        id: '8',
        name: 'betterave',
      },
      {
        id: '10',
        name: 'brocoli',
      },
      {
        id: '11',
        name: 'camomille',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '14',
        name: 'celeri',
      },
      {
        id: '16',
        name: 'cerfeuil',
      },
      {
        id: '18',
        name: 'chicoree',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '25',
        name: 'coriande',
      },
      {
        id: '26',
        name: 'courge et citrouille',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '30',
        name: 'fenouil',
      },
      {
        id: '32',
        name: 'fraisier',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '38',
        name: 'marjolaine',
      },
      {
        id: '45',
        name: 'panais',
      },
      {
        id: '46',
        name: 'persil',
      },
      {
        id: '50',
        name: 'poivron',
      },
      {
        id: '51',
        name: 'pommedeterre',
      },
      {
        id: '52',
        name: 'radis',
      },
      {
        id: '55',
        name: 'thym',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 10,
      distanceBetweenLines: 30,
      seedsPerM2: 30,
      plantsPerM2: 30,
      plantsPerPerPerson: 20,
      m2PerPerson: 0.67,
      link: 'https://jardinierdudimanche.fr/comment-reussir-culture-oignons/',
    },
  },
  {
    id: '44',
    name: 'origan',
    compatibilityPlants: [
      {
        id: '10',
        name: 'brocoli',
      },
      {
        id: '15',
        name: 'celerirave',
      },
      {
        id: '17',
        name: 'cerise de terre',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '26',
        name: 'courge et citrouille',
      },
      {
        id: '46',
        name: 'persil',
      },
      {
        id: '50',
        name: 'poivron',
      },
      {
        id: '53',
        name: 'romarin',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
  {
    id: '45',
    name: 'panais',
    compatibilityPlants: [
      {
        id: '1',
        name: 'ail',
      },
      {
        id: '10',
        name: 'brocoli',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '41',
        name: 'navet',
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '48',
        name: 'poireau',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '52',
        name: 'radis',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 10,
      distanceBetweenLines: 20,
      seedsPerM2: 50,
      plantsPerM2: 50,
      plantsPerPerPerson: 6,
      m2PerPerson: 0.12,
      link: 'https://www.noovomoi.ca/style-et-maison/plantes-et-jardin/article.planter-panais.1.1463625.html',
    },
  },
  {
    id: '46',
    name: 'persil',
    compatibilityPlants: [
      {
        id: '4',
        name: 'asperge',
      },
      {
        id: '5',
        name: 'aubergine',
      },
      {
        id: '10',
        name: 'brocoli',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '16',
        name: 'cerfeuil',
      },
      {
        id: '17',
        name: 'cerise de terre',
      },
      {
        id: '37',
        name: 'mais',
      },
      {
        id: '38',
        name: 'marjolaine',
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '44',
        name: 'origan',
      },
      {
        id: '52',
        name: 'radis',
      },
      {
        id: '53',
        name: 'romarin',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
  {
    id: '47',
    name: 'petunia',
    compatibilityPlants: [
      {
        id: '51',
        name: 'pommedeterre',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
  {
    id: '48',
    name: 'poireau',
    compatibilityPlants: [
      {
        id: '1',
        name: 'ail',
      },
      {
        id: '4',
        name: 'asperge',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '14',
        name: 'celeri',
      },
      {
        id: '15',
        name: 'celerirave',
      },
      {
        id: '18',
        name: 'chicoree',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '30',
        name: 'fenouil',
      },
      {
        id: '32',
        name: 'fraisier',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '38',
        name: 'marjolaine',
      },
      {
        id: '42',
        name: "oeillet d'inde",
      },
      {
        id: '45',
        name: 'panais',
      },
      {
        id: '55',
        name: 'thym',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 20,
      distanceBetweenLines: 50,
      seedsPerM2: 56,
      plantsPerM2: 14,
      plantsPerPerPerson: 14,
      m2PerPerson: 1.0,
      link: 'https://lepotagerpermacole.fr/comment-planter-les-poireaux-et-reussir-leur-culture/',
    },
  },
  {
    id: '49',
    name: 'pois',
    compatibilityPlants: [
      {
        id: '3',
        name: 'artichaut',
      },
      {
        id: '4',
        name: 'asperge',
      },
      {
        id: '5',
        name: 'aubergine',
      },
      {
        id: '8',
        name: 'betterave',
      },
      {
        id: '10',
        name: 'brocoli',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '14',
        name: 'celeri',
      },
      {
        id: '15',
        name: 'celerirave',
      },
      {
        id: '18',
        name: 'chicoree',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '26',
        name: 'courge et citrouille',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '37',
        name: 'mais',
      },
      {
        id: '38',
        name: 'marjolaine',
      },
      {
        id: '39',
        name: 'melon',
      },
      {
        id: '40',
        name: 'menthe',
      },
      {
        id: '41',
        name: 'navet',
      },
      {
        id: '45',
        name: 'panais',
      },
      {
        id: '51',
        name: 'pommedeterre',
      },
      {
        id: '52',
        name: 'radis',
      },
      {
        id: '55',
        name: 'thym',
      },
      {
        id: '56',
        name: 'tomate',
      },
      {
        id: '57',
        name: 'tournesol',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 25,
      distanceBetweenLines: 50,
      seedsPerM2: 24,
      plantsPerM2: 12,
      plantsPerPerPerson: 12,
      m2PerPerson: 1.0,
      link: 'https://www.mon-jardin-potager.com/guide-pratique/pois/',
    },
  },
  {
    id: '50',
    name: 'poivron',
    compatibilityPlants: [
      {
        id: '5',
        name: 'aubergine',
      },
      {
        id: '9',
        name: 'bourrache',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '38',
        name: 'marjolaine',
      },
      {
        id: '42',
        name: "oeillet d'inde",
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '44',
        name: 'origan',
      },
      {
        id: '55',
        name: 'thym',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 40,
      distanceBetweenLines: 40,
      seedsPerM2: 12,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 1.0,
      link: 'https://www.jardipartage.fr/culture-poivron/',
    },
  },
  {
    id: '51',
    name: 'pommedeterre',
    compatibilityPlants: [
      {
        id: '10',
        name: 'brocoli',
      },
      {
        id: '12',
        name: 'capucine',
      },
      {
        id: '15',
        name: 'celerirave',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '25',
        name: 'coriande',
      },
      {
        id: '31',
        name: 'feves',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '38',
        name: 'marjolaine',
      },
      {
        id: '42',
        name: "oeillet d'inde",
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '47',
        name: 'petunia',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '55',
        name: 'thym',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 30,
      distanceBetweenLines: 60,
      seedsPerM2: 16,
      plantsPerM2: 12,
      plantsPerPerPerson: 12,
      m2PerPerson: 1.0,
      link: 'https://www.fermedesaintemarthe.com/reussir-la-culture-de-la-pomme-de-terre-p-6601',
    },
  },
  {
    id: '52',
    name: 'radis',
    compatibilityPlants: [
      {
        id: '3',
        name: 'artichaut',
      },
      {
        id: '4',
        name: 'asperge',
      },
      {
        id: '8',
        name: 'betterave',
      },
      {
        id: '12',
        name: 'capucine',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '14',
        name: 'celeri',
      },
      {
        id: '18',
        name: 'chicoree',
      },
      {
        id: '26',
        name: 'courge et citrouille',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '32',
        name: 'fraisier',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '38',
        name: 'marjolaine',
      },
      {
        id: '39',
        name: 'melon',
      },
      {
        id: '40',
        name: 'menthe',
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '45',
        name: 'panais',
      },
      {
        id: '46',
        name: 'persil',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '55',
        name: 'thym',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      plantationType: ['Ligne/Volee'],
      distanceBetweenGrains: 3,
      distanceBetweenLines: 25,
      seedsPerM2: 300,
      plantsPerM2: 200,
      plantsPerPerPerson: 40,
      m2PerPerson: 0.2,
      link: 'https://jardinierdudimanche.fr/cultiver-des-radis-legume-simple-a-cultiver/',
    },
  },
  {
    id: '53',
    name: 'romarin',
    compatibilityPlants: [
      {
        id: '10',
        name: 'brocoli',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '38',
        name: 'marjolaine',
      },
      {
        id: '41',
        name: 'navet',
      },
      {
        id: '44',
        name: 'origan',
      },
      {
        id: '46',
        name: 'persil',
      },
      {
        id: '54',
        name: 'sauge',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
  {
    id: '54',
    name: 'sauge',
    compatibilityPlants: [
      {
        id: '4',
        name: 'asperge',
      },
      {
        id: '10',
        name: 'brocoli',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '17',
        name: 'cerise de terre',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '21',
        name: 'choufleur',
      },
      {
        id: '32',
        name: 'fraisier',
      },
      {
        id: '53',
        name: 'romarin',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
  {
    id: '55',
    name: 'thym',
    compatibilityPlants: [
      {
        id: '1',
        name: 'ail',
      },
      {
        id: '5',
        name: 'aubergine',
      },
      {
        id: '10',
        name: 'brocoli',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '19',
        name: 'chou',
      },
      {
        id: '20',
        name: 'choudebruxelles',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '28',
        name: 'epinard',
      },
      {
        id: '32',
        name: 'fraisier',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '39',
        name: 'melon',
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '48',
        name: 'poireau',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '50',
        name: 'poivron',
      },
      {
        id: '51',
        name: 'pommedeterre',
      },
      {
        id: '52',
        name: 'radis',
      },
      {
        id: '56',
        name: 'tomate',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
  {
    id: '56',
    name: 'tomate',
    compatibilityPlants: [
      {
        id: '3',
        name: 'artichaut',
      },
      {
        id: '4',
        name: 'asperge',
      },
      {
        id: '6',
        name: 'basilic',
      },
      {
        id: '9',
        name: 'bourrache',
      },
      {
        id: '12',
        name: 'capucine',
      },
      {
        id: '13',
        name: 'carotte',
      },
      {
        id: '14',
        name: 'celeri',
      },
      {
        id: '15',
        name: 'celerirave',
      },
      {
        id: '22',
        name: 'ciboulette',
      },
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '27',
        name: 'echalote',
      },
      {
        id: '32',
        name: 'fraisier',
      },
      {
        id: '34',
        name: 'haricots',
      },
      {
        id: '35',
        name: 'salade',
      },
      {
        id: '38',
        name: 'marjolaine',
      },
      {
        id: '39',
        name: 'melon',
      },
      {
        id: '40',
        name: 'menthe',
      },
      {
        id: '42',
        name: "oeillet d'inde",
      },
      {
        id: '43',
        name: 'oignon',
      },
      {
        id: '45',
        name: 'panais',
      },
      {
        id: '46',
        name: 'persil',
      },
      {
        id: '48',
        name: 'poireau',
      },
      {
        id: '49',
        name: 'pois',
      },
      {
        id: '52',
        name: 'radis',
      },
      {
        id: '54',
        name: 'sauge',
      },
      {
        id: '55',
        name: 'thym',
      },
    ],
    spacing: {
      plantationType: ['ligne'],
      distanceBetweenGrains: 60,
      distanceBetweenLines: 80,
      seedsPerM2: 12,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 1.0,
      link: 'https://jardinierdudimanche.fr/guide-complet-pour-cultiver-des-tomates-dans-votre-jardin/',
    },
  },
  {
    id: '57',
    name: 'tournesol',
    compatibilityPlants: [
      {
        id: '23',
        name: 'concombre',
      },
      {
        id: '24',
        name: 'courgette',
      },
      {
        id: '39',
        name: 'melon',
      },
      {
        id: '49',
        name: 'pois',
      },
    ],
    spacing: {
      distanceBetweenGrains: 30,
      distanceBetweenLines: 50,
      seedsPerM2: 16,
      plantsPerM2: 4,
      plantsPerPerPerson: 4,
      m2PerPerson: 0.8,
      link: null,
      plantationType: [],
    },
  },
];
