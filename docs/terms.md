# Terms

This is a list of terms that can help to understand the main goal of each class and what restrictions they have.

### Service

This is a class that does not store any information related to the request, so two requests with different data can safely use the same object. Basically, it's a set of functions that allow you to manipulate data. The name of the class can be related to a business entity, a business process, or an inner process.

### Entity

This is a class that stores information related to the request. This means two different requests must have two different objects. The class is always related to an object — whether internal or business-related — and has a corresponding name. For example, it can be `User`, `Order` or `ChangeLog`. The class's methods should work with its properties and should be written from the entity's perspective: what the entity can or can't do and what limitations it can have.

### Controller

While business logic is often separated from other parts of the application (like views), this class helps to connect them together and describes how the data for the business logic should be obtained and how the result should be shown. Crucially, a controller is also a [service](#service).

### Repository

This is a [service](#service) that conceals all information about where and how the data is stored. This class only reads the data. Using such classes helps separate business logic from storage logic and makes it easier to update the storage part without changing the business logic. For example, user information can be stored in one place (like a DB) or in multiple places (own DB and the external one) at the same time - the repository will hide these details and provide the same interface for both cases.

### Factory

This is a [service](#service) that helps create objects and hides all details related to the creation process. Such an approach helps separate the logic of creating a large, complex object from its actual usage.

### Wrapper

This is a class that receives an object of another class (the base class) as a constructor parameter and then provides new methods that call one or more methods from the provided object. Such an approach allows you to extend functionality without changing the base class. A wrapper can be applied to any class, including an [entity](#entity) or a [service](#service).

### Saver

This is a [service](#service) that conceals the saving process from the business logic. It works in the same way as [repository](#repository), but for writing the data
