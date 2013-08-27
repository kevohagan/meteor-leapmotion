
# Meteor-leapmotion

Leapjs packaged for meteor.

## Installation

The Leapjs package can be installed with [Meteorite](https://github.com/oortcloud/meteorite/). From inside a Meteorite-managed app:

``` sh
$ mrt add leapmotion
```

## Usage

This package adds leapjs support with the awesome leap-cursor-library from @aphex see [LeapJS](https://github.com/leapmotion/leapjs) and [LeapManager](https://github.com/aphex/leap-cursor-library.js) for more info 

Go here for some examples of leapJS : http://js.leapmotion.com/examples 


You do have to include some code in your client directory

```javascript
 
Meteor.startup(function(){
        LeapManager.init({});
});

```

you can then go into a more advanced setup :


```javascript
 
Meteor.startup(function(){
        LeapManager.init({
            interactiveSelector:"a",
            enableMetaGestures: false,
            maxCursors:1
        });

});

```

 check out the leap cursor library API here : https://github.com/aphex/leap-cursor-library.js/blob/master/src/js/leap-manager.js#L1011


## Styling the cursor

 Basic styling is included by default, but it is very easy to override it just by changing the CSS for .leap-pointable-cursor and .leap-pointable-cursor:after 
 More info in the leap-manager.css file.



