import * as firebase from 'firebase/app';
import 'firebase/firestore';


const orders = dataBase.collection('orders');

const newOrder = {
    buyer: useInfo,
    items: cart,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    total: price()
}

//si sale bien devuelve el id auto generado del documento.
//sino el error
orders.add(newOrder)
    .then(({ id }) => {
        setOrderId(id);
    })
    .catch(({ error }) => {
        setError(error);
    })
    .finally(({ error }) => {
        setLoading(false);
    })

//Update 
const product = { id = "", data: {} }
const item = dataBase.collection('products').doc(product.id);

//Ejemplo actualizando el precio. Siempre devuelve una promise
return item.update({
        price: 102
    }).then(() => {
        console.log("stock actualizado");
    })
    .catch((error) => {
        console.log("Error:" + error);
    });


//Batch Update 
//Actualizar lote de documentos -> refiere a la atomisidad
/* Si una sala mal aborta , o haces todo o nada */
const batch = dataBase.batch();

const newItem = dataBase.collection('products').doc(); //un documento nuevo con el id autogen

batch.set(newItem, {
    title: 'acelgas'
    descrpition: 'variedad de sandia, apta macetas de 20 litros',
    price: 100,
    pictureUrl: 'img4',
    category: '1'
});

const updateItem = dataBase.collection('products').doc("ASSD832NFSDK");
batch.update(updateItem, { "price": 100 });

// no devuelve nada pero lo usamos para saber que fue exitoso
batch.commit().then(dat =>  {
    console.log(dat, '¿que valor tiene dat?');
})


//Batch a partir de otro query

//Ejemplo para cosultar previamente si todos los productos que esten en el arreglo
//items que puede ser el del carrito, tienen o no stock
//filtro documentos por id y me quedo on esos
const itemsToUpdate = dataBase.collection('items')
    .where(firebase.firestore.FieldPath.docuemntId(), 'in', items.map(i => i.item.id));

itemsToUpdate.get().then(querySnapshot =>  {
    const batch = dataBase.batch();
    const outOfStock = [];

    querySnapshot.docs.forEach((docSnapshot, idx) => {
        if (docSnapshot.data().stock >= items[idx].quantity) {
            batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - items[idx].quantity });
        } else {
            outOfStock.push({...docSnapshot.data(), id: docSnapshot.id });
        }
    })

    if (outOfStock.length === 0) {

        const newOrderReference = dataBase.collection("orders").doc();
        batch.set(newOrderReference, {
            date: firebase.firestore.Timestamp.fromDate(new Date())
        })

        batch.commit().then(() => {
            // Una vez que hago el commit, hago un query y ordeno por fecha el ultimo documento
            //  
            dataBase.collection('orders')
                .orderBy('date', "asc").limitToLast(1)
                .get().then(v => console.log(v.docs[0].id))
            console.log("actualizacion exitosa");
        });
    }

})