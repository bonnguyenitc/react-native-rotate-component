# react-native-rotate-component
### Installation
`npm i react-native-rotate-component --save`

### Props
`durationBack`
`durationGo`
`backEnable`
Name | Type
------------ | -------------
CdurationBack | Number
durationGo | Number
backEnable | Boolean


### Example

```javascript
import RotateComponent from 'react-native-rotate-component';

...

<RotateComponent durationBack={500} durationGo={300} backEnable={this.state.back}>
  <Icon name="arrow-back" type="Ionicons" />
</RotateComponent>
```
