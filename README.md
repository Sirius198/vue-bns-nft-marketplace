# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Console
Deploy as Admin
```
terrain deploy bakenstake --signer nft_minter --network testnet --set-signer-as-admin
```

Deploy
```
terrain deploy bakenstake --signer nft_minter --network testnet
```

Migrate
```
terrain contract:migrate bakenstake --signer nft_minter --network testnet
```

Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock
sudo chmod 666 /var/run/docker.sock
