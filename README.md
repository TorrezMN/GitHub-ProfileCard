# GitHub-ProfileCard

Small component to display GitHub profiles in various ways. Completely responsive.

<img src="https://raw.githubusercontent.com/TorrezMN/GitHub-ProfileCard/HEAD/docs/card2.png" width="100%" height="100%"> 
<img src="https://raw.githubusercontent.com/TorrezMN/GitHub-ProfileCard/HEAD/docs/card3.png" width="100%" height="100%"> 

## Installation

You can install this component in your project with the fallowing command:

```console
npm i @torrez_mn/gh-card
```

or by:

```console
npm install @torrez_mn/gh-card
```

## Usage

In your component import the component as fallows:


```JavaScript
import '@torrez_mn/gh-card';

```

Now you can use the component in three diferent ways.


### Normal - Horizontal

> ***See a *Code Sandbox* React demo [here.](https://t2r116.csb.app/)***

Produces the same result as the normal version but horizontally.

```JavaScript

{/* REACT DEMO */}

{/* IMPORTS */}
import '@torrez_mn/gh-card';

function MyComponent() {
	return (
		<div>

			{/* COMPONENT */}
			<gh-card 
			gh-user='getify'
			gh-mode='horizontal'
			gh-primary-color='rgba(245, 40, 145, 0.8)'
			gh-secondary-color='rgba(0, 100, 20, 1)'
			/>

		</div>
	);
}

export default MyComponent;
```
### Horizontal with Projects 

> ***See a *Code Sandbox* React demo [here.](https://befdkg.csb.app/)***

Produce a full screen landscape version with public projects on github. Randomly displays data from the user's public projects and the languages used.


```JavaScript

{/* REACT DEMO */}

{/* IMPORTS */}
import '@torrez_mn/gh-card';

function MyComponent() {
	return (
		<div className="App">

			{/* COMPONENT */}
			<gh-card 
			gh-user='TorrezMN'
			gh-mode='horizontal-projects' 
			/>

		</div>
	);
}

export default MyComponent;
```

## Docs

Brief description of the component's props.


| prop | description | required |
|------|-------------|----------|
| gh-user | Corresponds to the username to display. It must match the GitHub user. | Required |
| gh-mode | Mode in which the component will be displayed: "normal", "horizontal", "horizontal-projects".| Required    |
| gh-primary-color | A primary color to use for the component.| Only for "normal" and "horizontal"  mode.|
| gh-secondary-color | A secondary color to use for the component.| Only for "normal" and "horizontal" mode.|
