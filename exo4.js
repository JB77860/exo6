const patient = {
    nom: 'Amoth',
    prenom: 'Esaie',
    paid: 200,
    symptomes: ['fievre', 'grippe', 'maux de tete', 'toux'],
    status: true
}
const patient2 = {
    nom: 'Levi',
    prenom: 'Elvis',
    paid: 250,
    symptomes: ['fievre', 'grippe', 'maux de tete'],
    status: false
}
const patient3 = {
    nom: 'Ben',
    prenom: 'Pavel',
    paid: 20,
    symptomes: ['fievre', 'grippe'],
    status: true
};

let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { 
        const patients = getPatients()
        if(patients.length > 0){
            myResolve(patients);
        }else{
            myReject('There is a mistake')
        }  
    }, 3000);
  });
  
  myPromise.then(function(value) {
    const res = value.map(function(x){return {...x, salle: 29}})
    return Promise.resolve(res)
  }).then(function(value) {
    const res = value.map(function(x){
      const {paid, ...changed} = x;
      return changed;
    })
    return Promise.resolve(res)
  }).then(function(value) {
    const res = value.map(function(x){return {...x, nom: 'Winner'}})
    return Promise.resolve(res)
  }).then(function(value) {
    console.log(value)
    return Promise.resolve(value)
  }).then(function(value) {
    console.log(value.map())
  })
  .catch(function(value) {
    console.log(value)
  });


  function getPatients(){
    return [patient, patient2, patient3];
  }