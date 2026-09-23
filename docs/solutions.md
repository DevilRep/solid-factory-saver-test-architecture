# Challenges and examples of solutions

This list outlines challenges and solutions to help you understand how this architecture works.

## Challenges
1. [Only reading the data from storage (the simplest code) - commits with the scope e1 (example 1)](#reading-the-data)
2. [Code lifecycle: adding a new separate field for one place](#adding-a-new-separate-field-for-one-place)
3. [Code lifecycle: adding a new separate field for all places](#adding-a-new-separate-field-for-all-places)
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
This is the simplest use case - just get the data from storage and return it. This process includes the following steps:

1. The controller gets the data that was passed by HTTP
2. The factory gets the raw data from storage using the specific method
3. The factory creates a new entity object of the specific class using the raw data from the previous step
4. The controller uses the entity object from the previous step to create a DTO object and return it via HTTP

[Here](https://github.com/search?q=repo%3ADevilRep%2Fsolid-factory-saver-test-architecture+e1&type=commits&s=committer-date&o=desc) you can find commits that show this process

## Adding a new separate field for one place
This one is a little harder because it shows how the code should be modified over time. Also this case shows the situation when there is necessary to add a new separate endpoint with more data. From the interface's point of view, a new interface should be created with the new field. That also means there should be created a new repository (or a new method for the existing one) should be created to get the value for this field from storage, and a new factory to pass this value to the new entity's constructor. From the implementation point of view, a new field should be added by updating the existing class or creating a new wrapper. The second approach is less ideal because it adds too much overhead for a simple field that is strictly meant for data storage.
So there are a few steps to add a new field:
1. Create new interfaces: for the entity, for the raw repository data, for the repository itself, and for the factory.
2. Create implementations for a new entity's constructor and a for the factory that will use it with the repositroy interface from the previous step.
3. Create an implementation for the repository.
4. Create a new route that will use the factory from the previous step, dto and set up all necessary dependencies.

For repository implementation, the same class could be used until it's small enough - consider having a few different repositories for the entity if there are too many functions, or combine them if they have almost the same result.
That's also relevant for the factory, but it's better to group methods for it by use cases

[Here](https://github.com/search?q=repo%3ADevilRep%2Fsolid-factory-saver-test-architecture+e2&type=commits&s=committer-date&o=desc) you can find commits that show this process

## Adding a new separate field for all places
First of all, it's related only to a specific interface. Second, this is a very specific case because it requires updating all existing code (that uses this interface) and adding a new field smoothly, without breaking changes and without changing the old code. Because we need to support both codebases (with and without the new field), it's better to set a default value for this field and return it for the entity when using the old code, while the new code uses the real value.
This approach is acceptable only when the field is required in all places; otherwise, consider using [the previous approach](#adding-a-new-separate-field-for-one-place).

There are a few steps to add a new field:
1. Update the entity interface: the field must be required. Update the raw repository data interface: the field must be optional. Update the implementation for the entity: it should set the default value if there is no value in the raw repository data.
2. Create new implementations for all repositories that use this interface
3. Update dependencies and dto

[Here](https://github.com/search?q=repo%3ADevilRep%2Fsolid-factory-saver-test-architecture+e3&type=commits&s=committer-date&o=desc) you can find commits that show this process