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

Diese werden in der folgenden Abbildung veranschaulicht:

<br/>

<div align="center">
  <img src="./documentation/diagrams/feature1_process.svg"/>
</div>

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
import { 
  Camera, 
  CameraResultType 
} from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 100,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });
};
```

<br/>

Anschließend wird **image** als **State** im **Redux-Store** gespeichert, um folglich für alle Komponenten verfügbar zu sein:

```TSX
import {
  useDispatch
} from 'react-redux';

import {
  setReceipt
} from 'src/redux/features/receiptSlice';

const takePicture = async () => {
  try {
    const image = await Camera.getPhoto({
      quality: 100,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    
    if(image.dataUrl) {
      dispatch(setReceipt(image));
    }
  } catch(error) {
      console.log(error);
  }
};
```

<br/>

**<ins>Ausnahmen bestätigen die Regel:</ins>**

Grundsätzlich gestaltet sich das Hochladen eines Fotos als eher unproblematisch. Für die Dokumenterfassung spielt allerdings ebenso die **Validät des Fotos**, sprich die
Überprüfung, ob auch tatsächlich ein Kassenbeleg hochgeladen wurde. Hierfür gibt es mindestens zwei verschiedene Möglichkeiten diese Ausnahmen entsprechend abzufangen:

- Beim Hochladen des Fotos wird ein Mechanismus definiert, der Kassenbelege anhand ihrer Struktur (oder Merkmale) erkennt
- Bei der Extraktion selbst wird erkannt, dass sich keine validen Informationen auf dem hochgeladenen Foto befinden

Bei der zweiten Möglichkeit ist der allgemeine Prozess allerdings schon weit fortgeschritten, wodurch der Benutzer erst recht spät im Verfahren darüber informiert wird,

