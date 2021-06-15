# PrimeReact-Opt

PrimeReact is a rich set of open source UI Components for React.

## Download

PrimeReact is available at npm, if you have an existing application run the following command to download it to your project.

```
npm install primereact-opt --save
npm install primeicons --save
```

## Import

```javascript
import {ComponentName} from 'primereact-opt/{componentname}';
import {Dialog} from 'primereact-opt/dialog';
import {Accordion,AccordionTab} from 'primereact-opt/accordion';
```

## Dependencies

Majority of PrimeReact components (95%) are native and there are some exceptions having 3rd party dependencies such as Google Maps for GMap.

In addition, components require PrimeIcons for icons and react-transition-group for animations.

```json
dependencies: {
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-transition-group": "^4.4.1",
    "primeicons": "^4.1.0"
}
```

## Styles
The css dependencies are as follows, note that you may change the theme with another one of your choice.

```
primereact-opt/resources/themes/saga-blue/theme.css
primereact-opt/resources/primereact.min.css
primeicons/primeicons.css
```

If you are using a bundler such as webpack with a css loader you may also import them to your main application component, an example from create-react-app would be.

```javascript
import 'primereact-opt/resources/themes/saga-blue/theme.css';
import 'primereact-opt/resources/primereact.min.css';
import 'primeicons/primeicons.css';
```
## TypeScript

Typescript is fully supported as type definition files are provided in the npm package of PrimeReact. A sample [typescript-primereact application](https://github.com/primefaces/primereact-typescript-quickstart) is available as well at github.

## Contributions & Maintainer
---
- Aniket Khara   <aniketskhara@gmail.com>
- Sagar Pawar     <sagarpawar2797@gmail.com>