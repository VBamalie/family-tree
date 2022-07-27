
 const cleanUpName = function(mainPerson){
    let name = mainPerson.Fullname.Value;
    //this takes the slashes out of the full names and makes sure the capitilization is correct
    name = name.replace('/','');
    name = name.replace('/','')
    name = name.toLowerCase();
    name = name.split(" ")
    for (var i = 0; i < name.length; i++) {
        name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
    
    }
    name = name.join(" ")
    return name
}

module.exports = cleanUpName