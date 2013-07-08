module.exports = function(grunt) {

    grunt.initConfig({

        concat:{
            prepare:{
              src:[/*'src/poseidon_demosong.js', */'src/demo.js'],
                dest:'build/glued.js'
            }
        },

        jsexe:{
            options:{
                compiler:['none', 'cc', 'best'][1],
                mangle:['none', 'yes', 'best'][2],
                bootstrap:['none', 'global', 'local', 'check'][1],
                //bootstrapCharcode:x,
                debug:true,
                compilerFile: 'jsexe.exe'
            },
            dist:{
                src: 'build/glued.js',
                dest:'dist/demo.png.html'
            }
        }
    });

    grunt.loadNpmTasks( 'grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-jsexe');

    grunt.registerTask( 'default', [
        'concat:prepare',
        'jsexe'
    ] );
};
