
# Typed RPG

![](https://raw.githubusercontent.com/aitorllj93/trpg/master/logo200x200.png)


Typed RPG it's an unofficial packages repository for one of the most popular RPG games maker, [RPG Maker MV (RMMV) by KADOKAWA.](http://www.rpgmakerweb.com/products/programs/rpg-maker-mv)
It's purpose is to enable interaction between this nice framework with TypeScript common frameworks, such as Express and Open Api Specification in server-side, and Angular and other component rendering frameworks on client.

Everyone can help and contribute to the source.

The estimated roadmap of this project should be:

**1st Phase, MVP**
- [REST](https://restfulapi.net/) Server with common types of resources
- Models data repository [Ref](https://www.typescriptlang.org/docs/handbook/classes.html)
- Angular Examples with components [Ref](https://angular.io/guide/architecture-components)
- Configuration layers

**2nd Phase, 3rd Party Integrations**

- Support Plugins and Annotations tags [Ref](https://forums.rpgmakerweb.com/index.php?threads/i-want-to-start-scipting-for-mv.56615/)
- Integrations: [Yanfly Engine?](http://yanfly.moe/yep/)
- Example: Story Planner Initial Version
- - Characters BIO with Event based Fragments Support
- - Modern UI on Resources Management
- - Characters Editor with stats visualization
- - Growth Charts formulas support
- - Jobs Systems?

**3rd Phase, Standarization**
- REST Server with all types of resources compatible with [Swagger](https://swagger.io/tools/swagger-codegen/), [OpenApi](https://www.openapis.org/)...
- [GraphQl Server](https://graphql.org/learn/) on top of REST layer [OpenAPI to GraphQL](https://github.com/strongloop/oasgraph)
- Command Server Handlers for data manipulation [CQRS](https://martinfowler.com/bliki/CQRS.html)

**4th Phase, More Components**
- Actors Relationships
- Battle System Simulator
- World Editor
- Project scaffolding

**5th Phase, Events Sourcing**
- Events as Single Source of Truth database [Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html)
- Events Manipulation Layer (needed in order to visualize filter, undo, and reapply changes on the network [GIT](https://www.kenneth-truyers.net/2016/10/13/git-nosql-database/)) 
- [Aggregates](http://cqrs.nu/Faq/aggregates), [JSONPatch](http://jsonpatch.com/) to transactions/commits
- Business Layer Separation
- - [ElasticSearch](https://www.elastic.co/products/elasticsearch): Logging and search layer
- - [Business Rules Framework](https://www.ibm.com/support/knowledgecenter/SSQP76_8.9.0/com.ibm.odm.dserver.rules.designer.author/config_auth_topics/con_rd_bom_brl_parts.html) ([natural language processing?](https://medium.com/@datamonsters/13-deep-learning-frameworks-for-natural-language-processing-in-python-2b84a6b6cd98)) 
- [Live Editing?]([https://socket.io/])
