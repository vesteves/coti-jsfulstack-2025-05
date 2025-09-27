import CardTotal from '@/components/atoms/CardTotal';
import CardInfo from '@/components/molecules/CardInfo';

const DashboardPage = () => {
  return (
    <main>
      <div className="grid grid-cols-4 gap-6 mb-6">
        <CardTotal />
        <CardTotal />
        <CardTotal />
        <CardTotal />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <CardInfo />
        <CardInfo />
      </div>
    </main>
  );
};

export default DashboardPage;
