import {HttpAgent} from "@dfinity/agent";
import {SnsGovernanceCanister} from "@dfinity/sns";
import {Principal} from "@dfinity/principal";
import {AuthClient} from "@dfinity/auth-client";

export {SnsGovernanceCanister} from '@dfinity/sns';

const createAuthClient = (): Promise<AuthClient> =>
    AuthClient.create({
        idleOptions: {
            disableIdle: true,
            disableDefaultIdleCallback: true
        }
    });

export const initSnsGovernanceCanister = async (canisterId :string) => {
    const authClient = await createAuthClient()

    const agent = new HttpAgent({
        identity: authClient.getIdentity()
    });

    return SnsGovernanceCanister.create({
        canisterId: Principal.fromText(canisterId),
        agent
    })
}