//JSX står for Javascript XML. JSX er en syntax-forlengelse av Javascript som ofte brukes med React. Gjør at du kan skrive HTML elementer og komponenter i en Javascript-fil. 

import React from 'react'; //imports React library

//HomePage er et funksjonelt komponent. Funksjonelle komponeneter er en enklere måte å skrive komponenter i React. Javascript-funksjoner som returnerer JSX-elementer. Dette komponentet har ikke noen "state" eller livssyklus, noe som gjør den til et rent funksjonelt komponent.
const HomePage = () => {  // bruker "arrow function" for å definere en React funksjonell komponent som heter HomePage. Arrow-funksjoner er snarvei-syntakser for å definere funksjoner i Javascript. Inne i () skal det være argumenter for funksjoner. Argumenter=noe du gir koden der og da. "Her er verdien jeg gir deg". 
    
    return ( //koden under beskriver hvordan UI-et skal se ut. 
        <div className="text-center"> 
            <h1 className="display-4">Welcome</h1>
            <p>Welcome to Brookhill adoption center. We specialize in rehoming dogs and horses to loving homes for a fresh start. Please see our animals available for adoption, and contact us for any inquires through email.</p>
        </div>
    );
};
export default HomePage; //exporterer HomePage-komponenten som default eksport fra modulen. Dvs at når andre filer importerer fra denne modulen, vil de få HomePage-komponenten som default. 