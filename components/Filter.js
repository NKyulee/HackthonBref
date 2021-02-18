import React, { Component } from 'react';
import {Picker} from '@react-native-picker/picker';

class Filter extends Component {

    state = {
        language: 'récent',
    };

    render() {
        return (
            <Picker
				selectedValue={this.state.language}
				style={{height: 50, width: 100}}
				onValueChange={(itemValue, itemIndex) =>
					this.setState({language: itemValue})
				}
            >
				<Picker.Item label="récent" value="récent" />
				<Picker.Item label="ancien" value="ancien" />
				<Picker.Item label="alphabétique" value="alphabétique" />
				<Picker.Item label="date" value="date" />
			</Picker>
        )
    }
	
}
export default Filter
