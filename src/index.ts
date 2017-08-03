import { Module } from 'magnet-core/module'
import { ManagementClient, AuthenticationClient } from 'auth0'

export default class MagnetAuth0 extends Module {
  init () {
    this.moduleName = 'auth0'
    this.defaultConfig = __dirname
  }

  async setup () {
    if (this.config.authenticationClient) {
      this.insert(new AuthenticationClient(this.config.authenticationClient))
    }

    if (this.config.managementClient) {
      this.insert(new ManagementClient(this.config.managementClient), 'auth0Management')
    }
  }
}
