import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDN-xqzD6G8EUBcpkSCU_weHgTodgiFtoQ",
    authDomain: "reacte-commerce.firebaseapp.com",
    projectId: "reacte-commerce",
    storageBucket: "reacte-commerce.appspot.com",
    messagingSenderId: "404950106447",
    appId: "1:404950106447:web:f2f3343235100ab5a0c53a"
};
const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();






//Esta llamada va en item list contanier
/*
useEffect(() => {

    setLoading(true);
    const productsCollections = dataBase.collection(COLLECTION_NAME);

    const higPriceProducts = productsCollections.where('price', '>', 500)
        .where('category', '==', 'products').limit(20);

    productsCollections.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
            console.log('No results');
        }
        setProducts(querySnapshot.docs.map(doc => doc.data()));
    }).catch((error) => {
        console.log('Error buscando items', error);
    }).finally(() => {
        setLoading(false);
    })

}, []);
*/