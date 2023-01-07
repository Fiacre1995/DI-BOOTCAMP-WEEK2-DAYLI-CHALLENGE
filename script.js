/** 
@author: DION FIACRE ARMEL
@description: Cet exercice consiste a reproduire les paroles d'une chansons en incrementant des variables
*/

/*======================== DAYLI CHALLENGE =======================*/

//Declarations des Variables

let NombreBouteille = prompt("Veeuillez entrer le nombre de bouteilles ");
NombreBouteille =parseInt(NombreBouteille);
let BouteillesCasses = 0;
let BouteillesRestantes =0;


while( NombreBouteille >= 0 ){

    //Condition pour respecter la grammaire
    if(BouteillesCasses == -1){
        console.log(`${NombreBouteille} Bouteilles de bieres au mur`);
        console.log(`${NombreBouteille} Bouteilles de bieres `);

        BouteillesCasses = BouteillesCasses + 1;

        if(BouteillesCasses > NombreBouteille){
            console.log(`pas de bouteille de bière sur le mur`);
            break;
        }
        else {
            console.log(`Prenez-en ${BouteillesCasses}, passez les autour de vous`);
            NombreBouteille = NombreBouteille - BouteillesCasses;
        }

    }
    //Condition pour respecter la grammaire
    else if(BouteillesCasses == 0){

        console.log(`${NombreBouteille} Bouteilles de bieres au mur`);
        console.log(`${NombreBouteille} Bouteilles de bieres au mur`);
        console.log(`${NombreBouteille} Bouteilles de bieres `);

        BouteillesCasses = BouteillesCasses + 1;

        if(BouteillesCasses > NombreBouteille){
            console.log(`pas de bouteille de bière sur le mur`);
            break;
        }
        else {
            console.log(`Prenez-en ${BouteillesCasses}, passez le autour de vous`);
            NombreBouteille = NombreBouteille - BouteillesCasses;
        }

    } 
    //Condition pour respecter la grammaire
    else{
        console.log(`${NombreBouteille} Bouteilles de bieres au mur`);
        console.log(`${NombreBouteille} Bouteilles de bieres au mur`);
        console.log(`${NombreBouteille} Bouteilles de bieres `);

        BouteillesCasses = BouteillesCasses + 1;

        if(BouteillesCasses > NombreBouteille){
            console.log(`pas de bouteille de bière sur le mur`);
            break;
        }
        else {
            console.log(`Prenez-en ${BouteillesCasses}, passez les autour de vous`);
            NombreBouteille = NombreBouteille - BouteillesCasses;
        }
        
    }
    
}

