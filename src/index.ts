import { Module } from 'magnet-core/module'
import { ManagementClient, AuthenticationClient } from 'auth0'

export default class MagnetAuth0 extends Module {
  get moduleName () { return 'auth0' }
  get defaultConfig () { return __dirname }

  async setup () {
    if (this.config.authenticationClient) {
      this.insert(new AuthenticationClient(this.config.authenticationClient))
    }

    if (this.config.managementClient) {
      this.insert(new ManagementClient(this.config.managementClient), 'auth0Management')
    }
  }
}
