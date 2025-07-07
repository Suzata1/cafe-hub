import BurgerSection from '@/component/BurgerSection';
import PastaSection from '@/component/PastaSection';
import MainCourse from '@/components/MainCourse';
import PastrySection from '@/component/PastrySection';

export default function MenuItemPage({ params }: { params: { item: string } }) {
  const { item } = params;

  const componentMap: Record<string, JSX.Element> = {
    burger: <BurgerSection />,
    pasta: <PastaSection />,
    'main-course': <MainCourse />,
    pastry: <PastrySection />,
  };

  return (
    <div className="min-h-screen p-10 bg-white">
      {componentMap[item] || (
        <div className="text-red-600 text-xl font-semibold">
          Menu item "{item}" not found.
        </div>
      )}
    </div>
  );
}
