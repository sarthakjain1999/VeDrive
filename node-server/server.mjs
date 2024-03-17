import express from "express";
import cors from 'cors';

import {
  clauseBuilder,
  coder,
  vechain_sdk_core_ethers
} from '@vechain/sdk-core';
import {
  HttpClient,
  ThorClient
} from '@vechain/sdk-network';
import { Interface } from 'ethers';
import { expect } from 'expect';

const contractABI = JSON.stringify([
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "oldOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnerSet",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "changeOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAmountVetInPool",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "userData",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "userWallet",
				"type": "address"
			}
		],
		"name": "payEarnedVet",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "setSafeAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]);

const interfac = new Interface(contractABI);

const soloNetwork = new HttpClient("http://127.0.0.1:8669");
const thorSoloClient = new ThorClient(soloNetwork);

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  const tx = thorSoloClient.contracts.executeContractTransaction(
    '99f0500549792796c14fed62011a51081dc5b5e68fe8bd8a13b86be829c4fd36',
    "0xA3977A044fE2e38c602e3183033BD29fFF97b80d",
    interfac.getFunction('payEarnedVet'),
    [10, "0x0f872421dc479f3c11edd89512731814d0598db5"]
  );

  //await tx.wait();

  res.send('Welcome to my server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});