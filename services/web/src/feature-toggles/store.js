import { writable } from "svelte/store"

const { subscribe, update } = writable({})
export const featureTogglesStore = {
  subscribe,
  update,
  setFeatureToggle: (featureToggleName, isEnabled) => {
    update((items) => ({
      ...items,
      [featureToggleName]: isEnabled,
    }))
  },
}
