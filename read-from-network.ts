import { Connection, clusterApiUrl, LAMPORTS_PER_SOL , PublicKey } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];
if(!suppliedPublicKey) {
    throw new Error("Provide a public key to check the balance of!");
}

const connection = new Connection(clusterApiUrl('devnet'));

const address = new PublicKey(suppliedPublicKey);
const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(
    `✅ Finished! The balance for the wallet at address ${address} is ${balance}!`
);