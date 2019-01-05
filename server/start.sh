#!/bin/bash

echo $PATH
echo 'this is nowFood api start!'

export NODE_HOME=/opt/yuan/lib/node-v8.9.4-linux-x64
export PATH=$PATH:$NODE_HOME/bin

node -v
npm -v
cd /opt/yuan/web/nowFood/dist_server
pm2 restart server.js

exit
