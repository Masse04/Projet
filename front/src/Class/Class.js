export class Etudiants {
    constructor(nom = '',prenom = '',username = '',password = '',email = '',telephone = '',adresse = '',classe = '',sexe = '',cin = '',cinParent = '',birthday = ''){
        this.nom = nom 
        this.prenom = prenom
        this.username = username
        this.password = password
        this.email = email
        this.telephone = telephone
        this.adresse = adresse
        this.classe = classe
        this.sexe = sexe
        this.cin = cin
        this.cinParent = cinParent
        this.birthday = birthday
    }
}

export class Profs {
    constructor(nom = '',prenom = '',username = '',password = '',email = '',telephone = '',adresse = '',sexe = '',cin = '',birthday = '',specialite = ''){
        this.nom = nom 
        this.prenom = prenom
        this.username = username
        this.password = password
        this.email = email
        this.telephone = telephone
        this.adresse = adresse
        this.sexe = sexe
        this.cin = cin
        this.birthday = birthday
        this.specialite = specialite
    }
}

export class Parents {
    constructor(nom = '',prenom = '',username = '',password = '',email = '',telephone = '',adresse = '',sexe = '',cin = '',birthday = '',profession = ''){
        this.nom = nom 
        this.prenom = prenom
        this.username = username
        this.password = password
        this.email = email
        this.telephone = telephone
        this.adresse = adresse
        this.sexe = sexe
        this.cin = cin
        this.birthday = birthday
        this.profession = profession
    }
}

export class Admins {
    constructor(nom = '',prenom = '',username = '',password = '',email = '',telephone = '',adresse = '',sexe = '',cin = '',poste = '',birthday = ''){
        this.nom = nom 
        this.prenom = prenom
        this.username = username
        this.password = password
        this.email = email
        this.telephone = telephone
        this.adresse = adresse
        this.sexe = sexe
        this.cin = cin
        this.poste = poste
        this.birthday = birthday
    }
}

export class Connexion{
    constructor(username = '',password = ''){
        this.username = username
        this.password = password
    }
}

export class Cours{
    constructor(type = '',classe = '',userId = ''){
        this.type = type
        this.classe = classe
        this.userId = userId
    }
}

export class Document {
    constructor(titre = '',description = '',document = '',classe = ''){
        this.titre = titre
        this.description = description
        this.document = document
        this.classe = classe
    }
}

export class Users {
    constructor(nom = '',prenom = '',username = '',password = '',email = '',telephone = '',adresse = '',sexe = '',cin = '',role = '',classe = '', birthday = ''){
        this.nom = nom 
        this.prenom = prenom
        this.username = username
        this.password = password
        this.email = email
        this.telephone = telephone
        this.adresse = adresse
        this.sexe = sexe
        this.cin = cin
        this.role = role
        this.classe = classe
        this.birthday = birthday
    }
}