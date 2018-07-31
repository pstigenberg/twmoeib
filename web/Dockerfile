FROM alpine:3.5

RUN set -x ; \
  addgroup -g 82 -S www-data ; \
  adduser -u 82 -D -S -G www-data www-data && exit 0 ; exit 1

RUN apk add --update bash curl nano nginx nodejs
RUN chown -R www-data:www-data /var/lib/nginx

# start by copying package.json and run npm install 
# to prevent that this is done every time the project changes
COPY web_app/package.json /tmp/package.json
RUN cd /tmp && npm install

# Copy project
COPY web_app/ /var/www/html/web/
RUN cp -a  /tmp/node_modules /var/www/html/web/

# Copy all nginx config files
COPY ./config/default/default.conf /etc/nginx/conf.d/default.conf
COPY ./config/nginx/nginx.conf /etc/nginx/nginx.conf

# Define working directory.
WORKDIR /etc/nginx

# Define default command.
CMD nginx