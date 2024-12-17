declare global {
  type HomeStoreState = {
    blogs: any[];
    getAllBlogs: () => Promise<void>;
    sendEmail: (payload: any) => Promise<void>;
    reset: () => void;
  };
}
export {};
