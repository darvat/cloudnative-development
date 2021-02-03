import { writable } from "svelte/store"

const { subscribe, update } = writable({})
export const featureTogglesStore = {
  subscribe,
  update,
  setFeatureTogglesStore: (FEATURE_TOGGLES, configValues) =>
    Object.keys(FEATURE_TOGGLES).forEach((toggleKey) => {
      const featureToggleName = FEATURE_TOGGLES[toggleKey].name
      if (configValues[featureToggleName]) {
        update((items) => ({
          ...items,
          [featureToggleName]: configValues[featureToggleName].asBoolean(),
        }))
      }
    }),
}
