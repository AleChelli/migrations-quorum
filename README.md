# Migrations-quorum
The following repository introduce Truffle Migrations that works with Quorum

## Prerequisites

### Create an Account on a Node
On the Node console you must enter:

```sh
personal.newAccount("passphrase")
```

The account is saved in encrypted format. You must remember this passphrase to unlock your account in the future.


## Config JS
In this file it is important to declare a new network in order to deploy the smart contract with the right parameters. The most important parameters are:
- host: Quorum Node IP (where you create the Wallet)
- type: Leave Quorum
- from: Address of the created account
- passphrase: Passphrase of the created account

## Migrations
Replace the file migrations with those present in the repositories, taking care to correctly replace the names of the contracts
