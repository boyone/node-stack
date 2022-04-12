# README

1. API: analyze

   ```sh
    cd api
    npx eslint .
   ```

2. API: test

   ```sh
    cd api
    npm test
   ```

3. UI: analyze

   ```sh
   cd ui
   npx eslint src/*.js
   ```

4. UI: test

   ```sh
   cd ui
   npm test
   ```

5. UI: build

   ```sh
   cd ui
   docker build -t web:v0.0.1 .
   ```

6. API: build

   ```sh
   cd api
   docker build -t api:v0.0.1 .
   ```

7. Start docker compose

   ```sh
   docker compose up -d
   ```

8. Run API: acceptance test

   ```sh
   cd atdd/api/
   robot api.robot
   ```

9. Run UI: acceptance test

   ```sh
   cd atdd/web/
   robot ui.robot
   ```

10. Stop docker compose

```sh
docker compose down
```
