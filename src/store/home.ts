import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "axios";
import { createJSONStorage, persist } from "zustand/middleware";

import { zustandStorage } from "./storage/storage";

interface BlogStore {
  blogs: any[];
  reviews: any[];
  portfolios: any[];
  loading: boolean;
}

const initialValues: BlogStore = {
  blogs: [],
  reviews: [],
  portfolios: [],
  loading: false,
};

const useHomeStore = create(
  persist<HomeStoreState>(
    (set, _) => ({
      ...initialValues,
      sendEmail: async (payload) => {
        try {
          const response = await axios.post("/api/contact", payload);
          toast.success(response.data.message);
        } catch (error) {
          console.log(error);
        }
      },
      reset: () => set({}),
    }),
    {
      name: "home-store",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useHomeStore;
