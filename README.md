# react-native-rotate-component
### Installation
`npm i react-native-rotate-component --save`

### Props
Name | Type
------------ | -------------
durationBack | Number
durationGo | Number
backEnable | Boolean
inputRange | Array
outputRangeGo | Array
outputRangeBack | Array

### Demo
Install for Arrow-back

![demo](https://github.com/bonnguyenitc/react-native-rotate-component/blob/master/screen/demo.gif)

### Example

```javascript
import RotateComponent from 'react-native-rotate-component';

...

<RotateComponent 
  durationBack={500} 
  durationGo={500} 
  backEnable={this.state.back1} 
  inputRange={[0, 1]} 
  outputRangeGo={['0deg', '180deg']} 
  outputRangeBack={['180deg', '0deg']}
>
  <Icon name="arrow-back" type="Ionicons" />
</RotateComponent>
```
