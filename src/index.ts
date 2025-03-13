import { Actor, HttpAgent } from "@dfinity/agent";
import { SnsGovernanceCanister, SnsNeuronPermissionType } from "@dfinity/sns";
import { Principal } from "@dfinity/principal";
import { AuthClient } from "@dfinity/auth-client";
import { _SERVICE as _GOV_SERVICE, idlFactory as gov_idlFactory } from "./governance";
import { _SERVICE as _LEDGER_SERVICE, idlFactory as ledger_idlFactory } from "./ledger";
import { hexStringToUint8Array } from "@dfinity/utils";

export { SnsGovernanceCanister } from "@dfinity/sns";

const createAuthClient = (): Promise<AuthClient> =>
  AuthClient.create({
    idleOptions: {
      disableIdle: true,
      disableDefaultIdleCallback: true,
    },
  });

export const addControllerToMyNeurons = async (canisterId: string, principal: string) => {
  const authClient = await createAuthClient();

  const agent = new HttpAgent({
    host: "https://icp-api.io",
    identity: authClient.getIdentity(),
  });

  const x = SnsGovernanceCanister.create({
    canisterId: Principal.fromText(canisterId),
    agent,
  });

  const neurons = await x.listNeurons({ principal: authClient.getIdentity().getPrincipal(), limit: 1000 });
  neurons.forEach(async (neuron) => {
    const neuronId = neuron.id[0];
    if (neuronId) {
      await x.addNeuronPermissions({
        neuronId,
        permissions: [
          SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_VOTE,
          SnsNeuronPermissionType.NEURON_PERMISSION_TYPE_SUBMIT_PROPOSAL,
        ],
        principal: Principal.fromText(principal),
      });
    }
  });

  return x;
};

export const bitfinityAddNeuron = async (canisterId: string, principal: string) => {
  const _window = window as any;

  const connected = await _window.ic.infinityWallet.requestConnect({
    host: "https://icp-api.io",
    whitelist: [canisterId],
  });

  console.log("connected", connected);

  const actor: _GOV_SERVICE = await _window.ic.infinityWallet.createActor({
    canisterId,
    interfaceFactory: gov_idlFactory,
  });

  console.log("actor", actor);

  const bitfinityPrincipal: Principal = await _window.ic.infinityWallet.getPrincipal();
  console.log("principal", bitfinityPrincipal.toString());

  const neurons = await actor.list_neurons({ of_principal: [bitfinityPrincipal], limit: 1000, start_page_at: [] });
  console.log("neurons", neurons);

  neurons.neurons.forEach(async (neuron) => {
    const neuronId = neuron.id[0];
    if (neuronId) {
      await actor.manage_neuron({
        subaccount: neuronId.id,
        command: [
          {
            AddNeuronPermissions: {
              permissions_to_add: [
                {
                  permissions: [3, 4],
                },
              ],
              principal_id: [Principal.fromText(principal)],
            },
          },
        ],
      });
    }
  });
};

export const transferToken = async (ledgerCanisterId: string, to: string, amount: bigint) => {
  const authClient = await createAuthClient();

  const agent = HttpAgent.createSync({
    host: "https://icp-api.io",
    identity: authClient.getIdentity(),
  });

  let actor = Actor.createActor<_LEDGER_SERVICE>(ledger_idlFactory, {
    canisterId: Principal.fromText(ledgerCanisterId),
    agent,
  });

  let transfer = await actor.icrc1_transfer({
    to: {
      owner: Principal.fromText(to),
      subaccount: [],
    },
    fee: [],
    memo: [],
    from_subaccount: [],
    created_at_time: [],
    amount: amount,
  });

  return transfer;
};

export const transferTokenFromSubaccount = async (
  ledgerCanisterId: string,
  to: string,
  amount: bigint,
  subaccount: string
) => {
  const authClient = await createAuthClient();

  const agent = HttpAgent.createSync({
    host: "https://icp-api.io",
    identity: authClient.getIdentity(),
  });

  let actor = Actor.createActor<_LEDGER_SERVICE>(ledger_idlFactory, {
    canisterId: Principal.fromText(ledgerCanisterId),
    agent,
  });

  const hexSubaccount = hexStringToUint8Array(subaccount);

  let transfer = await actor.icrc1_transfer({
    to: {
      owner: Principal.fromText(to),
      subaccount: [],
    },
    fee: [],
    memo: [],
    from_subaccount: [hexSubaccount],
    created_at_time: [],
    amount: amount,
  });

  return transfer;
};
