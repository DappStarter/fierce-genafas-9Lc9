require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan recipe noble slow grid argue slot general'; 
let testAccounts = [
"0xd944c8d4cca1296a8248c9c07d56464408b098cc3a85acaaf1f2fdb0ec943e7e",
"0x9bb3cef3bd73c27b6180877d83b6d16ad58f36863803d63eaf9ad4e96103b4c6",
"0xe01f870c1bd18ec8c102e2631618a7856135e96dceeab85d66a306e4f0567dc1",
"0x286b1388b6180356badedabe0cda6301e1ed71e523390da3de1ebd8ea283b737",
"0x9c5401b44a36633cba34d2010a47c83da7812a395a052ae50465c1aea6a50b7a",
"0x3b32cf4dfa3132983f8c76edcb1e83846a11c484d16b1bbbdedffb1d015dc757",
"0xe39afee83c93b1d490b74125f0b6cfade032b33f90d2ebbe5fb77aa289e0862c",
"0x734e7acba6cbc242a7d501dc299b75e168b1d51bbe58b47981e28a15b4acf516",
"0xd786e172b7945207394ca92421cb45b3cdebeebcd729dfb179bffa42a09590ac",
"0xaf50b60417ace4b76f1622c5a5116a5dd8962aca8ac405c4c98764ceca8244f4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

