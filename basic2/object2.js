//const user=new Object();
const user={};

user.id="123abc";
user.name="sam";
user.isLoggedIn=false;
//console.log(user);

const newUser={
    email:"g@gmail.com",
    fullname:{
        userFullname:{
            firstname:"samrat",
            lastname:"kumar"
        }
    }
}

//console.log(newUser.fullname.userFullname.firstname);

const obj1={
    1:"a",
    2:"b"
}

const obj2={3:"a",4:"b"}
//const obj3={obj1, obj2}
//const obj3=Object.assign({},obj1, obj2);
const obj3={...obj1, ...obj2};  //best
// console.log(obj3);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty('isLoggedIn'));


const courese={
    courseName:"javascript",
    price:"free",
    courseInstructor:"me"
}

//course.courseInstructor

const {courseInstructor}=courese;
console.log(courseInstructor);


