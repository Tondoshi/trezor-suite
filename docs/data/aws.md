# AWS Analytics: Info & Changelog

_For a deep technical info (mainly for developers) please see [aws-technical](aws-technical) document.

Both web and desktop Suite applications collect anonymous data about how a user interacts with them. Analytics is not mandatory and not all users have it enabled, as it can be opt-out during the onboarding process or later in the settings in the general tab. However, by default, it is enabled in the onboarding process and if the user does not opt-out, the application starts to track his interactions immediately after the onboarding process is completed.

## Anonymous data:

Collected data are anonymous. This means that Suite does not track any data leaking information about a device or a user such as:
- Device id
- Public keys
- Particular amounts
- Transaction ids
- etc.

## Changelog

This changelog lists all events that Suite tracks.

### 1.14
Fixed:
- suite-ready
  - osName: android is now correctly detected, added chromeos

### 1.13
Added:
- switch-device/add-hidden-wallet

Changed:
- wallet/created renamed to select-wallet-type

Removed:
- desktop-init

### 1.12
Changed:
- device-update-firmware
  - toFwVersion and toBtcOnly made optional as we don't know them when installing custom firmware

Added:
- guide/tooltip-link/navigation
  - id: string

### 1.11
Added:
- c_timestamp: number (time of created in ms sent with every event)
- menu/settings/dropdown
  - option: 'guide' (+ old ones)
- menu/guide
- guide/feedback/navigation
  - type: 'overview' | 'bug' | 'suggestion'
- guide/feedback/submit
  - type: 'bug' | 'suggestion'
- guide/header/navigation
  - type: 'back' | 'close' | 'category'
  - id?: string
- guide/report
  - type: 'overview' | 'bug' | 'suggestion'
- guide/node/navigation
  - type: 'category' | 'page'
  - id: string

### 1.10
Removed:
- initial-run-completed
  - newDevice
  - usedDevice

### 1.9
Changed:
- use `stable.log` for codesign builds and `develop.log` otherwise
- `suite-ready` is now also tracked on initial run

Added:
- suite-ready
  - platformLanguages: string
- device-connect
  - language: string
  - model: string
- settings/device/goto/background
  - custom: boolean
- settings/device/background  
  - image: string | undefined (gallery image)
  - format: string | undefined (custom image)
  - size: number | undefined (custom image)
  - resolutionWidth: number | undefined (custom image)
  - resolutionHeight: number | undefined (custom image)
- add-token
  - token: string
- transaction-created
  - action: 'sent' | 'copied' | 'downloaded' | 'replace'
  - symbol: string
  - tokens: string
  - outputsCount: number
  - broadcast: boolean
  - bitcoinRbf: boolean
  - bitcoinLockTime: boolean
  - ethereumData: boolean
  - rippleDestinationTag: boolean
  - ethereumNonce: boolean
  - selectedFee: string
- menu/notifications/toggle
  - value: boolean
- menu/settings/toggle
  - value: boolean
- menu/settings/dropdown
  - option: 'all' | 'general' | 'device' | 'coins'
- menu/goto/tor
- accounts/empty-account/receive

Fixed:
- device-update-firmware
  - toBtcOnly
- accounts/empty-account/buy
  - symbol (lowercase instead of uppercase)

### 1.8
Added:
- settings/device/update-auto-lock
  - value: string
- suite-ready
  - browserName: string
  - browserVersion: string
  - osName: string
  - osVersion: string
  - windowWidth: number
  - windowHeight: number

Fixed:
- suite-ready
  - suiteVersion
  - c_instance_id
  - c_session_id
- device-update-firmware
  - fromFwVersion (changed separator to dots from commas)
  - fromBlVersion (changed separator to dots from commas)
- analytics/dispose

Removed:
- menu/goto/exchange-index

Changed:
- `desktop` build is now tracked to `stable.log` instead of `beta.log`
### 1.7
Added:
- send-raw-transaction
  - networkSymbol: string
- device-connect
  - totalDevices: number

### 1.6
Added:
- suite-ready
  - suiteVersion: string | ""
- device-connect
  - isBitcoinOnly: boolean
- desktop-init
  - desktopOSVersion: string | "" (in format: {platform}_{release})
- accounts/empty-account/buy
  - symbol: string
- account-create
  - tokensCount: number
- add-token
  - networkSymbol: string
  - addedNth: number

### 1.5
Added:
- suite-ready
  - theme (dark mode)
- wallet/created
  - type: standard | hidden
- device-disconnect

### 1.4
Added:
- suite-ready
  - rememberedStandardWallets
  - rememberedHiddenWallets
- analytics/enable
- analytics/dispose
- check-seed/error
- check-seed/success

### 1.3
Added:
- device-connect
  - backup_type
- router/location-change
  - prevRouterUrl
  - nextRouterUrl

### 1.2
Added
- suite-ready
  - tor

### 1.1
Added:
- device-update-firmware:
  - toFwVersion
- suite-ready
  - platformLanguage
  - platform
- device-connect:
  - totalInstances

### 1.0
- initial version
