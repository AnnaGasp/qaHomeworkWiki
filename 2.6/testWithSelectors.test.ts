import {Builder, By, Capabilities, WebDriver} from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("Filling in the blanks", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    });
    afterAll(async () => {
        await driver.quit();
    })

    const hdrInput: By = By.xpath('//input[@name="hdrInput"]');
    const mkeInput: By = By.xpath('//input[@name="mkeInput"]');
    const oaiInput: By = By.xpath('//input[@name="oriInput"]');
    const nameInput: By = By.xpath('//input[@name="namInput"]');
    const clrBtn: By = By.css('#clearBtn');
    const submitBtn: By = By.css('#saveBtn');
    const errorMsg: By = By.xpath('//p[@id="validHeader"]'); 

    test("filling in the blanks for real", async () => {
        await driver.findElement(hdrInput).sendKeys("Change this")
        await driver.findElement(mkeInput).sendKeys("change this")
        await driver.findElement(oaiInput).sendKeys("change this")
        await driver.findElement(nameInput).sendKeys("change this")
        await driver.findElement(submitBtn).click()
       let errorMsgText = await driver.findElement(errorMsg).getText()
        expect(errorMsgText).toContain("Errors Received:")
        await driver.findElement(clrBtn).click()
        
    })
})