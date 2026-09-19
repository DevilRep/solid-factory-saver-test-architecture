# Architecture

This section of the documentation explains the inner workings of this architecture and the reasoning behind its structure.

## Requirements
1. To separate business logic from framework-level code
2. To decouple the database and third-party services from the business logic
3. To adhere to SOLID principles


## Base idea

First of all, everything is built on two simple ideas: interfaces over implementations and small, separate pieces of code for each business process. The first idea means that all function parameters and return types should be interfaces rather than concrete implementations, which makes it easier to change the implementation in the future. The second idea is based on composition, where one object is wrapped around another. Each wrapper - or composition layer - handles only with one simple process at a time.  This helps decouple different business processes so they can be added or removed separately, allowing the code to be built from small blocks. Building on top of these ideas there is another one that helps to use blocks more efficiently: thin interfaces. This means an interfaces of input and return data should contain as few fields as possible to cover the functionality. Such an approach helps to reuse the code across different classes.

![Architecture](/docs/architecture.png)

The current architecture relies on the following design patterns and principles:
- [**Repositories**](/docs/terms.md#repository) – decouple business logic from data storage and manage fetching the data required for request processing.
- [**Savers**](/docs/terms.md#saver) – persist changes to storage, keeping this responsibility isolated from the business logic.
- [**Entity Wrappers**](/docs/terms.md#wrapper) – process each business unit independently.
- [**Factories**](/docs/terms.md#factory) – isolate complex model instantiation from the rest of the application, including business model method calls.
- **Dependency Inversion & Dependency Injection** – ensure low coupling between components.
- **Omission of *Use Case* classes** – since the instantiation and processing logic spans only a few lines, introducing an additional [service](/docs/terms.md#service) layer is unnecessary.
