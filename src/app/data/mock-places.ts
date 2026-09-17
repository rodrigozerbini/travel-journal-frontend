import { Place } from '../models/place';

export const PLACES: Place[] = [
  {
    id: 1,
    title: 'Mount Fuji',
    location: 'Japan',
    googleMapsUrl: 'https://maps.app.goo.gl/8jCsuY7o9BFw4fTx8',
    startDate: '12 Jan, 2021',
    endDate: '24 Jan, 2021',
    description:
      'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',
    image: '/images/mount-fuji.jpg',
  },
  {
    id: 2,
    title: 'Sagrada Família',
    location: 'Spain',
    googleMapsUrl: 'https://maps.app.goo.gl/rNTvvRuURH537xH77',
    startDate: '17 Feb, 2022',
    endDate: '18 Feb, 2022',
    description:
      'Sagrada Família is a church under construction in the Eixample district of Barcelona, Catalonia, Spain. It is the largest unfinished Catholic church in the world. ',
    image: '/images/sagrada-familia.jpg',
  },
  {
    id: 3,
    title: 'Christ the Redeemer',
    location: 'Brazil',
    googleMapsUrl: 'https://maps.app.goo.gl/a2233ViesA3yQZkR7',
    startDate: '02 Mar, 2024',
    endDate: '03 Mar, 2024',
    description:
      'Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal.',
    image: '/images/christ-redeemer.jpg',
  },
];
