# Standalone Timeline

Stripped down Simile-Timeline without the ajax api and with all the original scripts

### Bower:

```shell
# To get the latest stable version, use bower from the command line.
bower install standalone-timeline

# To get the most recent, bleeding-edge version, at your own risk, use:
bower install standalone-timeline#master

# To save the bower settings for future use:
bower install standalone-timeline --save

# Later you can easily update with:
bower update
```

### Using the Standalone Timeline Library:

You need to include `dist/timeline.min.js` and `dist/timeline.min.css` to your
index.html

You will also need to setup two global variables to tell the script where to
look for image files, you can do this by creating a `<script>` tag in your
`index.html` with the following contents:

```javascript
<script>
    var TimelineUrlPrefix = '/dist/src/api/';
    var AjaxUrlPrefix = '/dist/src/';
</script>
```

Note that these are the default paths where standalone timeline will search for
the image files.

### Contributing to the project:

#### Building

Developers can easily build standalone-timeline using NPM and Grunt


```shell
# First install or update your local project's npm tools:
npm install

# Or update
npm update
```

The run the Grunt tasks:
```
# To build `timeline.min.js`, `timeline.min.css` and image files in the `/dist` directory
grunt build

# To build files and watch for changes to autoreload
grunt

