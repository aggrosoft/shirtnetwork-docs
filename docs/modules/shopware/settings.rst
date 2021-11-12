#############
Konfiguration
#############

Das Modul kommt mit verschiedenen Einstellungen die vor der Verwendung konfiguriert werden müssen.

Zugangsdaten
************

Geben Sie hier Ihren Shirtnetwork Benutzernamen und das Passwort ein, nachdem Sie die Einstellungen speichern wird
automatisch die zugehörige Benutzer ID ermittelt.

Backend
************

Geben Sie hier die URLs zu Ihrem :doc:`Backend Server </tools/backend>` ein. :guilabel:`https://backend.mein-shop.de/files`
für ``Upload Server URL`` und :guilabel:`https://backend.mein-shop.de` für ``Config Server URL``.

``EPS Tool Projekt`` enthält den Namen des :doc:`EPS Tool</tools/epstool>` Projekts den Sie festgelegt haben.

.. Attention::
   Achten Sie auf die genaue Schreibweise des Projektnamens, inklusive aller Leerzeichen und der Groß- und Kleinschreibung


Einstellungen
************************

Start Artikelnummer
===================

Gültige Artikelnummer die geladen werden soll wenn der Designer ohne eine Artikelnummer aufgerufen wird. Achten Sie unbedingt
darauf dass dieser Artikel aktiv ist und dem Shop zugewiesen wurde.

Artikelnummern Schema
======================================

..hint::

   Der Shopware Connector unterstützt derzeit nur das Standard Artikelnummern Schema

Ihr aktuelles Artikelnummern Schema, weitere Informationen hierzu entnehmen Sie bitte dem zugehörigen Handbucheintrag.

Designer Version
======================================

Version des Designers die geladen werden soll, das Feld schlägt automatisch die neuesten Versionen vor die zur Verfügung
stehen und zeigt diese an. Wählen Sie bei einer Neuinstallation die höchste Versionsnummer.

Backend Server Typ
======================================

Wählen Sie hier den passenden Backend Server Typ aus, jenachdem welchen Server Sie verwenden.

Druckart Modus
======================================

Legt fest wie Druckarten vom Benutzer gewählt werden können, für jedes einzelne Objekt oder nur pro Ansicht oder Produkt.
Bitte beachten Sie dass im ``Nach Objekt`` Modus das Objekt (Text, Motiv) angewählt werden muss um die Druckart zu wechseln,
dies führt häufig zu Missverständnissen.

Druckbereich begrenzen
======================================

Wenn aktiviert werden die Objekte auf den Druckbereich begrenzt.


CSS laden
======================================

Lädt die Bootstrap CSS Bibliothek nach, nur notwendig wenn Sie ein Template verwenden dass nicht auf Bootstrap 4 basiert.


Debug Modus
===================

Aktiviert Entwickler Optionen, dadurch ist es möglich die `VueJS Entwickler Tools <https://github.com/vuejs/vue-devtools>`__ zu verwenden.

.. Attention::
   Verwenden Sie den Debug Modus niemals im Live Betrieb!

SEO
************
Legen Sie hier die SEO Url und die gewünschten Meta Tags für den Designer fest.

Synchronisierung
************************

Mit diesen Einstellungen legen Sie fest welche Eigenschaften bei der Synchronisation befüllt und verwendet werden.
Außerdem können Sie den Steuersatz und die Verkaufskanäle für die Synchronisation festlegen.