##################
Oxid eShop
##################

Installation
************

Die Installation des Moduls erfolgt via composer, für weitergehende Informationen zu Modulen im Oxid eShop rufen Sie bitte
das `Handbuch des Shop Systems <https://docs.oxid-esales.com/de/>`__ auf.

Das Modulpaket wird über unser hausinternes Composer Repository verteilt, passen Sie die Datei composer.json im Shop Stammverzeichnis
wie folgt an:

.. code-block:: json

    {
      "repositories": [{
        "type": "composer",
        "url": "https://packages.aggrosoft.de"
      }]
    }


Anschließend kann das Modul per composer installiert werden

.. code-block:: bash

    composer require shirtnetwork/designer-oxid

Nach der Installation kann das Modul im Oxid eShop Backend aktiviert werden.

Konfiguration
*************

Das Modul kommt mit verschiedenen Einstellungen die vor der Verwendung konfiguriert werden müssen.

Zugangsdaten
============

Geben Sie hier Ihren Shirtnetwork Benutzernamen und das Passwort ein, nachdem Sie die Einstellungen speichern wird
automatisch die zugehörige Benutzer ID ermittelt.

Backend
============

Geben Sie hier die URLs zu Ihrem :doc:`Backend Server </tools/backend>` ein. :guilabel:`https://backend.mein-shop.de/files`
für ``Upload Server URL`` und :guilabel:`https://backend.mein-shop.de` für ``Config Server URL``.

``EPS Tool Projekt`` enthält den Namen des :doc:`EPS Tool</tools/epstool>` Projekts den Sie festgelegt haben.

.. Attention::
   Achten Sie auf die genaue Schreibweise des Projektnamens, inklusive aller Leerzeichen und der Groß- und Kleinschreibung


Einstellungen
========================

Start Artikelnummer
-------------------

Gültige Artikelnummer die geladen werden soll wenn der Designer ohne eine Artikelnummer aufgerufen wird. Achten Sie unbedingt
darauf dass dieser Artikel aktiv ist und dem Shop zugewiesen wurde.

Artikelnummern Schema
---------------------

Ihr aktuelles Artikelnummern Schema, weitere Informationen hierzu entnehmen Sie bitte dem zugehörigen Handbucheintrag.

Designer Version
---------------------

Version des Designers die geladen werden soll, das Feld schlägt automatisch die neuesten Versionen vor die zur Verfügung
stehen und zeigt diese an. Wählen Sie bei einer Neuinstallation die höchste Versionsnummer.

Druckart Auswahlmodus
---------------------

Legt fest wie Druckarten vom Benutzer gewählt werden können, für jedes einzelne Objekt oder nur pro Ansicht oder Produkt.
Bitte beachten Sie dass im ``Nach Objekt`` Modus das