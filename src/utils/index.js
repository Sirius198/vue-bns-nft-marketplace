import { LCDClient } from '@terra-money/terra.js'

const terra = new LCDClient({
  URL: 'https://lcd.terra.dev',
  chainID: 'columbus-5',
})

export async function call() {

  const marketParams = await terra.market.parameters();

  const exchangeRates = await terra.oracle.exchangeRates();

  console.log(marketParams.base_pool);

  console.log(exchangeRates.get('uusd'));

}
