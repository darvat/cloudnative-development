import { featureTogglesStore } from "./store"

export const FEATURE_TOGGLES = {
  vipWelcome: {
    name: "feature_vip_welcome",
  },
}

const { setFeatureTogglesStore } = featureTogglesStore

export const initFeatureToggles = async () => {
  const remoteConfig = window.firebase.remoteConfig()
  await remoteConfig.fetchAndActivate()
  setFeatureTogglesStore(FEATURE_TOGGLES, remoteConfig.getAll())
  return remoteConfig
}
