declare global {
  type HomeStoreState = {
    sendEmail: (payload: any) => Promise<void>;
    reset: () => void;
  };
}
export {};
