require('dotenv').config();
const Alpaca = require('@alpacahq/alpaca-trade-api');

//grabs the env keys to be used to verify ALPACA access
const alpaca_key = process.env.ALPACA_KEY;
const alpaca_secret_key = process.env.ALPACA_SECRET_KEY;

// Blueprint for options needed to verify alpaca
interface OptionsInterface {
    keyId: string | undefined,
    secretKey: string | undefined,
    paper: boolean
}

//options needed to verify alpaca
const options: OptionsInterface = {
    keyId: alpaca_key,
    secretKey :alpaca_secret_key,
    paper: true
}

//sets up the instance for alpaca using current users information
const alpaca = new Alpaca(options);

//grabs and returns the users account information
async function getAccountInfo(): Promise<object>{
   const account =  alpaca.getAccount()
   .then((account: object) => {
    console.log('Your Account Info:   ', account)
    return account

})


   return account;

}
//test function
// getAccountInfo();

interface BuyParamsInterface {
    symbol: string,
    qty: number,
    side: string,
    type: string,
    time_in_force: string
}

//TO-DO:
//make this dynamic - this is currently hard coded
const buyParams: BuyParamsInterface = {
    symbol: 'BTC/USD',
    qty: 1,
    side: 'sell',
    type: 'market',
    time_in_force: 'gtc',
}

//TO-DO:
//replace buyParams with dynamic parmeter
async function createOrder(buyParams: BuyParamsInterface):
Promise<object>{

    const order = await alpaca.createOrder(buyParams)
    .then((order: object) => {
        console.log("Order Details:  ", order);
        return order
    })


    return order;
};
// test function call
createOrder(buyParams)

// const newOrder = Promise.resolve(createOrder(buyParams));

// newOrder.then((value)=> {
//     console.log(value)
// });


//View positions

async function getPositions():Promise<[object]>{
    const positions = await alpaca.getPositions()
    .then((positions: [object])=> {
        positions.forEach((position) =>
        console.log(position))

        return positions;
    })

    return positions;
}

//test getPositions
// getPositions()
