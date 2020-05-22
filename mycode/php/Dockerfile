FROM php:7.3-fpm
EXPOSE 9000
RUN docker-php-ext-install mysqli
RUN docker-php-ext-install pdo_mysql

WORKDIR /home/sites/site1