# Architecture

This section of the documentation explains the inner workings of this architecture and the reasoning behind its structure.

## Requirements
1. To separate business logic from framework-level code
2. To decouple the database and third-party services from the business logic
3. To adhere to SOLID principles


## Base idea

![Architecture](/docs/architecture.png)

The current architecture relies on the following design patterns and principles:
- [**Repositories**](/docs/terms.md#repository) – decouple business logic from data storage and manage fetching the data required for request processing.
- [**Savers**](/docs/terms.md#saver) – persist changes to storage, keeping this responsibility isolated from the business logic.
- [**Entity Wrappers**](/docs/terms.md#wrapper) – process each business unit independently.
- [**Factories**](/docs/terms.md#factory) – isolate complex model instantiation from the rest of the application, including business model method calls.
- **Dependency Inversion & Dependency Injection** – ensure low coupling between components.
- **Omission of *Use Case* classes** – since the instantiation and processing logic spans only a few lines, introducing an additional [service](/docs/terms.md#service) layer is unnecessary.
