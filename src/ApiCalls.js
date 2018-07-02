
export function insertContact(contact){
    console.log("insertContact")
    return fetch('http://localhost:5000/contacts/insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      })
        .then((response) => response.json())
        .then((responseJson) =>{
            console.log(responseJson)
        })
        .catch((error) =>{
            console.error(error);
    });
    
}

export function getAllContact(callback){
    var _ = fetch('http://localhost:5000/contacts/findall')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        callback(responseJson)
      })
      .catch((error) => {
        console.error(error);
      }); 
}

export function updateContact(contact){
    console.log("Update")
    return fetch('http://localhost:5000/contacts/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      })
        .then((response) => response.json())
        .then((responseJson) =>{
            console.log(responseJson)
        })
        .catch((error) =>{
            console.error(error);
    });
    
}