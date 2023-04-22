'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Open Workspace',
    description: 'This workspace offers an open area for work!',
  },
  {
    label: 'Private Workspace',
    description: 'This workspace offers a private area for work!',
  },
  {
    label: 'Meeting Rooms',
    description: 'This workspace offers a meeting room for team meetings!',
  },
  {
    label: 'Event Spaces',
    description: 'This workspace offers a space for events!',
  },
  {
    label: 'Virtual Office',
    description: 'This workspace offers virtual office services!',
  },
  {
    label: 'Co-Working Space',
    description: 'This workspace offers co-working spaces!',
  },
  {
    label: 'Industrial Space',
    description: 'This workspace is located in an industrial area!',
  },
  {
    label: 'Green Space',
    description: 'This workspace is surrounded by nature!',
  },
  {
    label: 'Food and Beverage Space',
    // icon: IoFastFoodOutline,
    description: 'This workspace offers food and beverage services!',
  },
  {
    label: 'Luxury Space',
    description: 'This workspace is luxurious and high-end!',
  }
]


const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
           
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;