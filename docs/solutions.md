# Challenges and examples of solutions

This list outlines challenges and solutions to help you understand how this architecture works.

## Challenges
1. [Only reading the data from storage (the simplest code) - commits with the scope e1 (example 1)](#reading-the-data)
2. Code lifecycle: adding a new separate optional field
3. Code lifecycle: adding a new separate required field
4. Updating the required fields (usage of a [saver](/docs/terms.md#saver))
5. Updating the optional fields
6. Code lifecycle: adding a new related field
7. Code lifecycle: switch from the simple field to the complex one
8. A business validation rule for the complex field
9. Code lifecycle: removing the field
10. Auth process (additional separate action)
11. Sign up
12. Checking access restrictions before reading the data (additional separate action)
13. Saving changelogs while updating the data in the store (additional separate action)
14. Transactional updating

## Reading the data
This is the simplest use case - just get the data from the storage and return it. This process includes the following steps:

1. The controller gets the data that was passed by HTTP
2. The factory gets the raw data from the storage using the specific method
3. The factory creates a new entity object of the specific class using the raw data from the previous step
4. The controller uses the entity object from the previous step to create a DTO object and return it via HTTP

[Here](https://github.com/search?q=repo%3ADevilRep%2Fsolid-factory-saver-test-architecture++e1&type=commits) you can find commits that show this process

## Adding a new separate optional field
Comming soon