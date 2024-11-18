import React, { useEffect, useState } from "react";
import { getHistory, addToHistory, removeFromHistory } from "../api"; 
interface HistoryAnime {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  status: 'viendo' | 'visto';
}

const HistoryPage: React.FC = () => {
  const [history, setHistory] = useState<HistoryAnime[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getHistory();
        setHistory(data as HistoryAnime[]);
        console.log("Historial obtenido exitosamente");
      } catch (error) {
        console.error("Error al obtener el historial:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const handleRemoveFromHistory = async (animeId: string) => {
    try {
      await removeFromHistory(animeId);
      console.log("Anime eliminado del historial");
      // Actualiza el historial localmente
      setHistory((prevHistory) =>
        prevHistory.filter((anime) => anime.id !== animeId)
      );
    } catch (error) {
      console.error("Error al eliminar anime del historial:", error);
    }
  };

  const handleAddToHistory = async (animeId: string, status: 'viendo' | 'visto') => {
    try {
      await addToHistory(animeId, status);
      console.log("Anime agregado al historial");
      // Opcional: puedes agregar el anime al historial localmente si tienes datos del anime
    } catch (error) {
      console.error("Error al agregar anime al historial:", error);
    }
  };

  if (loading) return <div>Cargando...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Historial de Visualización</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {history.length > 0 ? (
          history.map((anime) => (
            <div key={anime.id} className="border p-4 rounded">
              <img
                src={anime.imageUrl}
                alt={anime.title}
                className="w-full h-48 object-cover mb-2"
              />
              <h3 className="text-lg font-bold">{anime.title}</h3>
              <p>{anime.description}</p>
              <p className="text-gray-600">Estado: {anime.status}</p>
              <button
                onClick={() => handleRemoveFromHistory(anime.id)}
                className="mt-2 bg-red-500 text-white p-2 rounded"
              >
                Eliminar del Historial
              </button>
            </div>
          ))
        ) : (
          <p>No hay animes en el historial.</p>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
