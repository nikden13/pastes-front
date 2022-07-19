Docker version 20.10.14

1. git clone https://github.com/nikden13/pastes-front.git
2. cd pastes-front/
3. docker build -t vuejs-cookbook/dockerize-vuejs-app .
4. docker run -it -p 8080:8080 --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-vuejs-app
5. http://localhost:8080/
