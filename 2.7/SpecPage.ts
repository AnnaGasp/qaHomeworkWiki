import{ Builder, WebDriver, Capabilities, By, until, WebElement} from "selenium-webdriver";
const chromedriver = require("chromedriver");
const driver: WebDriver= new Builder().withCapabilities(Capabilities.chrome()).build();

export class SpecPage{
    driver:WebDriver;
    url:string = "https://www.google.com";
    searchbar: By = By.xpath('//input[@name="q"]');
    results: By =By.id("rso");

    constructor(diver:WebDriver){
       this.driver=driver;
    };

    async navigate(){
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.searchbar));
    }
    async doSearch(keys:any){
        await this.driver.wait(until.elementLocated(this.searchbar))
        return this.driver.findElement(this.searchbar).sendKeys(`${keys}\n`);
    }
    async getResults(){
        await this.driver.wait(until.elementLocated(this.results))
        return this.driver.findElement(this.results).getText()
    }
}