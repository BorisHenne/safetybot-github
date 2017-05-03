#!/bin/bash
java -Djava.library.path=./DynamoDBLocal_lib ar DynamoDBLocal.jar -sharedDb -inMemory
