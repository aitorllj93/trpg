
# Typed RPG

![](https://raw.githubusercontent.com/aitorllj93/trpg/master/logo200x200.png)


Typed RPG it's a unofficial packages repository for one of the most popular RPG games maker, RPG Maker MV (RMMV) by KADOKAWA.
It's purpose is to enable interaction between this nice framework with TypeScript common frameworks, such as Express and Open Api Specification in server-side, and Angular and other component rendering frameworks on client.

Everyone can help and contribute to the source.

The estimated roadmap of this project should be:

**1st Phase, MVP**
- REST Server with common types of resources 
- Models data repository
- Angular Examples with components
- Configuration layers

**2nd Phase, 3rd Party Integrations**

- Support XML tags 
- Integrations: Yanfly Engine?
- Example: Story Planner Initial Version
- - Characters BIO with Event based Fragments Support
- - Modern UI on Resources Management
- - Characters Editor with stats visualization
- - Growth Charts formulas support
- - Jobs Systems?

**3nd Phase, Standarization**
- Models Repository for data interfaces
- REST Server with all types of resources compatible with Swagger, OpenApi...
- GraphQl Server on top of REST layer
- Command Server Handlers for data manipulation

**4rd Phase, More Components**
- Actors Relationships
- Battle System Simulator
- World Editor
- Project scaffolding

**5rd Phase, Events Sourcing**
- Events Single Source of Thruth database
- Events Manipulation Layer (needed in order to visualize filter, undo, and reapply changes on the network GIT) 
- Aggregates, JSON Patch to apply "data commits"
- CommandToQuery Transformation Layer Aggregates?
- Business Layer Separation
- - ElasticSearch: Logging and search layer
- - Business Rules Framework (natural language processing?) 
- Live Editing?
