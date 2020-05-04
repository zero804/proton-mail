FROM httpd:alpine

RUN apk add --update openssl
RUN mkdir -p /etc/proton/ && \
    openssl req \
    -new -newkey rsa:2048 -days 3650 -nodes -x509 \
    -subj "/C=CH/ST=State/L=City/O=Organization/OU=whoami/CN=localhost" \
    -keyout /usr/local/apache2/conf/server.key \
    -out /usr/local/apache2/conf/server.crt

# default WORKDIR == /usr/local/apache2/
RUN sed -i \
        -e 's/^#\(Include .*httpd-ssl.conf\)/\1/' \
        -e 's/^#\(LoadModule .*mod_ssl.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_socache_shmcb.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_proxy.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_proxy_http.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_rewrite.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_unique_id.so\)/\1/' \
        -e 's/^#\(LoadModule .*mod_substitute.so\)/\1/' \
        conf/httpd.conf
RUN echo 'Include conf/extra/custom.conf' >> conf/httpd.conf

COPY httpd/custom.conf conf/extra/
ADD webapp-bundle.tar.gz htdocs/

COPY entrypoint.sh /usr/local/bin/entrypoint
RUN entrypoint httpd -M

EXPOSE 80
EXPOSE 443

ENTRYPOINT ["entrypoint"]
CMD ["httpd-foreground"]
