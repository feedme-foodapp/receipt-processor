# Receipt Processor

<br/>

Als **Receipt Processor** wird das Feature 1 der Applikation **feedMe** bezeichnet, welches den grundlegenden Prozess der Extraktion von relevanten Informationen,
die auf dem Kassenbeleg eines Lebensmittelgeschäfts aufgelistet werden, mithilfe der Methoden von **OCR (Optical Character Recognition)** umfasst. Das Feature soll 
den Ablauf der Aufzeichnung und Verfolgung, sprich das Management von Lebensmitteln vereinfachen und die Digitalisierung des Kassenbelegs ermöglichen, um den Prozess
der manuellen Eingabe von den bereits erworbenen Produkten entsprechend zu automatisieren.

Das Feature 1 lässt sich wiederum in die folgenden Prozesse unterteilen:

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

**<ins> </ins>



