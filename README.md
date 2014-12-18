thedevbench.github.io
=====================

The source code for [devben.ch](http://devben.ch)

# Development

### Initial setup
```
gem install jekyll
npm install -g grunt-cli
npm install
```

### Running a local server
```
grunt serve
```
This will run a local server for you, accessible at [localhost:4000](http://0.0.0.0:4000/). It also runs watch tasks to:
* rebuild jekyll
* run critical
* compile less
* uglify js

