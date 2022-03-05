require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name remember pizza pupil include end army genius'; 
let testAccounts = [
"0x3461e7e88d45f305fe380f02388aa9a1bc4985cfb446d92215e72379231a19cf",
"0x3d7eea673d04353a118ce8d40c540f12127688a1dccf3ad0c7cee7befb9a083f",
"0x97af9176271b93c6f902954c037ed005e4dae7878b1e57c3ee034c2b683ef189",
"0x370e8f8f99f7ceb8dc59bbe7437f266e1f359bf3622e6f7cb651ea6073e53132",
"0x47899071e930867919d707789a39fcb0f4fc2aa2614fded6c374830aad067b5f",
"0x23099f3728474240c6e6b4c387416d00455f40c3fb4ac7c129f0d20874f99c01",
"0x331e681dfd3522a7bad0c4313c263b1df14fbf9dde377715607eb2b8c4e8ff37",
"0x8bc8277a2372ac73e5a43f8c9d939269769ba3c015a271823952d91cd813679b",
"0xf75e2516fcd7168f967dbe27aa58d16b442eea2a25cbc830adaf1f05a58eb447",
"0x191defa68a7f70352f6b5eab31a149a69dd93bc03580ecba60f740354dbd0f59"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


