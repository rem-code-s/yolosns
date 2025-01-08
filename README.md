example script add controller to neuron (ii)

```
const {addControllerToMyNeurons} = await import("https://unpkg.com/yolosns-2@1.1.6/dist/esm/index.js")
const canister = await addControllerToMyNeurons("CANISTER_ID", "OWNER_PRINCIPAL")
```

example script transaction (ii)

```
const { transferToken } = await import("https://unpkg.com/yolosns-2@1.1.6/dist/esm/index.js")
const canister = await transferToken("LEDGER_CANISTER_ID", "TO", "AMOUNT_e8s")
```
