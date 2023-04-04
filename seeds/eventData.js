const { Event } = require('../models');

const eventdata = [
  {
    event_name: 'Lady Gaga',
    URL: 'https://www.ticketmaster.com/atlanta-hawks-vs-philadelphia-76ers-atlanta-georgia-04-07-2023/event/0E005D0CD9393C43',
    image: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_TABLET_LANDSCAPE_3_2.jpg',
    starting_date: 'March 30, 2024',
    price_range: '$80 - $300',
    genre:'Music',
    location: 'Golden 1 Center',
    city_id: 1,
  },
  {
    event_name: 'Sea Hawks vs Bulls',
    URL: 'https://www.ticketmaster.com/atlanta-hawks-vs-philadelphia-76ers-atlanta-georgia-04-07-2023/event/0E005D0CD9393C43',
    image: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_TABLET_LANDSCAPE_3_2.jpg',
    starting_date: 'October 5, 2024',
    price_range: '$40 - $250',
    genre:'Sports',
    location: 'Sacramento Arena',
    city_id: 1,
  },
  {
    event_name: 'Kings vs Bulls',
    URL: 'https://www.ticketmaster.com/atlanta-hawks-vs-philadelphia-76ers-atlanta-georgia-04-07-2023/event/0E005D0CD9393C43',
    image: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_TABLET_LANDSCAPE_3_2.jpg',
    starting_date: 'May 12, 2024',
    price_range: '$40 - $250',
    genre:'Sports',
    location: 'Sacramento Arena',
    city_id: 1,
  },
  {
    event_name: 'Mariah Carey',
    URL: 'https://www.ticketmaster.com/atlanta-hawks-vs-philadelphia-76ers-atlanta-georgia-04-07-2023/event/0E005D0CD9393C43',
    image: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_TABLET_LANDSCAPE_3_2.jpg',
    starting_date: 'October 5, 2024',
    price_range: '$60 - $350',
    genre:'Music',
    location: 'Golden 1 Center',
    city_id: 1,
  },
  {
    event_name: 'Miley Cyrus',
    URL: 'https://www.ticketmaster.com/atlanta-hawks-vs-philadelphia-76ers-atlanta-georgia-04-07-2023/event/0E005D0CD9393C43',
    image: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_TABLET_LANDSCAPE_3_2.jpg',
    starting_date: 'October 23, 2024',
    price_range: '$90 - $230',
    genre:'Music',
    location: 'Dallas Ampi-Theatre',
    city_id: 2,
  },
  {
    event_name: 'Carrie Underwood',
    URL: 'https://www.ticketmaster.com/atlanta-hawks-vs-philadelphia-76ers-atlanta-georgia-04-07-2023/event/0E005D0CD9393C43',
    image: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_TABLET_LANDSCAPE_3_2.jpg',
    starting_date: 'August 25, 2024',
    price_range: '$40 - $270',
    genre:'Music',
    location: 'Dallas Ampi-Theatre',
    city_id: 2,
  },
  {
    event_name: '49ers vs Packers',
    URL: 'https://www.ticketmaster.com/atlanta-hawks-vs-philadelphia-76ers-atlanta-georgia-04-07-2023/event/0E005D0CD9393C43',
    image: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_TABLET_LANDSCAPE_3_2.jpg',
    starting_date: 'October 23, 2024',
    price_range: '$90 - $230',
    genre:'Music',
    location: 'Dallas Ampi-Theatre',
    city_id: 2,
  },
  {
    event_name: 'Atlanta Hawks vs. Philadelphia 76ers',
    URL: 'https://www.ticketmaster.com/atlanta-hawks-vs-philadelphia-76ers-atlanta-georgia-04-07-2023/event/0E005D0CD9393C43',
    image: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_TABLET_LANDSCAPE_3_2.jpg',
    starting_date: 'October 09, 2023',
    price_range: '$90 - $230',
    genre:'Sports',
    location: 'Atlanta Statium',
    city_id: 3,
  },
  {
    event_name: 'Katy Perry',
    URL: 'https://www.ticketmaster.com/atlanta-hawks-vs-philadelphia-76ers-atlanta-georgia-04-07-2023/event/0E005D0CD9393C43',
    image: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_TABLET_LANDSCAPE_3_2.jpg',
    starting_date: 'October 09, 2023',
    price_range: '$90 - $230',
    genre:'Music',
    location: 'Atlanta Statium',
    city_id: 3,
  },
  {
    event_name: 'Taylor Swift',
    URL: 'https://www.ticketmaster.com/atlanta-hawks-vs-philadelphia-76ers-atlanta-georgia-04-07-2023/event/0E005D0CD9393C43',
    image: 'https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_TABLET_LANDSCAPE_3_2.jpg',
    starting_date: 'October 09, 2023',
    price_range: '110 - $330',
    genre:'Music',
    location: 'Atlanta Statium',
    city_id: 3,
  },
];

const seedEvents = () => Event.bulkCreate(eventdata);

module.exports = seedEvents;
