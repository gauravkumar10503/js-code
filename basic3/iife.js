//Immediately Invoked Function Expression (IIFE)

(function one(){
    console.log(`DB connected`);
})();

//after writing the function don't forget to use ";" semicolon otherwise it will show error (in iife)

(()=>{
    console.log(`DB Connect Two`);
})();

((name)=>{
    console.log(`DB CONNECT ${name}`);
})("Gaurav");