# Architecture

This section of the documentation explains the inner workings of this architecture and the reasoning behind its structure.

## Requirements
1. To separate business logic from framework-level code
2. To decouple the database and third-party services from the business logic
3. To adhere to SOLID principles


## Base idea

The current architecture relies on the following design patterns and principles:
- **Interfaces over implementations** - all function parameters and return types should be interfaces rather than concrete implementations
- [**Entity Wrappers**](/docs/terms.md#wrapper) - the composition, where one object is wrapped around another. Each wrapper - or composition layer - handles only with one simple process at a time. This helps decouple different business processes so they can be added or removed separately, allowing the code to be built from small blocks.
- **Thin interfaces** - interfaces of input and return data should contain as few fields as possible to cover the functionality. Such an approach helps to reuse the code across different classes.
- [**Repositories**](/docs/terms.md#repository) – decouple business logic from data storage and manage fetching the data required for request processing.
- [**Savers**](/docs/terms.md#saver) – persist changes to storage, keeping this responsibility isolated from the business logic.
- [**Factories**](/docs/terms.md#factory) – isolate complex model instantiation from the rest of the application, including business model method calls.
- **Dependency Inversion & Dependency Injection** – ensure low coupling between components.
- **Omission of *Use Case* classes** – since the instantiation and processing logic spans only a few lines, introducing an additional [service](/docs/terms.md#service) layer is unnecessary.

This is a diagram of the workflow.

![Architecture](/docs/architecture.png)
