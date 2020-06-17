FROM node:lts-buster-slim

WORKDIR /home/node/app
ARG NG_VER=9.1.3
RUN apt update \
    && apt install -y \
        git \
        nginx \
        whois \
    && rm -rf /var/lib/apt/lists/* \
    && chown -R node:node /home/node

USER node
RUN yarn init --yes \
    && yarn add \
        @angular/animations@${NG_VER} \
        @angular/cli@${NG_VER} \
        @angular/common@${NG_VER} \
        @angular/core@${NG_VER} \
        @angular/forms@${NG_VER} \
        @angular/platform-browser@${NG_VER} \
        apollo-cache-inmemory \
        apollo-client \
        apollo-link-http \
        apollo-link-error \
        graphql@^14.0.0 \
        primeicons \
        primeng \
        rxjs \
        tslib@^1.10.0 \
        zone.js


