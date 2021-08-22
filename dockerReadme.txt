To construct the docker image

With Docker, we can create images setting the parameters we need in a dockerfile.


ENTRYPOINT will specify the command the container will be using,
and CMD will be the parameters we are going to use with the executable.

docker build -t my-cypress-image:1.0.0 .


Run the specific command using 
docker run -i -v "%cd%":/my-cypress-project -t my-cypress-image:1.0.0 --spec cypress/integration/pom/*.spec.js


Additional material: Entry point & CMD difference -> https://www.youtube.com/watch?v=OYbEWUbmk90&t=437s&ab_channel=KodeKloud