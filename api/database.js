import { child, get, getDatabase, ref, set, remove } from "firebase/database";
import { app } from "./app";

const database = getDatabase(app);


export function ajoutTache(userId, name, desc) {
    return new Promise((res, rej) => {
        const refItem = child(ref(database), 'users/' + userId + '/' + name)
        set(refItem, {
            desc: desc,
        });
        res()
    }).catch(err => rej(err.message))
}

export function getMesTaches(userId) {
    return new Promise((res, rej) => {
        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}`)
        get(refUser).then(snap => {
            let data = snap.val()
            if (data == "" || data === null) data = []
            res(data)
        }).catch(err => rej(err.message))
    })
}

export function getListState(userId) {
    return new Promise((res, rej) => {
        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}`)
        get(refUser).then(snap => {
            let data = snap.val()
            console.log("Voila les datas : ", data)
            // if (data == "" || data === null) data = []
            res(data)
        }).catch(err => rej(err.message))
    })
}

export function deleteTask(userId, name) {
    console.log(userId, "  ", name)
    return new Promise((res, rej) => {
        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}/${name}`)
        remove(refUser).then(() => { res(true) })
            .catch(err => rej(err.message))

    })
}