{
    "targets": [
        {
            "target_name": "skycoin",
            "sources": ["*.h", "libskycoin_wrap.cxx"],
            "include_dirs": [
                "../../gopath/src/github.com/skycoin/libskycoin/include",
                "/usr/include/c++/5",
                "/usr/include/c++/8",
                "/usr/include/c++/7",
                "/usr/include/x86_64-linux-gnu/c++/5",
                "/usr/include/x86_64-linux-gnu/c++/7",
                "/usr/include/x86_64-linux-gnu/c++/8",
                ".",
                "/usr/include/webkitgtk-1.0",
                "/usr/include/webkitgtk-4.0"
            ],
            "cflags": ["-v", "-Wall -std=c++11", "-DBUILDSWIGNODE=OFF"],
            "cflags_cc": ["-v", "-Wall -std=c++11", "-DBUILDSWIGNODE=OFF"],
            'defines': [ '_GLIBCXX_USE_C99_MATH' ],
        },
    ],
    'variables': {
        'build_v8_with_gn': 'true',
        'enable_lto': 'true',
    }
}
