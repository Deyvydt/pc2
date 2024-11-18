import axios from 'axios';

const API_URL = 'http://3.90.3.179:8000/api';

interface User {
    email: string;
    password: string;
    
  }
  
  interface Anime {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    status: 'viendo' | 'visto';
  }
  

  // Autenticación y Registro
export const login = async (email: string, password: string) => {
    try {
      const response = await axios.post<{ token: string }>(`${API_URL}/auth/login`, { email, password });
      localStorage.setItem('token', response.data.token);
      console.log('Login exitoso');
      return response.data;
    } catch (error) {
      console.error('Error en el login:', error);
      throw error;
    }
  };
  
  export const register = async (user: User) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, user);
      console.log('Registro exitoso');
      return response.data;
    } catch (error) {
      console.error('Error en el registro:', error);
      throw error;
    }
  };

  // Configuración de Axios para incluir el token en las solicitudes
const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      headers: { Authorization: `Bearer ${token}` },
    };
  };

  
// Gestión de Favoritos
export const addFavorite = async (animeId: string) => {
    try {
      const response = await axios.post(`${API_URL}/user/favorites`, { animeId }, getAuthHeaders());
      console.log('Anime agregado a favoritos');
      return response.data;
    } catch (error) {
      console.error('Error al agregar a favoritos:', error);
      throw error;
    }
  };
  
  export const removeFavorite = async (animeId: string) => {
    try {
      const response = await axios.delete(`${API_URL}/user/favorites`, {
        ...getAuthHeaders(),
        data: { animeId },
      });
      console.log('Anime eliminado de favoritos');
      return response.data;
    } catch (error) {
      console.error('Error al eliminar de favoritos:', error);
      throw error;
    }
  };

  // Obtener lista de animes
  export const getAnimes = async (page = 1, size = 10) => {
    try {
      const response = await axios.get(`${API_URL}/anime/list`, {
        ...getAuthHeaders(),
        params: { page, size },
      });
      console.log('Lista de animes obtenida');
      return response.data;
    } catch (error) {
      console.error('Error al obtener la lista de animes:', error);
      throw error;
    }
  };
  

// Gestión del Historial de Visualización
export const addToHistory = async (animeId: string, status: 'viendo' | 'visto') => {
  try {
    const response = await axios.post(`${API_URL}/user/history`, { animeId, status }, getAuthHeaders());
    console.log('Anime agregado al historial');
    return response.data;
  } catch (error) {
    console.error('Error al agregar al historial:', error);
    throw error;
  }
};

export const removeFromHistory = async (animeId: string) => {
  try {
    const response = await axios.delete(`${API_URL}/user/history`, {
      ...getAuthHeaders(),
      data: { animeId },
    });
    console.log('Anime eliminado del historial');
    return response.data;
  } catch (error) {
    console.error('Error al eliminar del historial:', error);
    throw error;
  }
};

// Obtener lista de favoritos
export const getFavorites = async (page = 1, size = 10) => {
  try {
    const response = await axios.get(`${API_URL}/user/favorites`, {
      ...getAuthHeaders(),
      params: { page, size },
    });
    console.log('Lista de favoritos obtenida');
    return response.data;
  } catch (error) {
    console.error('Error al obtener la lista de favoritos:', error);
    throw error;
  }
};
// Obtener historial de visualización
export const getHistory = async (page = 1, size = 10) => {
  try {
    const response = await axios.get(`${API_URL}/user/history`, {
      ...getAuthHeaders(),
      params: { page, size },
    });
    console.log('Historial obtenido exitosamente');
    return response.data;
  } catch (error) {
    console.error('Error al obtener el historial:', error);
    throw error;
  }
};
