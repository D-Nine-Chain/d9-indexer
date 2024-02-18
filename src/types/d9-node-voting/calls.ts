import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v112 from '../v112'
import * as v113 from '../v113'

export const submitCandidacy =  {
    name: 'D9NodeVoting.submit_candidacy',
    v112: new CallType(
        'D9NodeVoting.submit_candidacy',
        sts.struct({
            candidateMetadata: v112.NodeMetadataStruct,
        })
    ),
}

export const addVotingInterest =  {
    name: 'D9NodeVoting.add_voting_interest',
    v112: new CallType(
        'D9NodeVoting.add_voting_interest',
        sts.struct({
            beneficiaryVoter: v112.AccountId32,
            mainPool: v112.AccountId32,
            amountToBurn: sts.bigint(),
            burnContract: v112.AccountId32,
            weight: v112.Weight,
        })
    ),
    v113: new CallType(
        'D9NodeVoting.add_voting_interest',
        sts.struct({
            beneficiaryVoter: v113.AccountId32,
            mainPool: v113.AccountId32,
            amountToBurn: sts.bigint(),
            burnContract: v113.AccountId32,
        })
    ),
}

export const delegateVotes =  {
    name: 'D9NodeVoting.delegate_votes',
    v112: new CallType(
        'D9NodeVoting.delegate_votes',
        sts.struct({
            delegations: sts.array(() => v112.ValidatorDelegations),
        })
    ),
}

export const removeCandidacy =  {
    name: 'D9NodeVoting.remove_candidacy',
    v112: new CallType(
        'D9NodeVoting.remove_candidacy',
        sts.unit()
    ),
}

export const tryRemoveVotesFromCandidate =  {
    name: 'D9NodeVoting.try_remove_votes_from_candidate',
    v112: new CallType(
        'D9NodeVoting.try_remove_votes_from_candidate',
        sts.struct({
            candidate: v112.AccountId32,
            votes: sts.bigint(),
        })
    ),
}

export const redistributeVotes =  {
    name: 'D9NodeVoting.redistribute_votes',
    v112: new CallType(
        'D9NodeVoting.redistribute_votes',
        sts.struct({
            from: v112.AccountId32,
            to: v112.AccountId32,
        })
    ),
}

export const changeCandidateName =  {
    name: 'D9NodeVoting.change_candidate_name',
    v112: new CallType(
        'D9NodeVoting.change_candidate_name',
        sts.struct({
            name: v112.BoundedVec,
        })
    ),
}

export const changeCandidateSupporterShare =  {
    name: 'D9NodeVoting.change_candidate_supporter_share',
    v112: new CallType(
        'D9NodeVoting.change_candidate_supporter_share',
        sts.struct({
            sharingPercent: sts.number(),
        })
    ),
}

export const setPalletAdmin =  {
    name: 'D9NodeVoting.set_pallet_admin',
    v113: new CallType(
        'D9NodeVoting.set_pallet_admin',
        sts.struct({
            newAdmin: v113.AccountId32,
        })
    ),
}
