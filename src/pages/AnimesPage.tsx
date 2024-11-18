import React, { useEffect, useState } from "react";
import { getAnimes } from "../api"; 
interface Anime {
  id: string;
  title: string;
  description: string;  
  imageUrl: string;
}

const AnimesPage: React.FC = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 20; // Mostramos 20 animes por página

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const data = await getAnimes(page, pageSize);
        setAnimes(data as Anime[]);
        console.log("Animes obtenidos exitosamente");
      } catch (error) {
        console.error("Error al obtener animes:", error);
      }
    };

    fetchAnimes();
  }, [page]);

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Lista de Animes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {animes.map((anime) => (
          <div
            key={anime.id}
            className="border p-4 rounded"
          >
            <img
              src={anime.imageUrl}
              alt={anime.title}
              className="w-full h-48 object-cover mb-2"
            />
            <h3 className="text-lg font-bold">{anime.title}</h3>
            <p>{anime.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevious}
          className="bg-blue-500 text-white p-2 rounded"
          disabled={page === 1}
        >
          Anterior
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default AnimesPage;
