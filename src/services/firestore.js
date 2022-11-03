import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZkRM-LQ6Khg-w0cFt_46bQBlXZW3Eap0",
  authDomain: "fototienda-react-sposato.firebaseapp.com",
  projectId: "fototienda-react-sposato",
  storageBucket: "fototienda-react-sposato.appspot.com",
  messagingSenderId: "616672628050",
  appId: "1:616672628050:web:9464b97cc6b8f209b9be8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems() {
    const miCollection = collection(firestore, "fotoproductos");
    let snapshotDB = await getDocs(miCollection);
    
    let dataDocs = snapshotDB.docs.map((document) => {
        let docFormat = { ...document.data(), id: document.id}
        return docFormat
    });
    
    return dataDocs;
}

export async function getSingleItem(idParams) {
    const docRef = doc(firestore, "fotoproductos", idParams);
    const docSnapshot = await getDoc(docRef);

    return { ...docSnapshot.data(), id: docSnapshot.id }

}

export async function getItemsByCategory(catParams) {
    const collectionRef = collection(firestore, "fotoproductos");
    const queryCategory = query(
        collectionRef, 
        where("category", "==", catParams)
);
    
    const snapshotDB = await getDoc(queryCategory);

    let dataDocs = snapshotDB.docs.map((document) => {
        let docFormat = { ...document.data(), id: document.id };
        
        return docFormat;
});

    return dataDocs;
}

export default { firestore };