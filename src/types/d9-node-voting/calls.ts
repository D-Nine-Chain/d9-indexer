import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v110 from '../v110'

export const submitCandidacy =  {
    name: 'D9NodeVoting.submit_candidacy',
    v110: new CallType(
        'D9NodeVoting.submit_candidacy',
        sts.unit()
    ),
}

export const addVotingInterest =  {
    name: 'D9NodeVoting.add_voting_interest',
    v110: new CallType(
        'D9NodeVoting.add_voting_interest',
        sts.struct({
            beneficiaryVoter: v110.AccountId32,
            mainPool: v110.AccountId32,
            amountToBurn: sts.bigint(),
            burnContract: v110.AccountId32,
            weight: v110.Weight,
        })
    ),
}

export const delegateVotes =  {
    name: 'D9NodeVoting.delegate_votes',
    v110: new CallType(
        'D9NodeVoting.delegate_votes',
        sts.struct({
            delegations: sts.array(() => v110.ValidatorDelegations),
        })
    ),
}

export const removeCandidacy =  {
    name: 'D9NodeVoting.remove_candidacy',
    v110: new CallType(
        'D9NodeVoting.remove_candidacy',
        sts.unit()
    ),
}

export const tryRemoveVotesFromCandidate =  {
    name: 'D9NodeVoting.try_remove_votes_from_candidate',
    v110: new CallType(
        'D9NodeVoting.try_remove_votes_from_candidate',
        sts.struct({
            candidate: v110.AccountId32,
            votes: sts.bigint(),
        })
    ),
}

export const redistributeVotes =  {
    name: 'D9NodeVoting.redistribute_votes',
    v110: new CallType(
        'D9NodeVoting.redistribute_votes',
        sts.struct({
            from: v110.AccountId32,
            to: v110.AccountId32,
        })
    ),
}
