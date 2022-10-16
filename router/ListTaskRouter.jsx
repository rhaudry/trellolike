import React from 'react';
function getListState(uid) {
    return new Promise((resolve, reject) => {
        let list = [];
        firebase.database().ref('users/' + uid).once('value', (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                list.push(childSnapshot.val());
            });
            resolve(list);
        }).catch(err => reject(err));
    });
}


const ListTaskRouter = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Liste" component={ListeTacheVue} />
            <Stack.Screen name="Urgent" component={ListeTacheVue} />
            <Stack.Screen name="newTache" component={NewTache} />
            {Object.entries(listTask).map((entry, index) => {
                const [key, value] = entry;
                return (<Stack.Screen name={key} component={ListeTacheVue} />)
            })}
        </Stack.Navigator>
    );
};

export default ListTaskRouter;