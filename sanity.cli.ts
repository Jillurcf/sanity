import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '12fmcv53',
    dataset: 'production'
  },
  deployment: {
    appId: 'h6giwlx3yzyzakrgxf9oi4qq',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
