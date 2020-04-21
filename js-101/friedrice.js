const makeFriedRice = nextStep => {
    getPork(function(pork){
        getEgg(function(egg){
            getRice(function(rice){
                fried(pork, egg, rice, function(friedRice){
                    nextStep(friedRice)
                })
            })
        })
    })
 }
 const getPork = (callback) => {
    setTimeout(function(){ 
        callback('Pork')
    }, 3000);
 }
 const getEgg = (callback) => callback('Egg')
 const getRice = (callback) => callback('Rice')
 const fried = (pork, egg, rice, callback) => {
    callback(`fried rice ${pork} ${egg} ${rice}`)
 }
 const serve = (param) => {
    console.log(param)
 } 
 makeFriedRice(function (friedRice){
    serve(friedRice)
 }) 
    
