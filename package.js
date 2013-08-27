Package.describe({
  summary: "LeapMotion interaction in your Meteor Project"
});

Package.on_use(function(api){
    api.add_files('js/leap.min.js','client');
    api.add_files('js/leap-manager.js','client');
    api.add_files('css/leap-manager.css','client');
    api.export('LeapManager');
});