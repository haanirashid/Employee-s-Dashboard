console.log("testing");

var employeeArr = [
    {
        id: 101,
        namee: "Muhammad Ali Jinnah",
        statuss: "employee",
        phone_number: 1234567890,
        email: "fake@gmail.com",
        pass: "12345"
    },
    {
        id: 102,
        namee: "Sir Syed Ahmed Khan",
        statuss: "employee",
        phone_number: 1234567890,
        email: "fake@gmail.com",
        pass: "12345"
    },
    {
        id: 103,
        namee: "Allama Iqbal ",
        statuss: "employee",
        phone_number: 1234567890,
        email: "fake@gmail.com",
        pass: "12345"
    }
];
var adminArr = [
    {
        id: 104,
        namee: "Liaquat Ali Khan",
        statuss: "admin",
        phone_number: 1234567890,
        email: "fake@gmail.com",
        pass: "12345"
    },
    {
        id: 105,
        namee: "Gandhi",
        statuss: "admin",
        phone_number: 1234567890,
        email: "fake@gmail.com",
        pass: "12345"
    },
    {
        id: 106,
        namee: "Nehru",
        statuss: "admin",
        phone_number: 1234567890,
        email: "fake@gmail.com",
        pass: "12345"
    }
];
var superAdminArr = [
    {
        id: 107,
        namee: "Lord Mountbatten",
        statuss: "superAdmin",
        phone_number: 1234567890,
        email: "fake@gmail.com",
        pass: "12345"
    }
];

// setting values in local sotrage from start
// localStorage.setItem("employeeArr", JSON.stringify(employeeArr));
// localStorage.setItem("adminArr", JSON.stringify(adminArr));
// localStorage.setItem("superAdminArr", JSON.stringify(superAdminArr));

//initailize of object
var obj;

//declaring signup values
var signName = document.getElementById("sign_name");
var signEmail = document.getElementById("sign_email");
var signPassword = document.getElementById("sign_password");
var signNumber = document.getElementById("sign_number");
var idCount = 107;



//declaring and checking checkbox values
var employeeStatuss = document.getElementById("sign_employee");
var adminStatuss = document.getElementById("sign_admin");
var superadminStatuss = document.getElementById("sign_superadmin");


//SignUp Function 
const signin = (event) => {
    event.preventDefault();

    // Employee Signup

    //checking Employee status
    if (employeeStatuss.checked) {

        //checking Employee Status
        for (var i = 0; i < employeeArr.length; i++) {
            if (employeeArr[i].email === signEmail.value) {
                alert("User Already Exist");
                return;
            };
        }

        //updating idCount
        idCount++

        //Pushing Values in Object
        obj = {
            id: idCount,
            namee: signName.value,
            statuss: "employee",
            phone_number: signNumber.value,
            email: signEmail.value,
            pass: signPassword.value
        };

        //Push object in employeeArr
        employeeArr.push(obj);

        //LocalStorage SetItem
        // localStorage.setItem("employeeArr", JSON.stringify(employeeArr));
        localStorage.setItem("employeeArr", JSON.stringify(employeeArr));
        localStorage.setItem("adminArr", JSON.stringify(adminArr));
        localStorage.setItem("superAdminArr", JSON.stringify(superAdminArr));

        //Directing user to login Page
        // window.location.href = "./login.html"

        alert("SignUp sucessfull");
    }

    // Admiin Signup

    //checking Admin status
    if (adminStatuss.checked) {

        //checking email already exist
        for (var i = 0; i < adminArr.length; i++) {
            if (adminArr[i].email === signEmail.value) {
                alert("User Already Exist");
                return;
            };
        }


        //updating idCount
        idCount++
        //pushing value in object
        obj = {
            id: idCount,
            namee: signName.value,
            statuss: "admin",
            phone_number: signNumber.value,
            email: signEmail.value,
            pass: signPassword.value
        };

        //push obj into adminArr
        adminArr.push(obj);

        //LocalStorage SetItem
        // localStorage.setItem("adminArr", JSON.stringify(adminArr));
        localStorage.setItem("employeeArr", JSON.stringify(employeeArr));
        localStorage.setItem("adminArr", JSON.stringify(adminArr));
        localStorage.setItem("superAdminArr", JSON.stringify(superAdminArr));

        //Directing user to login Page
        // window.location.href = "./login.html"

        alert("SignUp sucessfull");
    }

    // Super Admin Signup 
    //check superAdmin status 
    if (superadminStatuss.checked) {
        //checking if email already exist
        for (var i = 0; i < superAdminArr.length; i++) {
            if (superAdminArr[i].email === signEmail.value) {
                alert("User Already Exist");
                return;
            };
        }

        //updating idCount
        idCount++
        //Pushing values into object
        obj = {
            id: idCount,
            namee: signName.value,
            statuss: "superAdmin",
            phone_number: signNumber.value,
            email: signEmail.value,
            pass: signPassword.value
        };

        //push obj into superadminArr
        superAdminArr.push(obj);

        //LocalStorage SetItem
        // localStorage.setItem("superAdminArr", JSON.stringify(superAdminArr));
        localStorage.setItem("employeeArr", JSON.stringify(employeeArr));
        localStorage.setItem("adminArr", JSON.stringify(adminArr));
        localStorage.setItem("superAdminArr", JSON.stringify(superAdminArr));

        //Directing user to login Page
        // window.location.href = "./login.html"

        alert("SignUp sucessfull");
    }


    // // Logs 
    // console.log("Employee Array", employeeArr);
    // console.log("Admin Array", adminArr);
    // console.log("SuperAdmin Array", superAdminArr);

};



//LocalStorageClear
const clear = () => {
    localStorage.clear();
}
// clear();

//getting value from login 
var loginEmail = document.getElementById("log_email");
var loginPassword = document.getElementById("log_password");

// mainArr
var mainArr = [];

//Getting values from local storage for login purpose
var getEmployeeArr = JSON.parse(localStorage.getItem("employeeArr"));
var getAdminArr = JSON.parse(localStorage.getItem("adminArr"));
var getSuperAdminArr = JSON.parse(localStorage.getItem("superAdminArr"));

//Logs for check
// console.log("GetEmployee", getEmployeeArr);
// console.log("GetAdmin", getAdminArr);
// console.log("GetSuperAdmin", getSuperAdminArr);

const login = (event) => {
    event.preventDefault()

    // Employee logging in 
    for (var i = 0; i < getEmployeeArr.length; i++) {
                
        if (loginEmail.value === getEmployeeArr[i].email && loginPassword.value === getEmployeeArr[i].pass) {
            
            //log for check
            console.log("employee Logged", getEmployeeArr[i]);
            
            //Directing user to Dashboard Page
             window.location.href = "./dashboard.html";
            
            //storing Employee name in local storage for print on dashboard
            localStorage.setItem("LoggedUserName", getEmployeeArr[i].namee);
            
            //pushing employee array values to mainArr
            for(var i = 0 ; i< getEmployeeArr.length ; i++){
                mainArr.push(getEmployeeArr[i])
            }
            localStorage.setItem("mainArr", JSON.stringify(mainArr));
        }
    }

    //Admin logging in
    for (var i = 0; i < getAdminArr.length; i++) {
        if (loginEmail.value === getAdminArr[i].email && loginPassword.value === getAdminArr[i].pass) {

            //log for check
            console.log("Admin Logged", getAdminArr[i]);

            //Directing user to Dashboard Page
            window.location.href = "./dashboard.html";

            //storing Employee name in local storage for print on dashboard
            localStorage.setItem("LoggedUserName", getAdminArr[i].namee);
        
            //pushing employee and admin arrays values to mainArr
            for(var i = 0 ; i< getEmployeeArr.length ; i++){
                mainArr.push(getEmployeeArr[i])
            }
            for(var i = 0 ; i< getAdminArr.length ; i++){
                mainArr.push(getAdminArr[i])
            }
            localStorage.setItem("mainArr", JSON.stringify(mainArr));
        }
    }

    //Super admin Loggin in
    for (var i = 0; i < getSuperAdminArr.length; i++) {
        if (loginEmail.value === getSuperAdminArr[i].email && loginPassword.value === getSuperAdminArr[i].pass) {
          
            //log for check
            console.log("SuperAdmin Logged", getSuperAdminArr[i]);
           
            //Directing user to Dashboard Page
            window.location.href = "./dashboard.html";

            //storing Employee name in local storage for print on dashboard
            localStorage.setItem("LoggedUserName", getSuperAdminArr[i].namee);
        
            //pushing employee and admin arrays values to mainArr
            for(var i = 0 ; i< getSuperAdminArr.length ; i++){
                mainArr.push(getSuperAdminArr[i])
            }
            for(var i = 0 ; i< getAdminArr.length ; i++){
                mainArr.push(getAdminArr[i])
            }
            for(var i = 0 ; i< getEmployeeArr.length ; i++){
                mainArr.push(getEmployeeArr[i])
            }
            localStorage.setItem("mainArr", JSON.stringify(mainArr)); 
        }
    }



}


// //Dashboard element
// var dashboardIntro = document.getElementById("dashboard_intro");
// var dashboardTarget = document.getElementById("dashboard_target");

// //Fuction to print Data on Dashboard
// const print = () => {

    
//     //Getting loggged User Name for Print on Dashboard
//     var getLoggedUserName = localStorage.getItem("LoggedUserName");
//     console.log("getLoggedUserName", getLoggedUserName);

//     //printing Welcome on dashboard
//     dashboardIntro.innerHTML += `<h1>Welcome, ${getLoggedUserName}!</h1>`
    
//     //Getting mainArr from local storage to print on dashboard
//     var getMainArr = JSON.parse(localStorage.getItem("mainArr"));
//     console.log("Main arr in print Fuction", getMainArr);
    
//     for (var i = 0; i < mainArr.length; i++) {
//         console.log("printing data on dashboard", mainArr[i]);
        
//         dashboardTarget.innerHTML +=
//         `
//         <div class="user_detail">
//         <div class="sub_user"><h2>${getMainArr[i].id}</h2></div>
//         <div class="sub_user"><h2>${getMainArr[i].namee}</h2></div>
//         <div class="sub_user"><h2 class="employee">Employee</h2></div>
//                     <div class="sub_user"><h2>${getMainArr[i].phone_number}</h2></div>
//                     <div class="sub_user"><button>Edit</button></div>
//                  </div>
//                  `
//                 }
                
//                 //Directing user to Dashboard Page
//                 document.location.href = "./dashboard.html";

// };
