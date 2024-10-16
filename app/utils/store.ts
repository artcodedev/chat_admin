


import { create } from 'zustand'

interface Store {
  
  logout: boolean
  setLogout: (s: boolean) => void

  payment: boolean
  setPayment: (s: boolean) => void,

  loading: boolean
  setLoading: (s: boolean) => void,

}

const useStore = create<Store>((set) => ({

  logout: false,
  setLogout: (s) => set(() => ({ logout: s })),

  payment: false,
  setPayment: (s) => set(() => ({ payment: s })),

  loading: false,
  setLoading: (s) => set(() => ({ loading: s }))

}))





export default useStore;
