# _meet Electron

Desktop application for [_meet] built with [Electron] - based on the original development of the Jitsi team!

## Features

- Local settings
- Builtin auto-updates
- Remote control
- Always-On-Top window

## OnTop Features / ToDo

- [x] Create portable executable
- [x] UI/UX optimizations
- [x] Fixed server-config
- [] Add global chat
- [] Add native chromium-based e2e encryption
- [] Transparent header / Custom controls

## Installation

Download our [latest release] and you're off to the races! The supported platforms
are macOS, Windows (both 32 and 64bits) and GNU/Linux (64bits only).

<details><summary>NOTE for old GNU/Linux distributions</summary>

You might get the following error:

```
FATAL:nss_util.cc(632)] NSS_VersionCheck("3.26") failed. NSS >= 3.26 is required.
Please upgrade to the latest NSS, and if you still get this error, contact your
distribution maintainer.
```

If you do, please install NSS (example for Debian / Ubuntu):

```bash
sudo apt-get install libnss3
```

</details>

### Homebrew

For *MacOS* user, you can install the application using the following command:

```
brew cask install jitsi-meet
```