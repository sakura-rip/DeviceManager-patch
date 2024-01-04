import type {Translation} from "../i18n-types"

const de = {
  TITLE: "CharaChorder Gerätemanager",
  DESCRIPTION: "Gerätemanager und Konfigurationstool für CharaChorder Geräte.",
  saveActions: {
    UNDO: "Rückgängig (<kbd class='icon'>shift</kbd> halten um alle Änderungen rückgängig zu machen)",
    REDO: "Wiederholen",
    SAVE: "Speichern",
  },
  update: {
    TITLE: "Gerät aktualisieren",
  },
  sync: {
    TITLE_READ: "Neueste Änderungen werden abgerufen",
    TITLE_WRITE: "Änderungen werden gespeichert",
    RELOAD: "Neu laden",
  },
  backup: {
    TITLE: "Verlauf speichern",
    INDIVIDUAL: "Einzeldateien",
    DISCLAIMER:
      "Der Verlauf wird als Backup in diesem Browser gespeichert. Der Verlauf bleibt auf diesem Computer.",
    DOWNLOAD: "Alles herunterladen",
    RESTORE: "Wiederherstellen",
  },
  modal: {
    CLOSE: "Schließen",
  },
  actionSearch: {
    PLACEHOLDER: "Nach Aktionen suchen",
    CURRENT_ACTION: "Aktuelle Aktion",
    NEXT_ACTION: "Aktion nach dem nächsten Speichern",
    DELETE: "Entfernen",
    filter: {
      ALL: "Alle",
    },
    LIVE_LAYOUT_INFO: "Diese Aktion wurde auf Basis des Systemtastaturlayouts ermittelt.",
    SHIFT_WARNING: "Diese Aktion hält <kbd class='icon'>shift</kbd>",
    ALT_CODE_WARNING: "Dieses Alt-Code Makro funktioniert nur unter Windows",
  },
  share: {
    TITLE: "Teilen",
    URL_COPIED: "Teilbare URL kopiert!",
    EXTRA_DOWNLOAD: "Als Datei herunterladen",
  },
  print: {
    TITLE: "Drucken",
  },
  profile: {
    TITLE: "Profil",
    LANGUAGE: "Sprache",
    theme: {
      TITLE: "Darstellung",
      COLOR_SCHEME: "Farbschema",
      DARK_MODE: "Dunkel",
      LIGHT_MODE: "Hell",
    },
  },
  deviceManager: {
    TITLE: "Gerät",
    AUTO_CONNECT: "Automatisch Verbinden",
    CONNECT: "Verbinden",
    DISCONNECT: "Entfernen",
    TERMINAL: "Konsole",
    APPLY_SETTINGS: "Änderungen auf das Gerät brennen",
    NO_DEVICE: "Kein Gerät verbunden",
    LINUX_PERMISSIONS:
      "Auf den meisten Linux-basierten Systemen müssen zuerst Berechtigungen angepasst werden.",
    bootMenu: {
      TITLE: "Bootmenü",
      REBOOT: "Neustarten",
      BOOTLOADER: "Bootloader",
      POWER_WARNING: "Um vom Bootloader aus neu zu starten muss das Gerät neu verbunden werden.",
    },
  },
  browserWarning: {
    TITLE: "Warnung",
    INFO_SERIAL_PREFIX:
      "Der aktuell genutzte Browser wird aufgrund der speziellen Voraussetzung für Kommunikation über die ",
    INFO_SERIAL_INFIX: "serielle Schnittstelle",
    INFO_SERIAL_SUFFIX: " nicht unterstützt.",
    INFO_BROWSER_PREFIX:
      "Auch wenn alle Chromium-basieren Desktop Browser diese Voraussetzung grundsätzlich erfüllen, haben einige Browser ",
    INFO_BROWSER_INFIX: "wie zum Beispiel Brave",
    INFO_BROWSER_SUFFIX: " sich bewusst dazu entschieden die API zu deaktivieren.",
    DOWNLOAD_APP:
      "Chrome oder Edge werden offiziell unterstützt, andere Browser könnten aber auch funktionieren.",
  },
  changes: {
    TITLE: "Änderungen importieren",
    ALL_CHANGES: "Alle Änderungen",
    layout: {
      TITLE: "{0} veränderte Belegung{{:|en}}",
      LAYER: "{changes} Belegung{{changes:|en}} in Ebene {layer} ändern",
    },
    settings: {
      TITLE: "{0} Einstellung{{|en}} anpassen",
    },
    chords: {
      TITLE: "{0} Akkorde",
      NEW_CHORDS: "{0} neue Akkord{{|e}} hinzufügen",
      CHANGED_CHORDS: "{0} Akkord{{|e}} ersetzen",
      DELETED_CHORDS: "{0} Akkord{{|e}} zum löschen markieren",
    },
  },
  configure: {
    chords: {
      TITLE: "Akkorde",
      HOLD_KEYS: "Akkord halten",
      NEW_CHORD: "Neuer Akkord",
      DUPLICATE: "Akkord existiert bereits",
      search: {
        PLACEHOLDER: "{0} Akkord{{|e}} durchsuchen",
        NO_RESULTS: "Keine Ergebnisse",
      },
      conflict: {
        TITLE: "Akkordkonflikt",
        DESCRIPTION:
          "Der Akkord {0} würde einen bereits existierenden Akkord überschreiben. Wirklich fortfahren?",
        CONFIRM: "Überschreiben",
        ABORT: "Überspringen",
      },
      TRY_TYPING: "Versuche hier zu tippen",
    },
    layout: {
      TITLE: "Layout",
    },
    settings: {
      TITLE: "Einstellungen",
    },
  },
  plugin: {
    editor: {
      RUN: "Ausführen",
    },
  },
} satisfies Translation

export default de
