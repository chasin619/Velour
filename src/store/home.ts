import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "axios";
import { createJSONStorage, persist } from "zustand/middleware";

import { zustandStorage } from "./storage/storage";
import { BASE_URL } from "@/utils/constants";
import { getHeaders } from "@/utils/helpers";

interface BlogStore {
  blogs: any[];
}

const initialValues: BlogStore = {
  blogs: [],
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
      getAllBlogs: async () => {
        try {
          const headers = getHeaders();
          const response = await axios.get(`${BASE_URL}/api/blog/get-blogs`, {
            ...headers,
          });
          set({ blogs: response.data.blogs });
        } catch (error: any) {
          console.error("Error fetching blogs:", error.message);
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
