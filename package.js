Package.describe({
  summary: "Include Leap.js in your Meteor Project"
});

Package.on_use(function(){
    api.add_files('leap.min.js','client');
});