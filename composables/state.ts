export const useGlobal = () => 
  useState(() => ({
    state: 'hungle'
  }))