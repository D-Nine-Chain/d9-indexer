import {Abi, Bytes, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
    "source": {
        "hash": "0x7a88ca43f88f1468755756c58c8fcac582c83a176b183301e672712efe955d03",
        "language": "ink! 4.3.0",
        "compiler": "rustc 1.72.1",
        "build_info": {
            "build_mode": "Release",
            "cargo_contract_version": "3.2.0",
            "rust_toolchain": "stable-x86_64-apple-darwin",
            "wasm_opt_settings": {
                "keep_debug_symbols": false,
                "optimization_passes": "Z"
            }
        }
    },
    "contract": {
        "name": "d9_usdt",
        "version": "0.1.0",
        "authors": [
            "D9Devs"
        ]
    },
    "spec": {
        "constructors": [
            {
                "args": [
                    {
                        "label": "initial_supply",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "new",
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink_primitives",
                        "ConstructorResult"
                    ],
                    "type": 1
                },
                "selector": "0x9bae9d5e"
            }
        ],
        "docs": [],
        "environment": {
            "accountId": {
                "displayName": [
                    "AccountId"
                ],
                "type": 4
            },
            "balance": {
                "displayName": [
                    "Balance"
                ],
                "type": 0
            },
            "blockNumber": {
                "displayName": [
                    "BlockNumber"
                ],
                "type": 16
            },
            "chainExtension": {
                "displayName": [
                    "ChainExtension"
                ],
                "type": 17
            },
            "hash": {
                "displayName": [
                    "Hash"
                ],
                "type": 14
            },
            "maxEventTopics": 4,
            "timestamp": {
                "displayName": [
                    "Timestamp"
                ],
                "type": 15
            }
        },
        "events": [
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "owner",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "spender",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "amount",
                        "type": {
                            "displayName": [
                                "u128"
                            ],
                            "type": 0
                        }
                    }
                ],
                "docs": [],
                "label": "Approval"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "from",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 13
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "to",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 13
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "value",
                        "type": {
                            "displayName": [
                                "u128"
                            ],
                            "type": 0
                        }
                    }
                ],
                "docs": [],
                "label": "Transfer"
            }
        ],
        "lang_error": {
            "displayName": [
                "ink",
                "LangError"
            ],
            "type": 3
        },
        "messages": [
            {
                "args": [
                    {
                        "label": "to",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "label": "value",
                        "type": {
                            "displayName": [
                                "u128"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "_data",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 7
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "transfer",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0x84a15da1"
            },
            {
                "args": [
                    {
                        "label": "from",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "label": "to",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "label": "value",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "_data",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 7
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "transfer_from",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0x0b396f18"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "PSP22::total_supply",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 12
                },
                "selector": "0x162df8c2"
            },
            {
                "args": [
                    {
                        "label": "to",
                        "type": {
                            "displayName": [
                                "psp22_external",
                                "TransferInput1"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "label": "value",
                        "type": {
                            "displayName": [
                                "psp22_external",
                                "TransferInput2"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "data",
                        "type": {
                            "displayName": [
                                "psp22_external",
                                "TransferInput3"
                            ],
                            "type": 7
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22::transfer",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0xdb20f9f5"
            },
            {
                "args": [
                    {
                        "label": "spender",
                        "type": {
                            "displayName": [
                                "psp22_external",
                                "DecreaseAllowanceInput1"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "label": "delta_value",
                        "type": {
                            "displayName": [
                                "psp22_external",
                                "DecreaseAllowanceInput2"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22::decrease_allowance",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0xfecb57d5"
            },
            {
                "args": [
                    {
                        "label": "owner",
                        "type": {
                            "displayName": [
                                "psp22_external",
                                "BalanceOfInput1"
                            ],
                            "type": 4
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22::balance_of",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 12
                },
                "selector": "0x6568382f"
            },
            {
                "args": [
                    {
                        "label": "from",
                        "type": {
                            "displayName": [
                                "psp22_external",
                                "TransferFromInput1"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "label": "to",
                        "type": {
                            "displayName": [
                                "psp22_external",
                                "TransferFromInput2"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "label": "value",
                        "type": {
                            "displayName": [
                                "psp22_external",
                                "TransferFromInput3"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "data",
                        "type": {
                            "displayName": [
                                "psp22_external",
                                "TransferFromInput4"
                            ],
                            "type": 7
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22::transfer_from",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0x54b3c76e"
            },
            {
                "args": [
                    {
                        "label": "spender",
                        "type": {
                            "displayName": [
                                "psp22_external",
                                "IncreaseAllowanceInput1"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "label": "delta_value",
                        "type": {
                            "displayName": [
                                "psp22_external",
                                "IncreaseAllowanceInput2"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22::increase_allowance",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0x96d6b57a"
            },
            {
                "args": [
                    {
                        "label": "spender",
                        "type": {
                            "displayName": [
                                "psp22_external",
                                "ApproveInput1"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "label": "value",
                        "type": {
                            "displayName": [
                                "psp22_external",
                                "ApproveInput2"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22::approve",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0xb20f1bbd"
            },
            {
                "args": [
                    {
                        "label": "owner",
                        "type": {
                            "displayName": [
                                "psp22_external",
                                "AllowanceInput1"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "label": "spender",
                        "type": {
                            "displayName": [
                                "psp22_external",
                                "AllowanceInput2"
                            ],
                            "type": 4
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22::allowance",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 12
                },
                "selector": "0x4d47d921"
            }
        ]
    },
    "storage": {
        "root": {
            "layout": {
                "struct": {
                    "fields": [
                        {
                            "layout": {
                                "struct": {
                                    "fields": [
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x270a8fc3",
                                                            "ty": 0
                                                        }
                                                    },
                                                    "root_key": "0x270a8fc3"
                                                }
                                            },
                                            "name": "supply"
                                        },
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0xc2664826",
                                                            "ty": 0
                                                        }
                                                    },
                                                    "root_key": "0xc2664826"
                                                }
                                            },
                                            "name": "balances"
                                        },
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0xf8d71e22",
                                                            "ty": 0
                                                        }
                                                    },
                                                    "root_key": "0xf8d71e22"
                                                }
                                            },
                                            "name": "allowances"
                                        }
                                    ],
                                    "name": "Data"
                                }
                            },
                            "name": "psp22"
                        }
                    ],
                    "name": "D9USDT"
                }
            },
            "root_key": "0x00000000"
        }
    },
    "types": [
        {
            "id": 0,
            "type": {
                "def": {
                    "primitive": "u128"
                }
            }
        },
        {
            "id": 1,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 2
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 3
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 2
                    },
                    {
                        "name": "E",
                        "type": 3
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 2,
            "type": {
                "def": {
                    "tuple": []
                }
            }
        },
        {
            "id": 3,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 1,
                                "name": "CouldNotReadInput"
                            }
                        ]
                    }
                },
                "path": [
                    "ink_primitives",
                    "LangError"
                ]
            }
        },
        {
            "id": 4,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "type": 5,
                                "typeName": "[u8; 32]"
                            }
                        ]
                    }
                },
                "path": [
                    "ink_primitives",
                    "types",
                    "AccountId"
                ]
            }
        },
        {
            "id": 5,
            "type": {
                "def": {
                    "array": {
                        "len": 32,
                        "type": 6
                    }
                }
            }
        },
        {
            "id": 6,
            "type": {
                "def": {
                    "primitive": "u8"
                }
            }
        },
        {
            "id": 7,
            "type": {
                "def": {
                    "sequence": {
                        "type": 6
                    }
                }
            }
        },
        {
            "id": 8,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 9
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 3
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 9
                    },
                    {
                        "name": "E",
                        "type": 3
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 9,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 2
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 10
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 2
                    },
                    {
                        "name": "E",
                        "type": 10
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 10,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 11,
                                        "typeName": "String"
                                    }
                                ],
                                "index": 0,
                                "name": "Custom"
                            },
                            {
                                "index": 1,
                                "name": "InsufficientBalance"
                            },
                            {
                                "index": 2,
                                "name": "InsufficientAllowance"
                            },
                            {
                                "index": 3,
                                "name": "ZeroRecipientAddress"
                            },
                            {
                                "index": 4,
                                "name": "ZeroSenderAddress"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 11,
                                        "typeName": "String"
                                    }
                                ],
                                "index": 5,
                                "name": "SafeTransferCheckFailed"
                            }
                        ]
                    }
                },
                "path": [
                    "openbrush_contracts",
                    "traits",
                    "errors",
                    "psp22",
                    "PSP22Error"
                ]
            }
        },
        {
            "id": 11,
            "type": {
                "def": {
                    "primitive": "str"
                }
            }
        },
        {
            "id": 12,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 0
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 3
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 0
                    },
                    {
                        "name": "E",
                        "type": 3
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 13,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 4
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 4
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 14,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "type": 5,
                                "typeName": "[u8; 32]"
                            }
                        ]
                    }
                },
                "path": [
                    "ink_primitives",
                    "types",
                    "Hash"
                ]
            }
        },
        {
            "id": 15,
            "type": {
                "def": {
                    "primitive": "u64"
                }
            }
        },
        {
            "id": 16,
            "type": {
                "def": {
                    "primitive": "u32"
                }
            }
        },
        {
            "id": 17,
            "type": {
                "def": {
                    "variant": {}
                },
                "path": [
                    "ink_env",
                    "types",
                    "NoChainExtension"
                ]
            }
        }
    ],
    "version": "4"
}

const _abi = new Abi(metadata)

export function decodeEvent(bytes: Bytes): Event {
    return _abi.decodeEvent(bytes)
}

export function decodeMessage(bytes: Bytes): Message {
    return _abi.decodeMessage(bytes)
}

export function decodeConstructor(bytes: Bytes): Constructor {
    return _abi.decodeConstructor(bytes)
}

export interface Chain {
    rpc: {
        call<T=any>(method: string, params?: unknown[]): Promise<T>
    }
}

export interface ChainContext {
    _chain: Chain
}

export class Contract {
    constructor(private ctx: ChainContext, private address: Bytes, private blockHash?: Bytes) { }

    PSP22_total_supply(): Promise<Result<bigint, LangError>> {
        return this.stateCall('0x162df8c2', [])
    }

    PSP22_balance_of(owner: AccountId): Promise<Result<bigint, LangError>> {
        return this.stateCall('0x6568382f', [owner])
    }

    PSP22_allowance(owner: AccountId, spender: AccountId): Promise<Result<bigint, LangError>> {
        return this.stateCall('0x4d47d921', [owner, spender])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.rpc.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type AccountId = Bytes

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
    initialSupply: bigint
}

export type Message = Message_PSP22_allowance | Message_PSP22_approve | Message_PSP22_balance_of | Message_PSP22_decrease_allowance | Message_PSP22_increase_allowance | Message_PSP22_total_supply | Message_PSP22_transfer | Message_PSP22_transfer_from | Message_transfer | Message_transfer_from

export interface Message_PSP22_allowance {
    __kind: 'PSP22_allowance'
    owner: AccountId
    spender: AccountId
}

export interface Message_PSP22_approve {
    __kind: 'PSP22_approve'
    spender: AccountId
    value: bigint
}

export interface Message_PSP22_balance_of {
    __kind: 'PSP22_balance_of'
    owner: AccountId
}

export interface Message_PSP22_decrease_allowance {
    __kind: 'PSP22_decrease_allowance'
    spender: AccountId
    deltaValue: bigint
}

export interface Message_PSP22_increase_allowance {
    __kind: 'PSP22_increase_allowance'
    spender: AccountId
    deltaValue: bigint
}

export interface Message_PSP22_total_supply {
    __kind: 'PSP22_total_supply'
}

export interface Message_PSP22_transfer {
    __kind: 'PSP22_transfer'
    to: AccountId
    value: bigint
    data: Bytes
}

export interface Message_PSP22_transfer_from {
    __kind: 'PSP22_transfer_from'
    from: AccountId
    to: AccountId
    value: bigint
    data: Bytes
}

export interface Message_transfer {
    __kind: 'transfer'
    to: AccountId
    value: bigint
    data: Bytes
}

export interface Message_transfer_from {
    __kind: 'transfer_from'
    from: AccountId
    to: AccountId
    value: bigint
    data: Bytes
}

export type Event = Event_Approval | Event_Transfer

export interface Event_Approval {
    __kind: 'Approval'
    owner: AccountId
    spender: AccountId
    amount: bigint
}

export interface Event_Transfer {
    __kind: 'Transfer'
    from?: (AccountId | undefined)
    to?: (AccountId | undefined)
    value: bigint
}

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
