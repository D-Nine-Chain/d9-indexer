import {Abi, Bytes, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
    "source": {
        "hash": "0xa1245e9aaa904fd32b47665ecb84bff4d2357eea3d82257d092e3e05b66b3904",
        "language": "ink! 4.3.0",
        "compiler": "rustc 1.72.0",
        "build_info": {
            "build_mode": "Release",
            "cargo_contract_version": "3.2.0",
            "rust_toolchain": "stable-aarch64-apple-darwin",
            "wasm_opt_settings": {
                "keep_debug_symbols": false,
                "optimization_passes": "Z"
            }
        }
    },
    "contract": {
        "name": "d9-burn-mining",
        "version": "0.1.0",
        "authors": [
            "D9Dev"
        ]
    },
    "spec": {
        "constructors": [
            {
                "args": [
                    {
                        "label": "main_pool",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    },
                    {
                        "label": "burn_minimum",
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
                "payable": true,
                "returnType": {
                    "displayName": [
                        "ink_primitives",
                        "ConstructorResult"
                    ],
                    "type": 5
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
                "type": 1
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
                "type": 25
            },
            "chainExtension": {
                "displayName": [
                    "ChainExtension"
                ],
                "type": 26
            },
            "hash": {
                "displayName": [
                    "Hash"
                ],
                "type": 24
            },
            "maxEventTopics": 4,
            "timestamp": {
                "displayName": [
                    "Timestamp"
                ],
                "type": 4
            }
        },
        "events": [],
        "lang_error": {
            "displayName": [
                "ink",
                "LangError"
            ],
            "type": 7
        },
        "messages": [
            {
                "args": [
                    {
                        "label": "new_main",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "change_main",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0x6cfbbb35"
            },
            {
                "args": [
                    {
                        "label": "new_day_milliseconds",
                        "type": {
                            "displayName": [
                                "Timestamp"
                            ],
                            "type": 4
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "set_day_milliseconds",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0x57d2bc7f"
            },
            {
                "args": [
                    {
                        "label": "account_id",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_account",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 11
                },
                "selector": "0xd0f48683"
            },
            {
                "args": [
                    {
                        "label": "account_id",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    },
                    {
                        "label": "burn_amount",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " burn funcion callable by ownly master contract",
                    "",
                    " does the necessary checks then calls the internal burn function `_burn`"
                ],
                "label": "initiate_burn",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 16
                },
                "selector": "0x34aff0a0"
            },
            {
                "args": [
                    {
                        "label": "account_id",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " calculate values to be used by the burn manager"
                ],
                "label": "prepare_withdrawal",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 18
                },
                "selector": "0x9c2e384b"
            },
            {
                "args": [
                    {
                        "label": "account_id",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_ancestors",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 21
                },
                "selector": "0xe2ee2364"
            },
            {
                "args": [
                    {
                        "label": "user",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 1
                        }
                    },
                    {
                        "label": "amount_burned",
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
                "label": "update_data",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0x0590a9a1"
            },
            {
                "args": [
                    {
                        "label": "code_hash",
                        "type": {
                            "displayName": [],
                            "type": 2
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " Modifies the code which is used to execute calls to this contract address (`AccountId`).",
                    "",
                    " We use this to upgrade the contract logic. We don't do any authorization here, any caller",
                    " can execute this method. In a production contract you would do some authorization here."
                ],
                "label": "set_code",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 5
                },
                "selector": "0x694fb50f"
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
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 0
                                }
                            },
                            "name": "total_amount_burned"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 1
                                }
                            },
                            "name": "main_pool"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "struct": {
                                            "fields": [
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x125717b1",
                                                            "ty": 4
                                                        }
                                                    },
                                                    "name": "creation_timestamp"
                                                },
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x125717b1",
                                                            "ty": 0
                                                        }
                                                    },
                                                    "name": "amount_burned"
                                                },
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x125717b1",
                                                            "ty": 0
                                                        }
                                                    },
                                                    "name": "balance_due"
                                                },
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x125717b1",
                                                            "ty": 0
                                                        }
                                                    },
                                                    "name": "balance_paid"
                                                },
                                                {
                                                    "layout": {
                                                        "enum": {
                                                            "dispatchKey": "0x125717b1",
                                                            "name": "Option",
                                                            "variants": {
                                                                "0": {
                                                                    "fields": [],
                                                                    "name": "None"
                                                                },
                                                                "1": {
                                                                    "fields": [
                                                                        {
                                                                            "layout": {
                                                                                "leaf": {
                                                                                    "key": "0x125717b1",
                                                                                    "ty": 4
                                                                                }
                                                                            },
                                                                            "name": "0"
                                                                        }
                                                                    ],
                                                                    "name": "Some"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "name": "last_withdrawal"
                                                },
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x125717b1",
                                                            "ty": 4
                                                        }
                                                    },
                                                    "name": "last_burn"
                                                },
                                                {
                                                    "layout": {
                                                        "struct": {
                                                            "fields": [
                                                                {
                                                                    "layout": {
                                                                        "leaf": {
                                                                            "key": "0x125717b1",
                                                                            "ty": 0
                                                                        }
                                                                    },
                                                                    "name": "0"
                                                                },
                                                                {
                                                                    "layout": {
                                                                        "leaf": {
                                                                            "key": "0x125717b1",
                                                                            "ty": 0
                                                                        }
                                                                    },
                                                                    "name": "1"
                                                                }
                                                            ],
                                                            "name": "(A, B)"
                                                        }
                                                    },
                                                    "name": "referral_boost_coefficients"
                                                },
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x125717b1",
                                                            "ty": 4
                                                        }
                                                    },
                                                    "name": "last_interaction"
                                                }
                                            ],
                                            "name": "Account"
                                        }
                                    },
                                    "root_key": "0x125717b1"
                                }
                            },
                            "name": "accounts"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 0
                                }
                            },
                            "name": "burn_minimum"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 4
                                }
                            },
                            "name": "day_milliseconds"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 1
                                }
                            },
                            "name": "admin"
                        }
                    ],
                    "name": "D9burnMining"
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
                    "composite": {
                        "fields": [
                            {
                                "type": 2,
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
            "id": 2,
            "type": {
                "def": {
                    "array": {
                        "len": 32,
                        "type": 3
                    }
                }
            }
        },
        {
            "id": 3,
            "type": {
                "def": {
                    "primitive": "u8"
                }
            }
        },
        {
            "id": 4,
            "type": {
                "def": {
                    "primitive": "u64"
                }
            }
        },
        {
            "id": 5,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 6
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 7
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
                        "type": 6
                    },
                    {
                        "name": "E",
                        "type": 7
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 6,
            "type": {
                "def": {
                    "tuple": []
                }
            }
        },
        {
            "id": 7,
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
                                        "type": 7
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
                        "type": 7
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
                                        "type": 6
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
                        "type": 6
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
                                "index": 0,
                                "name": "BurnAmountInsufficient"
                            },
                            {
                                "index": 1,
                                "name": "NoAccountFound"
                            },
                            {
                                "index": 2,
                                "name": "EarlyWithdrawalAttempt"
                            },
                            {
                                "index": 3,
                                "name": "ContractBalanceTooLow"
                            },
                            {
                                "index": 4,
                                "name": "RestrictedFunction"
                            },
                            {
                                "index": 5,
                                "name": "UsePortfolioExecuteFunction"
                            },
                            {
                                "index": 6,
                                "name": "WithdrawalExceedsBalance"
                            },
                            {
                                "index": 7,
                                "name": "TransferFailed"
                            },
                            {
                                "index": 8,
                                "name": "InvalidCaller"
                            },
                            {
                                "index": 9,
                                "name": "InvalidBurnContract"
                            },
                            {
                                "index": 10,
                                "name": "BurnContractAlreadyAdded"
                            },
                            {
                                "index": 11,
                                "name": "BurnAmountNotMultipleOf100"
                            },
                            {
                                "index": 12,
                                "name": "CrossContractCallFailed"
                            },
                            {
                                "index": 13,
                                "name": "WithdrawalNotAllowed"
                            },
                            {
                                "index": 14,
                                "name": "WithdrawalAmountZero"
                            },
                            {
                                "index": 15,
                                "name": "RuntimeErrorGettingAncestors"
                            },
                            {
                                "index": 16,
                                "name": "NoAncestorsFound"
                            },
                            {
                                "index": 17,
                                "name": "MustBeMultipleOf100"
                            },
                            {
                                "index": 18,
                                "name": "RemoteCallToBurnContractFailed"
                            },
                            {
                                "index": 19,
                                "name": "RemoteCallToMiningPoolFailed"
                            },
                            {
                                "index": 20,
                                "name": "SomeEnvironmentError"
                            },
                            {
                                "index": 21,
                                "name": "CalledContractTrapped"
                            },
                            {
                                "index": 22,
                                "name": "CalledContractReverted"
                            },
                            {
                                "index": 23,
                                "name": "NotCallable"
                            },
                            {
                                "index": 24,
                                "name": "SomeDecodeError"
                            },
                            {
                                "index": 25,
                                "name": "SomeOffChainError"
                            },
                            {
                                "index": 26,
                                "name": "CalleeTrapped"
                            },
                            {
                                "index": 27,
                                "name": "CalleeReverted"
                            },
                            {
                                "index": 28,
                                "name": "KeyNotFound"
                            },
                            {
                                "index": 29,
                                "name": "_BelowSubsistenceThreshold"
                            },
                            {
                                "index": 30,
                                "name": "EnvironmentalTransferFailed"
                            },
                            {
                                "index": 31,
                                "name": "_EndowmentTooLow"
                            },
                            {
                                "index": 32,
                                "name": "CodeNotFound"
                            },
                            {
                                "index": 33,
                                "name": "Unknown"
                            },
                            {
                                "index": 34,
                                "name": "LoggingDisabled"
                            },
                            {
                                "index": 35,
                                "name": "CallRuntimeFailed"
                            },
                            {
                                "index": 36,
                                "name": "EcdsaRecoveryFailed"
                            },
                            {
                                "index": 37,
                                "name": "WithdrawalAmountExceedsBalance"
                            }
                        ]
                    }
                },
                "path": [
                    "d9_burn_common",
                    "Error"
                ]
            }
        },
        {
            "id": 11,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 12
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 7
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
                        "type": 12
                    },
                    {
                        "name": "E",
                        "type": 7
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 12,
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
                                        "type": 13
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
                        "type": 13
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 13,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "creation_timestamp",
                                "type": 4,
                                "typeName": "Timestamp"
                            },
                            {
                                "name": "amount_burned",
                                "type": 0,
                                "typeName": "Balance"
                            },
                            {
                                "name": "balance_due",
                                "type": 0,
                                "typeName": "Balance"
                            },
                            {
                                "name": "balance_paid",
                                "type": 0,
                                "typeName": "Balance"
                            },
                            {
                                "name": "last_withdrawal",
                                "type": 14,
                                "typeName": "Option<Timestamp>"
                            },
                            {
                                "name": "last_burn",
                                "type": 4,
                                "typeName": "Timestamp"
                            },
                            {
                                "name": "referral_boost_coefficients",
                                "type": 15,
                                "typeName": "(Balance, Balance)"
                            },
                            {
                                "name": "last_interaction",
                                "type": 4,
                                "typeName": "Timestamp"
                            }
                        ]
                    }
                },
                "path": [
                    "d9_burn_common",
                    "Account"
                ]
            }
        },
        {
            "id": 14,
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
            "id": 15,
            "type": {
                "def": {
                    "tuple": [
                        0,
                        0
                    ]
                }
            }
        },
        {
            "id": 16,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 17
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 7
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
                        "type": 17
                    },
                    {
                        "name": "E",
                        "type": 7
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 17,
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
                        "type": 0
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
            "id": 18,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 19
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 7
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
                        "type": 19
                    },
                    {
                        "name": "E",
                        "type": 7
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 19,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 20
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
                        "type": 20
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
            "id": 20,
            "type": {
                "def": {
                    "tuple": [
                        0,
                        4
                    ]
                }
            }
        },
        {
            "id": 21,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 22
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 7
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
                        "type": 22
                    },
                    {
                        "name": "E",
                        "type": 7
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 22,
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
                                        "type": 23
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
                        "type": 23
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 23,
            "type": {
                "def": {
                    "sequence": {
                        "type": 1
                    }
                }
            }
        },
        {
            "id": 24,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "type": 2,
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
            "id": 25,
            "type": {
                "def": {
                    "primitive": "u32"
                }
            }
        },
        {
            "id": 26,
            "type": {
                "def": {
                    "variant": {}
                },
                "path": [
                    "d9_chain_extension",
                    "D9ChainExtension"
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

    get_account(account_id: AccountId): Promise<Result<(Account | undefined), LangError>> {
        return this.stateCall('0xd0f48683', [account_id])
    }

    get_ancestors(account_id: AccountId): Promise<Result<(AccountId[] | undefined), LangError>> {
        return this.stateCall('0xe2ee2364', [account_id])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.rpc.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export interface Account {
    creationTimestamp: Timestamp
    amountBurned: Balance
    balanceDue: Balance
    balancePaid: Balance
    lastWithdrawal?: (Timestamp | undefined)
    lastBurn: Timestamp
    referralBoostCoefficients: [Balance, Balance]
    lastInteraction: Timestamp
}

export type Balance = bigint

export type Timestamp = bigint

export type AccountId = Bytes

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
    mainPool: AccountId
    burnMinimum: Balance
}

export type Message = Message_change_main | Message_get_account | Message_get_ancestors | Message_initiate_burn | Message_prepare_withdrawal | Message_set_code | Message_set_day_milliseconds | Message_update_data

export interface Message_change_main {
    __kind: 'change_main'
    newMain: AccountId
}

export interface Message_get_account {
    __kind: 'get_account'
    accountId: AccountId
}

export interface Message_get_ancestors {
    __kind: 'get_ancestors'
    accountId: AccountId
}

/**
 *  burn funcion callable by ownly master contract
 * 
 *  does the necessary checks then calls the internal burn function `_burn`
 */
export interface Message_initiate_burn {
    __kind: 'initiate_burn'
    accountId: AccountId
    burnAmount: Balance
}

/**
 *  calculate values to be used by the burn manager
 */
export interface Message_prepare_withdrawal {
    __kind: 'prepare_withdrawal'
    accountId: AccountId
}

/**
 *  Modifies the code which is used to execute calls to this contract address (`AccountId`).
 * 
 *  We use this to upgrade the contract logic. We don't do any authorization here, any caller
 *  can execute this method. In a production contract you would do some authorization here.
 */
export interface Message_set_code {
    __kind: 'set_code'
    codeHash: Bytes
}

export interface Message_set_day_milliseconds {
    __kind: 'set_day_milliseconds'
    newDayMilliseconds: Timestamp
}

export interface Message_update_data {
    __kind: 'update_data'
    user: AccountId
    amountBurned: Balance
}

export type Event = never

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
