import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl('mainnet-beta'));
const address = new PublicKey('H86rFbnEMtJ5AVRRurctCPGxvQ5TC3vvtaWSAPycV8rg');
const balance = await connection.getBalance(address);

console.log(`The balance of the account at ${address} is ${balance} lamports`); 
console.log(`✅ Finished!`)