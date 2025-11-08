FROM docker.io/httpd
COPY . /usr/local/apache2/htdocs/
CAP_NET_BIND_SERVICE
EXPOSE 80
