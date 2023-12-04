# NestJS Microservice Example with Kafka

This is a demonstration of how NestJS Microservices can use KafkaJS to communicate with each other and publish messages.

This can be used to create eventsourced backends. While this is a very basic implementation, this lays out the background for a more complicated setup.

## Inspiration:

1. Demonstrate knowledge of backend technologies using TypeScript.
2. Demonstrate usage of NestJS.
3. Demonstrate usge of Kafka for `event sourcing`.
4. Demonstrate usage of Docker.

## Description

This codebase has 3 NestJS projects:

1. `api-gateway`: handles requests and publishes messages for consumption by the `customers` service.
2. `customers`: a microservice that listens for messages in kafka and communicates with the `authentication` microservice to charge a customer
3. `authencitation`: holds customer information (customer1 and customer2). Uses Kafka to send information about these to customers via a message channel.

## Usage

First, set up kafka and kafdrop (a web UI for checking your kafka topics and their messages) by running this:

`docker compose up -d`

If you are in windows or mac, you will need to have Docker Desktop installed.

Then, start a terminal in each of the folders and do this for each of them:

`yarn` | `npm i`

and run the development servers with

`yarn start:dev` | `npm run start:dev`

Wait for all the services to boot up and connect to Kafka.

Once all 3 services are running, you can use Postman/Insomnia to send a POST request to http://localhost:3000 with the following input:

```json
{
	"customerId": "customer1",
	"amount": 10
}
```

And the terminal for `customers` should print out this:

```bash
Charging customer with payment of $10 gateway ID: c1gwid
```


### Credits:

https://github.com/obsidiandynamics/kafdrop