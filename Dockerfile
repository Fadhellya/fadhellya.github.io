FROM docker.io/httpd
RUN sed -i 's/^Listen 80/Listen 8080/' /usr/local/apache2/conf/httpd.conf \
 && sed -i 's/:80>/:84>/' /usr/local/apache2/conf/httpd.conf
COPY . /usr/local/apache2/htdocs/
USER root 
RUN chgrp -R 0 /usr/local/apache2 && chmod -R g=u /usr/local/apache2 
USER 1001
EXPOSE 84
