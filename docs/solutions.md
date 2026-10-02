# Challenges and examples of solutions

This list outlines challenges and solutions to help you understand how this architecture works.

## Challenges
1. [Only reading the data from storage (the simplest code) - commits with the scope e1 (example 1)](#reading-the-data).
2. [Code lifecycle: adding a new separate field for one place](#adding-a-new-separate-field-for-one-place).
3. [Code lifecycle: adding a new separate field for all places](#adding-a-new-separate-field-for-all-places).
4. [Updating the required fields (usage of a saver)](#updating-the-required-fields).
5. [Updating the optional fields](#updating-the-optional-fields).
6. [Code lifecycle: switch from the simple field to the complex one](#switch-from-the-simple-field-to-the-complex-one).
7. [A business validation rule](#a-business-validation-rule).
8. Code lifecycle: removing the field.
9. Auth process (additional separate action).
10. Sign up.
11. Checking access restrictions before reading the data (additional separate action).
12. Saving changelogs while updating the data in the store (additional separate action)
13. Transactional updating.

## Reading the data
This is the simplest use case - just get the data from storage and return it. This process includes the following steps:

1. The controller gets the data that was passed by HTTP.
2. The factory gets the raw data from storage using the specific method.
3. The factory creates a new entity object of the specific class using the raw data from the previous step.
4. The controller uses the entity object from the previous step to create a DTO object and return it via HTTP.

[Here](https://github.com/search?q=repo%3ADevilRep%2Fsolid-factory-saver-test-architecture+e1&type=commits&s=committer-date&o=desc) you can find commits that show this process.

## Adding a new separate field for one place
This one is a little harder because it shows how the code should be modified over time. Also this case shows the situation when there is necessary to add a new separate endpoint with more data. From the interface's point of view, a new interface should be created with the new field. That also means there should be created a new repository (or a new method for the existing one) should be created to get the value for this field from storage, and a new factory to pass this value to the new entity's constructor. From the implementation point of view, a new field should be added by updating the existing class or creating a new wrapper. The second approach is less ideal because it adds too much overhead for a simple field that is strictly meant for data storage.
So there are a few steps to add a new field:
1. Create new interfaces: for the entity, for the raw repository data, for the repository itself, and for the factory.
2. Create implementations for a new entity's constructor and a for the factory that will use it with the repositroy interface from the previous step.
3. Create an implementation for the repository.
4. Create a new route that will use the factory from the previous step, dto and set up all necessary dependencies.

For repository implementation, the same class could be used until it's small enough - consider having a few different repositories for the entity if there are too many functions, or combine them if they have almost the same result.
That's also relevant for the factory, but it's better to group methods for it by use cases.

[Here](https://github.com/search?q=repo%3ADevilRep%2Fsolid-factory-saver-test-architecture+e2&type=commits&s=committer-date&o=desc) you can find commits that show this process.

## Adding a new separate field for all places
First of all, it's related only to a specific interface. Second, this is a very specific case because it requires updating all existing code (that uses this interface) and adding a new field smoothly, without breaking changes and without changing the old code. Because we need to support both codebases (with and without the new field), it's better to set a default value for this field and return it for the entity when using the old code, while the new code uses the real value.
This approach is acceptable only when the field is required in all places; otherwise, consider using [the previous approach](#adding-a-new-separate-field-for-one-place).

There are a few steps to add a new field:
1. Update the entity interface: the field must be required. Update the raw repository data interface: the field must be optional. Update the implementation for the entity: it should set the default value if there is no value in the raw repository data.
2. Create new implementations for all repositories that use this interface.
3. Update dependencies and dto.

[Here](https://github.com/search?q=repo%3ADevilRep%2Fsolid-factory-saver-test-architecture+e3&type=commits&s=committer-date&o=desc) you can find commits that show this process.

## Updating the required fields
This is an interesting case because it also shows how to work with entity wrappers.

There are a few steps to do this:
1. Create a new interface that allows updating the field.
2. Create new interfaces for the entity wrapper to update the field: one for the wrapper itself and another one for the data that the wrapper expects.
3. Create a new interface for a saver - it should have a function that gets the raw data and returns nothing. Also, a new interface should be created for the raw data.
4. Create an interface for a factory.
5. Update entity's implementation to support the interface for the updating fields from the step 1.
6. Create an implementation of the entity wrapper that updates the values. The method updates the field and runs the saver's method to update the data in the storage. It should have a few parameters for the constructor, including:
    * an object of a class that implements the interface for updating fields (from step 1)
    * a link to the saver
7. Create an implementation for the factory that works with the repository and the saver; pass both as constructor parameters. The factory returns an object that implements the entity wrapper interface and **should not allow direct field updates**.
8. Create an implementation for the saver (it could be added to the repository implementation or in a new class).
9. Create a new constoller's method, dto and add all necessary dependencies.

[Here](https://github.com/search?q=repo%3ADevilRep%2Fsolid-factory-saver-test-architecture+e4&type=commits&s=committer-date&o=desc) you can find commits that show this process.

## Updating the optional fields

In this case, the approach is to [add a new separate field for all places](#adding-a-new-separate-field-for-all-places) to avoid creating new interfaces. But the steps are the same as for [the previous one](#updating-the-required-fields).

[Here](https://github.com/search?q=repo%3ADevilRep%2Fsolid-factory-saver-test-architecture+e5&type=commits&s=committer-date&o=desc) you can find commits that show this process.

## Switch from the simple field to the complex one (value object)

This case shows how to switch from a primitive value to a value object. There are two possible cases:
1. Switching updates the storage logic, but the value can still be converted to the same primitive (API response will not change).
2. Switching extends the field, and there is no option to return the value in the same primitive format (API response will change).

The first option allows saving compatibility by replacing the old field with the calculated one in the entity implementation.

The second option is more specific, because it leads to possible breaking changes. To avoid this, a new separate logic should be created, including a new API endpoint. This solution can bring some logical issues while the old API endpoint is available, but they have to be resolved based on the business requirements.
This example shows only the first option, because such situations are more common (like adding business requirements) and also because the second option should use [this approach](#adding-a-new-separate-field-for-one-place).

There are also two different scenarios:
1. A new value object class stores the data in the same way as the old field
2. A new value object class stores the data in another way (for example, it has two different fields instead of one)

There are a few steps to add a new field for the first scenario:
1. Create a value object class.
2. Create a new entity interface with a new value object field.
3. Update the entity implementation using a value object instead of a primitive value. Old getters/setters should be updated as well and use the value object. The constructor should work with both types of data for compatibility. The old field can be marked as deprecated.
4. Now the old code works with the new field, but using the old interfaces. The next step is updating each workflow to use only the new field directly with the new interface from step 2. This action should be done one by one, one endpoint at a time.
5. When all workflows are updated, the old deprecated field can be removed completely from the implementation with the old interface that contains it.

[Here](https://github.com/search?q=repo%3ADevilRep%2Fsolid-factory-saver-test-architecture+e6a&type=commits&s=committer-date&o=desc) you can find commits that show this process.

The second scenario has to leave the old name of the field in the DTO for compatibility (for all cases). But other things are the same. The compatibility code for the update can be moved to the controller after switching to the new code in the domain layer. As for responses, the field can be defined as calculated in the DTO using the new one.

[Here](https://github.com/search?q=repo%3ADevilRep%2Fsolid-factory-saver-test-architecture+e6b&type=commits&s=committer-date&o=desc) you can find commits that show this process.

## A business validation rule
Coming soon