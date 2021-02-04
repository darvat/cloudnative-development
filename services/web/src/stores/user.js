import { writable } from "svelte/store"
const { subscribe, set } = writable(null)
export const currentUser = {
  subscribe,
  signIn: (user) => set(user),
  signOut: () => set(null),
}
