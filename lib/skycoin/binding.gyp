{
    "targets": [
        {
            "target_name": "libskycoin",
            "sources": ["libskycoin_wrap.c"],
            "include_dirs": ["../../gopath/src/github.com/skycoin/libskycoin/include", ".", "/usr/include/x86_64-linux-gnu/c++/7/"],
            "cflags": [ "-fPIC" ],
            "ccflags": [ "-fPIC" ],
            "libraries": ["../../gopath/src/github.com/skycoin/libskycoin/build/libskycoin"]
        }
    ]
}
