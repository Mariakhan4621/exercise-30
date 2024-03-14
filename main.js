var users = ["admin", "eric", "anosha", "erum", "aman"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("Hellow admin, wuuld you like to see a status report?");
    }
    else {
        console.log(" Hellow $(user), thank you for logging in again");
    }
}
