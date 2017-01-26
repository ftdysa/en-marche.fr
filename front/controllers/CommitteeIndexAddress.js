import React, { PropTypes } from 'react';
import AddressForm from '../components/CommitteeAddressForm';

export default class CommitteeIndexAddress extends React.Component
{
    constructor() {
        super();

        this.state = {
            address: null,
            country: null,
            postalCode: null,
            city: null,
            cityName: null,
        };

        this.handleAddressChange = this.handleAddressChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            address: this.props.defaultAddress.address,
            country: this.props.defaultAddress.country,
            postalCode: this.props.defaultAddress.postalCode,
            city: this.props.defaultAddress.city,
            cityName: this.props.defaultAddress.cityName,
        });
    }

    handleAddressChange(address) {
        this.setState(address);
    }

    render() {
        return (
            <div>
                <AddressForm
                    countries={this.props.countries}
                    defaultAddress={this.props.defaultAddress}
                    onAddressChange={this.handleAddressChange}
                />
                {this.state.address ? <input type="hidden" name="committee[address][address]" value={this.state.address} /> : ''}
                {this.state.country ? <input type="hidden" name="committee[address][country]" value={this.state.country} /> : ''}
                {this.state.postalCode ? <input type="hidden" name="committee[address][postalCode]" value={this.state.postalCode} /> : ''}
                {this.state.country === 'FR' && this.state.city ? <input type="hidden" name="committee[address][city]" value={this.state.city} /> : ''}
                {this.state.country !== 'FR' && this.state.cityName ? <input type="hidden" name="committee[address][cityName]" value={this.state.cityName} /> : ''}
            </div>
        );
    }
};

CommitteeIndexAddress.propTypes = {
    countries: PropTypes.object.isRequired,
    defaultAddress: PropTypes.object.isRequired
};