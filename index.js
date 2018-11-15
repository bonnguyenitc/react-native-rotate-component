import React, { Component } from "react";
import { Animated, Easing } from 'react-native';

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
			}).start(() => {
				this.state.rotateBack.setValue(0)
			});
		} else {
			Animated.timing(this.state.rotateBack, {
				toValue: 1,
				duration: this.props.durationGo,
				easing: Easing.linear,
				useNativeDriver: true
			}).start(() => {
				this.state.rotateGo.setValue(0)
			});
		}
	}

	render() {
		const inputRange = this.props.inputRange;
		const outputRangeGo = this.props.outputRangeGo;
		const outputRangeBack = this.props.outputRangeBack;
		const rotateGo = this.state.rotateGo.interpolate({
			inputRange,
			outputRange: outputRangeGo
		})
		const rotateBack = this.state.rotateBack.interpolate({
			inputRange,
			outputRange: outputRangeBack
		})
		const styleArrow = this.props.backEnable?rotateGo:rotateBack;
		return(
			<Animated.View style={{ transform: [{ rotate: styleArrow }] }}>
					{this.props.children}
			</Animated.View>				
		);
	}
}