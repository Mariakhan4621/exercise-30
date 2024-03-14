let users : string [] = ["admin", "eric", "anosha", "erum", "aman"]

for(let user of users) {
if (user === "admin") {
    console.log("Hellow admin, wuuld you like to see a status report?")
} else {
    console.log (" Hellow $(user), thank you for logging in again")
}

}


