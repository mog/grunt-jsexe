/*
 Wrapper for jsexe, so it can be used as task in gruntfiles
 --
 http://pouet.net/prod.php?which=59298
 --
 "THE BEER-WARE LICENSE" (Revision 42): wrote this file. As long as you retain this
 notice you can do whatever you want with this stuff. If we meet some day, and you
 think this stuff is worth it, you can buy me a beer in return
 http://www.tldrlegal.com/l/BEERWARE
 --
 mog@trbl.at | @mehmog
*/

var jsexe = {},
    exec = require('child_process').exec;

module.exports = function (grunt) {
    grunt.registerMultiTask('jsexe', 'JsExe wrapper to use it as GruntTask', function () {

        var compileDone = this.async(),
            options = this.options(),
            compiler = options.compilerFile;

        var parameters = jsexe.buildParameterString(options);

        var fileOut = this.files[0].dest,
            fileIn = this.files[0].src[0];

        var command = [compiler, parameters, fileIn, fileOut].join(' ');

        grunt.log.info("Calling", command);

        jsexe.executeCommand(command, function () {
            compileDone(true);
        }, false, parameters);
    });
};

jsexe.buildParameterString = function (optionList) {
    var out = [];

    for (var o in optionList) {
        switch (o) {
            case 'compiler':
                out.push("compiler=" + optionList[o]);
                break;

            case 'mangle':
            case 'mangling':
                out.push("mangling=" + optionList[o]);
                break;

            case 'bootstrap':
                out.push("bootstrap=" + optionList[o]);
                break;

            case 'bootstrapCharcode':
            case 'bootstrapCharCode':
                out.push("fromcharcode=" + optionList[o]);
                break;

            case 'debug':
                if (optionList[o] == true)
                    out.push("debug");
                break;
        }
    }

    if (out.length > 0)
        return '--' + out.join(' --');

    return '';
}

jsexe.executeCommand = function (command, done, optParameters) {

    function execCallback(err, stdout, stderr) {
        if (err) {
            grunt.log.error(err);
            done(false, stderr, stdout);
            return;
        }

        grunt.log.info(stdout || stderr);

        done(true);
    }

    if (optParameters) {
        exec(command, optParameters, execCallback);
    } else {
        exec(command, execCallback);
    }
}