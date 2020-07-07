FROM mysql:5.7

ENV MYSQL_ALLOW_EMPTY_PASSWORD yes
ENV MYSQL_ROOT_PASSWORD ''

COPY schema.sql /schema.sql

RUN mysql -u root < schema.sql

EXPOSE 8080
