// https://leetcode.com/problems/defanging-an-ip-address

function defangIPaddr(address: string): string {
  return address.replace(/\./g, '[.]')
}

let testEach = test.each([
  ['1.1.1.1', '1[.]1[.]1[.]1'],
  ['255.100.50.0', '255[.]100[.]50[.]0']
])

testEach('defangIPaddr(%p)', (a, expected) => expect(defangIPaddr(a)).toBe(expected))
