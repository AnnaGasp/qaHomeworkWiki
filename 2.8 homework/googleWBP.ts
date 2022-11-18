import{By} from "selenium-webdriver";
import{basePage} from "./basePageTest"; 

export class Google extends basePage {
    searchBar: By = By.name ('q');
    results: By = By.id ('rso');

    constructor () {
        super ({url: 'https://google.com'});
    };

    async doSearch (searchTerm: string){
        return this.setInput(this.searchBar, `${searchTerm}\n`);
    }

    async getResults (){
        return this.getText(this.results);
    }

}