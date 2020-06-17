#!/bin/bash
set -eu

TMPGID=`id -g node`
if [ ! "$TMPGID"="$LOCALGID" ]; then
    echo "change GID"
    groupadd -g 11111 tmpgrp
    usermod -g tmpgrp node
    groupdel node

    groupadd -g $LOCALGID node
    usermod -g $LOCALGID node
    usermod -u $LOCALUID node
    groupdel tmpgrp
else
    echo "no change GID"
fi

chown -R $LOCALUID:$LOCALGID /home/node/app
exec "$@"
