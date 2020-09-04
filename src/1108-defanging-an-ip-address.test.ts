// https://leetcode.com/problems/defanging-an-ip-address

declare let runTests

function defangIPaddr(address: string): string {
  return address.replace(/\./g, '[.]')
}

runTests(defangIPaddr, [
  ['1.1.1.1', '1[.]1[.]1[.]1'],
  ['255.100.50.0', '255[.]100[.]50[.]0']
])
