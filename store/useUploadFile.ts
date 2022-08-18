import { API_URL } from '@constants/apiUrl';
import fileToBase64 from '@utils/fileToBase64';
import create from 'zustand';

export type UploadFileType = 'actors' | 'directors' | 'movies';

export const useUploadFile = create<{
  file: File | null;
  setFile: (file: File | null) => void;
  uploadFile: (type: UploadFileType, callback?: (e: string) => void) => Promise<void>;
  base64Image: string | null;
  loading: boolean;
}>((set, get) => ({
  file: null,
  setFile: async (file: File | null): Promise<void> => {
    set({ file });
    if (file) {
      const base64Image = await fileToBase64(file);
      set({ base64Image });
    } else {
      set({ base64Image: null });
    }
  },
  base64Image: null,
  loading: false,
  uploadFile: async (type: UploadFileType, callback?: (e: string) => void): Promise<void> => {
    if (get().file) {
      try {
        set({ loading: true });
        const file = get().file as File;
        const data = await fetch(`${API_URL}/s3/url?folder=${type}&filename=${file.name}`);
        const response = await data.json();
        const url = response.signedUrl;
        await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: file,
        });
        const imageUrl = url.split('?')[0];
        callback?.(imageUrl);
      } catch (ex) {
        jest.fn();
      } finally {
        set({ loading: false });
      }
    }
  },
}));
