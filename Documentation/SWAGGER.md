# Documentation Swagger pour NestJS

## Instalation

`npm install --save @nestjs/swagger`

une fois l'installation terminer, il faut configurer swagger dans votre application :
pour ce faire ajouter votre configuration dans la function bootstrap de votre main.ts

```typescript
  //  import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

  const config = new DocumentBuilder()
    .setTitle('Demo example')
    .setDescription('The demo API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(process.env.SWAGGER, app, document);
```

## Décorateurs pour les contrôleurs et les routes

- `@ApiTags('tag1', 'tag2', ...)`: Classe vos endpoints dans des groupes dans la documentation.
- `@ApiOperation({ summary: 'Description courte' })`: Fournit un résumé pour une méthode de contrôleur spécifique.
- `@ApiResponse({ status: 200, description: 'Succès', type: MonDto })`: Décrit la réponse d'une opération API.
- `@ApiBearerAuth()`: Indique qu'une méthode nécessite une authentification par token Bearer.
- `@ApiBasicAuth()`: Indique une authentification Basic pour une route spécifique.
- `@ApiSecurity('security_scheme_name')`: Permet de spécifier un schéma de sécurité personnalisé.

### @ApiTags

Utilisé pour regrouper les endpoints dans des catégories spécifiques dans la documentation Swagger.

- **tags**: Un ou plusieurs noms de tags qui catégorisent les endpoints.

### @ApiOperation

Fournit des détails supplémentaires sur chaque opération API, tels que le résumé et la description.

- **summary**: Un bref résumé de l'opération effectuée par l'endpoint.
- **description** (optionnel): Une description plus détaillée de l'opération.

### @ApiResponse

Documente les réponses potentielles d'un endpoint. Peut être répété pour documenter plusieurs réponses possibles.

- **status**: Le code de statut HTTP de la réponse.
- **description**: Une description de la réponse.
- **type** (optionnel): Le type de l'objet de réponse, souvent un DTO.
- **isArray** (optionnel): Indique si la réponse est un tableau d'éléments.

### @ApiBearerAuth

Indique qu'un endpoint nécessite une authentification via un token Bearer. Peut être appliqué au niveau de la classe ou de la méthode.

### @ApiBasicAuth

Signale qu'une authentification Basic (nom d'utilisateur/mot de passe) est requise pour accéder à l'endpoint. Comme `@ApiBearerAuth`, peut être utilisé au niveau de la classe ou de la méthode.

### @ApiSecurity

Permet de spécifier des schémas de sécurité personnalisés définis dans le document OpenAPI, tels que des API keys personnalisées, OAuth2, etc.

- **name**: Le nom du schéma de sécurité.
- **scopes** (optionnel): Un tableau de chaînes décrivant les scopes de sécurité requis pour l'API.

NB - Les "scopes" dans le contexte des schémas de sécurité, notamment avec OAuth2, servent à définir les permissions ou les niveaux d'accès que l'application cliente peut demander pour accéder aux ressources protégées sur le serveur. Ils permettent de limiter l'étendue de l'accès accordé à un token d'authentification, offrant ainsi une granularité plus fine dans la gestion des autorisations.

### Exemple d'utilisation

```typescript
import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('exemple')
@Controller('exemple')
export class ExempleController {

  @Get()
  @ApiOperation({ summary: 'Trouver tous les éléments' })
  @ApiResponse({ status: 200, description: 'Succès' })
  @ApiResponse({ status: 404, description: 'Non trouvé' })
  trouverTous() {
    // Logique pour récupérer tous les éléments
  }

  @Post()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Créer un élément' })
  @ApiResponse({ status: 201, description: 'Élément créé' })
  creer() {
    // Logique de création d'un élément
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Crée un nouvel item.' })
  @ApiSecurity('api_key', ['write:items', 'read:items']) // Spécifie des scopes pour le schéma de sécurité.
  creerSensible() {
    // Logique pour créer un nouvel item sensible
  }

}
```

## Décorateurs pour les paramètres de route

- `@ApiParam({ name: 'id', required: true, description: 'Identifiant unique', type: String })`: Documente un paramètre de chemin.
- `@ApiQuery({ name: 'name', required: false, description: 'Filtre par nom' })`: Documente les paramètres de requête.
- `@ApiBody({ type: MonDto, description: 'Objet JSON pour la création' })`: Documente le corps de la requête attendu.

### @ApiParam

Utilisé pour décrire un paramètre de chemin dans une opération API. Chaque paramètre de chemin (identifié par `@Param` dans NestJS) devrait être documenté avec `@ApiParam`.

- **name**: Nom du paramètre de chemin, doit correspondre exactement au nom utilisé dans le décorateur `@Param`.
- **description**: Une description du paramètre pour fournir plus de contexte.
- **required** (optionnel): Indique si le paramètre est obligatoire. Par défaut, tous les paramètres de chemin sont considérés comme obligatoires.
- **type** (optionnel): Le type de données du paramètre (par exemple, `String`, `Number`).

### @ApiQuery

Documente un paramètre de requête. Utilisé pour les paramètres passés dans l'URL de la requête, souvent pour filtrer les résultats ou préciser la requête.

- **name**: Nom du paramètre de requête.
- **description** (optionnel): Une description qui explique le rôle du paramètre de requête.
- **required** (optionnel): Si le paramètre est obligatoire ou non. Par défaut, il est considéré comme facultatif.
- **type** (optionnel): Type de données du paramètre de requête.
- **isArray** (optionnel): Indique si le paramètre est un tableau.

### @ApiBody

Spécifie le corps de la requête attendu pour les opérations POST, PUT, et PATCH. Très utile pour définir les structures complexes attendues dans le corps de la requête.

- **type**: Le type de l'objet attendu dans le corps de la requête, souvent un DTO.
- **description** (optionnel): Une description du corps de la requête.
- **required** (optionnel): Indique si le corps de la requête est obligatoire.

### Exemple d'utilisation

```typescript
import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';
import { MonDto } from './mon-dto';

@Controller('exemple')
export class ExempleController {

  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Identifiant unique de l\'élément',
    type: String
  })
  trouverUn(@Param('id') id: string) {
    // logique pour récupérer un élément spécifique
  }

  @Get()
  @ApiQuery({
    name: 'filter',
    description: 'Filtre les résultats selon des critères spécifiques',
    required: false
  })
  trouverTous(@Query('filter') filter: string) {
    // logique pour récupérer tous les éléments avec un filtre optionnel
  }

  @Post()
  @ApiBody({
    description: 'Données de l\'élément à créer',
    type: MonDto,
  })
  creer(@Body() body: MonDto) {
    // logique de création d'un élément
  }
}
```

## Décorateurs pour les modèles de données (DTOs)

- `@ApiProperty({ description: 'Description de la propriété', required: true })`: Documente les propriétés d'un modèle ou d'un objet de transfert de données (DTO).
- `@ApiPropertyOptional()`: Pour les champs optionnels.

### @ApiProperty

Ce décorateur est utilisé pour décrire une propriété obligatoire dans un modèle ou un DTO. Il accepte plusieurs paramètres pour définir les caractéristiques de cette propriété :

- **type**: Spécifie le type de la propriété (par exemple, `String`, `Number`, `Boolean`, etc.).
- **description**: Fournit une description de la propriété, expliquant son utilité ou ses particularités.
- **example**: Donne un exemple de valeur pour la propriété, aidant à illustrer son utilisation.
- **enum**: Pour les propriétés de type énumération, liste les valeurs possibles.
- **default**: Indique une valeur par défaut pour la propriété.
- **required**: Bien que les propriétés annotées avec `@ApiProperty` soient considérées comme obligatoires par défaut, ce paramètre peut être utilisé explicitement pour clarifier l'intention.
- **isArray**: Indique si la propriété est un tableau d'éléments du type spécifié.

### @ApiPropertyOptional

Ce décorateur est similaire à `@ApiProperty`, mais est utilisé pour les propriétés qui ne sont pas obligatoires dans le modèle ou le DTO. Les paramètres acceptés par `@ApiPropertyOptional` sont essentiellement les mêmes que ceux de `@ApiProperty`, à l'exception de `required`, puisque la propriété est implicitement optionnelle.

### Exemple d'utilisation

```typescript
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class MonDto {
  @ApiProperty({
    description: 'Identifiant unique de l\'utilisateur',
    example: '1234',
    type: String
  })
  id: string;

  @ApiPropertyOptional({
    description: 'Nom de l\'utilisateur',
    example: 'Jean Dupont',
    type: String
  })
  nom?: string;
}
```

## Réponses et statuts

-  200 : `@ApiOkResponse`
-  201 : `@ApiCreatedResponse`
-  204 : `@ApiNoContentResponse`
-  400 : `@ApiBadRequestResponse`
-  404 : `@ApiNotFoundResponse`

Décorateurs pour spécifier des réponses pour des codes de statut HTTP spécifiques.

### Parametre des decorateur réponses et statuts :

- **description**: Une chaîne de caractères qui fournit une explication claire de la réponse. Cette description aide les consommateurs de l'API à comprendre le contexte et le contenu de la réponse.

- **type**: Spécifie le type de l'objet de réponse. Ce paramètre est utilisé pour décrire la structure des données renvoyées par l'API. Pour les réponses qui retournent des données (`@ApiOkResponse`, `@ApiCreatedResponse`), vous pouvez indiquer un modèle ou un DTO (Data Transfer Object) qui définit cette structure. Pour les réponses qui ne retournent habituellement pas de corps (`@ApiNoContentResponse`), ce paramètre peut être omis.

- **status**: Bien que chaque décorateur corresponde à un code de statut HTTP spécifique, ce paramètre permet de préciser ou de surcharger le code de statut par défaut. Il est généralement utilisé tel quel, sans modification.

- **isArray**: Un booléen qui indique si la réponse est un tableau d'éléments du type spécifié. Ce paramètre est utile lorsque votre API renvoie une liste ou une collection d'objets.

### Exemple d'utilisation

```typescript
import { Get, Controller } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { MonDto } from './mon-dto';

@Controller('exemple')
export class ExempleController {

  @Get()
  @ApiOkResponse({
    description: 'Requête réussie',
    type: MonDto,
    isArray: true
  })
  async trouverTout(): Promise<MonDto[]> {
    // Logique pour récupérer les données
  }
}
```


## Paramètres avancés et sécurité

- `@ApiHeaders`
- `@ApiOAuth2`

Documente les en-têtes requis et spécifie des schémas de sécurité.

### @ApiHeaders

Documente plusieurs headers attendus dans les requêtes. C'est une alternative pour définir plusieurs headers en une seule déclaration.

- **headers**: Un tableau d'objets décrivant chaque header, avec des champs pour `name`, `description` (optionnel), `required` (optionnel), et `type` (optionnel).

### @ApiOAuth2

Indique qu'un endpoint nécessite une authentification OAuth2. Permet de spécifier les scopes requis pour accéder à l'endpoint.

- **scopes**: Un tableau de chaînes représentant les scopes requis.
- **securityName** (optionnel): Le nom du schéma de sécurité OAuth2 défini dans la configuration Swagger de l'API.

### Exemple d'utilisation

```typescript
import { Controller, Get, Post } from '@nestjs/common';
import { ApiHeaders, ApiOAuth2 } from '@nestjs/swagger';

@Controller('exemple')
export class ExempleController {

  @Get('/secured')
  @ApiOAuth2(['read:exemple'], 'oauth2')
  findSecured() {
    // Logique pour un endpoint sécurisé par OAuth2
  }

  @Post('/headers')
  @ApiHeaders([
    { name: 'X-Custom-Header', description: 'Un header personnalisé', required: true, type: 'string' },
    { name: 'X-Another-Header', required: false, type: 'number' }
  ])
  withHeaders() {
    // Logique pour un endpoint nécessitant des headers spécifiques
  }
}
```

## Securité et espace privé

- `@ApiHideProperty()`: Exclut une propriété de la documentation du modèle Swagger.  Il ne prend aucun paramètre.
- `@ApiExcludeEndpoint`: Exclut une route de la documentation du modèle Swagger.  Il ne prend aucun paramètre.

Ce décorateur est appliqué directement à une propriété d'une classe pour indiquer que cette propriété / route ne doit pas apparaître dans la documentation Swagger générée. Il est utile pour masquer des informations sensibles ou des détails d'implémentation qui ne sont pas pertinents pour les consommateurs de l'API.

### Exemple d'utilisation

Considérons un modèle `User` où vous souhaitez masquer la propriété `password` dans la documentation API :

```typescript
import { ApiHideProperty } from '@nestjs/swagger';

export class User {
  id: number;
  username: string;

  @ApiHideProperty()
  password: string; // Cette propriété ne sera pas documentée dans Swagger
}
```

Si vous avez une route dans votre contrôleur que vous souhaitez exclure de la documentation :

```typescript
import { Controller, Get } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller('users')
export class UsersController {

  @Get()
  findAll() {
    // Logique pour retourner tous les utilisateurs
  }

  @Get('internal')
  @ApiExcludeEndpoint()
  internalUseOnly() {
    // Cette route ne sera pas documentée dans Swagger
  }
}
```

## Utilisation

Ces décorateurs permettent de structurer et enrichir la documentation de votre API NestJS, facilitant l'utilisation et la compréhension par les développeurs.
Il en existe d'autres, n'hesiter pas a aller voir la [documentation officiel](https://docs.nestjs.com/openapi/introduction)


