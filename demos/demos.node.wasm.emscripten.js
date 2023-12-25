import { loadRuby } from "ruby-wasm-emscripten";
import path from "path";

// THROWS ERROR CURRENTLY

const main = async () => {
  const args = ["--disable-gems", "-e", "puts 'Hello :)'"];
  console.log(`$ ruby.wasm ${args.join(" ")}`);

  const defaultModule = {
    locateFile: (wpath) => path.join("wasm-ruby/node_modules/ruby-wasm-emscripten/dist/" + wpath),
    setStatus: (msg) => console.log(msg),
    print: (line) => console.log(line),
    arguments: args,
  };

  await loadRuby(defaultModule);
};

main();