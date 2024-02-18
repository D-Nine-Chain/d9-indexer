import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v112 from '../v112'

export const candidacySubmitted =  {
    name: 'D9NodeVoting.CandidacySubmitted',
    v112: new EventType(
        'D9NodeVoting.CandidacySubmitted',
        v112.AccountId32
    ),
}

export const votesDelegatedBy =  {
    name: 'D9NodeVoting.VotesDelegatedBy',
    v112: new EventType(
        'D9NodeVoting.VotesDelegatedBy',
        v112.AccountId32
    ),
}

export const candidacyRemoved =  {
    name: 'D9NodeVoting.CandidacyRemoved',
    v112: new EventType(
        'D9NodeVoting.CandidacyRemoved',
        v112.AccountId32
    ),
}
