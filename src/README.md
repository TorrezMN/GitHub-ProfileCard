# GitHub-ProfileCard

Small component to display GitHub profiles in various ways. Completely responsive.

## Installation

You can install this component in your project with the fallowing command:

```
npm i @torrez_mn/gh-card
```

or by:

```
npm install @torrez_mn/gh-card
```

## Usage

In your component import the component as fallows:

```
import '@torrez_mn/gh-card';

```

Now you can use the component in three diferent ways.

### Normal

Create a small card with a brief description and some statistical data of the user.

```
	<gh-card
	gh-user='yogonza524'
	gh-mode='normal'
	gh-primary-color='rgba(0,23,255,.5)'
	gh-secondary-color='whitesmoke'
	/>

```

### Normal - Horizontal

Produces the same result as the normal version but horizontally.

```
	<gh-card
	gh-user='getify'
	gh-mode='horizontal'
	gh-primary-color='rgba(245, 40, 145, 0.8)'
	gh-secondary-color='rgba(0, 100, 20, 1)'
	/>

```

### Horizontal with Projects

Produce a full screen landscape version with public projects on github. Randomly displays data from the user's public projects and the languages used.

```
	<gh-card
	gh-user='TorrezMN'
	gh-mode='horizontal-projects'
	/>
```

## Docs

Brief description of the component's props.

| prop               | description                                                                                   | required                                 |
| ------------------ | --------------------------------------------------------------------------------------------- | ---------------------------------------- |
| gh-user            | Corresponds to the username to display. It must match the GitHub user.                        | Required                                 |
| gh-mode            | Mode in which the component will be displayed: "normal", "horizontal", "horizontal-projects". | Required                                 |
| gh-primary-color   | A primary color to use for the component.                                                     | Only for "normal" and "horizontal" mode. |
| gh-secondary-color | A secondary color to use for the component.                                                   | Only for "normal" and "horizontal" mode. |
