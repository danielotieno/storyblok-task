![example workflow](https://github.com/danielotieno/storyblok-task/actions/workflows/main.yml/badge.svg)

# Introduction

This repo contains tests for the Storyblok task on the Demo webapp.

- In Assets, the user can register different types of files which will be used in the
  construction of the story.
- In addition to different types of files, the user can define whether the file will be
- private or public. When private, a preview of the file cannot be shown.
- As developers, we need to ensure that the Assets feature works. Your task here is to
  explore the Assets tab and describe the necessary tests to cover the registration of an
  asset and also the Replace option. You can describe it in whatever format you think is the
  best.
- Among the tests you identify, choose the ones you deem most important and automate
  them using Cypress (Use whatever architecture, report plugins, and resources you want).

# Getting Started

Below are the ways to get started with the codebase.

## Get The source Code
Download or clone the repo locally. Use the below comand to clone the repo.

```
SSH
git clone git@github.com:danielotieno/storyblok-task.git
```

```
HTTPS
git clone https://github.com/danielotieno/storyblok-task.git
```

## Install Dependencies
```
yarn install
```

## Run Tests

```
To run all the tests, use the command below;

yarn ui-test
```

```
To run smoke tests, use the command below;

yarn ui-smoke-test
```

```
To generate tests report, run the command below;

yarn allure:report
```


