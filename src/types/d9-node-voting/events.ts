import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v110 from '../v110'

export const candidacySubmitted =  {
    name: 'D9NodeVoting.CandidacySubmitted',
    v110: new EventType(
        'D9NodeVoting.CandidacySubmitted',
        v110.AccountId32
    ),
}

export const votesDelegatedBy =  {
    name: 'D9NodeVoting.VotesDelegatedBy',
    v110: new EventType(
        'D9NodeVoting.VotesDelegatedBy',
        v110.AccountId32
    ),
}

export const candidacyRemoved =  {
    name: 'D9NodeVoting.CandidacyRemoved',
    v110: new EventType(
        'D9NodeVoting.CandidacyRemoved',
        v110.AccountId32
    ),
}
