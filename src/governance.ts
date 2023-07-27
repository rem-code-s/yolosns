import type { Principal } from "@dfinity/principal";
import type { ActorMethod } from "@dfinity/agent";

export interface Account {
  owner: [] | [Principal];
  subaccount: [] | [Subaccount];
}
export type Action =
  | {
      ManageNervousSystemParameters: NervousSystemParameters;
    }
  | { AddGenericNervousSystemFunction: NervousSystemFunction }
  | { RemoveGenericNervousSystemFunction: bigint }
  | { UpgradeSnsToNextVersion: {} }
  | { RegisterDappCanisters: RegisterDappCanisters }
  | { TransferSnsTreasuryFunds: TransferSnsTreasuryFunds }
  | { UpgradeSnsControlledCanister: UpgradeSnsControlledCanister }
  | { DeregisterDappCanisters: DeregisterDappCanisters }
  | { Unspecified: {} }
  | { ManageSnsMetadata: ManageSnsMetadata }
  | {
      ExecuteGenericNervousSystemFunction: ExecuteGenericNervousSystemFunction;
    }
  | { Motion: Motion };
export interface AddNeuronPermissions {
  permissions_to_add: [] | [NeuronPermissionList];
  principal_id: [] | [Principal];
}
export interface Amount {
  e8s: bigint;
}
export interface Ballot {
  vote: number;
  cast_timestamp_seconds: bigint;
  voting_power: bigint;
}
export type By = { MemoAndController: MemoAndController } | { NeuronId: {} };
export interface CanisterStatusResultV2 {
  status: CanisterStatusType;
  memory_size: bigint;
  cycles: bigint;
  settings: DefiniteCanisterSettingsArgs;
  idle_cycles_burned_per_day: bigint;
  module_hash: [] | [Uint8Array | number[]];
}
export type CanisterStatusType = { stopped: null } | { stopping: null } | { running: null };
export interface ChangeAutoStakeMaturity {
  requested_setting_for_auto_stake_maturity: boolean;
}
export interface ClaimOrRefresh {
  by: [] | [By];
}
export interface ClaimOrRefreshResponse {
  refreshed_neuron_id: [] | [NeuronId];
}
export interface ClaimSwapNeuronsRequest {
  neuron_parameters: Array<NeuronParameters>;
}
export interface ClaimSwapNeuronsResponse {
  claim_swap_neurons_result: [] | [ClaimSwapNeuronsResult];
}
export type ClaimSwapNeuronsResult = { Ok: ClaimedSwapNeurons } | { Err: number };
export interface ClaimedSwapNeurons {
  swap_neurons: Array<SwapNeuron>;
}
export type Command =
  | { Split: Split }
  | { Follow: Follow }
  | { DisburseMaturity: DisburseMaturity }
  | { ClaimOrRefresh: ClaimOrRefresh }
  | { Configure: Configure }
  | { RegisterVote: RegisterVote }
  | { MakeProposal: Proposal }
  | { StakeMaturity: StakeMaturity }
  | { RemoveNeuronPermissions: RemoveNeuronPermissions }
  | { AddNeuronPermissions: AddNeuronPermissions }
  | { MergeMaturity: MergeMaturity }
  | { Disburse: Disburse };
export type Command_1 =
  | { Error: GovernanceError }
  | { Split: SplitResponse }
  | { Follow: {} }
  | { DisburseMaturity: DisburseMaturityResponse }
  | { ClaimOrRefresh: ClaimOrRefreshResponse }
  | { Configure: {} }
  | { RegisterVote: {} }
  | { MakeProposal: GetProposal }
  | { RemoveNeuronPermission: {} }
  | { StakeMaturity: StakeMaturityResponse }
  | { MergeMaturity: MergeMaturityResponse }
  | { Disburse: DisburseResponse }
  | { AddNeuronPermission: {} };
export type Command_2 =
  | { Split: Split }
  | { Follow: Follow }
  | { DisburseMaturity: DisburseMaturity }
  | { Configure: Configure }
  | { RegisterVote: RegisterVote }
  | { SyncCommand: {} }
  | { MakeProposal: Proposal }
  | { FinalizeDisburseMaturity: FinalizeDisburseMaturity }
  | { ClaimOrRefreshNeuron: ClaimOrRefresh }
  | { RemoveNeuronPermissions: RemoveNeuronPermissions }
  | { AddNeuronPermissions: AddNeuronPermissions }
  | { MergeMaturity: MergeMaturity }
  | { Disburse: Disburse };
export interface Configure {
  operation: [] | [Operation];
}
export interface DefaultFollowees {
  followees: Array<[bigint, Followees]>;
}
export interface DefiniteCanisterSettingsArgs {
  freezing_threshold: bigint;
  controllers: Array<Principal>;
  memory_allocation: bigint;
  compute_allocation: bigint;
}
export interface DeregisterDappCanisters {
  canister_ids: Array<Principal>;
  new_controllers: Array<Principal>;
}
export interface Disburse {
  to_account: [] | [Account];
  amount: [] | [Amount];
}
export interface DisburseMaturity {
  to_account: [] | [Account];
  percentage_to_disburse: number;
}
export interface DisburseMaturityInProgress {
  timestamp_of_disbursement_seconds: bigint;
  amount_e8s: bigint;
  account_to_disburse_to: [] | [Account];
}
export interface DisburseMaturityResponse {
  amount_disbursed_e8s: bigint;
}
export interface DisburseResponse {
  transfer_block_height: bigint;
}
export type DissolveState = { DissolveDelaySeconds: bigint } | { WhenDissolvedTimestampSeconds: bigint };
export interface ExecuteGenericNervousSystemFunction {
  function_id: bigint;
  payload: Uint8Array | number[];
}
export interface FinalizeDisburseMaturity {
  amount_to_be_disbursed_e8s: bigint;
  to_account: [] | [Account];
}
export interface Follow {
  function_id: bigint;
  followees: Array<NeuronId>;
}
export interface Followees {
  followees: Array<NeuronId>;
}
export type FunctionType =
  | { NativeNervousSystemFunction: {} }
  | { GenericNervousSystemFunction: GenericNervousSystemFunction };
export interface GenericNervousSystemFunction {
  validator_canister_id: [] | [Principal];
  target_canister_id: [] | [Principal];
  validator_method_name: [] | [string];
  target_method_name: [] | [string];
}
export interface GetMaturityModulationResponse {
  maturity_modulation: [] | [MaturityModulation];
}
export interface GetMetadataResponse {
  url: [] | [string];
  logo: [] | [string];
  name: [] | [string];
  description: [] | [string];
}
export interface GetModeResponse {
  mode: [] | [number];
}
export interface GetNeuron {
  neuron_id: [] | [NeuronId];
}
export interface GetNeuronResponse {
  result: [] | [Result];
}
export interface GetProposal {
  proposal_id: [] | [ProposalId];
}
export interface GetProposalResponse {
  result: [] | [Result_1];
}
export interface GetRunningSnsVersionResponse {
  deployed_version: [] | [Version];
  pending_version: [] | [UpgradeInProgress];
}
export interface GetSnsInitializationParametersResponse {
  sns_initialization_parameters: string;
}
export interface Governance {
  root_canister_id: [] | [Principal];
  id_to_nervous_system_functions: Array<[bigint, NervousSystemFunction]>;
  metrics: [] | [GovernanceCachedMetrics];
  maturity_modulation: [] | [MaturityModulation];
  mode: number;
  parameters: [] | [NervousSystemParameters];
  is_finalizing_disburse_maturity: [] | [boolean];
  deployed_version: [] | [Version];
  sns_initialization_parameters: string;
  latest_reward_event: [] | [RewardEvent];
  pending_version: [] | [UpgradeInProgress];
  swap_canister_id: [] | [Principal];
  ledger_canister_id: [] | [Principal];
  proposals: Array<[bigint, ProposalData]>;
  in_flight_commands: Array<[string, NeuronInFlightCommand]>;
  sns_metadata: [] | [ManageSnsMetadata];
  neurons: Array<[string, Neuron]>;
  genesis_timestamp_seconds: bigint;
}
export interface GovernanceCachedMetrics {
  not_dissolving_neurons_e8s_buckets: Array<[bigint, number]>;
  garbage_collectable_neurons_count: bigint;
  neurons_with_invalid_stake_count: bigint;
  not_dissolving_neurons_count_buckets: Array<[bigint, bigint]>;
  neurons_with_less_than_6_months_dissolve_delay_count: bigint;
  dissolved_neurons_count: bigint;
  total_staked_e8s: bigint;
  total_supply_governance_tokens: bigint;
  not_dissolving_neurons_count: bigint;
  dissolved_neurons_e8s: bigint;
  neurons_with_less_than_6_months_dissolve_delay_e8s: bigint;
  dissolving_neurons_count_buckets: Array<[bigint, bigint]>;
  dissolving_neurons_count: bigint;
  dissolving_neurons_e8s_buckets: Array<[bigint, number]>;
  timestamp_seconds: bigint;
}
export interface GovernanceError {
  error_message: string;
  error_type: number;
}
export interface IncreaseDissolveDelay {
  additional_dissolve_delay_seconds: number;
}
export interface ListNervousSystemFunctionsResponse {
  reserved_ids: BigUint64Array | bigint[];
  functions: Array<NervousSystemFunction>;
}
export interface ListNeurons {
  of_principal: [] | [Principal];
  limit: number;
  start_page_at: [] | [NeuronId];
}
export interface ListNeuronsResponse {
  neurons: Array<Neuron>;
}
export interface ListProposals {
  include_reward_status: Int32Array | number[];
  before_proposal: [] | [ProposalId];
  limit: number;
  exclude_type: BigUint64Array | bigint[];
  include_status: Int32Array | number[];
}
export interface ListProposalsResponse {
  proposals: Array<ProposalData>;
}
export interface ManageNeuron {
  subaccount: Uint8Array | number[];
  command: [] | [Command];
}
export interface ManageNeuronResponse {
  command: [] | [Command_1];
}
export interface ManageSnsMetadata {
  url: [] | [string];
  logo: [] | [string];
  name: [] | [string];
  description: [] | [string];
}
export interface MaturityModulation {
  current_basis_points: [] | [number];
  updated_at_timestamp_seconds: [] | [bigint];
}
export interface MemoAndController {
  controller: [] | [Principal];
  memo: bigint;
}
export interface MergeMaturity {
  percentage_to_merge: number;
}
export interface MergeMaturityResponse {
  merged_maturity_e8s: bigint;
  new_stake_e8s: bigint;
}
export interface Motion {
  motion_text: string;
}
export interface NervousSystemFunction {
  id: bigint;
  name: string;
  description: [] | [string];
  function_type: [] | [FunctionType];
}
export interface NervousSystemParameters {
  default_followees: [] | [DefaultFollowees];
  max_dissolve_delay_seconds: [] | [bigint];
  max_dissolve_delay_bonus_percentage: [] | [bigint];
  max_followees_per_function: [] | [bigint];
  neuron_claimer_permissions: [] | [NeuronPermissionList];
  neuron_minimum_stake_e8s: [] | [bigint];
  max_neuron_age_for_age_bonus: [] | [bigint];
  initial_voting_period_seconds: [] | [bigint];
  neuron_minimum_dissolve_delay_to_vote_seconds: [] | [bigint];
  reject_cost_e8s: [] | [bigint];
  max_proposals_to_keep_per_action: [] | [number];
  wait_for_quiet_deadline_increase_seconds: [] | [bigint];
  max_number_of_neurons: [] | [bigint];
  transaction_fee_e8s: [] | [bigint];
  max_number_of_proposals_with_ballots: [] | [bigint];
  max_age_bonus_percentage: [] | [bigint];
  neuron_grantable_permissions: [] | [NeuronPermissionList];
  voting_rewards_parameters: [] | [VotingRewardsParameters];
  maturity_modulation_disabled: [] | [boolean];
  max_number_of_principals_per_neuron: [] | [bigint];
}
export interface Neuron {
  id: [] | [NeuronId];
  staked_maturity_e8s_equivalent: [] | [bigint];
  permissions: Array<NeuronPermission>;
  maturity_e8s_equivalent: bigint;
  cached_neuron_stake_e8s: bigint;
  created_timestamp_seconds: bigint;
  source_nns_neuron_id: [] | [bigint];
  auto_stake_maturity: [] | [boolean];
  aging_since_timestamp_seconds: bigint;
  dissolve_state: [] | [DissolveState];
  voting_power_percentage_multiplier: bigint;
  vesting_period_seconds: [] | [bigint];
  disburse_maturity_in_progress: Array<DisburseMaturityInProgress>;
  followees: Array<[bigint, Followees]>;
  neuron_fees_e8s: bigint;
}
export interface NeuronId {
  id: Uint8Array | number[];
}
export interface NeuronInFlightCommand {
  command: [] | [Command_2];
  timestamp: bigint;
}
export interface NeuronParameters {
  controller: [] | [Principal];
  dissolve_delay_seconds: [] | [bigint];
  source_nns_neuron_id: [] | [bigint];
  stake_e8s: [] | [bigint];
  followees: Array<NeuronId>;
  hotkey: [] | [Principal];
  neuron_id: [] | [NeuronId];
}
export interface NeuronPermission {
  principal: [] | [Principal];
  permission_type: Int32Array | number[];
}
export interface NeuronPermissionList {
  permissions: Int32Array | number[];
}
export type Operation =
  | {
      ChangeAutoStakeMaturity: ChangeAutoStakeMaturity;
    }
  | { StopDissolving: {} }
  | { StartDissolving: {} }
  | { IncreaseDissolveDelay: IncreaseDissolveDelay }
  | { SetDissolveTimestamp: SetDissolveTimestamp };
export interface Proposal {
  url: string;
  title: string;
  action: [] | [Action];
  summary: string;
}
export interface ProposalData {
  id: [] | [ProposalId];
  payload_text_rendering: [] | [string];
  action: bigint;
  failure_reason: [] | [GovernanceError];
  ballots: Array<[string, Ballot]>;
  reward_event_round: bigint;
  failed_timestamp_seconds: bigint;
  reward_event_end_timestamp_seconds: [] | [bigint];
  proposal_creation_timestamp_seconds: bigint;
  initial_voting_period_seconds: bigint;
  reject_cost_e8s: bigint;
  latest_tally: [] | [Tally];
  wait_for_quiet_deadline_increase_seconds: bigint;
  decided_timestamp_seconds: bigint;
  proposal: [] | [Proposal];
  proposer: [] | [NeuronId];
  wait_for_quiet_state: [] | [WaitForQuietState];
  is_eligible_for_rewards: boolean;
  executed_timestamp_seconds: bigint;
}
export interface ProposalId {
  id: bigint;
}
export interface RegisterDappCanisters {
  canister_ids: Array<Principal>;
}
export interface RegisterVote {
  vote: number;
  proposal: [] | [ProposalId];
}
export interface RemoveNeuronPermissions {
  permissions_to_remove: [] | [NeuronPermissionList];
  principal_id: [] | [Principal];
}
export type Result = { Error: GovernanceError } | { Neuron: Neuron };
export type Result_1 = { Error: GovernanceError } | { Proposal: ProposalData };
export interface RewardEvent {
  rounds_since_last_distribution: [] | [bigint];
  actual_timestamp_seconds: bigint;
  end_timestamp_seconds: [] | [bigint];
  distributed_e8s_equivalent: bigint;
  round: bigint;
  settled_proposals: Array<ProposalId>;
}
export interface SetDissolveTimestamp {
  dissolve_timestamp_seconds: bigint;
}
export interface SetMode {
  mode: number;
}
export interface Split {
  memo: bigint;
  amount_e8s: bigint;
}
export interface SplitResponse {
  created_neuron_id: [] | [NeuronId];
}
export interface StakeMaturity {
  percentage_to_stake: [] | [number];
}
export interface StakeMaturityResponse {
  maturity_e8s: bigint;
  staked_maturity_e8s: bigint;
}
export interface Subaccount {
  subaccount: Uint8Array | number[];
}
export interface SwapNeuron {
  id: [] | [NeuronId];
  status: number;
}
export interface Tally {
  no: bigint;
  yes: bigint;
  total: bigint;
  timestamp_seconds: bigint;
}
export interface TransferSnsTreasuryFunds {
  from_treasury: number;
  to_principal: [] | [Principal];
  to_subaccount: [] | [Subaccount];
  memo: [] | [bigint];
  amount_e8s: bigint;
}
export interface UpgradeInProgress {
  mark_failed_at_seconds: bigint;
  checking_upgrade_lock: bigint;
  proposal_id: bigint;
  target_version: [] | [Version];
}
export interface UpgradeSnsControlledCanister {
  new_canister_wasm: Uint8Array | number[];
  mode: [] | [number];
  canister_id: [] | [Principal];
  canister_upgrade_arg: [] | [Uint8Array | number[]];
}
export interface Version {
  archive_wasm_hash: Uint8Array | number[];
  root_wasm_hash: Uint8Array | number[];
  swap_wasm_hash: Uint8Array | number[];
  ledger_wasm_hash: Uint8Array | number[];
  governance_wasm_hash: Uint8Array | number[];
  index_wasm_hash: Uint8Array | number[];
}
export interface VotingRewardsParameters {
  final_reward_rate_basis_points: [] | [bigint];
  initial_reward_rate_basis_points: [] | [bigint];
  reward_rate_transition_duration_seconds: [] | [bigint];
  round_duration_seconds: [] | [bigint];
}
export interface WaitForQuietState {
  current_deadline_timestamp_seconds: bigint;
}
export interface _SERVICE {
  claim_swap_neurons: ActorMethod<[ClaimSwapNeuronsRequest], ClaimSwapNeuronsResponse>;
  fail_stuck_upgrade_in_progress: ActorMethod<[{}], {}>;
  get_build_metadata: ActorMethod<[], string>;
  get_latest_reward_event: ActorMethod<[], RewardEvent>;
  get_maturity_modulation: ActorMethod<[{}], GetMaturityModulationResponse>;
  get_metadata: ActorMethod<[{}], GetMetadataResponse>;
  get_mode: ActorMethod<[{}], GetModeResponse>;
  get_nervous_system_parameters: ActorMethod<[null], NervousSystemParameters>;
  get_neuron: ActorMethod<[GetNeuron], GetNeuronResponse>;
  get_proposal: ActorMethod<[GetProposal], GetProposalResponse>;
  get_root_canister_status: ActorMethod<[null], CanisterStatusResultV2>;
  get_running_sns_version: ActorMethod<[{}], GetRunningSnsVersionResponse>;
  get_sns_initialization_parameters: ActorMethod<[{}], GetSnsInitializationParametersResponse>;
  list_nervous_system_functions: ActorMethod<[], ListNervousSystemFunctionsResponse>;
  list_neurons: ActorMethod<[ListNeurons], ListNeuronsResponse>;
  list_proposals: ActorMethod<[ListProposals], ListProposalsResponse>;
  manage_neuron: ActorMethod<[ManageNeuron], ManageNeuronResponse>;
  set_mode: ActorMethod<[SetMode], {}>;
}

export const idlFactory = ({ IDL }: any) => {
  const GenericNervousSystemFunction = IDL.Record({
    validator_canister_id: IDL.Opt(IDL.Principal),
    target_canister_id: IDL.Opt(IDL.Principal),
    validator_method_name: IDL.Opt(IDL.Text),
    target_method_name: IDL.Opt(IDL.Text),
  });
  const FunctionType = IDL.Variant({
    NativeNervousSystemFunction: IDL.Record({}),
    GenericNervousSystemFunction: GenericNervousSystemFunction,
  });
  const NervousSystemFunction = IDL.Record({
    id: IDL.Nat64,
    name: IDL.Text,
    description: IDL.Opt(IDL.Text),
    function_type: IDL.Opt(FunctionType),
  });
  const GovernanceCachedMetrics = IDL.Record({
    not_dissolving_neurons_e8s_buckets: IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Float64)),
    garbage_collectable_neurons_count: IDL.Nat64,
    neurons_with_invalid_stake_count: IDL.Nat64,
    not_dissolving_neurons_count_buckets: IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64)),
    neurons_with_less_than_6_months_dissolve_delay_count: IDL.Nat64,
    dissolved_neurons_count: IDL.Nat64,
    total_staked_e8s: IDL.Nat64,
    total_supply_governance_tokens: IDL.Nat64,
    not_dissolving_neurons_count: IDL.Nat64,
    dissolved_neurons_e8s: IDL.Nat64,
    neurons_with_less_than_6_months_dissolve_delay_e8s: IDL.Nat64,
    dissolving_neurons_count_buckets: IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Nat64)),
    dissolving_neurons_count: IDL.Nat64,
    dissolving_neurons_e8s_buckets: IDL.Vec(IDL.Tuple(IDL.Nat64, IDL.Float64)),
    timestamp_seconds: IDL.Nat64,
  });
  const MaturityModulation = IDL.Record({
    current_basis_points: IDL.Opt(IDL.Int32),
    updated_at_timestamp_seconds: IDL.Opt(IDL.Nat64),
  });
  const NeuronId = IDL.Record({ id: IDL.Vec(IDL.Nat8) });
  const Followees = IDL.Record({ followees: IDL.Vec(NeuronId) });
  const DefaultFollowees = IDL.Record({
    followees: IDL.Vec(IDL.Tuple(IDL.Nat64, Followees)),
  });
  const NeuronPermissionList = IDL.Record({
    permissions: IDL.Vec(IDL.Int32),
  });
  const VotingRewardsParameters = IDL.Record({
    final_reward_rate_basis_points: IDL.Opt(IDL.Nat64),
    initial_reward_rate_basis_points: IDL.Opt(IDL.Nat64),
    reward_rate_transition_duration_seconds: IDL.Opt(IDL.Nat64),
    round_duration_seconds: IDL.Opt(IDL.Nat64),
  });
  const NervousSystemParameters = IDL.Record({
    default_followees: IDL.Opt(DefaultFollowees),
    max_dissolve_delay_seconds: IDL.Opt(IDL.Nat64),
    max_dissolve_delay_bonus_percentage: IDL.Opt(IDL.Nat64),
    max_followees_per_function: IDL.Opt(IDL.Nat64),
    neuron_claimer_permissions: IDL.Opt(NeuronPermissionList),
    neuron_minimum_stake_e8s: IDL.Opt(IDL.Nat64),
    max_neuron_age_for_age_bonus: IDL.Opt(IDL.Nat64),
    initial_voting_period_seconds: IDL.Opt(IDL.Nat64),
    neuron_minimum_dissolve_delay_to_vote_seconds: IDL.Opt(IDL.Nat64),
    reject_cost_e8s: IDL.Opt(IDL.Nat64),
    max_proposals_to_keep_per_action: IDL.Opt(IDL.Nat32),
    wait_for_quiet_deadline_increase_seconds: IDL.Opt(IDL.Nat64),
    max_number_of_neurons: IDL.Opt(IDL.Nat64),
    transaction_fee_e8s: IDL.Opt(IDL.Nat64),
    max_number_of_proposals_with_ballots: IDL.Opt(IDL.Nat64),
    max_age_bonus_percentage: IDL.Opt(IDL.Nat64),
    neuron_grantable_permissions: IDL.Opt(NeuronPermissionList),
    voting_rewards_parameters: IDL.Opt(VotingRewardsParameters),
    maturity_modulation_disabled: IDL.Opt(IDL.Bool),
    max_number_of_principals_per_neuron: IDL.Opt(IDL.Nat64),
  });
  const Version = IDL.Record({
    archive_wasm_hash: IDL.Vec(IDL.Nat8),
    root_wasm_hash: IDL.Vec(IDL.Nat8),
    swap_wasm_hash: IDL.Vec(IDL.Nat8),
    ledger_wasm_hash: IDL.Vec(IDL.Nat8),
    governance_wasm_hash: IDL.Vec(IDL.Nat8),
    index_wasm_hash: IDL.Vec(IDL.Nat8),
  });
  const ProposalId = IDL.Record({ id: IDL.Nat64 });
  const RewardEvent = IDL.Record({
    rounds_since_last_distribution: IDL.Opt(IDL.Nat64),
    actual_timestamp_seconds: IDL.Nat64,
    end_timestamp_seconds: IDL.Opt(IDL.Nat64),
    distributed_e8s_equivalent: IDL.Nat64,
    round: IDL.Nat64,
    settled_proposals: IDL.Vec(ProposalId),
  });
  const UpgradeInProgress = IDL.Record({
    mark_failed_at_seconds: IDL.Nat64,
    checking_upgrade_lock: IDL.Nat64,
    proposal_id: IDL.Nat64,
    target_version: IDL.Opt(Version),
  });
  const GovernanceError = IDL.Record({
    error_message: IDL.Text,
    error_type: IDL.Int32,
  });
  const Ballot = IDL.Record({
    vote: IDL.Int32,
    cast_timestamp_seconds: IDL.Nat64,
    voting_power: IDL.Nat64,
  });
  const Tally = IDL.Record({
    no: IDL.Nat64,
    yes: IDL.Nat64,
    total: IDL.Nat64,
    timestamp_seconds: IDL.Nat64,
  });
  const RegisterDappCanisters = IDL.Record({
    canister_ids: IDL.Vec(IDL.Principal),
  });
  const Subaccount = IDL.Record({ subaccount: IDL.Vec(IDL.Nat8) });
  const TransferSnsTreasuryFunds = IDL.Record({
    from_treasury: IDL.Int32,
    to_principal: IDL.Opt(IDL.Principal),
    to_subaccount: IDL.Opt(Subaccount),
    memo: IDL.Opt(IDL.Nat64),
    amount_e8s: IDL.Nat64,
  });
  const UpgradeSnsControlledCanister = IDL.Record({
    new_canister_wasm: IDL.Vec(IDL.Nat8),
    mode: IDL.Opt(IDL.Int32),
    canister_id: IDL.Opt(IDL.Principal),
    canister_upgrade_arg: IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const DeregisterDappCanisters = IDL.Record({
    canister_ids: IDL.Vec(IDL.Principal),
    new_controllers: IDL.Vec(IDL.Principal),
  });
  const ManageSnsMetadata = IDL.Record({
    url: IDL.Opt(IDL.Text),
    logo: IDL.Opt(IDL.Text),
    name: IDL.Opt(IDL.Text),
    description: IDL.Opt(IDL.Text),
  });
  const ExecuteGenericNervousSystemFunction = IDL.Record({
    function_id: IDL.Nat64,
    payload: IDL.Vec(IDL.Nat8),
  });
  const Motion = IDL.Record({ motion_text: IDL.Text });
  const Action = IDL.Variant({
    ManageNervousSystemParameters: NervousSystemParameters,
    AddGenericNervousSystemFunction: NervousSystemFunction,
    RemoveGenericNervousSystemFunction: IDL.Nat64,
    UpgradeSnsToNextVersion: IDL.Record({}),
    RegisterDappCanisters: RegisterDappCanisters,
    TransferSnsTreasuryFunds: TransferSnsTreasuryFunds,
    UpgradeSnsControlledCanister: UpgradeSnsControlledCanister,
    DeregisterDappCanisters: DeregisterDappCanisters,
    Unspecified: IDL.Record({}),
    ManageSnsMetadata: ManageSnsMetadata,
    ExecuteGenericNervousSystemFunction: ExecuteGenericNervousSystemFunction,
    Motion: Motion,
  });
  const Proposal = IDL.Record({
    url: IDL.Text,
    title: IDL.Text,
    action: IDL.Opt(Action),
    summary: IDL.Text,
  });
  const WaitForQuietState = IDL.Record({
    current_deadline_timestamp_seconds: IDL.Nat64,
  });
  const ProposalData = IDL.Record({
    id: IDL.Opt(ProposalId),
    payload_text_rendering: IDL.Opt(IDL.Text),
    action: IDL.Nat64,
    failure_reason: IDL.Opt(GovernanceError),
    ballots: IDL.Vec(IDL.Tuple(IDL.Text, Ballot)),
    reward_event_round: IDL.Nat64,
    failed_timestamp_seconds: IDL.Nat64,
    reward_event_end_timestamp_seconds: IDL.Opt(IDL.Nat64),
    proposal_creation_timestamp_seconds: IDL.Nat64,
    initial_voting_period_seconds: IDL.Nat64,
    reject_cost_e8s: IDL.Nat64,
    latest_tally: IDL.Opt(Tally),
    wait_for_quiet_deadline_increase_seconds: IDL.Nat64,
    decided_timestamp_seconds: IDL.Nat64,
    proposal: IDL.Opt(Proposal),
    proposer: IDL.Opt(NeuronId),
    wait_for_quiet_state: IDL.Opt(WaitForQuietState),
    is_eligible_for_rewards: IDL.Bool,
    executed_timestamp_seconds: IDL.Nat64,
  });
  const Split = IDL.Record({ memo: IDL.Nat64, amount_e8s: IDL.Nat64 });
  const Follow = IDL.Record({
    function_id: IDL.Nat64,
    followees: IDL.Vec(NeuronId),
  });
  const Account = IDL.Record({
    owner: IDL.Opt(IDL.Principal),
    subaccount: IDL.Opt(Subaccount),
  });
  const DisburseMaturity = IDL.Record({
    to_account: IDL.Opt(Account),
    percentage_to_disburse: IDL.Nat32,
  });
  const ChangeAutoStakeMaturity = IDL.Record({
    requested_setting_for_auto_stake_maturity: IDL.Bool,
  });
  const IncreaseDissolveDelay = IDL.Record({
    additional_dissolve_delay_seconds: IDL.Nat32,
  });
  const SetDissolveTimestamp = IDL.Record({
    dissolve_timestamp_seconds: IDL.Nat64,
  });
  const Operation = IDL.Variant({
    ChangeAutoStakeMaturity: ChangeAutoStakeMaturity,
    StopDissolving: IDL.Record({}),
    StartDissolving: IDL.Record({}),
    IncreaseDissolveDelay: IncreaseDissolveDelay,
    SetDissolveTimestamp: SetDissolveTimestamp,
  });
  const Configure = IDL.Record({ operation: IDL.Opt(Operation) });
  const RegisterVote = IDL.Record({
    vote: IDL.Int32,
    proposal: IDL.Opt(ProposalId),
  });
  const FinalizeDisburseMaturity = IDL.Record({
    amount_to_be_disbursed_e8s: IDL.Nat64,
    to_account: IDL.Opt(Account),
  });
  const MemoAndController = IDL.Record({
    controller: IDL.Opt(IDL.Principal),
    memo: IDL.Nat64,
  });
  const By = IDL.Variant({
    MemoAndController: MemoAndController,
    NeuronId: IDL.Record({}),
  });
  const ClaimOrRefresh = IDL.Record({ by: IDL.Opt(By) });
  const RemoveNeuronPermissions = IDL.Record({
    permissions_to_remove: IDL.Opt(NeuronPermissionList),
    principal_id: IDL.Opt(IDL.Principal),
  });
  const AddNeuronPermissions = IDL.Record({
    permissions_to_add: IDL.Opt(NeuronPermissionList),
    principal_id: IDL.Opt(IDL.Principal),
  });
  const MergeMaturity = IDL.Record({ percentage_to_merge: IDL.Nat32 });
  const Amount = IDL.Record({ e8s: IDL.Nat64 });
  const Disburse = IDL.Record({
    to_account: IDL.Opt(Account),
    amount: IDL.Opt(Amount),
  });
  const Command_2 = IDL.Variant({
    Split: Split,
    Follow: Follow,
    DisburseMaturity: DisburseMaturity,
    Configure: Configure,
    RegisterVote: RegisterVote,
    SyncCommand: IDL.Record({}),
    MakeProposal: Proposal,
    FinalizeDisburseMaturity: FinalizeDisburseMaturity,
    ClaimOrRefreshNeuron: ClaimOrRefresh,
    RemoveNeuronPermissions: RemoveNeuronPermissions,
    AddNeuronPermissions: AddNeuronPermissions,
    MergeMaturity: MergeMaturity,
    Disburse: Disburse,
  });
  const NeuronInFlightCommand = IDL.Record({
    command: IDL.Opt(Command_2),
    timestamp: IDL.Nat64,
  });
  const NeuronPermission = IDL.Record({
    principal: IDL.Opt(IDL.Principal),
    permission_type: IDL.Vec(IDL.Int32),
  });
  const DissolveState = IDL.Variant({
    DissolveDelaySeconds: IDL.Nat64,
    WhenDissolvedTimestampSeconds: IDL.Nat64,
  });
  const DisburseMaturityInProgress = IDL.Record({
    timestamp_of_disbursement_seconds: IDL.Nat64,
    amount_e8s: IDL.Nat64,
    account_to_disburse_to: IDL.Opt(Account),
  });
  const Neuron = IDL.Record({
    id: IDL.Opt(NeuronId),
    staked_maturity_e8s_equivalent: IDL.Opt(IDL.Nat64),
    permissions: IDL.Vec(NeuronPermission),
    maturity_e8s_equivalent: IDL.Nat64,
    cached_neuron_stake_e8s: IDL.Nat64,
    created_timestamp_seconds: IDL.Nat64,
    source_nns_neuron_id: IDL.Opt(IDL.Nat64),
    auto_stake_maturity: IDL.Opt(IDL.Bool),
    aging_since_timestamp_seconds: IDL.Nat64,
    dissolve_state: IDL.Opt(DissolveState),
    voting_power_percentage_multiplier: IDL.Nat64,
    vesting_period_seconds: IDL.Opt(IDL.Nat64),
    disburse_maturity_in_progress: IDL.Vec(DisburseMaturityInProgress),
    followees: IDL.Vec(IDL.Tuple(IDL.Nat64, Followees)),
    neuron_fees_e8s: IDL.Nat64,
  });
  const Governance = IDL.Record({
    root_canister_id: IDL.Opt(IDL.Principal),
    id_to_nervous_system_functions: IDL.Vec(IDL.Tuple(IDL.Nat64, NervousSystemFunction)),
    metrics: IDL.Opt(GovernanceCachedMetrics),
    maturity_modulation: IDL.Opt(MaturityModulation),
    mode: IDL.Int32,
    parameters: IDL.Opt(NervousSystemParameters),
    is_finalizing_disburse_maturity: IDL.Opt(IDL.Bool),
    deployed_version: IDL.Opt(Version),
    sns_initialization_parameters: IDL.Text,
    latest_reward_event: IDL.Opt(RewardEvent),
    pending_version: IDL.Opt(UpgradeInProgress),
    swap_canister_id: IDL.Opt(IDL.Principal),
    ledger_canister_id: IDL.Opt(IDL.Principal),
    proposals: IDL.Vec(IDL.Tuple(IDL.Nat64, ProposalData)),
    in_flight_commands: IDL.Vec(IDL.Tuple(IDL.Text, NeuronInFlightCommand)),
    sns_metadata: IDL.Opt(ManageSnsMetadata),
    neurons: IDL.Vec(IDL.Tuple(IDL.Text, Neuron)),
    genesis_timestamp_seconds: IDL.Nat64,
  });
  const NeuronParameters = IDL.Record({
    controller: IDL.Opt(IDL.Principal),
    dissolve_delay_seconds: IDL.Opt(IDL.Nat64),
    source_nns_neuron_id: IDL.Opt(IDL.Nat64),
    stake_e8s: IDL.Opt(IDL.Nat64),
    followees: IDL.Vec(NeuronId),
    hotkey: IDL.Opt(IDL.Principal),
    neuron_id: IDL.Opt(NeuronId),
  });
  const ClaimSwapNeuronsRequest = IDL.Record({
    neuron_parameters: IDL.Vec(NeuronParameters),
  });
  const SwapNeuron = IDL.Record({
    id: IDL.Opt(NeuronId),
    status: IDL.Int32,
  });
  const ClaimedSwapNeurons = IDL.Record({
    swap_neurons: IDL.Vec(SwapNeuron),
  });
  const ClaimSwapNeuronsResult = IDL.Variant({
    Ok: ClaimedSwapNeurons,
    Err: IDL.Int32,
  });
  const ClaimSwapNeuronsResponse = IDL.Record({
    claim_swap_neurons_result: IDL.Opt(ClaimSwapNeuronsResult),
  });
  const GetMaturityModulationResponse = IDL.Record({
    maturity_modulation: IDL.Opt(MaturityModulation),
  });
  const GetMetadataResponse = IDL.Record({
    url: IDL.Opt(IDL.Text),
    logo: IDL.Opt(IDL.Text),
    name: IDL.Opt(IDL.Text),
    description: IDL.Opt(IDL.Text),
  });
  const GetModeResponse = IDL.Record({ mode: IDL.Opt(IDL.Int32) });
  const GetNeuron = IDL.Record({ neuron_id: IDL.Opt(NeuronId) });
  const Result = IDL.Variant({ Error: GovernanceError, Neuron: Neuron });
  const GetNeuronResponse = IDL.Record({ result: IDL.Opt(Result) });
  const GetProposal = IDL.Record({ proposal_id: IDL.Opt(ProposalId) });
  const Result_1 = IDL.Variant({
    Error: GovernanceError,
    Proposal: ProposalData,
  });
  const GetProposalResponse = IDL.Record({ result: IDL.Opt(Result_1) });
  const CanisterStatusType = IDL.Variant({
    stopped: IDL.Null,
    stopping: IDL.Null,
    running: IDL.Null,
  });
  const DefiniteCanisterSettingsArgs = IDL.Record({
    freezing_threshold: IDL.Nat,
    controllers: IDL.Vec(IDL.Principal),
    memory_allocation: IDL.Nat,
    compute_allocation: IDL.Nat,
  });
  const CanisterStatusResultV2 = IDL.Record({
    status: CanisterStatusType,
    memory_size: IDL.Nat,
    cycles: IDL.Nat,
    settings: DefiniteCanisterSettingsArgs,
    idle_cycles_burned_per_day: IDL.Nat,
    module_hash: IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const GetRunningSnsVersionResponse = IDL.Record({
    deployed_version: IDL.Opt(Version),
    pending_version: IDL.Opt(UpgradeInProgress),
  });
  const GetSnsInitializationParametersResponse = IDL.Record({
    sns_initialization_parameters: IDL.Text,
  });
  const ListNervousSystemFunctionsResponse = IDL.Record({
    reserved_ids: IDL.Vec(IDL.Nat64),
    functions: IDL.Vec(NervousSystemFunction),
  });
  const ListNeurons = IDL.Record({
    of_principal: IDL.Opt(IDL.Principal),
    limit: IDL.Nat32,
    start_page_at: IDL.Opt(NeuronId),
  });
  const ListNeuronsResponse = IDL.Record({ neurons: IDL.Vec(Neuron) });
  const ListProposals = IDL.Record({
    include_reward_status: IDL.Vec(IDL.Int32),
    before_proposal: IDL.Opt(ProposalId),
    limit: IDL.Nat32,
    exclude_type: IDL.Vec(IDL.Nat64),
    include_status: IDL.Vec(IDL.Int32),
  });
  const ListProposalsResponse = IDL.Record({
    proposals: IDL.Vec(ProposalData),
  });
  const StakeMaturity = IDL.Record({
    percentage_to_stake: IDL.Opt(IDL.Nat32),
  });
  const Command = IDL.Variant({
    Split: Split,
    Follow: Follow,
    DisburseMaturity: DisburseMaturity,
    ClaimOrRefresh: ClaimOrRefresh,
    Configure: Configure,
    RegisterVote: RegisterVote,
    MakeProposal: Proposal,
    StakeMaturity: StakeMaturity,
    RemoveNeuronPermissions: RemoveNeuronPermissions,
    AddNeuronPermissions: AddNeuronPermissions,
    MergeMaturity: MergeMaturity,
    Disburse: Disburse,
  });
  const ManageNeuron = IDL.Record({
    subaccount: IDL.Vec(IDL.Nat8),
    command: IDL.Opt(Command),
  });
  const SplitResponse = IDL.Record({ created_neuron_id: IDL.Opt(NeuronId) });
  const DisburseMaturityResponse = IDL.Record({
    amount_disbursed_e8s: IDL.Nat64,
  });
  const ClaimOrRefreshResponse = IDL.Record({
    refreshed_neuron_id: IDL.Opt(NeuronId),
  });
  const StakeMaturityResponse = IDL.Record({
    maturity_e8s: IDL.Nat64,
    staked_maturity_e8s: IDL.Nat64,
  });
  const MergeMaturityResponse = IDL.Record({
    merged_maturity_e8s: IDL.Nat64,
    new_stake_e8s: IDL.Nat64,
  });
  const DisburseResponse = IDL.Record({ transfer_block_height: IDL.Nat64 });
  const Command_1 = IDL.Variant({
    Error: GovernanceError,
    Split: SplitResponse,
    Follow: IDL.Record({}),
    DisburseMaturity: DisburseMaturityResponse,
    ClaimOrRefresh: ClaimOrRefreshResponse,
    Configure: IDL.Record({}),
    RegisterVote: IDL.Record({}),
    MakeProposal: GetProposal,
    RemoveNeuronPermission: IDL.Record({}),
    StakeMaturity: StakeMaturityResponse,
    MergeMaturity: MergeMaturityResponse,
    Disburse: DisburseResponse,
    AddNeuronPermission: IDL.Record({}),
  });
  const ManageNeuronResponse = IDL.Record({ command: IDL.Opt(Command_1) });
  const SetMode = IDL.Record({ mode: IDL.Int32 });
  return IDL.Service({
    claim_swap_neurons: IDL.Func([ClaimSwapNeuronsRequest], [ClaimSwapNeuronsResponse], []),
    fail_stuck_upgrade_in_progress: IDL.Func([IDL.Record({})], [IDL.Record({})], []),
    get_build_metadata: IDL.Func([], [IDL.Text], ["query"]),
    get_latest_reward_event: IDL.Func([], [RewardEvent], ["query"]),
    get_maturity_modulation: IDL.Func([IDL.Record({})], [GetMaturityModulationResponse], []),
    get_metadata: IDL.Func([IDL.Record({})], [GetMetadataResponse], ["query"]),
    get_mode: IDL.Func([IDL.Record({})], [GetModeResponse], ["query"]),
    get_nervous_system_parameters: IDL.Func([IDL.Null], [NervousSystemParameters], ["query"]),
    get_neuron: IDL.Func([GetNeuron], [GetNeuronResponse], ["query"]),
    get_proposal: IDL.Func([GetProposal], [GetProposalResponse], ["query"]),
    get_root_canister_status: IDL.Func([IDL.Null], [CanisterStatusResultV2], []),
    get_running_sns_version: IDL.Func([IDL.Record({})], [GetRunningSnsVersionResponse], ["query"]),
    get_sns_initialization_parameters: IDL.Func([IDL.Record({})], [GetSnsInitializationParametersResponse], ["query"]),
    list_nervous_system_functions: IDL.Func([], [ListNervousSystemFunctionsResponse], ["query"]),
    list_neurons: IDL.Func([ListNeurons], [ListNeuronsResponse], ["query"]),
    list_proposals: IDL.Func([ListProposals], [ListProposalsResponse], ["query"]),
    manage_neuron: IDL.Func([ManageNeuron], [ManageNeuronResponse], []),
    set_mode: IDL.Func([SetMode], [IDL.Record({})], []),
  });
};
