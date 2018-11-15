# react-native-rotate-component
### Installation
`npm i react-native-rotate-component --save`

### Props
Name | Type
------------ | -------------
durationBack | Number
durationGo | Number
backEnable | Boolean

### Demo
Install for Arrow-back

![alt text](https://github.com/bonnguyenitc/react-native-rotate-component/blob/master/screen/demo.gif)

### Example

```javascript
import RotateComponent from 'react-native-rotate-component';

...

<RotateComponent durationBack={500} durationGo={300} backEnable={this.state.back}>
  <Icon name="arrow-back" type="Ionicons" />
</RotateComponent>
```
