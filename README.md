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

### **Dokumenterfassung**

#### <ins>Allgemeine Funktionalitäten:</ins>

Der Benutzer soll in der Lage sein, mithilfe der Kamera des jeweiligen Endgeräts (z.B. Smartphone, Laptop), ein Bild vom Kassenbeleg zu machen und für die
Weiterverarbeitung in den lokalen Speicher hochzuladen. Das Bild selbst kann dabei geänder oder gelöscht werden. Für das Erfassen des Dokuments wird das Plugin
*Camera* von *Capacitor* verwendet: https://capacitorjs.com/docs/apis/camera

Das folgende Use-Case Diagramm veranschaulicht die zuvor genannten Funktionalitäten:

<br/>

<div align="center">
  <img src="./documentation/diagrams/use_case1.svg"/>
</div>

<br/>
<br/>


#### <ins>Codebeispiele:</ins>

<ins>Installation:</ins>

```bash
$ npm install @capacitor/camera
```

<br/>

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

Nachdem das Foto gemacht wurde, wird dieses im *Redux-Store* gespeichert:

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

Der Kassenbeleg wird anschließend in der Komponente *PreviewContainer* angezeigt, welcher dieser als Property *receipt* übergeben wird. 
Ist kein Foto vorhanden wird der *EmptyContainer* angezeigt, der als Lückenfüller dienen soll und lediglich ein Beispielbild enthält:

```TSX
const PreviewContainer: React.FC<PreviewContainerProps> = ({ receipt }) => {
    return (
        <div className={styles.preview_container}>
            {receipt ? (
                <img 
                    className={styles.receipt} 
                    src={receipt} 
                    alt="receipt" 
                />
            ) : (
                <EmptyContainer
                    icon={'/assets/icon/image.svg'}
                    title={'No preview to show yet'}
                />
            )}
        </div>
    );
};
```
<br/> 

![image](https://user-images.githubusercontent.com/93816646/149337823-886459b0-3779-45c1-9865-643dc6376a80.png)

<ins> </ins>



