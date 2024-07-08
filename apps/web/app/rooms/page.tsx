import StayWithUsRooms from '@repo/ui/components/StayWithUsRooms';

const Room1 = '/images/room1.jpeg';
const Room2 = '/images/room2.jpeg';

const stayWithUsRoomsData = {
  title: 'Stay with us',
  items: [
    {
      title: 'Luxury Swiss Tents',
      subtitle: [
        'Stay in our Luxury Swiss Tents, where you can enjoy the ultimate glamping experience.',
        ' These tents offer comfort and style, providing you with a unique way to connect with nature while enjoying modern amenities',
      ],
      price: '4000',
      differentPrice: [
        '4000 including breakfast',
        'Double occupancy',
        'Extra bed Rs. 800 including breakfast',
      ],

      accomondation: {
        wifi: false,
        shower: true,
        bathtub: false,
        towel: true,
        ac: false,
        balcony: false,
      },

      image: [
        {
          src: Room1,
          alt: 'room1',
        },
        {
          src: Room1,
          alt: 'room1',
        },
      ],
      link: {
        label: 'Enquire now',
        href: '/contact',
      },
    },
    {
      title: 'River-View Cottages',
      subtitle: [
        'Our River-View Cottages provide a tranquil retreat with stunning views of the River Dibang.',
        'Wake up to the soothing sound of the river and the beauty of the sunrise, making your stay both relaxing and memorable',
      ],
      price: '4000',
      differentPrice: [
        '4000 including breakfast',
        'Double occupancy',
        'Extra bed Rs. 800 including breakfast',
      ],

      accomondation: {
        wifi: false,
        shower: true,
        bathtub: false,
        towel: true,
        ac: false,
        balcony: false,
      },
      image: [
        {
          src: Room2,
          alt: 'room',
        },
        {
          src: Room2,
          alt: 'room',
        },
      ],
      link: {
        label: 'Enquire now',
        href: '/contact',
      },
    },
  ],
};

function Rooms() {
  return (
    <section>
      <div className="py-12 px-6 mt-16">
        <div className="max-w-7xl mx-auto">
          <StayWithUsRooms {...stayWithUsRoomsData} />
        </div>
      </div>
    </section>
  );
}

export default Rooms;
