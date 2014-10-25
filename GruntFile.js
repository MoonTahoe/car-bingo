module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
                "*.js",
                "*.json"
            ],
            options: {
                jshintrc: ".jshintrc"
            }
        },
        jasmine: {
            src: ["test/assets/jquery.js", "public/js/*.js"],
            options: {
                specs: "public/test/*.js"
            }
        },
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: [],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['package.json'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'https://github.com/MoonTahoe/car-bingo.git',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
            }
        }
    });

    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('check', ['jshint']);
    grunt.registerTask('test', ['check', 'jasmine']);
    grunt.registerTask('default', ['check', 'bump']);

};