{
  "targets": [
    {
      "target_name": "skycoin",
      "sources": ["libskycoin_wrap.c" ],
      "include_dirs": ["../../gopath/src/github.com/skycoin/libskycoin/include", ".", "/usr/include"],
      "cflags": ["-lv8"],
    }
  ]
}