# Contributing to Podman Desktop

<p align="center">
  <img alt="Podman Desktop" src="https://raw.githubusercontent.com/containers/podman-desktop/media/screenshot.png">
</p>

We'd love to have you join the community! Below summarizes the processes
that we follow.

## Topics

* [Reporting Issues](#reporting-issues)
* [Working On Issues](#working-on-issues)
* [Contributing](#contributing)
* [Continuous Integration](#continuous-integration)
* [Submitting Pull Requests](#submitting-pull-requests)
* [Communication](#communication)
* [Code Architecture](#code-architecture)

## Reporting Issues

Before opening an issue, check the backlog of
[open issues](https://github.com/containers/podman-desktop/issues)
to see if someone else has already reported it. 

If so, feel free to add
your scenario, or additional information, to the discussion. Or simply
"subscribe" to it to be notified when it is updated.

If you find a new issue with the project we'd love to hear about it! The most
important aspect of a bug report is that it includes enough information for
us to reproduce it. So, please include as much detail as possible and try
to remove the extra stuff that doesn't really relate to the issue itself.
The easier it is for us to reproduce it, the faster it'll be fixed!

Please don't include any private/sensitive information in your issue!

## Working On Issues

Often issues will be assigned to someone, to be worked on at a later time.  

If you are a member of the [Containers](https://github.com/containers) organization, 
self-assign the issue with the `status/in-progress` label.

If you can not set the label: add a quick comment in the issue asking that
the `status/in-progress` label to be set and a maintainer will label it.

## Contributing

This section describes how to start a contribution to Podman Desktop.

### Prerequisites: Prepare your environment

You can develop on either: `Windows`, `macOS` or `Linux`.

Requirements: 
* [Node.js 16+](https://nodejs.org/en/)
* [yarn](https://yarnpkg.com/)

Optional Linux requirements:
* [Flatpak builder, runtime, and SDK, version 22.08](https://docs.flatpak.org/en/latest/first-build.html) 
  ```sh
  flatpak remote-add --if-not-exists flathub --user https://flathub.org/repo/flathub.flatpakrepo
  flatpak install --user flathub org.flatpak.Builder org.freedesktop.Platform//22.08 org.freedesktop.Sdk//22.08
  ```

### Step 1. Fork and clone Podman Desktop

Clone and fork the project.

Fork the repo using GitHub site and then clone the directory:

```sh
git clone https://github.com/<you>/podman-desktop && cd podman-desktop
```

### Step 2. Install dependencies

Fetch all dependencies using the command `yarn`:

```sh
yarn install
```

### Step 3. Start in watch mode

Run the application in watch mode:

```sh
yarn watch
```

The dev environment will track all files changes and reload the application respectively. 

### Step 4. Write and run tests

Write tests! Please try to write some unit tests when submitting your PR.

Run the tests using `yarn`:
```sh
yarn test
```

### Step 5. Code formatter / linter

We use `prettier` as a formatter and `eslint` for linting.

Check that your code is properly formatted with the linter and formatter:

Checking:

```sh
yarn lint:check && yarn format:check
```

Fix:

```sh
yarn lint:fix && yarn format:fix
```

### Step 6. Compile production binaries (optional)

You may want to test the binary against your local system before pushing a PR, you can do so by running the following command:

```sh
yarn compile:current
```

This will create a binary according to your local system and output it to the `dist/` folder.

## Submitting Pull Requests

### Process

Whether it is a large patch or a one-line bug fix, make sure you explain in detail what's changing!

Make sure you include the issue in your PR! For example, say: `Closes #XXX`.

PRs will be approved by an [approver][owners] listed in [`CODEOWNERS`](CODEOWNERS).

Some tips for the PR process:

* No PR too small! Feel free to open a PR against tests, bugs, new features, docs, etc.
* Make sure you include as much information as possible in your PR so maintainers can understand.
* Try to break up larger PRs into smaller ones for easier reviewing
* Any additional code changes should be in a new commit so we can see what has changed between reviews.
* Squash your commits into logical pieces of work

### Use the correct commit message semantics

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

Some examples for correct titles would be:

* `fix: prevent racing of requests`
* `chore: drop support for Node 6`
* `docs: add quickstart guide`

For Podman Desktop we use the following types:


* `build:` Changes that affect the build system
* `ci:` Changes to the CI (ex. GitHub actions)
* `docs:` Documentation only changes (ex. website)
* `feat:` A new feature
* `fix:` A bug fix
* `perf:` A code change that improves performance
* `refactor:` A code change that neither fixes a bug nor adds a feature
* `style:` Changes that affect the formatting, but not the ability of the code
* `test:` Adding missing tests / new tests


Title formatting: 

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Sign your PRs

The sign-off is a line at the end of the explanation for the patch. Your
signature certifies that you wrote the patch or otherwise have the right to pass
it on as an open-source patch. 

Then you just add a line to every git commit message:

    Signed-off-by: Joe Smith <joe.smith@email.com>

Legal name must be used (no pseudonyms or anonymous contributions)

If you set your `user.name` and `user.email` git configs, you can sign your
commit automatically with `git commit -s`.

## Continuous Integration

All pull requests and branch-merges automatically run:

* Format and lint checking
* Cross-platform builds (Windows, macOS, Linux)

You can follow these jobs in Github Actions https://github.com/containers/podman-desktop/actions

## Communication

For bugs/feature requests please [file issues](https://github.com/containers/podman-desktop/issues/new/choose)

Discussions are possible using Github Discussions https://github.com/containers/podman-desktop/discussions/

## Code Architecture

### Frameworks and tooling

Within Podman Desktop, we use the following frameworks and tools to build the desktop application:
* [Electron](https://www.electronjs.org/): In order to deploy cross-platform to multiple operating systems.
* [Svelte](https://svelte.dev/): The reactive UI/UX framework for building the interface.
* [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for the UI/UX framework.
* [Vite](https://vitejs.dev/): Dev tooling for rapid development, debugging and deployment.

> **_NOTE:_**  We also use TypeScript instead of JavaScript for strongly typed programming language development.


### Folders

Below are brief descriptions on the architecture on each folder of Podman Desktop and how it's organized.

If you're unsure where to add code (renderer, UI, extensions, plugins) see the below TLDR:

* `__mocks__/`: Mock packages for Vitest.
* `buildResources`: Podman Desktop logo location / build resources for electron
* `extensions`: We separate functionality into separate "extensions" to keep Podman Desktop modular. Here you'll find extensions such as Kubernetes, CRC, Podman and Docker functionality that Podman Desktop interacts with and integrates into the API (see `packages/extension-api`). Examples include `extensions/crc`, `extensions/podman`, `extensions/docker`.
* `packages/extension-api`: The extension API for extensions such as `extensions/podman` to interact with the Podman Desktop GUI. This API acts as a "middleware" to the main Electron functionality such as displaying notifications, progress messages, configuration changes, etc.
* `packages/main`: Electron process code that is responsible for creating the app's main windows, setting up system events and communicating with other processes
* `packages/preload`: Electron code that runs before the page gets rendered. Typically has access to APIs and used to setup communication processes between the main and renderer code.
* `packages/preload-docker-extension`: Electron preload code specific to the Docker Desktop extension.
* `packages/renderer`: Electron code that runs in the renderer process. The renderer runs separate to the main process and is responsible for typically rendering the main pages of Podman Desktop. Typically, this is where you find the `.svelte` code that renders the main Podman Desktop UI.
* `scripts`: Scripts Podman Desktop requires such as `yarn watch` functionality and updating Electron vendorered modules.
* `tests`: Contains e2e tests for Podman Desktop.
* `types`: Additional types required for TypeScript.
* `website`: The documentation as well as [Podman Desktop website](https://podman-desktop.io) developed in [Docusaurus](https://docusaurus.io).
* `node_modules`: Location for Node.JS packages / dependencies.


> **_NOTE:_** Each `extension` folder is a separately packaged module. If there are any issues with loading, make sure your module is packaged correctly.