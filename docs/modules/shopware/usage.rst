#############
Verwendung
#############

Artikel synchronisieren
=======================

Damit Artikel in den Warenkorb gelegt werden können müssen diese mit einer :doc:`passenden Artikelnummer </modules/general/skuscheme>` in Ihrem Shop existieren.
Um doppelte Datenpflege zu vermeiden ist es möglich Artikel vom HBE in Ihren Shop zu übernehmen.
Bei diesem Vorgang wird das aktuelle :doc:`Artikelnummern Schema </modules/general/skuscheme>` und die :doc:`Einstellungen zur Synchronisierung </modules/shopware/settings>` beachtet.

Sie finden die Synchronisierung im Admin Bereich unter ``Kataloge => Shirtnetwork Synchronisation``. Wählen Sie den gewünschten
Artikel aus und drücken Sie :guilabel:`Artikel synchronisieren` um den Artikel anzulegen.

.. Attention::
    Sollte der Artikel bereits vorher synchronisiert worden sein werden eventuelle Änderungen überschrieben.

Verlinkungen
==================

Designer
--------

Zeigt den eigentlichen Shirtnetwork Designer an. Den Seo Link legen Sie in den Plugin Einstellungen fest.

Folgende zusätzliche Parameter können wahlweise übergeben werden um beliebige Daten vorzugeben:

============== ====================================================================================================
Parameter      Funktion
============== ====================================================================================================
``artnr``      Artikelnummer des Hauptartikels
``vartnr``     Artikelnummer der Variante
``sartnr``     Artikelnummer der Größe
``config``     ID einer Konfiguration die auf dem Backend Server liegt (nicht kompatibel mit anderen Parametern)
``text``       Start Text
``logo``       ID eines Logos
``overrides``  Alternativer Template Override
``custom``     Alternatives zusätzliches Javascript
``keep``       Wenn Wert = 1 dann werden bereits gestaltete Inhalte des Kunden nicht gelöscht
``plain``      Wenn Wert = 1 aktiviert den Popup Modus (nur der Designer wird gezeigt, ohne Shop layout)
============== ====================================================================================================