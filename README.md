Baasic AngularJS Membership Module Demo
============

## Functionality

This demo will be focused on user registration, account activation and login functionality by using [Baasic AngularJS SDK](https://github.com/Baasic/baasic-sdk-angularjs). More information about the [Demo](http://demo.baasic.com/angularjs/membership-demo/) can be found in the series of blog posts [here](http://www.baasic.com/posts/AngularJS-SDK-membership-part-1/).

## Build the demo

As a client-side prerequisite, you should install the basic tools for your operating system: Node.js, Bower and Gulp. Start by cloning the [AngularJS membership blog repository](https://github.com/Baasic/baasic-demo-angularjs-membership-blog/). After that, go into the root folder of the started kit you just cloned and type

    npm install
    
npm (Node Package Manager) will go through its configuration file (package.json) and install all dependencies. It may take a couple of minutes to download and install everything; when it is finished, just type

    gulp serve
    
In its default state, this kit points to the main [demo](http://demo.baasic.com/angularjs/membership-demo/) site and pulls its content from it. As it would not be a nice thing to have thousands of users editing it, you will need to point your kit to your own application. It is easy - just go to the *\src\app\app.js* and enter your Baasic application unique identifier (API Key) here:

    baasicAppProvider.create('your-unique-identifier', {
            apiRootUrl: 'api.baasic.com',
            apiVersion: 'beta'
        }); 

## Production ready build

To make the app ready for deploy to production run:

```bash
gulp dist
```

Now there's a `./dist` folder with all scripts and stylesheets concatenated and minified, also third party libraries installed with bower will be concatenated and minified into `vendors.min.js` and `vendors.min.css` respectively.

## Get in touch

Get in touch using one of the community channels 

* GitHub: [Baasic](https://github.com/Baasic)
* Google Groups: [Baasic Support](https://groups.google.com/forum/#!forum/baasic-baas)
* Twitter: [@baasical](https://twitter.com/baasical)
