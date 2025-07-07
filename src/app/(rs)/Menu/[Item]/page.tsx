import BurgerSection from '../component/BurgerSection';


export default function ItemPage({ params }: { params: { item: string } }) {
  const { item } = params;

  const menuItems: Record<string, { title: string; description: string }> = {
    burger: {
      title: "Burger",
      description: "This is a tasty burger made with fresh ingredients and juicy patties.",
    },
    "main-course": {
      title: "Main Course",
      description: "This is a traditional Nepali meat dish served with rice and pickles.",
    },
    pasta: {
      title: "Pasta",
      description: "Delicious pasta tossed in creamy sauce with herbs and spices.",
    },
    pastry: {
      title: "Pastry",
      description: "Soft and sweet pastries perfect for dessert cravings.",
    },
  };

  const componentMap: Record<string, () => JSX.Element> = {
    burger: () => <BurgerSection />,
   
    // pasta: () => <PastaSection />,
    // "main-course": () => <MainCourse />,
    // pastry: () => <PastrySection />,
  };

  const selectedItem = menuItems[item];

  return (
    <div className="min-h-screen p-10 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">Menu Item</h1>

      {componentMap[item] ? (
        componentMap[item]() // render the component
      ) : selectedItem ? (
        <div className="bg-orange-100 p-6 rounded shadow-md max-w-md">
          <h2 className="text-2xl font-semibold mb-2 text-red-700">{selectedItem.title}</h2>
          <p className="text-gray-700">{selectedItem.description}</p>
        </div>
      ) : (
        <div className="text-red-600 font-medium">
          <p>Item "{item}" not found. Please check the URL or return to the menu.</p>
        </div>
      )}
    </div>
  );
}


