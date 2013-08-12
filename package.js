Package.describe({
  summary: "Include Leap.js in your Meteor Project"
});

Npm.depends({
    "leapjs" : "0.2.0"
    );

Package.on_use(function(){
    api.add_files('leap.min.js','client');
});