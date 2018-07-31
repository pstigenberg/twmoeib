FROM alpine:3.5

# Install stuff
RUN apk add --update bash curl nano nodejs && \
    npm install -g webpack@3.10.0
    
# Define working directory
WORKDIR /var/www/html/web

# Define default command, switch the --display value to normal or verbose if you want more info
CMD webpack --watch --display=minimal