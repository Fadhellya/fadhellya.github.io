FROM docker.io/httpd
RUN sed -i 's/^Listen 80/Listen 8080/' /usr/local/apache2/conf/httpd.conf \
 && sed -i 's/:80>/:8080>/' /usr/local/apache2/conf/httpd.conf
COPY . /usr/local/apache2/htdocs/
EXPOSE 8080
