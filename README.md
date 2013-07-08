About
===========
Simple wrapper for jsexe.exe to make it usable in Gruntfiles

Installation
===========
There's no npm package yet, so please
```
copy node_modules\grunt-jsexe to your project root
```
Furthermore download <a href="http://adinpsz.org/data/adinpsz_-_JSEXE.zip">jsexe.zip</a>, and copy ```jsexe.exe``` to your project root.


Example
===========
```js
jsexe:{
    options:{
        compiler:['none', 'cc', 'best'][1],
        mangle:['none', 'yes', 'best'][2],
        bootstrap:['none', 'global', 'local', 'check'][1],
        //bootstrapCharcode:x,
        debug:true,
        compilerFile: 'jsexe.exe' //points to the exe in your project root
    },
    dist:{
        src: 'src/myAwesomeStarfield.js',
        dest:'dist/demo.png.html'
    }
}
```
A example Gruntfile is provided named ```Gruntfile-example.js```

Documentation
===========
As it's a simple wrapper option names of JsExe have just been taken, with some convinient shortcuts.

### compilerFile
- `jsexe.exe` - points to the filelocation relative to Gruntfile.js

### compiler
- `none` - no JS compression
- `cc` - Closure Compiler based <default> | also removes dead code, use `none` if you end up with a 217byte (empty) png
- `best` - best

### mangle
### mangling
- `none` - disabled <default>
- `yes` - enabled
- `best` - best
There's a chapter about mangling in the ZIP where you got jsexe from that explains what this is about.

###bootstrap
- `none` - none
- `global` - global eval <default>
- `local` - local eval
- `debug` - debug check

###bootstrapCharcode
###bootstrapCharCode
- `x` - store String.fromCharCode in variable x

###debug
- `true` - output intermediate files

Note that this description has been taken straight from the exe, and there are ByteOrder and PNG optimizer which have not been made available through the wrapper (yet).

Actual amount of work
===========
Was done by the <a href="http://adinpsz.org/">adinpsz</a> people, <a href="http://pouet.net/prod.php?which=59298">information about JsExe</a>.
Make sure to buy these guys a beer, they shrink JS code in a PNG so small it's unbelievable!

Beware
===========
- so far this is only a draft, it does work, but you get some nice ASCI art instead of the spinner jsexe shows
- there's no NPM yet, and thus no package file
- the exe might change options, that are not available through the wrapper
 






