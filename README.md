# wasm-ruby
wasm-ruby files for ruby versions

WebAssembly port of CRuby by Emscripten with a thin JavaScript wrapper to run ruby scripts in node.js


#### WebAssembly port of CRuby with WASI.


##### USAGE: 

```
import fs from "fs/promises";
import { DefaultRubyVM } from "@ruby/wasm-wasi/dist/node.cjs.js";

const main = async () => {
  const binary = await fs.readFile(
    //  Tips: Replace the binary with debug info if you want symbolicated stack trace.
    //  (only nightly release for now)
    //  "./node_modules/ruby-head-wasm-wasi/dist/ruby.debug+stdlib.wasm"
    "./node_modules/ruby-head-wasm-wasi/dist/ruby.wasm"
  );
  const module = await WebAssembly.compile(binary);
  const { vm } = await DefaultRubyVM(module);

  vm.eval(`
    luckiness = ["Lucky", "Unlucky"].sample
    puts "You are #{luckiness}"
  `);
};

main();
```

[Other RUBY WASI WASM Usage demos](https://github.com/desktop-cgi/wasm-ruby/demos/demos.node.head.wasi.wasm.js)


[https://www.npmjs.com/package/ruby-head-wasm-wasi](https://www.npmjs.com/package/ruby-head-wasm-wasi)

[https://www.npmjs.com/package/ruby-head-wasm-emscripten](https://www.npmjs.com/package/ruby-head-wasm-emscripten): Note: The emscripten demos for the port of ruby.wasm currently has issues and throws an error. 

[https://www.npmjs.com/package/ruby-wasm-emscripten](https://www.npmjs.com/package/ruby-wasm-emscripten)


### BUILD REPO SCRIPTS:

[https://github.com/ruby/ruby.wasm](https://github.com/ruby/ruby.wasm)

