import { create } from "zustand"


export const useAuthStore = create((set, get) => ({
    loading:false,
    login: () => {
        set({loading: true})
        setTimeout(() => {
            set({loading: false})
        }, 2500)
    }
}))