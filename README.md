# Introduction
In this Onboarding Project you are required to implement a full CI/CD pipeline deploying to amazon EKS.

## Project description
The project you are expected to deploy is a TODO app built in node js which uses Dynamodb as its nosql database and cognito as its auth service.


## To Run locally
- npm install
- node app.js


![Alt text](./Architecture.png)

## System Architecture
The web app is deployed on an eks cluster which stores its users directory on a cognito userpool. When a user decides to signin they send a request to cognito if authorized they recieve access by getting a jwt token.
The app is deployed using CI/CD aws code pipeline and argocd. 

## Requirements
- create a dynamodb table Named **Tasks** which uses **on-demand** provisioning the table will have a primarykey named **UserId** 
and a sort-key named **Task**.
- create a cognito userpool and configure it to work with the app.
- Dockerize the app.
- Implement an aws codepipeline using a codebuild stage.
- Create a terraform template that instantiate an eks cluster with a worker node.
- Use argocd to deploy to the eks cluster ensuring maximum automation.





## License
[MIT](LICENSE.md)
