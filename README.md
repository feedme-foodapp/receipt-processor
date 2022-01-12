# Receipt Processor

<br/>

Als **Receipt Processor** wird das erste Feature der Applikation **feedMe** bezeichnet, das den grundlegenden Prozess der Extraktion von relevanten Informationen, 
welche auf dem Kassenbeleg eines Lebensmittelgeschäfts aufgelistet sind, mithilfe der Methoden von **OCR (Optical Character Recognition)** umfasst. Das Feature soll
den Ablauf der Digitalisierung des Kassenbons vereinfachen, um beispielsweise die Aufzeichnung und Verfolgung, sprich das Management der erworbenen Lebensmittel zu 
erleichtern und der manuellen Eingabe entgegenzuwirken.

Das Feature lässt sich dabei in die folgenden Prozesse unterteilen:

- _Dokumenterfassung_
- _Vorverarbeitung (Pre-processing)_
- _Texterkennung (Character Recognition)_
- _Informationsextraktion (Information Extraction)_
- _Datenweiterverarbeitung_

<br/>

**<ins>Dokumenterfassung:</ins>**

Allgemein soll der Benutzer in der Lage sein, mithilfe der Kamera eines beliebigen Endgerätes, ein Bild von dem gewünschten Kassenbeleg zu machen und hochzuladen,
um den Beleg entsprechend anhand der Applikation weiter verarbeiten zu können. Für das Erfassen des Dokuments wird das Plugin **Camera** von **Capacitor** verwendet,
welches folglich eine Schnittstelle zwischen Hardware und Software bereitstellt:

https://capacitorjs.com/docs/apis/camera

<br/>

<ins>Installation:</ins>

```bash
$ npm install @capacitor/camera
```

<br/>

<ins>Beispiel:</ins>

```TSX
import { Camera, CameraResultType } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 100,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });
};
```

<br/>

Anschließend wird **image** als **State** im **Redux-Store** gespeichert, um folglich für alle Komponenten innerhalb der Anwendung verfügbar zu sein:

<br/>

```TSX
//TODO
```
