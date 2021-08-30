import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  /** 
  {
    pid: 0,
    lpSymbol: 'GRIMEX',
    lpAddresses: {
      250: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  }, */
  {
    pid: 251,
    lpSymbol: 'GRIMEX-BNB LP',
    lpAddresses: {
      250: '0x38A11df5B03Cd50eDE80A170771b7F2fBA8B68AF',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.grimex,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      250: '0xD6cC8dD16FA6981D6883E68AcCae188aCB9a4611',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  {
    pid: 432,
    lpSymbol: 'SPS-BNB LP',
    lpAddresses: {
      250: '0xf03e2112033e8893e3A7B7A5e25f83C27b7C2Bb4',
      56: '0xfdfde3af740a22648b9dd66d05698e5095940850',
    },
    token: tokens.sps,
    quoteToken: tokens.wbnb,
  },
]

export default farms
