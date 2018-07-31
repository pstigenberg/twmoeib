FROM alpine:3.5

# Install stuff
RUN apk add --update bash curl nano nodejs && \
    npm install -g gulp@3.9.1
    
# Define working directory
WORKDIR /var/www/html/web

# Define default command
CMD gulp