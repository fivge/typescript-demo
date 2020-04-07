test1 =  [ 1, 2, 3 ]
test2 =  [ 1, 'a', 'b', 4, false ]
test3 =  []
test7 =  [ 1, null, 3, null, 5 ]
test8 =  [ 1, null, 3, null, 5 ]
test9 =  [ 1, null, 3, undefined, 5 ] [ 1, 3, 3, { code: 'aaa' }, 5 ]
test10 =  [
  1,
  { code: 'source', value: 2 },
  { code: 'source', value: 3 },
  { code: 'source', value: 4 },
  { code: 'source', value: 6 }
] [
  1,
  3,
  { code: 'source', value: 3 },
  { code: 'aaa' },
  { code: 'source', value: 'changed data' }
]
test11 =  [
  1,
  { code: 'source', value: null },
  { code: 'source', value: undefined },
  { code: 'source', value: 4 },
  { code: 'source', value: 6 }
] [
  1,
  { code: 'source', value: null },
  { code: 'source' },
  { code: 'source', value: 4 },
  { code: 'source', value: 6 }
]
