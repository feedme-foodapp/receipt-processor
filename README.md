# Receipt Processor

<br/>

Als **Receipt Processor** wird das erste Feature (Feature 1) der Applikation **feedMe** bezeichnet, welches den grundlegenden Prozess der Extraktion von relevanten Informationen, die auf dem Kassenbeleg (Kassabon) eines Lebensmittelgeschäft aufgelistet werden, mithilfe der Methoden von **OCR (Optical Character Recognition)** umfasst. Das Feature soll einerseits den allgemeinen Ablauf der Aufzeichnung und Verfolgung, sprich die Verwaltung von Lebensmitteln vereinfachen, sowie andererseits,
die smarte Digitalisierung des Kassenbelegs ermöglichen, um den Prozess der manuellen Eingabe bereits erworbener Produkte zu automatisieren.


#### <ins>Architektur:</ins>

Der Ordner *receipt-processor* beinhaltet den gesamten Sourcecode, sowie die Dokumentation und Diagramme, die zur Veranschaulichung der einzelnen
Kernfunktionalitäten der Applikation dienen. Als *client* wird die Anwendung selbst bezeichnet, mit welcher der Benutzer direkt interagieren kann und in *React*
implementiert ist. Um entsprechend robuste User Interfaces bereitzustellen, die einem nativen Aussehen und Verhalten nahe kommen, sowie sich individuell gestalten
lassen, wurde das Framework *Ionic* integriert. Dadurch wird der Fokus entsprechend auf die Entwicklung einer progressiven Webapplikation gelegt, die sich unabhängig von der Plattform des jeweiligen Endgeräts ausführen lässt und native Funktionalitäten, wie z.B. Kamera, Push Notifications, etc. zur Verfügung stellt.

Entsprechend ist die Applikation nach dem Prinzip der *Client-Server-Architektur* aufgebaut.

<br/>

<div align="center">
  <img src="./documentation/diagrams/stack.svg"/>
</div>

<br/>

<br/>

Das Feature 1 lässt sich wiederum in die Prozesse *Dokumenterfassung*, *Vorverarbeitung*, *Texterkennung*, *Informationsextraktion* und *Datenweiterverarbeitung* unterteilen:

<div align="center">
  <img src="./documentation/diagrams/feature1_process.svg"/>
</div>

<br/>

Mithilfe der Kamerafunktionalität des jeweiligen Endgeräts (z.B. Smartphone, Tablet, Laptop, etc.) soll ein Foto von dem gewünschten Kassenbeleg gemacht werden, welches anschließend im lokalen Speicher des Browsers persistiert wird. Der Benutzer ist in der Lage das Bild entsprechend vorzuverarbeiten, sprich nur ein Teil des Bildes auszuschneiden, sowie verschiedene Algorithmen der Bildvorverarbeitung anzuwenden, um folglich den Prozess der Texterkennung zu vereinfachen. Die Extraktion der Informationen erfolgt mithilfe von *Tesseract*, welche anschließend so aufbereitet werden, um dessen Metainformationen (Nährwerte, etc.) anhand einer Lebensmitteldatenbank zu gewinnen. Die Metainformationen können wiederum von der Anwendung weiterverarbeitet werden:

<br />

![appflow](https://user-images.githubusercontent.com/93816646/160097275-f75ca21d-066c-42be-a50b-f0d70f233694.svg)

<br />

### **Dokumenterfassung**

#### <ins>Allgemeine Funktionalitäten:</ins>

Wie bereits zuvor erwähnt, der Benutzer soll in der Lage sein mithilfe der Kamera des jeweiligen Endgeräts ein Bild von dem gewünschten Kassenbeleg zu machen und diesen für die Weiterverarbeitung im lokalen Speicher des Browsers zu speichern. Das Bild kann dabei jederzeit geändert oder gelöscht werden. Für das Erfassend es Dokuments wird das Plugin *Camera* von *Capacitor* verwendet:

https://capacitorjs.com/docs/apis/camera

<br/>

<div align="center">
  <img src="./documentation/diagrams/use_case1.svg"/>
</div>

<br/>

#### <ins>Anwendung & Codebeispiele:</ins>

<br/>

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

Nachdem das Foto gemacht oder hochgeladen wurde, wird dieses im *Redux-Store* als Base64 gespeichert. Das Redux-Feature *receiptSlice* wird im lokalen Storage des Browsers mit dem Schlüssel (Key) *receipt* persistiert, um entsprechend nach dem Refresh weiterhin zur Verfügung zu stehen: 

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

Der Kassenbeleg wird anschließend in der Komponente *PreviewContainer* angezeigt. Ist kein Kassabon vorhanden, wird dem Benutzer eine Illustration angezeigt.
Nach dem Hinzufügen stehen die Funktionalitäten *Pre-Processing* und *Delete Photo* der Komponente *ReceiptOptionFab* zur Verfügung, welche als Fab-Button mit den verschiedenen Auswahlmöglichkeiten, am rechten unteren Rand der entsprechenden Komponente dargestellt wird.

![image](https://user-images.githubusercontent.com/93816646/160013699-62ac8e93-b3c0-4b2f-bd3a-ac2952f25a1f.png)

#### <ins>Herausforderung & Lösungsansatz</ins>

<br/>

<br/>

### **Texterkennung (Optical Character Recognition)**

<br/>

Unter *Optical Character Recognition (OCR)*


Das folgende Use-Case Diagramm veranschaulicht die zuvor genannten Funktionalitäten:

<div align="center">
  <img src="./documentation/diagrams/use_case3.svg"/>
</div>

<br/>


#### Tesseract.js

*Tesseract.js* ist eine frei verfügbare (Open-Source) JavaScript-Bibliothek, welche die original in C geschriebene Bibliothek *Tesseract* kompiliert und mithilfe von
*WebAssembly* für den Browser ausführbare macht. Die Texterkennung erfolgt dabei anhand eines *neuronalen Netzwerks*, das wiederum auf dem Prinzip
*LSTM (Long Short-Term Memory)* basiert, um entsprechend möglichst akkurate Ergebnisse beim Erkennungsprozess zu erzielen.

Für die Integration von Tesseract muss der folgende Befehl ausgeführt werden. Die Applikation selbst ist dabei ausschließlich in *TypeScript*
(Superset von JavaScript) geschrieben, wodurch für alle Bibliotheken entsprechend die dazugehörigen Datentypen (Types) installiert werden:

```bash
$ npm install tesseract.ts
```

```JSX

```

<br/>

Der Prozess der Texterkennung selbst erfolgt im *ResultsContainer*. Diese Komponente ermöglicht es, dem Benutzer nach dem Upload des Kassenbelegs auf *Analyisieren* zu klicken. Ist die Analyse abgeschlossen, werden die Ergebnisse entsprechend angezeigt. Neben dem farbigen Hervorheben mit Bounding-Boxen, soll zusätzlich beim Hovern über das entsprechende Wort, die Genauigkeit (Accuracy) dargestellt werden.

Der Komponente selbst wird der Kassenbeleg als Property übergene. Die States *isProcessing* und *results* dienen einerseits zur Darstellung von Komponenten, die den Ablauf der Applikation veranschaulichen und andererseits zum Anzeigen der Ergebnisse nach der Texterkennung. Die Ergebnisse werden dabei im Local Storage des Browsers zwischengespeichert, um entsprechend nach dem Refresh der Seite weiterhin angezeigt werden zu können, bzw. für die weitere Verarbeitung bestehen zu bleiben:

```JSX
const ResultsContainer: React.FC = ({ receipt } ) => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [results, setResults] = useState();
    
  const renderResults = () => {
      if (results) {
          return (
              <div>
                {/* display results */}
              </div>
          );
      } else {
          return (
              <React.Fragment>
                  {/* label container */}
                  <IonButton
                      className={styles.btn}
                      expand="block"
                      disabled={!receipt ? true : false}
                      onClick={
                          () => {
                              setIsProcessing(true);
                              ServiceLoader.tesseract().recognize(receipt).then((results: any) => {
                                  localStorage.setItem('results', CircularJSON.stringify(results));
                                  setResults(results);
                                  setIsProcessing(false);
                              });
                          }
                      }>
                      <IonIcon
                          className={styles.icon}
                          icon={analyticsOutline}
                      />
                      Analyze
                  </IonButton>
              </React.Fragment>
          );
      }
  };
  
  return (
     <div className={styles.results_container}>
        <div className={styles.flex_container}>
            <div className={styles.btn_container}>
                {!isProcessing ? (
                    renderResults()
                ) : (
                    <Illustrator
                        icon={'/assets/icon/glass.svg'}
                        title={'Is processing'}
                        animation={true}
                    />
                )}
            </div>
         </div>
         <FileUploader />
     </div>
  );
};
```
<br/>





#### Result-Objekt

Die folgende Abbildung veranschaulicht das Objekt mit den entsprechenden Attributen, das nach dem erfolgreichen Erkennungsprozess von Tesseract zurückgegeben wird:

![image]{width: 420xpx;}(https://user-images.githubusercontent.com/93816646/158157569-26f11a6a-293f-4b7c-b131-2558cd016248.png)


