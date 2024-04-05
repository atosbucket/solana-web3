import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();
// const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Finished!`);