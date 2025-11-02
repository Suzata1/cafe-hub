import React from "react";
import BurgerSection from "../../../../component/BurgerSection";
import PastaSection from "../../../../component/PastaSection";
import MainCourse from "../../../../component/MainCourse";
import PastrySection from "../../../../component/PastrySection";

interface ItemPageProps {
  params: { item: string };
}

export default function ItemPage({ params }: ItemPageProps) {
  const { item } = params;

  const menuConfig: Record<
    string,
    { title: string; description: string; component: React.FC }
  > = {
    burger: {
      title: "Burger",
      description:
        "This is a tasty burger made with fresh ingredients and juicy patties.",
      component: BurgerSection,
    },
    "main-course": {
      title: "Main Course",
      description:
        "This is a traditional Nepali meat dish served with rice and pickles.",
      component: MainCourse,
    },
    pasta: {
      title: "Pasta",
      description:
        "Delicious pasta tossed in creamy sauce with herbs and spices.",
      component: PastaSection,
    },
    pastry: {
      title: "Pastry",
      description: "Soft and sweet pastries perfect for dessert cravings.",
      component: PastrySection,
    },
  };

  const selectedItem = menuConfig[item];

  return (
    <div className="min-h-screen p-10 bg-white">
      {selectedItem ? (
        <div>
          <selectedItem.component />

          <div className="bg-orange-100 p-6 rounded shadow-md max-w-md mt-6">
            <h2 className="text-2xl font-semibold mb-2 text-red-700">
              {selectedItem.title}
            </h2>
            <p className="text-gray-700">{selectedItem.description}</p>
          </div>
        </div>
      ) : (
        <div className="text-red-600 font-medium">
          <p>
            Item "{item}" not found. Please check the URL or return to the menu.
          </p>
        </div>
      )}
    </div>
  );
}
