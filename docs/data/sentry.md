# Sentry

We use [Sentry.io](https://sentry.io/) for error tracking and performance monitoring for users who enabled anononymous data collection. **We do not communicate with Sentry if users do not wish to be tracked.**

## What is being tracked

### General data

Browser (User Agent), System, Suite version, session id shared with analytics

### Breadcrumbs

**timestamps**, clicks, navigation, analytics, network requests from Suite... 

### Extra data:

- Enabled-coins e.g.: `[btc, ltc, eth, xrp, doge]`
- Wallet discovery e.g.:
```
[
  {
    authConfirm:False,
    bundleSize: 0,
    deviceState: mrpKznszeaJqQ9TofJp77gkKjGfHKMFFeF@B1D7D294164A96180E7D3EF4:1,
    failed: [],
    index: 0,
    loaded: 14,
    networks: [btc, btc, btc, ltc, ltc, ltc, eth, xrp, doge],
    running: [undefined],
    status: 4,
    total: 14,
  },
]
```
- Device information (slightly reducted):

```
{
  authConfirm: False,
  available: False,
  buttonRequests: [],
  connected: False,
  features:
    {
      auto_lock_delay_ms: 600000,
      backup_type: Bip39,
      bootloader_hash: None,
      bootloader_mode: None,
      capabilities:
        [
          Capability_Bitcoin,
          Capability_Bitcoin_like,
          Capability_Binance,
          Capability_Cardano,
          Capability_Crypto,
          Capability_EOS,
          Capability_Ethereum,
          Capability_Monero,
          Capability_NEM,
          Capability_Ripple,
          Capability_Stellar,
          Capability_Tezos,
          Capability_U2F,
          Capability_Shamir,
          Capability_ShamirGroups,
          [Filtered],
        ],
      device_id: [redacted],
      display_rotation: 0,
      experimental_features: False,
      firmware_present: None,
      flags: 0,
      fw_major: None,
      fw_minor: None,
      fw_patch: None,
      fw_vendor: None,
      fw_vendor_keys: None,
      imported: None,
      initialized: True,
      label: [redacted],
      language: en-US,
      major_version: 2,
      minor_version: 4,
      model: T,
      needs_backup: False,
      no_backup: False,
      passphrase_always_on_device: False,
      passphrase_protection: True,
      patch_version: 2,
      pin_protection: True,
      recovery_mode: False,
      revision: 9276b1702361f70e094286e2f89e919d8a230d5c,
      safety_checks: Strict,
      sd_card_present: False,
      sd_protection: False,
      session_id: None,
      unfinished_backup: False,
      unlocked: True,
      vendor: trezor.io,
      wipe_code_protection: False,
    },
  firmware: valid,
  firmwareRelease:
    {
      changelog: [],
      isLatest: True,
      isNewer: False,
      isRequired: None,
      latest: {},
      release: {},
    },
  id: [redacted],
  instance: 1,
  label: [redacted],
  metadata: { status: disabled },
  mode: normal,
  passphraseOnDevice: False,
  path,
  remember: True,
  state: mrpKznszeaJqQ9TofJp77gkKjGfHKMFFeF@B1D7D294164A96180E7D3EF4:1,
  status: used,
  ts: 1632094494156,
  type: acquired,
  unavailableCapabilities: {},
  useEmptyPassphrase: False,
  walletNumber: 1,
}
```

- Action logs:
```
[
  { time: 1634644852099, type: @suite/online-status },
  { action: {}, time: 1634644852104, type: @suite/init },
  { time: 1634644852966, type: @message-system/save-valid-messages },
  { time: 1634644852967, type: @suite/tor-status },
  { time: 1634644853131, type: @resize/udpate-window-size },
  { time: 1634644853306, type: @desktop-update/enable },
  { time: 1634644853361, type: @desktop-update/checking },
  { time: 1634644853449, type: @message-system/save-valid-messages },
  { action: {}, time: 1634644853453, type: @suite/set-language },
  { time: 1634644853455, type: @storage/loaded },
  { time: 1634644853717, type: @message-system/fetch-config-success },
  { time: 1634644853744, type: @analytics/init },
  { time: 1634644854072, type: @desktop-update/not-available },
  { time: 1634644854166, type: iframe-loaded },
  { time: 1634644854168, type: @suite/trezor-connect-initialized },
  { time: 1634644854187, type: @blockchain/update-fee },
  { action: {}, time: 1634644854188, type: @suite/app-changed },
  { time: 1634644854189, type: @router/location-change },
  { time: 1634644854191, type: @suite/ready },
  { time: 1634644854192, type: @wallet-settings/clear-tor-blockbook-urls },
  { time: 1634644854192, type: @blockchain/ready },
]
```