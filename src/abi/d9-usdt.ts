import {Abi, Bytes, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0x5f4b9f371454d365b47ad474ee4ec0d8af3de753e1151377986e1112f8c7b141",
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
        "type": 5
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
        "type": 15
      },
      "chainExtension": {
        "displayName": [
          "ChainExtension"
        ],
        "type": 16
      },
      "hash": {
        "displayName": [
          "Hash"
        ],
        "type": 13
      },
      "maxEventTopics": 4,
      "timestamp": {
        "displayName": [
          "Timestamp"
        ],
        "type": 14
      }
    },
    "events": [
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "from",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 5
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "to",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 5
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "amount",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          }
        ],
        "docs": [],
        "label": "D9USDTTransfer"
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
          "type": 4
        },
        "selector": "0x162df8c2"
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
              "type": 5
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
              "type": 5
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
          "type": 4
        },
        "selector": "0x6568382f"
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
              "type": 5
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
            "label": "from",
            "type": {
              "displayName": [
                "psp22_external",
                "TransferFromInput1"
              ],
              "type": 5
            }
          },
          {
            "label": "to",
            "type": {
              "displayName": [
                "psp22_external",
                "TransferFromInput2"
              ],
              "type": 5
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
              "type": 12
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
              "type": 5
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
            "label": "owner",
            "type": {
              "displayName": [
                "psp22_external",
                "AllowanceInput1"
              ],
              "type": 5
            }
          },
          {
            "label": "spender",
            "type": {
              "displayName": [
                "psp22_external",
                "AllowanceInput2"
              ],
              "type": 5
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
          "type": 4
        },
        "selector": "0x4d47d921"
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
              "type": 5
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
              "type": 12
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
      "id": 5,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 6,
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
      "id": 6,
      "type": {
        "def": {
          "array": {
            "len": 32,
            "type": 7
          }
        }
      }
    },
    {
      "id": 7,
      "type": {
        "def": {
          "primitive": "u8"
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
          "sequence": {
            "type": 7
          }
        }
      }
    },
    {
      "id": 13,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 6,
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
      "id": 14,
      "type": {
        "def": {
          "primitive": "u64"
        }
      }
    },
    {
      "id": 15,
      "type": {
        "def": {
          "primitive": "u32"
        }
      }
    },
    {
      "id": 16,
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

export type Message = Message_PSP22_allowance | Message_PSP22_approve | Message_PSP22_balance_of | Message_PSP22_decrease_allowance | Message_PSP22_increase_allowance | Message_PSP22_total_supply | Message_PSP22_transfer | Message_PSP22_transfer_from

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

export type Event = Event_D9USDTTransfer

export interface Event_D9USDTTransfer {
    __kind: 'D9USDTTransfer'
    from: AccountId
    to: AccountId
    amount: bigint
}

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
