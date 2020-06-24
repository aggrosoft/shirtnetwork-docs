##################
Installation
##################

.. Hint::
   Das Shirtnetwork Modul ist nur mit Oxid eShop ab Version 6 kompatibel, frühere Versionen werden nicht unterstützt

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