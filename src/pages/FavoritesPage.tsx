import React, { useEffect, useState } from "react";
import { getFavorites, removeFavorite } from "../api"; 
interface FavoriteAnime {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<FavoriteAnime[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const data = await getFavorites(); // Debe devolver la lista de favoritos
        setFavorites(data as FavoriteAnime[]);
        console.log("Favoritos obtenidos exitosamente");
      } catch (error) {
        console.error("Error al obtener favoritos:", error);
      }
    };

    fetchFavorites();
  }, []);

  const handleRemoveFavorite = async (animeId: string) => {
    try {
      await removeFavorite(animeId);
      console.log("Anime eliminado de favoritos");
      // Actualiza la lista de favoritos localmente
      setFavorites((prevFavorites) =>
        prevFavorites.filter((anime) => anime.id !== animeId)
      );
    } catch (error) {
      console.error("Error al eliminar anime de favoritos:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Mis Favoritos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((anime) => (
          <div key={anime.id} className="border p-4 rounded">
            <img
              src={anime.imageUrl}
              alt={anime.title}
              className="w-full h-48 object-cover mb-2"
            />
            <h3 className="text-lg font-bold">{anime.title}</h3>
            <p>{anime.description}</p>
            <button
              onClick={() => handleRemoveFavorite(anime.id)}
              className="mt-2 bg-red-500 text-white p-2 rounded"
            >
              Eliminar de Favoritos
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
