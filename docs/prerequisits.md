# Voraussetzungen zur Nutzung des Starterkits

Das [Starterkit](../README.md) besteht aus einem Repository (Repositorium von Dateien) auf GitHub. Den Download kannst du automatisiert über Git starten oder manuell mit dem ZIP-Archiv.

Den Betrieb erledigen anschließend sogennante Paketmanager – wir verwenden Node und yarn - die neben Git ebenfalls auf deinen Computer installiert werden müssen.

## Installation

1. Lade dir die aktuelle Version von [Node.js](https://nodejs.org/de) herunter und starte die Installation.\
   _Windows-User sollten die Option „Automatically install necessary tools“ unter „Tools for native modules“ aktivieren._
2. Überprüfe nach erfolgter Installation die Funktion durch Abruf der Versionsnummer im Terminal (Linux, Mac) bzw. PowerShell (Windows).

```ahell
$ npm -v
9.5.1
```

3. Installiere nun nacheinander yarn und Git.

### Windows

> Unter Windows musst du die Ausführungsrichtlinien ändern, damit Skripte wie yarn ausgeführt werden dürfen. Gehe dazu in die Einstellungen unter **Datenschutz und Sicherheit → Entwickler → PowerShell** und bestätige dies mit einem Klick auf den Button **Anwenden**.

```≈hell
$ npm install -g yarn
$ yarn -v
1.22.19
```

### MacOS

Auf dem Mac gibt es zwei Möglichkeiten, yarn zu installieren. Über das Terminal:

```shell
$ sudo npm install -g yarn
$ yarn -v
1.22.19
```

Oder über den MacOS-eignenen Paketmanager [Homebrew](https://git-scm.com/download/mac)

Oder über den

1. Lade dir den [Node.js-Installer](https://nodejs.org/en/download/) für dein System runter und führe die Installation durch.\
2. Installiere yarn und kontrolliere die erfolgreiche Installation. durch folgende Befehle (Ohne `$`):

```≈hell
# Teste die Installation von Node:
$ npm -v

# Installiere yarn und teste es:
$ sudo npm install -g yarn
$ yarn -v
```

## Installation von git

Installiere dir optional Git, wenn du zukünftig noch schneller Websites mit diesem Starterkit aufsetzen möchtest. Nutze bei Windows bitte den [Installer](https://git-scm.com/download/win) und beim Mac den „Umweg“ über [Homebrew](https://git-scm.com/download/mac). Alternativ kannst du im Mac-Terminal auch `git` eingeben und die vorgeschlagene Installation der Xcode-Essentials durchführen.

sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}

### Installation ohne Git

Solltest du Git nicht verwenden (können), kannst du die Dateien auch als [ZIP-Datei](https://github.com/HAWK-GT1191/gt1191-starterkit/archive/refs/heads/main.zip) herunterladen. Enpacke es anschließend und benenne das Verzeichnis `gt1191-starterkit-main` um. Führe dann die o.g. Installation der Abhängigkeiten durch.
