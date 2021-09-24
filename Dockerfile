FROM nginx:1.19.10-alpine

WORKDIR /usr/share/nginx/html

COPY docs/.vuepress/dist/ .

EXPOSE 80