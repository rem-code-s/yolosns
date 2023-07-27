import { HttpAgent } from "@dfinity/agent";
import { SnsGovernanceCanister, SnsNeuronPermissionType } from "@dfinity/sns";
import { Principal } from "@dfinity/principal";
import { AuthClient } from "@dfinity/auth-client";
import { _SERVICE, idlFactory } from "./governance";

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

  const actor: _SERVICE = await _window.ic.infinityWallet.createActor({
    canisterId,
    interfaceFactory: idlFactory,
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
