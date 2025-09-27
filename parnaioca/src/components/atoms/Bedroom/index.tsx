const Bedroom = () => {
  return (
    <div className="flex flex-col p-6 rounded-xl border border-gray-200">
      <div className="flex justify-between items-center">
        <div className="font-semibold">Title</div>
        <div className="text-white bg-black p-2 rounded-xl">Disponível</div>
      </div>

      <div className="mb-8">R$ xxx,xx</div>

      <div className="mb-2">description</div>

      <div className="flex gap-2 font-semibold mb-2">
        <div>icon</div>
        <div>Capacidade: X pessoas</div>
      </div>

      <div className="flex gap-2">
        <div className="flex gap-2">
          <button className="flex gap-2 border border-gray-200 hover:bg-gray-200 p-2 rounded-xl">
            <div>icon</div>
            <div>Editar</div>
          </button>
          <button className="flex gap-2 border border-gray-200 hover:bg-gray-200 p-2 rounded-xl">
            <div>icon</div>
            <div>Excluir</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bedroom;
