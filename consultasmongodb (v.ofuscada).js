var _0x29aa = [
  "\x70\x72\x65\x74\x74\x79",
  "\x66\x69\x6E\x64",
  "\x72\x65\x73\x74\x61\x75\x72\x61\x6E\x74\x73",
  "\x42\x72\x6F\x6E\x78",
  "\x6C\x69\x6D\x69\x74",
  "\x73\x6B\x69\x70",
  "\x41\x6D\x65\x72\x69\x63\x61\x6E",
  "\x73\x6F\x72\x74",
  "\x41",
  "\x42\x72\x6F\x6F\x6B\x6C\x79\x6E",
  "\x43\x68\x69\x6E\x65\x73\x65",
  "\x53\x74\x61\x74\x65\x6E\x20\x49\x73\x6C\x61\x6E\x64",
  "\x51\x75\x65\x65\x6E\x73",
  "\x73\x74\x61\x74\x65\x6E\x20\x69\x73\x6C\x61\x6E\x64",
  "\x71\x75\x65\x65\x6E\x73",
  "\x62\x72\x6F\x6E\x78",
  "\x62\x72\x6F\x6F\x6B\x6C\x79\x6E",
  "\x32\x30\x31\x34\x2D\x30\x38\x2D\x31\x31\x54\x30\x30\x3A\x30\x30\x3A\x30\x30\x5A",
  "\x64\x6F\x75\x62\x6C\x65",
];
db[_0x29aa[2]][_0x29aa[1]]()[_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]]({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]](
    {},
    { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
  )
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]](
    {},
    { _id: 0, restaurant_id: 1, name: 1, borough: 1, address: { zipcode: 1 } }
  )
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]](
    { borough: _0x29aa[3] },
    { _id: 0, restaurant_id: 1, name: 1, borough: 1, address: { zipcode: 1 } }
  )
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]](
    { borough: _0x29aa[3] },
    { _id: 0, restaurant_id: 1, name: 1, borough: 1, address: { zipcode: 1 } }
  )
  [_0x29aa[0]]()
  [_0x29aa[4]](5);
db[_0x29aa[2]]
  [_0x29aa[1]](
    { borough: _0x29aa[3] },
    { _id: 0, restaurant_id: 1, name: 1, borough: 1, address: { zipcode: 1 } }
  )
  [_0x29aa[0]]()
  [_0x29aa[5]](5)
  [_0x29aa[4]](5);
db[_0x29aa[2]]
  [_0x29aa[1]](
    { "\x67\x72\x61\x64\x65\x73\x2E\x73\x63\x6F\x72\x65": { $gt: 90 } },
    { name: 1, borough: 1, grades: 1 }
  )
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]](
    {
      grades: { $elemMatch: { "\x73\x63\x6F\x72\x65": { $gt: 80, $lt: 100 } } },
    },
    { name: 1, borough: 1, grades: 1 }
  )
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]](
    {
      "\x61\x64\x64\x72\x65\x73\x73\x2E\x63\x6F\x6F\x72\x64": {
        $lt: -95.754168,
      },
    },
    { name: 1, borough: 1, address: { coord: 1 } }
  )
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]](
    {
      $and: [
        { "\x67\x72\x61\x64\x65\x73\x2E\x73\x63\x6F\x72\x65": { $gt: 70 } },
        { cuisine: { $ne: _0x29aa[6] } },
        {
          "\x61\x64\x64\x72\x65\x73\x73\x2E\x63\x6F\x6F\x72\x64": {
            $lt: -65.754168,
          },
        },
      ],
    },
    {
      name: 1,
      borough: 1,
      cuisine: 1,
      "\x61\x64\x64\x72\x65\x73\x73\x2E\x63\x6F\x6F\x72\x64": 1,
    }
  )
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]](
    {
      "\x67\x72\x61\x64\x65\x73\x2E\x73\x63\x6F\x72\x65": { $gt: 70 },
      cuisine: { $ne: _0x29aa[6] },
      "\x61\x64\x64\x72\x65\x73\x73\x2E\x63\x6F\x6F\x72\x64": {
        $lt: -65.754168,
      },
    },
    {
      name: 1,
      borough: 1,
      cuisine: 1,
      "\x61\x64\x64\x72\x65\x73\x73\x2E\x63\x6F\x6F\x72\x64": 1,
    }
  )
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]](
    {
      "\x67\x72\x61\x64\x65\x73\x2E\x67\x72\x61\x64\x65": _0x29aa[8],
      cuisine: { $ne: _0x29aa[6] },
      borough: { $ne: _0x29aa[9] },
    },
    { name: 1, borough: 1, cuisine: 1, grades: { grade: 1 } }
  )
  [_0x29aa[7]]({ cuisine: -1 })
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]](
    { name: { $in: [/^Wil/] } },
    { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
  )
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]](
    { name: { $in: [/ces$/] } },
    { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
  )
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]](
    { name: { $in: [/.*Reg.*/] } },
    { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
  )
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]](
    {
      borough: _0x29aa[3],
      $or: [{ cuisine: _0x29aa[6] }, { cuisine: _0x29aa[10] }],
    },
    { name: 1, cuisine: 1, borough: 1 }
  )
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]](
    {
      $or: [
        { borough: _0x29aa[11] },
        { borough: _0x29aa[12] },
        { borough: _0x29aa[3] },
        { borough: _0x29aa[9] },
      ],
    },
    { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
  )
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]](
    {
      $nor: [
        { borough: _0x29aa[13] },
        { borough: _0x29aa[14] },
        { borough: _0x29aa[15] },
        { borough: _0x29aa[16] },
      ],
    },
    { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
  )
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]](
    {
      $nor: [
        { "\x67\x72\x61\x64\x65\x73\x2E\x73\x63\x6F\x72\x65\x73": { $lt: 10 } },
      ],
    },
    { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
  )
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]](
    {
      "\x67\x72\x61\x64\x65\x73\x2E\x67\x72\x61\x64\x65": _0x29aa[8],
      "\x67\x72\x61\x64\x65\x73\x2E\x64\x61\x74\x65": ISODate(_0x29aa[17]),
      "\x67\x72\x61\x64\x65\x73\x2E\x73\x63\x6F\x72\x65": 11,
    },
    { restaurant_id: 1, name: 1, grades: 1 }
  )
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]](
    {
      "\x67\x72\x61\x64\x65\x73\x2E\x31\x2E\x67\x72\x61\x64\x65": _0x29aa[8],
      "\x67\x72\x61\x64\x65\x73\x2E\x31\x2E\x64\x61\x74\x65": ISODate(
        _0x29aa[17]
      ),
      "\x67\x72\x61\x64\x65\x73\x2E\x31\x2E\x73\x63\x6F\x72\x65": 9,
    },
    { restaurant_id: 1, name: 1, grades: 1 }
  )
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]](
    {
      "\x61\x64\x64\x72\x65\x73\x73\x2E\x63\x6F\x6F\x72\x64\x2E\x31": {
        $gt: 20,
      },
      "\x61\x64\x64\x72\x65\x73\x73\x2E\x63\x6F\x6F\x72\x64\x2E\x31": {
        $lt: 52,
      },
    },
    { restaurant_id: 1, name: 1, address: 1, address: { coord: 1 } }
  )
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]]({}, { name: 1 })
  [_0x29aa[7]]({ name: 1 })
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]]({}, { name: 1 })
  [_0x29aa[7]]({ name: -1 })
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]]({}, { name: 1, cuisine: 1 })
  [_0x29aa[7]]({ cuisine: 1 }, { borough: -1 })
  [_0x29aa[0]]();
db[_0x29aa[2]][_0x29aa[1]]({}, { address: { street: 1 } })[_0x29aa[0]]();
db[_0x29aa[2]][_0x29aa[1]]({
  "\x61\x64\x64\x72\x65\x73\x73\x2E\x63\x6F\x6F\x72\x64": {
    $type: _0x29aa[18],
  },
});
db[_0x29aa[2]]
  [_0x29aa[1]](
    { name: { $in: [/.*mon.*/] } },
    {
      name: 1,
      borough: 1,
      "\x61\x64\x64\x72\x65\x73\x73\x2E\x63\x6F\x6F\x72\x64": 1,
    }
  )
  [_0x29aa[0]]();
db[_0x29aa[2]]
  [_0x29aa[1]](
    { name: { $in: [/^Mad/] } },
    {
      name: 1,
      borough: 1,
      "\x61\x64\x64\x72\x65\x73\x73\x2E\x63\x6F\x6F\x72\x64": 1,
      cuisine: 1,
    }
  )
  [_0x29aa[0]]();
