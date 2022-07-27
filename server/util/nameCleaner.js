
 const cleanUpName = function(mainPerson){
    let name = mainPerson.Fullname.Value;
    //cleaning up the name
    //may use this in the front end instead of the back
    name = name.replace('/','');
    name = name.slice(0, -1)
    name = name.toLowerCase();
    name = name.split(" ")
    for (var i = 0; i < name.length; i++) {
        name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
    
    }
    name = name.join(" ")
    return name
}

module.exports = cleanUpName