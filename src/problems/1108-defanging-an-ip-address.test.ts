// https://leetcode.com/problems/defanging-an-ip-address

import { runTests } from '../TestHelpers'

function defangIPaddr(address: string): string {
  return address.replace(/\./g, '[.]')
}

runTests(defangIPaddr, [
  ['1.1.1.1', '1[.]1[.]1[.]1'],
  ['255.100.50.0', '255[.]100[.]50[.]0']
])
