---
layout: default
title: Package Manager
parent: Voraussetzungen
nav_order: 1
permalink: prerequisits/package-manager
---

# Package Manager
{: .no_toc }

Verwalte mit Package Managern Softwarepakete und Bibliotheken von deinen Website-Projekten.
{: .fs-6 .fw-300 }

Für einfache, statische Websites wird nur ein Webserver wie Apache oder Nginx benötigt, um diese im Browser anzuzeigen. Für die Entwicklung von modernen Websites mit komplexen Anwendungen, Bibliotheken und Abhängigkeiten werden jedoch Laufzeitumgebungen wie Node.js und Package Manager wie npm, yarn oder pnpm benötigt.

Package Manager werden über die Kommandozeile, bei macOS und Linux über das Terminal sowie bei Windows über die PowerShell verwendet. Wenn du noch nie mit der Kommandozeile gearbeitet hast, lese dir unbedingt die [Einführung](/command-line) durch.

## Inhalt
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Installation von Node.js

Node.js ist die Basis für die Installation von npm, yarn und pnpm. Das unterscheidet sich aber leicht, je nach Betriebssystem.

### macOS

Die einfachste Möglichkeit, Node.js zu installieren, ist über [Homebrew](https://nodejs.org/de), einem Paketmanager für macOS. Führe dazu den folgenden Befehl in der Kommandozeile aus:

```shell
# Installation von Node.js
$ brew install node
```

Alternativ kannst du Node.js auch manuell installieren. Lade dir dazu den [Node.js-Installer](https://nodejs.org/en/download/prebuilt-installer) in der LTS-Version (Long Term Support) herunter und führe die Installation durch.

Überprüfe bitte nun, ob die [Installation erfolgreich](problems) war.

```shell
# Überprüfung der Installation von Node.js
$ node -v
v20.18.0
```

### Windows

Die einfachste Möglichkeit, Node.js zu installieren, ist über das Installationspaket. Lade dir jetzt Node.js in der LTS-Version (Long Term Support) von der offiziellen [Node.js-Website](https://nodejs.org/en/download/prebuilt-installer) herunter und installiere es. Während der Installation sind ein paar Dinge zu beachten:

Lasse die folgende Vorauswahl unverändert und klicke auf <kbd>Next</kbd>.

![Node.js Installer](/assets/images/nodejs-installer.png)

Wähle die Checkbox aus, um weitere Tools wie [Chocolatey](h#homebrew-und-chocolatey) zu installieren und klicke auf <kbd>Next</kbd>. Diese können bei manchen Anwendungen hilfreich sein.

![Node.js Installer](/assets/images/nodejs-tools.png)

Nach der erfolgreichen Installation öffnet sich das Terminal zur Installation der zuvor ausgewählten Tools. Starte die Installation durch drücken einer beliebigen Taste.

![Node.js Installer](/assets/images/nodejs-command.png)

Lass dich von den Statusinformationen und Warnungen im Installationsprozess nicht irritieren und gebe der Installation ein paar Minuten Zeit, bevor du das Fenster schließt.

Öffne nun die PowerShell-Fenster als Administrator und gebe nacheinander die folgenden Befehle ein, um zu überprüfen, ob die Installation erfolgreich war. Das sollte dir jeweils eine Versionsnummer ausgeben.

```shell
# Überprüfung der Installation von Node.js
$ node -v
v20.18.0

# Überprüfung der Installation von npm
$ npm -v
10.8.2
```

Das sieht in etwa so aus:

![Foobar](/assets/images/windows-check-node.png)

Folge als nächstes Bitte dem Abschnitt zur Einrichtung von [Corepack](#corepack).

## Corepack

Noch immer werden Package Manager wie npm, yarn oder pnpm von einigen EntwicklerInnen global installiert, was du Inkompatibilitäten in den einzelnen Projekten führen kann. Hier kommt das mit Node.js mitgelieferte Script [Corepack](https://github.com/nodejs/corepack#-corepack) ins Spiel. Es ermöglicht dir, den Package Manager und dessen Version auf Projektbasis festzulegen, sodass Projekte unabhängig voneinander betrieben werden können.

Wenn du Node.js installiert hast, ist auch Corepack bereits installiert. Um es nutzen zu können, muss es allerdings noch aktiviert werden. Führe dazu den folgenden Befehl in der Kommandozeile aus:

```shell
$ corepack enable
```

Nun ist dein Computer bereit, um mit Package Managern zu arbeiten. Das einzige, was du noch installieren solltest, ist [Git](#git)

## Git

[Git](https://git-scm.com/) ist ein Versionskontrollsystem, das verwendet wird, um Änderungen an Codeprojekten zu verfolgen, Zusammenarbeit zu ermöglichen und verschiedene Versionen des Codes zu verwalten. Es wird aber auch dazu genutzt, um Softwarepakete und Bibliotheken von Repositorys zu installieren.

### macOS

Git kann auf mehreren Wegen installiert werden. Die wohl einfachste Methode ist über [Homebrew](https://brew.sh/), einem Paketmanager für macOS. Führe dazu den folgenden Befehl in der Kommandozeile aus:

```shell
# Installation von Git
$ brew install git
```

Hast du Homebrew noch nicht installiert, findest du weiter unten eine [Installationsanleitung](#homebrew-und-chocolatey).

Alternativ kann Git auch über die von Apple bereitsgestellten Developer Tools installiert werden:

```shell
$ xcode-select --install
```

Und falls alle Stricke reißen, kannst du Git auch manuell installieren. Lade dir dazu den [Git-Installer](https://git-scm.com/download/mac) herunter und führe die Installation durch.

### Windows

Ähnlich wie unter macOS gibt es auch für Windows mehrere Möglichkeiten, Git zu installieren. Die einfachste Methode ist die über Chocolatey, das du mit Node.js bereits installiert hast. Führe zur Installation von Git den folgenden Befehl in der PowerShell aus:

```shell
# Installation von Git
$ choco install git
```

Alternativ kannst du Git auch manuell installieren. Lade dir Git von der offiziellen [Git-Website](https://git-scm.com/download/win) herunter und installiere es.

Wenn du gefragt wirst, welcher Standard-Editor verwendet werden soll, wähle `Use Visual Studio Code as Git's default editor` aus, sofern du [Visual Studio Code](https://code.visualstudio.com/) zuvor bereits installiert hast. Wähle bei „Adjusting the name of initial branch“ die Option `Override the default branch name for new repositories`. Alles andere kannst du so lassen, wie vorgeschlagen.

Überprüfe bitte nun, ob die [Installation erfolgreich](problems) war.

## Homebrew und Chocolatey

[Homebrew](https://brew.sh/) ist ein Paketmanager für macOS, [Chocolatey](https://chocolatey.org/) für Windows. Beide ermöglichen dir die Installation von Softwarepaketen und Bibliotheken über die Kommandozeile.

Wenn du Node.js unter Windows bereits wie oben beschrieben installiert hast, hast du auch Chocolatey installiert. Überprüfe das mit dem folgenden Befehl:

```shell
# Überprüfung der Installation von Chocolatey
$ choco --version
1.3.1
```

Wenn du Homebrew unter macOS noch nicht installiert hast, kannst du das mit dem folgenden Befehl nachholen:

```shell
# Installation von Homebrew
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Überprüfe die Installation von Homebrew mit dem folgenden Befehl:

```shell
# Überprüfung der Installation von Homebrew
$ brew --version
Homebrew 4.1.24
```
