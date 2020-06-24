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

Ihr aktuelles Artikelnummern Schema, weitere Informationen hierzu entnehmen Sie bitte dem zugehörigen Handbucheintrag.

Designer Version
======================================

Version des Designers die geladen werden soll, das Feld schlägt automatisch die neuesten Versionen vor die zur Verfügung
stehen und zeigt diese an. Wählen Sie bei einer Neuinstallation die höchste Versionsnummer.

Druckart Auswahlmodus
======================================

Legt fest wie Druckarten vom Benutzer gewählt werden können, für jedes einzelne Objekt oder nur pro Ansicht oder Produkt.
Bitte beachten Sie dass im ``Nach Objekt`` Modus das Objekt (Text, Motiv) angewählt werden muss um die Druckart zu wechseln,
dies führt häufig zu Missverständnissen.

Preise nicht überschreiben
======================================

Wenn diese Option aktiv ist werden immer die Preise aus dem Shopsystem verwendet.
Für die korrekte Preisanzeige im Designer ist dann das Shopsystem verantwortlich.

Debug Modus
===================

Aktiviert Entwickler Optionen, dadurch ist es möglich die `VueJS Entwickler Tools <https://github.com/vuejs/vue-devtools>`__ zu verwenden.

.. Attention::
   Verwenden Sie den Debug Modus niemals im Live Betrieb!

Produkte / Motive pro Seite
======================================

Gibt an wie viele Produkte bzw. Motive pro Seite in den Listen im Designer dargestellt werden.

Synchronisierung
************************

Mit diesen Einstellungen legen Sie fest wie das Oxid Feld ``Name der Auswahl`` beim synchronisieren befüllt wird.
Mehr Informationen zu diesem Feld entnehmen Sie bitte dem `Oxid eShop Handbucheintrag <https://docs.oxid-esales.com/eshop/de/6.2/einrichtung/artikel/registerkarte-varianten.html>`__

Daten Mapping
************************
Geben Sie hier Daten im Format ``oxidfeld => variable`` ein, im Designer Template können Sie auf diese Daten via ``$shop("variable")`` zugreifen.
So können Sie beliebige Oxid Datenbankfelder des Artikels im Designer verwenden z.B. ``oxean => ean`` macht die EAN im Designer Template
als ``$shop("ean")`` verfügbar.

SEO
************
Legen Sie hier die gewünschten Meta Tags für den Designer fest. Die Meta Angaben für Logo Kategorien geben Sie im Format ``kategorieid => Wert`` an.

.. code-block:: php
    :caption: Beispiel für Logo Kategorie Meta

    1001 => Meine SEO description
    1002 => Eine andere Beschreibung
    1004 => Noch mehr

Die ID's der einzelnen Kategorien lesen Sie am einfachsten aus der URL der Logoliste ab, diese finden Sie unter https://www.ihr-shop.de/index.php?cl=designer_logos

Laufzettel
************
Hier finden Sie verschiedene Einstellungen mit denen Sie die Ausgabe des Laufzettels zu den Bestellungen anpassen können.
