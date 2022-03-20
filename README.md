# Receipt Processor

<br/>

Als **Receipt Processor** wird das erste Feature der Applikation **feedMe** bezeichnet, welches den grundlegenden Prozess der Extraktion von relevanten Informationen, die auf dem Kassenbeleg (Kassabon) eines Lebensmittelgeschäfts aufgelistet werden, mithilfe der Methoden von **OCR (Optical Character Recognition)** umfasst. Das Feature soll den Ablauf der Aufzeichnung und Verfolgung, sprich die Verwaltung von Lebensmitteln vereinfachen und die smarte Digitalisierung des Kassenbelegs ermöglichen, um den Prozess der manuellen Eingabe bereits erworbener Produkte zu automatisieren.

#### <ins>Allgemeine Projektstruktur & Architektur:</ins>

Das Projekt lässt sich in verschiedene Ordner unterteilen. Der Ordner *receipt-processor* beinhaltet den gesamten Sourcecode, sowie die Dokumentation und Diagramme,
die zur Veranschaulichung der einzelnen Kernfunktionalitäten der Applikation dienen. Als *client* wird die Anwendung selbst bezeichnet, mit welcher der Benutzer direkt interagieren kann und in *React* geschrieben ist. Um entsprechend robuste User Interfaces bereitzustellen, welchem einem nativen Look & Feel sehr nahe kommen und sich individuell gestalten lassen, wurde das Framework *Ionic* integriert. Dadurch wird der Fokus hauptsächlich auf die Entwicklung einer progressiven Webapplikation gelegt,
die sich unabhängig von der Plattform ausführen lässt und native Funktionalitäten, wie z.B. Kamera, Push Notifications, etc. zur Verfügung stellt.

<br/>

<div align="center">
  <img src="./documentation/diagrams/stack.svg"/>
</div>

//TODO:

<br/>

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

Für die Integration des Plugins muss der folgende Befehl ausgeführt werden:

```bash
$ npm install @capacitor/camera
```

<br/>

#### <ins>Codebeispiele:</ins>

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

Nachdem das Foto gemacht wurde, wird dieses im *Redux-Store* gespeichert. Das Feature *receiptSlice* wird dabei im lokalen Storage des Browsers persistiert, 
um entsprechend nach einem Refresh, ebenfalls für die Applikation zur Verfügung zu stehen:

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
Ist kein Foto vorhanden wird der *EmptyContainer* angezeigt, welcher lediglich ein Beispielbild (Illustration) enthält. Wird entsprechend
ein Foto hinzugefügt, wird ein Fab-Button am unteren rechten Rand des PreviewContainers angezeigt, der die zusätzlichen Funktionalitäten:
*Pre-Processing* und *Delete Photo* zur Verfügung stellt:

```TSX
const PreviewContainer: React.FC<PreviewContainerProps> = ({ receipt }) => {
    return (
        <div className={styles.preview_container}>
            {receipt ? (
                <React.Fragment>
                    <img 
                      className={styles.receipt} 
                      src={receipt} 
                      alt="receipt" 
                    />
                    <ReceiptSettingsFab />
                </React.Fragment>
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

![image](https://user-images.githubusercontent.com/93816646/149572482-80c4236d-17f4-49fe-b954-0c050095eb2b.png)

<ins> </ins>

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


