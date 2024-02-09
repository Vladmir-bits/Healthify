const { Connection, PublicKey, Transaction, SystemProgram, sendAndConfirmTransaction } = require('@solana/web3.js');

const SOLANA_NETWORK = 'https://api.devnet.solana.com'; // Using devnet for development purposes

const connection = new Connection(SOLANA_NETWORK, 'confirmed');



// Fetching the balance for a given public key
async function getBalance(publicKey) {
  return connection.getBalance(new PublicKey(publicKey));
}

// Sending SOL tokens from one account to another
async function sendSOL(senderPrivateKey, receiverPublicKey, amount) {
  const senderKeyPair = new PublicKey(senderPrivateKey);
  const receiverKey = new PublicKey(receiverPublicKey);
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: senderKeyPair.publicKey,
      toPubkey: receiverKey,
      lamports: amount,
    }),
  );

  await sendAndConfirmTransaction(connection, transaction, [senderKeyPair]);
}

// ... More functions related to Solana, smart contracts, and token handling ...

module.exports = { getBalance, sendSOL };
