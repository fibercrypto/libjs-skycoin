{
    "targets": [
        {
            "target_name": "skycoin",
            "sources": ["libskycoin.h", "libskycoin_wrap.c"],
            "include_dirs": ["../../gopath/src/github.com/skycoin/libskycoin/include", ".", "/usr/include/webkitgtk-1.0"],
            "cflags": ["-v", "-Wall -std=c99"],
        },
    ],
    'variables': {
        'build_v8_with_gn': 'true',
        'enable_lto': 'true',
        "node_use_v8_platform": "false",
        "node_use_bundled_v8": "false",
    }
}
