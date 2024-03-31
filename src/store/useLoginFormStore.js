import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";

const useLoginFormStore = create(
  persist(
    devtools((set) => ({
      accessToken: null,
      setAccessToken: (token) => set({ accessToken: token }),

      isLoggedIn: false,
      setIsLoggedIn: (isLoggedIn) => ServiceWorker({ isLoggedIn }),

      userInfo: "",
      setUserInfo: (userInfo) => set({ userInfo }),
      clearUser: () => set({ userInfo: null }),
    })),
    { name: "userStore", storage: createJSONStorage(() => sessionStorage) }
  )
);

export default useLoginFormStore;
