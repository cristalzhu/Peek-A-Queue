import {db} from '../firebase/firebase'
import firebase from "firebase/app";

// location = "MailCenter"
// return a list of json object 
// each json object has key NetID,TimeStamp (js date object),QueueLength
export async function get_all_from_location(location){
    try {
        var list = [];
        await db
          .collection(location)
          .get()
          .then((querySnapshot)=> {
            querySnapshot.forEach((doc)=> {
              var data = doc.data();
            //   data.TimeStamp = data.TimeStamp.toDate()
              data.TimeStamp = data.TimeStamp.toDate()
              list.push(data);
            });
          });
        return list;
      } catch (error) {
        return error;
      }
}

export async function add_record(location,net_id,queue_len){
    const docData = {
        NetID: net_id,
        QueueLength:queue_len,
        TimeStamp: firebase.firestore.Timestamp.now()
    };
    await db.collection(location).add(docData);

}

export async function has_previous_submission(location,net_id){
    try {
        var list = []
        var ret = await db.collection(location).where("NetID", "==", net_id).get()
        ret.forEach((doc)=> {
            var data = doc.data();
          //   data.TimeStamp = data.TimeStamp.toDate()
            data.TimeStamp = data.TimeStamp.toDate()
            list.push(data);
          });
        return list
    } catch (error) {
        return error;
    }
            
}

export async function add_record_gen(location,net_id,queue_len,ts){
    const docData = {
        NetID: net_id,
        QueueLength:queue_len,
        TimeStamp: ts
    };
    console.log("data added"+docData)
    await db.collection(location).add(docData);

}
