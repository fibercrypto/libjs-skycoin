{
  "targets": [
    {
      "target_name": "skycoin",
      "sources": ["libskycoin_wrap.c" ],
      "include_dirs": ["../../gopath/src/github.com/skycoin/libskycoin/include", ".", "/usr/include/c++/5"],
      "cflags": ["-lv8"],
    }
  ]
}