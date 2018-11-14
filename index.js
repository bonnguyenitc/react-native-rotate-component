import React, { Component } from "react";
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';

export default class RotateComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rotateGo: new Animated.Value(0),
			rotateBack: new Animated.Value(0),
		}
	}

	componentDidMount() {
		Animated.timing(this.state.rotateBack, {
			toValue: 1,
			duration: this.props.durationBack,
			easing: Easing.linear,
			useNativeDriver: true
		}).start();
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if(nextProps.backEnable) {
			Animated.timing(this.state.rotateGo, {
				toValue: 1,
				duration: this.props.durationGo,
				easing: Easing.linear,
				useNativeDriver: true
			}).start();
		}
	}

	render() {
		const rotateGo = this.state.rotateGo.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg','180deg']
		})
		const rotateBack = this.state.rotateBack.interpolate({
			inputRange: [0, 1],
			outputRange: ['180deg','0deg']
		})
		const styleArrow = this.props.backEnable?rotateGo:rotateBack;
		return(
			<Animated.View style={{ transform: [{ rotate: styleArrow }] }}>
					{this.props.children}
			</Animated.View>				
		);
	}
}