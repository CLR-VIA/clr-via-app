# Start your image with a node base image
FROM node:22-alpine3.19

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package
COPY package.json .

# Copy local directories to the current local directory of our docker image (/app)
COPY . .

# # Install node packages, install serve, build the app, and remove dependencies at the end
# RUN yarn install \
#     && npm install -g serve \
#     && yarn dev \
#     && rm -fr node_modules

# EXPOSE 3000

# # Start the app using serve command
# CMD [ "serve", "-s", "build" ]

# Install node packages
RUN yarn install

EXPOSE 3000

# # Start the app with hot reload
# CMD [ "yarn", "run", "dev" ]