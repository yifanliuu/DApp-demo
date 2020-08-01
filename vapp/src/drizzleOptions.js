
import Protocol from './contracts/Protocol.json'

const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:9545'
    }
  },
  contracts: [Protocol],
  polls: {
    accounts: 15000
  }
}

export default options
