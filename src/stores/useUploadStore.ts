import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UploadState {
  uploadsToday: number;
  lastUploadDate: string;
  resetUploads: () => void;
  incrementUploads: () => void;
  canUpload: () => boolean;
}

export const useUploadStore = create<UploadState>()(
  persist(
    (set, get) => ({
      uploadsToday: 0,
      lastUploadDate: new Date().toDateString(),
      
      resetUploads: () => {
        const currentDate = new Date().toDateString();
        if (currentDate !== get().lastUploadDate) {
          set({ uploadsToday: 0, lastUploadDate: currentDate });
        }
      },
      
      incrementUploads: () => {
        const currentDate = new Date().toDateString();
        if (currentDate !== get().lastUploadDate) {
          set({ uploadsToday: 1, lastUploadDate: currentDate });
        } else {
          set(state => ({ uploadsToday: Math.min(state.uploadsToday + 1, 5) }));
        }
      },
      
      canUpload: () => {
        const currentDate = new Date().toDateString();
        const { lastUploadDate, uploadsToday } = get();
        
        // Reset uploads if it's a new day
        if (currentDate !== lastUploadDate) {
          get().resetUploads();
          return true;
        }
        
        return uploadsToday < 5;
      },
    }),
    {
      name: 'traffic-uploads',
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name);
          if (!str) return null;
          const data = JSON.parse(str);
          // Check if it's a new day and reset if needed
          const currentDate = new Date().toDateString();
          if (currentDate !== data.state.lastUploadDate) {
            data.state.uploadsToday = 0;
            data.state.lastUploadDate = currentDate;
            localStorage.setItem(name, JSON.stringify(data));
          }
          return data;
        },
        setItem: (name, value) => localStorage.setItem(name, JSON.stringify(value)),
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
);