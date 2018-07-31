FROM alpine:3.5

RUN set -x ; \
  addgroup -g 82 -S www-data ; \
  adduser -u 82 -D -S -G www-data www-data && exit 0 ; exit 1

RUN apk add --update bash curl nano nginx
RUN chown -R www-data:www-data /var/lib/nginx

# Define working directory.
WORKDIR /etc/nginx

# Copy all config files
COPY config/default/default.conf /etc/nginx/conf.d/default.conf
COPY config/nginx/nginx.conf /etc/nginx/nginx.conf

# Copy default webpage
COPY html/ /var/www/html/

# Define default command.
CMD nginx