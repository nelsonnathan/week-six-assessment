import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
    await driver.sleep(3000)
});

test('Clicking on the upper left cell adds an X to the square', async () => {
    let upperLeft = await (await driver).findElement(By.id('cell-0'))
    await upperLeft.click()

    await driver.sleep(3000)
})

test('Clicking on the upper right cell adds an X to the square', async () => {
    let upperRight = await (await driver).findElement(By.id('cell-2'))
    await upperRight.click()

    await driver.sleep(3000)
})

test('Clicking on the bottom right cell adds an X to the square', async () => {
    let bottomRight = await (await driver).findElement(By.id('cell-8'))
    await bottomRight.click()

    await driver.sleep(3000)
})

// test('Check that the computer adds an O to a square after our first move', async () => {
//     // let button = await (await driver).findElement(By.id('start-game'));
//     // await button.click()
//     // let upperLeft = await (await driver).findElement(By.id('cell-0'))
//     // await upperLeft.click()
//     let upperMiddle = await (await driver).findElement(By.id('cell-1'))
//     await upperMiddle.getText
// }
// )