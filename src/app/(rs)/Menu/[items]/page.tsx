'use client';

import { useParams } from 'next/navigation';
import BurgerSection from './BurgerSection';
import MainCourse from './MainCourse';
import PastaSection from './PastaSection';
import PastrySection from './PastrySection';
import { JSX } from 'react';

type MenuCategory = 'burger' | 'mainCourse' | 'pasta' | 'pastry';

export default function MenuItemPage() {
  const params = useParams();
  const items = params.items as string | undefined;

  // Map URL param to component
  const sections: Record<MenuCategory, JSX.Element> = {
    burger: <BurgerSection />,
    mainCourse: <MainCourse />,
    pasta: <PastaSection />,
    pastry: <PastrySection />,
  };

  // Normalize the input to lowercase to match keys
  const sectionKey = (items?.toLowerCase() ?? '') as MenuCategory;
  const section = sections[sectionKey];

  if (!section) {
    return (
      <div className="text-red-600">
        Menu category {items} not found.
      </div>
    );
  }

  return <div>{section}</div>;
}