FROM docker.io/httpd
COPY . /usr/local/apache2/htdocs/
EXPOSE 80
