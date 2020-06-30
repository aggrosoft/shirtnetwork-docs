#####################
Ansichten
#####################

Eine Variante kann beliebige viele Ansichten beinhalten die gestaltet werden können.

Eingabefelder
=============

Titel
-----

Angezeigter Titel dieser Ansicht z.B. :guilabel:`Vorne` oder :guilabel:`Links`

Schlüssel
---------

Der Schlüssel der Ansicht wird verwendet um die vom Kunden gestalteten Elemente zwischen
den Produkten zu übernehmen. Der Schlüssel kann alphanumerisch sein, wir raten jedoch
dazu entweder mit Großbuchstaben oder Zahlen ab 0 zu arbeiten.

Damit Elemente beim Produkt oder Variantenwechsel übernommen werden müssen die Ansichtenschlüssel
gleich sein. Legen Sie also zum Beispiel ein rotes und ein blaues Shirt an sollten die Frontansichten
alle den gleichen Schlüssel haben, die Rückansichten etc.

Beispiele
*********

========== ========== ========== ==========
Produkt    Variante   Ansicht    Schlüssel
========== ========== ========== ==========
T-Shirt    Blau       Vorne      A
T-Shirt    Blau       Hinten     B
T-Shirt    Rot        Vorne      A
T-Shirt    Rot        Hinten     B
Pullover   Blau       Vorne      A
Pullover   Blau       Hinten     B
Tasse      Weiß       Vorne      A
Tasse      Gelb       Vorne      A
Tasse      Gelb       Boden      C
========== ========== ========== ==========

Sortierung
----------

Die Ansichten werden anhand dieser Sortierung aufsteigend angezeigt.

Preis
-----

Aufpreis wenn diese Ansicht gestaltet wurde, wird nicht berechnet wenn keine Objekte auf die Ansicht gelegt wurden.

Nicht gestaltbar
----------------

Wenn aktiviert kann diese Ansicht vom Kunden angesehen aber nicht gestaltet werden.

Upload deaktiviert
------------------

Verbietet Kundenuploads für die Ansicht.

Bild
----

Ansichtsbild des Produktes, dieses Bild wird dem Kunden zur Gestaltung angezeigt.

Maske
-----

Wenn bestimmte Teilbereiche der Gestaltung auf der Ansicht nicht angezeigt werden sollen,
können Sie mit einer sog. Alphamaske arbeiten. Legen Sie hierzu eine PNG Datei mit transparentem
Hintergrund an die exakt so groß ist wie das Ansichtsbild. Nur dort wo sich Pixel befinden
wird die Gestaltung des Kunden angezeigt.

Icon
----

Kleines Vorschaubild, wenn nicht gesetzt wird das Ansichtenbild verwendet

Overlay
-------

Überlagerungsbild das über der Gestaltung liegt, aktuell nicht verwendet.

Erlaubte Druckarten
-------------------

Bestimmte für diese Ansicht erlaubte Druckarten.
Wenn Sie keine erlaubten Druckarten wählen sind alle Druckarten erlaubt.


Druckbereich
=============

Der Druckbereich bestimmt in welchem Bereich des Produkts Objekte abgelegt werden dürfen.
Die Beschränkung der Objekte auf den Druckbereich ist optional, trotzdem muss er definiert
werden um die Druckdaten im richtigen Maß auszugeben.

Der Druckbereich lässt sich einfach mit der Maus verändern oder verschieben, außerdem
können Sie die Werte manuell anpassen.

Wenn gewünscht können Sie das Seitenverhältnis vorher festlegen, hierdurch wird sicher gestellt
dass die Druckbereiche z.B. in einem DIN Format (DIN A4 etc.) oder genau rechteckig gezogen werden.

Nachdem Sie den optischen Druckbereich festgelegt haben geben Sie bitte entsprechend die Breite oder Höhe
in cm an, der andere Wert wird automatisch aus dem Verhältnis zum optischen Druckbereich ermittelt.

Messen Sie den optischen Druckbereich möglichst genau auf dem Produkt ab und tragen Sie den Wert entsprechend ein.
Wenn Ihnen das Produkt nicht vorliegt schätzen Sie den Wert bitte möglichst genau.

.. Attention::
   Die eingegebenen cm Größen bestimmen das Ausgabeformat der Druckdatei im `EPS Tool </tools/epstool>`__


DIN Formate
-----------

Im folgenden die DIN Formate als Referenz, die Druckbereiche können auch in nicht DIN Formaten definiert werden.

=========== ============= =============
Format      Breite in cm  Höhe in cm
=========== ============= =============
DIN A0      84,0          118,9
DIN A1      59,4          84,0
DIN A2      42,0          59,4
DIN A3      29,7          42,0
DIN A4      21,0          29,7
DIN A5      14,8          21,0
DIN A6      10,5          14,8
DIN A7      7,40          10,5
DIN A8      5,20          7,40
=========== ============= =============