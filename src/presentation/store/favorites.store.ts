import { create } from "zustand";
import { Repository } from "../../domain/entities/github-repository.entity";

interface FavoritesStoreState {
  favorites: Repository[];
  addFavorite: (item: Repository) => void;
  deleteFavorite: (item: Repository["id"]) => void;
  deleteAllFavorites: () => void;
}

const useFavoritesStore = create<FavoritesStoreState>()((set) => ({
  favorites: [],
  addFavorite: (item) => set((state) => ({ favorites: [...state.favorites, item] })),
  deleteAllFavorites: () => set(() => ({ favorites: [] })),
  deleteFavorite: (id) => set((state) => {
    const filteredFavorites = state.favorites.filter(favorite => favorite.id !== id)
    return { favorites: filteredFavorites }
  },
)}));

export default useFavoritesStore