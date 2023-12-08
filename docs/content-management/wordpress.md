---
layout: default
title: WordPress
parent: Content Management
nav_order: 1
permalink: content-management/wordpress
---

# Plugins und Themes für WordPress
{: .no_toc }

Dieser Leitfaden erklärt, wie du WordPress lokal installierst und Plugins und Themes separat mit Asset-Bundlern entwickeln, sowie den Build-Prozess automatisieren kannst.
{: .fs-6 .fw-300 }

## Inhalt
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Voraussetzungen

TBA

### WordPress-CLI

Als letztes installiere dir bitte die [WordPress Cli](https://wp-cli.org/#using), mit der wir über das Terminal super schnell neue WordPress-Installationen einrichten können.

```zsh
$ brew install wp-cli
```

## WordPress einrichten

### Valet konfigurieren

Erstelle dir nun einen neuen Projektordner für die neue WordPress-Installation und konfiguriere dieses anschließend für diese Valet.

```zsh
$ mkdir wordpress-demo && cd wordpress-demo
$ echo "php=php@8.1" > .valetrc
$ valet use
$ valet link
```

Valet verwendet mit der `.valetrc` fortan PHP 8.1 und stellt eine Website nun unter http://wordpress-demo.test zur Verfügung. Die eingerichteten Verzeichnisse/Domains kannst du dir mit `valet links` anzeigen lassen.

### WordPress installieren

Lege die Datenbank für die WordPress-Installation an:

```shh
$ mysql -u root -e "create database wordpress-demo;"
```

Lade nun WordPress herunter, konfiguriere und installiere es:

```zsh
$ wp core download --locale=de_DE_formal
$ wp config create --dbname=wordpress-demo --dbuser=root --dbpass=""
$ wp config set WP_DEBUG true --raw
$ wp config set SCRIPT_DEBUG true --raw
$ chmod 600 wp-config.php
$ wp core install --url=wordpress-demo.test --title="WordPress Demo" --admin_user=admin --admin_password=password --admin_email=admin@example.com --skip-email
$ cd wp-content
$ mkdir uploads
$ chgrp web uploads/
$ chmod 775 uploads/
```

Mit dem Benutzernamen **admin** und dem Passwort **password** kannst du dich unter [http://wordpress-demo.test/wp-login.php](http://wordpress-demo.test/wp-login.php) anmelden.

### Lokales Theme/Plugin

Möchtest du ein lokal entwickeltes Theme oder Plugin verwenden, dass über ein eigenes Git-Repository verfügt, dann erstelle in der Wordpress-Installation einen Symlink zum entsprechenden Verzeichnis

```zsh
$ cd ~/Projects/wordpress-demo
$ ln -s ~/Projects/wordpress/wordpress-plugins/wp_roiPlugin/build wp-content/plugins/wp_roiPlugin
```