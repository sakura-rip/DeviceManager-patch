import type {BaseTranslation} from "../i18n-types"

const en = {
  TITLE: "CharaChorder Device Manager",
  DESCRIPTION: "The device manager and configuration tool for CharaChorder devices.",
  saveActions: {
    UNDO: "Undo (hold <kbd class='icon'>shift</kbd> to undo all changes)",
    REDO: "Redo",
    SAVE: "Save",
  },
  backup: {
    TITLE: "Store History",
    INDIVIDUAL: "Individual backups",
    DISCLAIMER: "Your history is stored as a backup in this browser. The history remains on your computer.",
    DOWNLOAD: "Download Everything",
    RESTORE: "Restore",
  },
  sync: {
    TITLE_READ: "Reading latest changes",
    TITLE_WRITE: "Saving changes to device",
  },
  modal: {
    CLOSE: "Close",
  },
  actionSearch: {
    PLACEHOLDER: "Search for actions",
    CURRENT_ACTION: "Current action",
    DELETE: "Remove",
    filter: {
      ALL: "All",
    },
    SHIFT_WARNING: "This action holds <kbd class='icon'>shift</kbd>",
    ALT_CODE_WARNING: "This alt-code hack only works on Windows",
  },
  share: {
    TITLE: "Share",
    URL_COPIED: "Sharable URL copied!",
    EXTRA_DOWNLOAD: "Download as file",
  },
  print: {
    TITLE: "Print",
  },
  profile: {
    TITLE: "Profile",
    LANGUAGE: "Language",
    theme: {
      TITLE: "Theme",
      COLOR_SCHEME: "Color scheme",
      DARK_MODE: "Dark",
      LIGHT_MODE: "Light",
    },
  },
  deviceManager: {
    TITLE: "Device",
    AUTO_CONNECT: "Auto-connect",
    CONNECT: "Connect",
    DISCONNECT: "Disconnect",
    TERMINAL: "Terminal",
    APPLY_SETTINGS: "Flash changes to device",
    bootMenu: {
      TITLE: "Boot Menu",
      REBOOT: "Reboot",
      BOOTLOADER: "Bootloader",
    },
  },
  browserWarning: {
    TITLE: "Warning",
    INFO_SERIAL_PREFIX: "Your current browser is not supported due to this site's unique requirement for ",
    INFO_SERIAL_INFIX: "serial connections",
    INFO_SERIAL_SUFFIX: ".",
    INFO_BROWSER_PREFIX:
      "Though all chromium-based desktop browsers fulfill this requirement, some derivations such as Brave ",
    INFO_BROWSER_INFIX: "have been known to disable the API intentionally",
    INFO_BROWSER_SUFFIX: ".",
    DOWNLOAD_APP: "Download the desktop app",
  },
  changes: {
    TITLE: "Import changes",
    ALL_CHANGES: "All changes",
    layout: {
      TITLE: "{0} layout change{{|s}}",
      LAYER: "Update {changes} key{{changes:|s}} in layer {layer}",
    },
    settings: {
      TITLE: "Update {0} setting{{|s}}",
    },
    chords: {
      TITLE: "{0} chords",
      NEW_CHORDS: "Add {0} new chord{{|s}}",
      CHANGED_CHORDS: "Replace {0} chord{{|s}}",
      DELETED_CHORDS: "Mark {0} chord{{|s}} for deletion",
    },
  },
  configure: {
    chords: {
      TITLE: "Chords",
      HOLD_KEYS: "Hold chord",
      NEW_CHORD: "New chord",
      search: {
        PLACEHOLDER: "Search {0} chord{{|s}}",
      },
      conflict: {
        TITLE: "Chord conflict",
        DESCRIPTION:
          "Your chord {0} conflicts with an existing chord. Are you sure you want to overwrite this chord?",
        CONFIRM: "Overwrite",
        ABORT: "Skip",
      },
    },
    layout: {
      TITLE: "Layout",
    },
    settings: {
      TITLE: "Settings",
    },
  },
  plugin: {
    editor: {
      RUN: "Run",
    },
  },
} satisfies BaseTranslation

export default en
