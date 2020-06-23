Backend Server
==============

Der Backend Server speichert die Kundenuploads und Konfigurationen, außerdem stellt er die Schriften für den Designer
bereit. Detailinformationen zur Software entnehmen Sie bitte unserem zugehörigen `Github Repository <https://github.com/aggrosoft/designer-backend-skeleton>`__.

Installation
------------

Für die Installation des Backend Servers ist `git <https://git-scm.com/>`__ und `Composer <https://getcomposer.org/doc/00-intro.md>`__ notwendig,
installieren zunächst `git <https://git-scm.com/>`__ und `Composer <https://getcomposer.org/doc/00-intro.md>`__ nach Anleitung auf der Website.

Bauen Sie eine SSH Verbindung zu Ihrem Server auf und führen Sie folgende Befehle nacheinander aus:

.. code-block:: bash

    git clone https://github.com/aggrosoft/designer-backend-skeleton.git
    cd designer-backend-skeleton
    composer install
    cp cfg.inc.sample.php cfg.inc.php

Passen Sie die Datei ``cfg.inc.php`` nach Ihren Wünschen an, wir raten dazu mindestens die Einstellung ``auth => users``
zu setzen. Hierbei handelt es sich um Benutzernamen und Kennwort um die Einstellungen des Servers zu verändern.

Erstellen Sie nun eine Subdomain die auf den Installationsordner des Backend Servers zeigt e.g. ``https://backend.mein-shop.de``

Wenn die Subdomain fertig eingerichtet ist können Sie unter ``https://backend.mein-shop.de/settings/fonts`` die Schriftarten
konfigurieren. Anschließend ist die Software einsatzbereit.

Update
------

Aktualisierungen werden ebenfalls per composer vorgenommen, führen Sie hierfür einfach folgenden Befehl im Verzeichnis aus:

.. code-block:: bash

    composer update

