module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      blendapi: {
        files: {
          expand: true,
          cwd: "<%=pkg.device%>",
          src: ['intro.md', 'battery.md', 
                'activity.md', 'connection.md', 
                'device.md', 'filesystem.md', 
                'geolocation.md', 'globalization.md', 
                'media.md'],
          dest: 'built.md',
        }
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-concat');

  // 默认被执行的任务列表。
  grunt.registerTask('blendapi', ['concat']);

};