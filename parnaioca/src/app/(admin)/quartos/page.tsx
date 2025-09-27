import Bedroom from '@/components/atoms/Bedroom';
import ButtonCreate from '@/components/atoms/ButtonCreate';

const QuartosPage = () => {
  return (
    <main>
      <div className="flex justify-between items-center mb-6">
        <div>Total de 6 quartos cadastrados</div>
        <ButtonCreate />
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Bedroom />
        <Bedroom />
        <Bedroom />
      </div>
    </main>
  );
};

export default QuartosPage;
