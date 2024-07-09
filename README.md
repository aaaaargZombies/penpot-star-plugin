# Penpot Star Plugin (WIP)

Create stars shapes in penpot, based on [Penpot Plugin Starter Elm Template](https://github.com/aaaaargZombies/penpot-plugin-starter-elm-template)

## Development

### Run the Development Server

To start the development server, run the following command in your terminal:

```bash
npm run dev
```

Once the server is running, open your web browser and go to `http://localhost:4400` to view your plugin in action. Now is ready to be loaded in Penpot.

### Technologies Used

This plugin template uses several key technologies:

- **TypeScript**
- **Vite**
- **[Elm](https://elm-lang.org/)**

Tests and formatting are run on a pre-commit hook via [Husky](https://typicode.github.io/husky/)

### Libraries Included

The template includes two Penpot libraries to assist in your development:

- `@penpot/plugin-styles`: This library provides utility functions and resources to help you style your components consistently with [Penpot's design system](https://penpot.github.io/penpot-plugins/).
- `@penpot/plugin-types`: This library includes types and API descriptions for interacting with the Penpot plugin API, facilitating the development of plugins that can communicate effectively with the Penpot app.

## Build the plugin

When you're ready to build your plugin for production, run the following command:

```bash
npm run build
```

This command compiles your TypeScript and Elm code into JavaScript, creating a `dist` folder that contains all the files necessary to deploy your plugin.

## Useful resources

- [Penpot plugin documentation](https://penpot-docs-plugins.pages.dev/technical-guide/plugins/)
- [Sample plugins](https://github.com/penpot/penpot-plugins)
- [Elm guide](https://guide.elm-lang.org/)
- [Welcome to Elm! video series](https://www.youtube.com/playlist?list=PLuGpJqnV9DXq_ItwwUoJOGk_uCr72Yvzb)
