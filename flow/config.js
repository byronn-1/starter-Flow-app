import { config } from "@onflow/fcl";

config({
  "accessNode.api": "https://access-testnet.onflow.org",
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
  "0xProfile": "0xba1132bc08f82fe2" // The account address where the Profile smart contract lives on Testnet
})

//accessNode.api key specifies the address of a Flow access node. Flow provides these, but in the future access to Flow may be provided by other 3rd parties, through their own access nodes.

//discovery.wallet is an address that points to a service that lists FCL compatible wallets. Flow's FCL Discovery service is a service that FCL wallet providers can be added to, and be made 'discoverable' to any application that uses the discovery.wallet endpoint.