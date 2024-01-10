# Learning log

## TODO

- build docker image, publish to docker hub
- setup cicd using github actions

## Docker image

- example Docker build command

```bash
docker build -t learning-log-remix:latest .
```

- example Docker run command

```bash
docker run -d -p 8080:8080 \
-v "./config/data:/data" \
-e "SESSION_SECRET=?" \
-e "GOOGLE_CLIENT_ID=?" \
-e "GOOGLE_CLIENT_SECRET=?" \
-e "BASE_URL=http://localhost:8080" \
learning-log-remix
```

note: volume "/data" contains sqlite, you may want to mount this to your host computer (the one that you are currently using right now)
