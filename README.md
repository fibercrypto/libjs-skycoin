# LibSkycoin for Javascript

[![Build Status](https://travis-ci.org/simelo/libjs-skycoin.svg?branch=develop)](https://travis-ci.org/simelo/libjs-skycoin)

Javascript client library for Skycoin API. This library is a Javascript assembly generated with SWIG to access Skycoin API from Javascript.

## Table of Contents

<!-- MarkdownTOC levels="1,2,3,4,5" autolink="true" bracket="round" -->

- [LibJS-skycoin wrappers for the Skycoin cipher](#libjsskycoin-wrappers-for-the-skycoin-cipher)
  - [Installation](#installation)
  - [Using the API](#usage)
    - [Naming](#naming)
    - [Parameters](#parameters)
      - [Handles](#handles)
      - [Byte Slices](#byte-slices)
      - [Structures](#structures)
      - [Fixed Sized Arrays](#fixed-sized-arrays)
      - [Other Slices](#other-slices)
    - [Memory Managemanet](#memory-management)
- [SkyApi wrapper for Skycoin REST API](#skyapi-wrapper-for-skycoin-rest-api)
- [Make rules](#make-rules)
- [Development setup](#development-setup)
  <!-- /MarkdownTOC -->

## LibJS Skycoin wrappers for the Skycoin cipher

**LibJS Skycoin** is an assembly that provides wrappers to the Skycoin core cipher API's, implemented in `golang`, hence linking directly to the original node code. No transpilation involved.

### Installation

Before installing, make sure you understand the choices available to [install a NPM package](https://docs.npmjs.com/about-npm) . For instance, in case of [installing NPM client tools](https://docs.npmjs.com/getting-started/) the process would look like this, using [`npm install` command](https://docs.npmjs.com/packages-and-modules/).

```sh

npm install libskycoin
```

### Install from sources

Download the repository from http://github.com/simelo/libjs-skycoin.git.
Execute (`make build`) to install the library.

### Usage

#### Naming

The exported function in Libskycoin .NET have the following naming format: `SKY_package_func_name` where package is replace by the package where the original Skycoin function is and func_name is the name of the function. For example, `LoadConfig` function from `cli` package is called in .Net `SKY_cli_LoadConfig`

#### Parameters

All skycoin exported functions return an error object as the last of the return parameters. In .NET error is return as an `uint` and it is the first return parameter. The rest of the parameters are returned in the same order.

Receivers in Skycoin are the first of the input parameters. Simple types, like integer, float, string will be used as the corresponding types in .NET, except what act as pointers.

##### Handles

Some of Skycoin types are too complex to be exported to a scripting language. So, handles are used instead. Therefore all functions taking a complex type will receive a handle instead of the original Skycoin type. For example, having these functions exported from Skycoin:

```go
  func LoadConfig() (Config, error)
  func (c Config) FullWalletPath() string
```

Config is a struct type that is treated as a handle in Libskycoin .Net . The usage in .Net will be:

```js
      var skycoin = require('./lib/skycoin/build/Release/skycoin');
      var configHandle = skycoin.new_Config_HandlePtr();
      var err = skycoin.SKY_cli_LoadConfig(configHandle);
      if(err == skycoin.SKY_OK) {
        // SkY_OK means no error
        var fullWalletPath = new _GoString()_;
        err = skycoin.SKY_cli_FullWalletPath(configHandle,fullWallerPath);
        //Close the handle after using the it
        //so the garbage collector can delete the object associated with  it.
        skycoin.SKY_handle_close( configHandle );
      } else {
        // #Error
      }
    }
  }
}
```

##### Byte slices

Parameters of type byte[] will treated as string . Example, this function in Skycoin:

```go
func (s ScryptChacha20poly1305) Encrypt(data, password []byte) ([]byte, error)
```

... should be invoked like this:

```js
var encrypt_settings = new skycoin.encrypt__ScryptChacha20poly1305();
var data = new skycoin.GoSlice(); //It will be passed as a parameter of type []byte
var pwd = new skycoin.GoSlice(); //As []byte too
var dataStr = new skycoin._GoString();
var pwdStr = new skycoin._GoString();
var encrypted = new skycoin.GoSlice();

dataStr.setString("Data to encrypt" );
data.convertString(dataStr);
pwdStr.SetString("password");
pwd.convertString(pwdStr);

var err = skycoin.SKY_encrypt_ScryptChacha20poly1305_Encrypt(encrypt_settings, data, pwd,encrypted);
if(err == skycoin.SKY_OK){
  encrypted.getString().p); //Encrypted is GoSlice
}
```

##### Structures

Structures that are not exported as handles are treated like JS classes. In the previous example type ScryptChacha20poly1305 is created in JS like:

```js
var encrypt_settings = new skycoin.encrypt__ScryptChacha20poly1305()
```

And passed as first parameter in call to `SKY_encrypt_ScryptChacha20poly1305_Encrypt`.

##### Fixed Sized Arrays

Parameters of fixed size array are wrapped in structures when called from JS.

Given these types in Skycoin and this exported function:

```go
  type PubKey [33]byte
  type SecKey [32]byte

  func GenerateDeterministicKeyPair(seed []byte) (PubKey, SecKey)
```

This is a way to use them to write assertions in JS:

```js
//Generates random seed
var data = new skycoin.GoSlice();
var err = skycoin.SKY_cipher_RandByte(32,data);


var pubkey = new skycoin.cipher_PubKey();
var seckey = new skycoin.cipher_SecKey();

err = skycoin.SKY_cipher_GenerateDeterministicKeyPair(data, pubkey,seckey);
```

In the example above `pubkey` and `seckey` are objects of an structure type containing a field named `data` holding the corresponding instance of `PubKey` and `SecKey`. Something like:

```cpp
  cipher_PubKey struct{
    data [33]byte;
  } cipher_PubKey;

  cipher_SecKey struct{
    data [32]byte;
  } ;
```

##### Other Slices

Other slices of base type different from `byte` are indeed wrapped inside classes. Let's see how to call the following function:

```go
func GenerateDeterministicKeyPairs(seed []byte, n int) []SecKey
```

In Javascript this how it should be used to generate a deterministic sequence of pairs of public / private keys given a random seed:

```js
//Generates random seed
var seed = new skycoin.GoSlice();
var err = skycoin.SKY_cipher_RandByte(32,seed);
var seckeys = new skycoin.cipher__SecKeys();

err = skycoin.SKY_cipher_GenerateDeterministicKeyPairs(seed, 2,seckeys);

for(int i=0;i<seckeys.count,i++){
  var pubkey = new skycoin.cipher_PubKey();
  var seckey = new skycoin.cipher_SecKey();
  seckeys.getAt(seckey,i);

  skycoin.SKY_cipher_PubKeyFromSecKey(seckey, pubkey);
  err = skycoin.SKY_cipher_PubKey_Verify(pubkey);
}
```

### Memory Management

Memory management is transparent to the user. Any object allocated inside the library is left to be managed by the JS garbage collector.

## SkyApi wrapper for Skycoin REST API

This wrapper is Auto generated by openapi-generator directly from `Skycoin Api` code for version v0.26.0.

### Specific Node Address

For use a specific node of Skycoin, you just need to create a instance of `ApiClient` passing the node address:

```js
var restSharpClient = new skycoin.ApiClient("specific_node_address")
```

Then in `restSharpClient` you can use all methods related to Api Client.

## Make Rules

The following `make` rules are available after `git checkout` of this repository. They all require [Skycoin](https://github.com/skycoin/skycoin) to be checked out as a `git submodule` of libskycoin .NET .

```
$ make help

configure                      Setup build environment
build-libc                     Build libskycoin static C client library
build-swig                     Generate js source code from SWIG interface definitions
build-libsky-shared            Build shared library including SWIG wrappers
build                          Build library
test                           Run all tests
```

## Development setup

It is highly recommended for developers to setup their environment using
the available Docker images.
Read the [LibJS Skycoin Docker docs](docker/images/dev-cli/README.md) for further
details.

The project has two branches: `master` and `develop`.

- `develop` is the default branch and will always have the latest code.
  The submodule at `gopath/src/github.com/skycoin/libskycoin` has to be
  in sync with `skycoin/libskycoin` `develop` branch.
- `master` will always be equal to the current stable release on the website, and should correspond with the latest release tag.
  The submodule at `gopath/src/github.com/skycoin/libskycoin` has to be
  in sync with `skycoin/libskycoin` `master` branch.

Separate stable development branches will be created to work on releases for supporting the
most recent stable version of Skycoin. The name of these branches should be the Skycoin
major and minor version numbers followed by `dev` suffix e.g. `0.25dev`.
These branches may be forked out of either `master` or `develop` branches, and
the submodule at `gopath/src/github.com/skycoin/libskycoin` has to be
in sync with the corresponding tag of `skycoin/libskycoin` official repository.

Stable development branches are created most of the time for the following reasons:

- A Skycoin release increasing [patch version number](https://semver.org/).
- Enhanced support and bug fixes for a version of LibJS Skycoin compiled against an
  stable version of Skycoin
- Backporting useful features added in `develop`.

### Running tests

```sh
$ make test
```

### Releases

#### Update the version

0. If the `master` branch has commits that are not in `develop` (e.g. due to a hotfix applied to `master`), merge `master` into `develop` (and fix any build or test failures)
1. Switch to a new release branch named `release-X.Y.Z` for preparing the release.
2. Ensure that the submodule at `gopath/src/github.com/skycoin/libskycoin` is in sync with respect to the corresponding tag in https://github.com/skycoin/libskycoin repository.
4. Run `make build` to make sure that the code base is up to date
5. Update `CHANGELOG.md`: move the "unreleased" changes to the version and add the date.
6. Follow the steps in [pre-release testing](#pre-release-testing)
7. Make a PR merging the release branch into `master`
8. Review the PR and merge it
9. Update files in https://github.com/skycoin/repo-info/tree/master/repos/skycoin/remote for `skycoin/skycoindev-js` Docker image, adding a new file for the new version and adjusting any configuration text that may have changed
10. Tag the `master` branch with the version number. Version tags start with `v`, e.g. `v0.20.0`. Sign the tag. If you have your GPG key in github, creating a release on the Github website will automatically tag the release. It can be tagged from the command line with `git tag -as v0.20.0 $COMMIT_ID`, but Github will not recognize it as a "release".
11. Release builds are created and uploaded by travis. To do it manually, checkout the master branch and follow the [create release builds instructions](#creating-release-builds).
12. Checkout `develop` branch and bump package up to next [`dev` version number](https://docs.microsoft.com/en-us/nuget/create-packages/prerelease-packages).

#### Pre-release testing

Perform these actions before releasing:

    make test

#### Creating release builds

Release builds should be created from `master` branch . After [updating release version](#update-the-version) it is necessary to follow these steps

##### Requirements

Have installed the `node-gyp` for the creation of the package.

https://www.npmjs.com/package/node-gyp

##### Building

    make build

Final results are placed in the lib/skycoin/build/Release/ folder.
