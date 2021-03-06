# Demo app for OpenShift V3
###(or anything that can consume a Docker image)

## How to build this application?

**Download s2i binary from [source-to-image releases](https://github.com/openshift/source-to-image/releases/)**

**Link for downloading v1.1.2 (the latest as of 2016/09/25)**

```
wget https://github.com/openshift/source-to-image/releases/download/v1.1.2/source-to-image-v1.1.2-5732fdd-linux-amd64.tar.gz
tar zxf source-to-image-v1.1.2-5732fdd-linux-amd64.tar.gz
cp s2i ~/bin/
```

**Invoke the s2i build.**

```
$ $ s2i build https://github.com/sudhaker/my-node-app node my-node-app
I0928 16:48:48.300441   17306 docker.go:306] Connecting to docker on unix:///var/run/docker.sock
I0928 16:48:56.597017   17306 docker.go:306] Connecting to docker on unix:///var/run/docker.sock
I0928 16:48:56.597890   17306 docker.go:306] Connecting to docker on unix:///var/run/docker.sock
I0928 16:48:56.619382   17306 docker.go:306] Connecting to docker on unix:///var/run/docker.sock
warning: Image sha256:9873603dc506d0b341ec24a0c4bcc94aba3f9c612266c0cb3854015134220c31 does not contain a value for the io.openshift.s2i.scripts-url label
I0928 16:48:56.622708   17306 docker.go:306] Connecting to docker on unix:///var/run/docker.sock
ERROR: An error occurred: failed to install [assemble run]
ERROR: Suggested solution: provide URL with Source-To-Image scripts with -s flag or check the image if it contains io.openshift.s2i.scripts-url label set
ERROR: If the problem persists consult the docs at https://github.com/openshift/source-to-image/tree/master/docs. Eventually reach us on freenode #openshift or file an issue at https://github.com/openshift/source-to-image/issues providing us with a log from your build using --loglevel=3
[sudhaker@my-build-01 tmp]$ s2i build https://github.com/sudhaker/my-node-app openshift/nodejs-010-centos7 my-node-app
I0928 16:50:08.579875   17375 docker.go:306] Connecting to docker on unix:///var/run/docker.sock
I0928 16:50:31.305145   17375 docker.go:306] Connecting to docker on unix:///var/run/docker.sock
I0928 16:50:31.306636   17375 docker.go:306] Connecting to docker on unix:///var/run/docker.sock
I0928 16:50:31.313977   17375 docker.go:306] Connecting to docker on unix:///var/run/docker.sock
I0928 16:50:31.317127   17375 docker.go:306] Connecting to docker on unix:///var/run/docker.sock

---> Installing application source ...
---> Building your Node application from source
npm WARN package.json my-node-app@0.0.1 No license field.

```

**Test the application.**

```
$ docker run --rm -p 8080:8080 my-node-app
Environment:
        DEV_MODE=false
        NODE_ENV=production
        DEBUG_PORT=5858
Launching via npm...
npm info it worked if it ends with ok
npm info using npm@2.14.13
npm info using node@v0.10.40
npm info prestart my-node-app@0.0.1
npm info start my-node-app@0.0.1

> my-node-app@0.0.1 start /opt/app-root/src
> node server.js

Server listening on: http://9cd2548dba0c:8080
```

**Enjoy!**
