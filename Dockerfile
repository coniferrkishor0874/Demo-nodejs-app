
FROM node:14-alpine

WORKDIR /app

# # Switch to the non-root user "user"
RUN addgroup -g 1100 -S appuser && \
    adduser -u 1100 -S appuser -G appuser

# # Change the ownership of the working directory to the non-root user "user"
RUN chown -R appuser:appuser /app


COPY  package.json .

COPY   . .

RUN npm install


CMD ["node", "app.js"]


