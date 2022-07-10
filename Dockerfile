# syntax=docker/dockerfile:1

FROM node:16.16.0 as build
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn
COPY . .
ENV HTTPS=true
ENV REACT_APP_API_URL="http://api.eofis.ie:5000/api/v0/"
ENV PORT=8080
RUN yarn build --production

FROM nginx:1
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
