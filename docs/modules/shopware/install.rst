##################
Installation
##################

.. Hint::
   Das Shirtnetwork Plugin ist nur mit Shopware ab Version 6.2 kompatibel, frühere Versionen werden nicht unterstützt


Shopware benötigt für die Installation von Plugins via composer die `composer-installer-extender` Erweiterung.
Es wird ein nicht standardmäßiges Installationsverzeichnis für unsere Plugins aktivieren,
das custom/plugins ist. Standardmäßig installiert Composer alles im Verzeichnis vendor/.

Installieren Sie die Erweiterung zunächst mit dem folgenden Befehl:

.. code-block:: bash

    composer require oomphinc/composer-installers-extender:~2.0

Konfigurieren Sie anschließend das custom für das Shirtnetwork Plugin Verzeichnis mit folgendem Befehl:

.. code-block:: bash

    composer config --json extra.installer-paths '{"custom/plugins/{$name}": ["shirtnetwork/designer-shopware"]}'


Das eigentliche Plugin wird über unser hausinternes Composer Repository verteilt,
fügen Sie das Repository mit folgendem Befehl hinzu

.. code-block:: bash

    composer config repositories.aggrosoft '{"type": "composer", "url": "https://packages.aggrosoft.de"}'

Anschließend kann das Modul per composer installiert werden

.. code-block:: bash

    composer require shirtnetwork/designer-shopware --no-scripts

Schließen Sie die Installation mit folgendem Befehl ab

.. code-block:: bash

    ./bin/console plugin:refresh

Nach der Installation kann das Modul im Shopware Backend aktiviert werden.

Um das Plugin zu aktualisieren führen Sie einfach folgenden Befehl aus

.. code-block:: bash

    composer update shirtnetwork/designer-shopware --no-scripts
