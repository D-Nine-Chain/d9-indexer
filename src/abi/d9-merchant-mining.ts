import {Abi, Bytes, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0xfadde591f53203f7fe056042f80f1012e6abc39bbbf56a4c1be3a83f61ca1fc9",
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
    "name": "d9-merchant-mining",
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
            "label": "amm_contract",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "label": "mining_pool",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "label": "usdt_contract",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          }
        ],
        "default": false,
        "docs": [
          "Constructor that initializes the `bool` value to the given `init_value`."
        ],
        "label": "new",
        "payable": false,
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
        "type": 2
      },
      "balance": {
        "displayName": [
          "Balance"
        ],
        "type": 1
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
        "type": 0
      }
    },
    "events": [
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "account_id",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "usdt",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 1
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "expiry",
            "type": {
              "displayName": [
                "Timestamp"
              ],
              "type": 0
            }
          }
        ],
        "docs": [],
        "label": "SubscriptionExtended"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "account_id",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "redeemed_d9",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 1
            }
          }
        ],
        "docs": [],
        "label": "D9Redeemed"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "merchant",
            "type": {
              "displayName": [
                "GreenPointsCreated"
              ],
              "type": 23
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "consumer",
            "type": {
              "displayName": [
                "GreenPointsCreated"
              ],
              "type": 23
            }
          }
        ],
        "docs": [],
        "label": "GreenPointsTransaction"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "merchant",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "consumer",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "amount",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 1
            }
          }
        ],
        "docs": [],
        "label": "D9MerchantPaymentSent"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "merchant",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "consumer",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "amount",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 1
            }
          }
        ],
        "docs": [],
        "label": "USDTMerchantPaymentSent"
      }
    ],
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
            "label": "usdt_amount",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 1
            }
          }
        ],
        "default": false,
        "docs": [
          " create merchant account subscription"
        ],
        "label": "subscribe",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 8
        },
        "selector": "0xfb968a8f"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          "withdraw a certain amount of d9 that has been converted into red points"
        ],
        "label": "redeem_d9",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 11
        },
        "selector": "0x47082626"
      },
      {
        "args": [
          {
            "label": "consumer_id",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "give_green_points_d9",
        "mutates": true,
        "payable": true,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0x88b8f067"
      },
      {
        "args": [
          {
            "label": "consumer_id",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "label": "usdt_payment",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 1
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "give_green_points_usdt",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0xf52b0ab9"
      },
      {
        "args": [
          {
            "label": "merchant_id",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          },
          {
            "label": "usdt_amount",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 1
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "send_usdt_payment_to_merchant",
        "mutates": true,
        "payable": true,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0xa69d4305"
      },
      {
        "args": [
          {
            "label": "merchant_id",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          }
        ],
        "default": false,
        "docs": [
          " a customer pays a merchant using d9"
        ],
        "label": "send_d9_payment_to_merchant",
        "mutates": true,
        "payable": true,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0xb0e55803"
      },
      {
        "args": [
          {
            "label": "account_id",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "get_expiry",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 8
        },
        "selector": "0xfe38aab5"
      },
      {
        "args": [
          {
            "label": "account_id",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          }
        ],
        "default": false,
        "docs": [
          " get account details"
        ],
        "label": "get_account",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 16
        },
        "selector": "0xd0f48683"
      },
      {
        "args": [
          {
            "label": "new_amm_contract",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "change_amm_contract",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 21
        },
        "selector": "0x0db11b82"
      },
      {
        "args": [
          {
            "label": "new_mining_pool",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "change_mining_pool",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 21
        },
        "selector": "0xafda72a6"
      },
      {
        "args": [
          {
            "label": "code_hash",
            "type": {
              "displayName": [],
              "type": 3
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
      },
      {
        "args": [
          {
            "label": "new_admin",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 2
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "change_admin",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 21
        },
        "selector": "0x61ae97d7"
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
                "root": {
                  "layout": {
                    "leaf": {
                      "key": "0x368a973a",
                      "ty": 0
                    }
                  },
                  "root_key": "0x368a973a"
                }
              },
              "name": "merchant_expiry"
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
                              "key": "0xfe031739",
                              "ty": 1
                            }
                          },
                          "name": "green_points"
                        },
                        {
                          "layout": {
                            "struct": {
                              "fields": [
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0xfe031739",
                                      "ty": 1
                                    }
                                  },
                                  "name": "0"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0xfe031739",
                                      "ty": 1
                                    }
                                  },
                                  "name": "1"
                                }
                              ],
                              "name": "(A, B)"
                            }
                          },
                          "name": "relationship_factors"
                        },
                        {
                          "layout": {
                            "enum": {
                              "dispatchKey": "0xfe031739",
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
                                          "key": "0xfe031739",
                                          "ty": 0
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
                          "name": "last_conversion"
                        },
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xfe031739",
                              "ty": 1
                            }
                          },
                          "name": "redeemed_usdt"
                        },
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xfe031739",
                              "ty": 1
                            }
                          },
                          "name": "redeemed_d9"
                        },
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xfe031739",
                              "ty": 0
                            }
                          },
                          "name": "created_at"
                        }
                      ],
                      "name": "Account"
                    }
                  },
                  "root_key": "0xfe031739"
                }
              },
              "name": "accounts"
            },
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 1
                }
              },
              "name": "subscription_fee"
            },
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 2
                }
              },
              "name": "usdt_contract"
            },
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 2
                }
              },
              "name": "amm_contract"
            },
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 2
                }
              },
              "name": "mining_pool"
            },
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 0
                }
              },
              "name": "milliseconds_day"
            },
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 2
                }
              },
              "name": "admin"
            }
          ],
          "name": "D9MerchantMining"
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
          "primitive": "u64"
        }
      }
    },
    {
      "id": 1,
      "type": {
        "def": {
          "primitive": "u128"
        }
      }
    },
    {
      "id": 2,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 3,
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
      "id": 3,
      "type": {
        "def": {
          "array": {
            "len": 32,
            "type": 4
          }
        }
      }
    },
    {
      "id": 4,
      "type": {
        "def": {
          "primitive": "u8"
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
      "id": 10,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "InsufficientPayment"
              },
              {
                "index": 1,
                "name": "InsufficientAllowance"
              },
              {
                "index": 2,
                "name": "NoMerchantAccountFound"
              },
              {
                "index": 3,
                "name": "MerchantAccountExpired"
              },
              {
                "index": 4,
                "name": "NoAccountFound"
              },
              {
                "index": 5,
                "name": "NothingToRedeem"
              },
              {
                "index": 6,
                "name": "TransferringToMainContract"
              },
              {
                "index": 7,
                "name": "TransferringToUSDTToMerchant"
              },
              {
                "index": 8,
                "name": "UserUSDTBalanceInsufficient"
              },
              {
                "index": 9,
                "name": "D9TransferFailed"
              },
              {
                "index": 10,
                "name": "USDTTransferFailed"
              },
              {
                "index": 11,
                "name": "OnlyAdmin"
              },
              {
                "index": 12,
                "name": "GrantingAllowanceFailed"
              },
              {
                "index": 13,
                "name": "AMMConversionFailed"
              },
              {
                "index": 14,
                "name": "ReceivingUSDTFromUser"
              },
              {
                "index": 15,
                "name": "ConvertingToD9"
              },
              {
                "index": 16,
                "name": "SendUSDTToMerchant"
              },
              {
                "index": 17,
                "name": "SendingD9ToMiningPool"
              },
              {
                "index": 18,
                "name": "SendingUSDTToAMM"
              },
              {
                "index": 19,
                "name": "GettingUSDTFromAMM"
              },
              {
                "index": 20,
                "name": "RedeemD9TransferFailed"
              },
              {
                "index": 21,
                "name": "SomeEnvironmentError"
              },
              {
                "index": 22,
                "name": "CalledContractTrapped"
              },
              {
                "index": 23,
                "name": "CalledContractReverted"
              },
              {
                "index": 24,
                "name": "NotCallable"
              },
              {
                "index": 25,
                "name": "SomeDecodeError"
              },
              {
                "index": 26,
                "name": "SomeOffChainError"
              },
              {
                "index": 27,
                "name": "CalleeTrapped"
              },
              {
                "index": 28,
                "name": "CalleeReverted"
              },
              {
                "index": 29,
                "name": "KeyNotFound"
              },
              {
                "index": 30,
                "name": "_BelowSubsistenceThreshold"
              },
              {
                "index": 31,
                "name": "TransferFailed"
              },
              {
                "index": 32,
                "name": "_EndowmentTooLow"
              },
              {
                "index": 33,
                "name": "CodeNotFound"
              },
              {
                "index": 34,
                "name": "Unknown"
              },
              {
                "index": 35,
                "name": "LoggingDisabled"
              },
              {
                "index": 36,
                "name": "CallRuntimeFailed"
              },
              {
                "index": 37,
                "name": "EcdsaRecoveryFailed"
              },
              {
                "index": 38,
                "name": "ErrorGettingEstimate"
              },
              {
                "index": 39,
                "name": "CrossContractCallErrorGettingEstimate"
              }
            ]
          }
        },
        "path": [
          "d9_merchant_mining",
          "d9_merchant_mining",
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
                "fields": [
                  {
                    "type": 1
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
            "type": 1
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
      "id": 13,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 14
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
            "type": 14
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
      "id": 14,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 15
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
            "type": 15
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
      "id": 15,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "merchant",
                "type": 1,
                "typeName": "Balance"
              },
              {
                "name": "consumer",
                "type": 1,
                "typeName": "Balance"
              }
            ]
          }
        },
        "path": [
          "d9_merchant_mining",
          "d9_merchant_mining",
          "GreenPointsResult"
        ]
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
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 18
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
            "type": 18
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 18,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "green_points",
                "type": 1,
                "typeName": "Balance"
              },
              {
                "name": "relationship_factors",
                "type": 19,
                "typeName": "(Balance, Balance)"
              },
              {
                "name": "last_conversion",
                "type": 20,
                "typeName": "Option<Timestamp>"
              },
              {
                "name": "redeemed_usdt",
                "type": 1,
                "typeName": "Balance"
              },
              {
                "name": "redeemed_d9",
                "type": 1,
                "typeName": "Balance"
              },
              {
                "name": "created_at",
                "type": 0,
                "typeName": "Timestamp"
              }
            ]
          }
        },
        "path": [
          "d9_merchant_mining",
          "d9_merchant_mining",
          "Account"
        ]
      }
    },
    {
      "id": 19,
      "type": {
        "def": {
          "tuple": [
            1,
            1
          ]
        }
      }
    },
    {
      "id": 20,
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
                    "type": 0
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
            "type": 0
          }
        ],
        "path": [
          "Option"
        ]
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
      "id": 23,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "account_id",
                "type": 2,
                "typeName": "AccountId"
              },
              {
                "name": "green_points",
                "type": 1,
                "typeName": "Balance"
              }
            ]
          }
        },
        "path": [
          "d9_merchant_mining",
          "d9_merchant_mining",
          "GreenPointsCreated"
        ]
      }
    },
    {
      "id": 24,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 3,
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

    get_expiry(account_id: AccountId): Promise<Result<Result<Timestamp, Error>, LangError>> {
        return this.stateCall('0xfe38aab5', [account_id])
    }

    get_account(account_id: AccountId): Promise<Result<(Account | undefined), LangError>> {
        return this.stateCall('0xd0f48683', [account_id])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.rpc.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export interface Account {
    greenPoints: Balance
    relationshipFactors: [Balance, Balance]
    lastConversion?: (Timestamp | undefined)
    redeemedUsdt: Balance
    redeemedD9: Balance
    createdAt: Timestamp
}

export type Balance = bigint

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type Error = Error_AMMConversionFailed | Error_CallRuntimeFailed | Error_CalledContractReverted | Error_CalledContractTrapped | Error_CalleeReverted | Error_CalleeTrapped | Error_CodeNotFound | Error_ConvertingToD9 | Error_CrossContractCallErrorGettingEstimate | Error_D9TransferFailed | Error_EcdsaRecoveryFailed | Error_ErrorGettingEstimate | Error_GettingUSDTFromAMM | Error_GrantingAllowanceFailed | Error_InsufficientAllowance | Error_InsufficientPayment | Error_KeyNotFound | Error_LoggingDisabled | Error_MerchantAccountExpired | Error_NoAccountFound | Error_NoMerchantAccountFound | Error_NotCallable | Error_NothingToRedeem | Error_OnlyAdmin | Error_ReceivingUSDTFromUser | Error_RedeemD9TransferFailed | Error_SendUSDTToMerchant | Error_SendingD9ToMiningPool | Error_SendingUSDTToAMM | Error_SomeDecodeError | Error_SomeEnvironmentError | Error_SomeOffChainError | Error_TransferFailed | Error_TransferringToMainContract | Error_TransferringToUSDTToMerchant | Error_USDTTransferFailed | Error_Unknown | Error_UserUSDTBalanceInsufficient | Error__BelowSubsistenceThreshold | Error__EndowmentTooLow

export interface Error_AMMConversionFailed {
    __kind: 'AMMConversionFailed'
}

export interface Error_CallRuntimeFailed {
    __kind: 'CallRuntimeFailed'
}

export interface Error_CalledContractReverted {
    __kind: 'CalledContractReverted'
}

export interface Error_CalledContractTrapped {
    __kind: 'CalledContractTrapped'
}

export interface Error_CalleeReverted {
    __kind: 'CalleeReverted'
}

export interface Error_CalleeTrapped {
    __kind: 'CalleeTrapped'
}

export interface Error_CodeNotFound {
    __kind: 'CodeNotFound'
}

export interface Error_ConvertingToD9 {
    __kind: 'ConvertingToD9'
}

export interface Error_CrossContractCallErrorGettingEstimate {
    __kind: 'CrossContractCallErrorGettingEstimate'
}

export interface Error_D9TransferFailed {
    __kind: 'D9TransferFailed'
}

export interface Error_EcdsaRecoveryFailed {
    __kind: 'EcdsaRecoveryFailed'
}

export interface Error_ErrorGettingEstimate {
    __kind: 'ErrorGettingEstimate'
}

export interface Error_GettingUSDTFromAMM {
    __kind: 'GettingUSDTFromAMM'
}

export interface Error_GrantingAllowanceFailed {
    __kind: 'GrantingAllowanceFailed'
}

export interface Error_InsufficientAllowance {
    __kind: 'InsufficientAllowance'
}

export interface Error_InsufficientPayment {
    __kind: 'InsufficientPayment'
}

export interface Error_KeyNotFound {
    __kind: 'KeyNotFound'
}

export interface Error_LoggingDisabled {
    __kind: 'LoggingDisabled'
}

export interface Error_MerchantAccountExpired {
    __kind: 'MerchantAccountExpired'
}

export interface Error_NoAccountFound {
    __kind: 'NoAccountFound'
}

export interface Error_NoMerchantAccountFound {
    __kind: 'NoMerchantAccountFound'
}

export interface Error_NotCallable {
    __kind: 'NotCallable'
}

export interface Error_NothingToRedeem {
    __kind: 'NothingToRedeem'
}

export interface Error_OnlyAdmin {
    __kind: 'OnlyAdmin'
}

export interface Error_ReceivingUSDTFromUser {
    __kind: 'ReceivingUSDTFromUser'
}

export interface Error_RedeemD9TransferFailed {
    __kind: 'RedeemD9TransferFailed'
}

export interface Error_SendUSDTToMerchant {
    __kind: 'SendUSDTToMerchant'
}

export interface Error_SendingD9ToMiningPool {
    __kind: 'SendingD9ToMiningPool'
}

export interface Error_SendingUSDTToAMM {
    __kind: 'SendingUSDTToAMM'
}

export interface Error_SomeDecodeError {
    __kind: 'SomeDecodeError'
}

export interface Error_SomeEnvironmentError {
    __kind: 'SomeEnvironmentError'
}

export interface Error_SomeOffChainError {
    __kind: 'SomeOffChainError'
}

export interface Error_TransferFailed {
    __kind: 'TransferFailed'
}

export interface Error_TransferringToMainContract {
    __kind: 'TransferringToMainContract'
}

export interface Error_TransferringToUSDTToMerchant {
    __kind: 'TransferringToUSDTToMerchant'
}

export interface Error_USDTTransferFailed {
    __kind: 'USDTTransferFailed'
}

export interface Error_Unknown {
    __kind: 'Unknown'
}

export interface Error_UserUSDTBalanceInsufficient {
    __kind: 'UserUSDTBalanceInsufficient'
}

export interface Error__BelowSubsistenceThreshold {
    __kind: '_BelowSubsistenceThreshold'
}

export interface Error__EndowmentTooLow {
    __kind: '_EndowmentTooLow'
}

export type Timestamp = bigint

export type AccountId = Bytes

export type Constructor = Constructor_new

/**
 * Constructor that initializes the `bool` value to the given `init_value`.
 */
export interface Constructor_new {
    __kind: 'new'
    ammContract: AccountId
    miningPool: AccountId
    usdtContract: AccountId
}

export type Message = Message_change_admin | Message_change_amm_contract | Message_change_mining_pool | Message_get_account | Message_get_expiry | Message_give_green_points_d9 | Message_give_green_points_usdt | Message_redeem_d9 | Message_send_d9_payment_to_merchant | Message_send_usdt_payment_to_merchant | Message_set_code | Message_subscribe

export interface Message_change_admin {
    __kind: 'change_admin'
    newAdmin: AccountId
}

export interface Message_change_amm_contract {
    __kind: 'change_amm_contract'
    newAmmContract: AccountId
}

export interface Message_change_mining_pool {
    __kind: 'change_mining_pool'
    newMiningPool: AccountId
}

/**
 *  get account details
 */
export interface Message_get_account {
    __kind: 'get_account'
    accountId: AccountId
}

export interface Message_get_expiry {
    __kind: 'get_expiry'
    accountId: AccountId
}

export interface Message_give_green_points_d9 {
    __kind: 'give_green_points_d9'
    consumerId: AccountId
}

export interface Message_give_green_points_usdt {
    __kind: 'give_green_points_usdt'
    consumerId: AccountId
    usdtPayment: Balance
}

/**
 * withdraw a certain amount of d9 that has been converted into red points
 */
export interface Message_redeem_d9 {
    __kind: 'redeem_d9'
}

/**
 *  a customer pays a merchant using d9
 */
export interface Message_send_d9_payment_to_merchant {
    __kind: 'send_d9_payment_to_merchant'
    merchantId: AccountId
}

export interface Message_send_usdt_payment_to_merchant {
    __kind: 'send_usdt_payment_to_merchant'
    merchantId: AccountId
    usdtAmount: Balance
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

/**
 *  create merchant account subscription
 */
export interface Message_subscribe {
    __kind: 'subscribe'
    usdtAmount: Balance
}

export type Event = Event_D9MerchantPaymentSent | Event_D9Redeemed | Event_GreenPointsTransaction | Event_SubscriptionExtended | Event_USDTMerchantPaymentSent

export interface Event_D9MerchantPaymentSent {
    __kind: 'D9MerchantPaymentSent'
    merchant: AccountId
    consumer: AccountId
    amount: Balance
}

export interface Event_D9Redeemed {
    __kind: 'D9Redeemed'
    accountId: AccountId
    redeemedD9: Balance
}

export interface Event_GreenPointsTransaction {
    __kind: 'GreenPointsTransaction'
    merchant: GreenPointsCreated
    consumer: GreenPointsCreated
}

export interface Event_SubscriptionExtended {
    __kind: 'SubscriptionExtended'
    accountId: AccountId
    usdt: Balance
    expiry: Timestamp
}

export interface Event_USDTMerchantPaymentSent {
    __kind: 'USDTMerchantPaymentSent'
    merchant: AccountId
    consumer: AccountId
    amount: Balance
}

export interface GreenPointsCreated {
    accountId: AccountId
    greenPoints: Balance
}

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
