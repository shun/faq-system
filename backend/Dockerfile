FROM node:lts-buster-slim

WORKDIR /home/node/app
RUN apt update \
    && apt install -y \
        sudo \
        supervisor \
        whois \
    && rm -rf /var/lib/apt/lists/* \
    && chown -R node:node /home/node

USER node
RUN yarn init --yes \
    && yarn add \
            @graphql-codegen/cli \
            @graphql-codegen/typescript \
            @graphql-codegen/typescript-operations \
            @types/express \
            @types/jest \
            @types/node \
            @typescript-eslint/eslint-plugin \
            @typescript-eslint/parser \
            apollo-cache-inmemory \
            apollo-client \
            apollo-link-http \
            apollo-link-error \
            apollo-server-express \
            apollo-server-testing \
            cors \
            eslint \
            eslint-config-prettier \
            eslint-plugin-prettier \
            express \
            express-graphql \
            graphql-iso-date \
            graphql-tools \
            graphql@^14.6.0 \
            jest \
            mysql2 \
            nodemon \
            prettier \
            reflect-metadata \
            ts-jest \
            ts-node \
            tsconfig-paths \
            type-graphql@^0.17.0 \
            typeorm \
            typescript \
    && npx typeorm init --database mysql

USER root
CMD /usr/bin/supervisord -nc /etc/supervisor/supervisord.conf
