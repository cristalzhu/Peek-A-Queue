import firebase from "firebase/app";
import { add_record_gen } from "../api/queue";

const prob=(h)=>{
    const hour_distribution = {
        9:0.2,
        10:0.3,
        11:0.4,
        12:0.9,
        13:0.4,
        14:0.7,
        15:0.4,
        16:0.8,
        17:0.9,
        18:0.9
    }
    let prob = hour_distribution[h]
    return Math.random() < prob;
}
const random = ()=>{
    return Math.floor(Math.random()*10)
}
const get_queue_len = (h)=>{
    const hour_len = {
        9:10,
        10:25,
        11:20,
        12:10,
        13:25,
        14:10,
        15:15,
        16:20,
        17:19,
        18:18
    }
    return hour_len[h]
}

// data format: arr of length 140
// each element: ["MailCenter",netid,queuelength,TimeStamp Js object]
export const gen_data = ()=>{
    // 7 d * 10 h * 2 t 
    var l=[]
    var id_list = ['zl230','ab123','cd456']
    
    var n_day = 7
    var hours = [9,10,11,12,13,14,15,16,17,18]
    for(let day = 0;day<n_day;day++){
        hours.forEach(h=>{
            var date1 = new Date(2022,10,day,h,2)
            // const t1 = firebase.firestore.Timestamp.fromDate(date1);
            var record1 = ["MailCenter",id_list[0],get_queue_len(h)+day+random(),date1]
            l.push(record1)

            var date2 = new Date(2022,10,day,h,58)
            // const t2 = firebase.firestore.Timestamp.fromDate(date2);
            var record2 = ["MailCenter",id_list[0],get_queue_len(h)-5+day+random(),date2]
            l.push(record2)

        })
        }
    return l
}