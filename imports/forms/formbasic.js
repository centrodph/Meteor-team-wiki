import _ from 'lodash';

export default function(props) {
  this.props = props;
  this.getArray = () => {
    return this.props;
  };
  this.getFields = () => {
    return this.props.map(field => field.name);
  };

  this.getValidators = () => {
    let validators = {};
    this.props.forEach(field => {
      validators[field.name] = field.validators;
    });
    return validators;
  };
}
