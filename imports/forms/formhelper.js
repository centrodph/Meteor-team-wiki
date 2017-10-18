import _ from 'lodash';
import validators from '../validators';
/**
 * Simple object to get information and parse from a formJSON
 * @method formFieldHelper
 * @param  {[type]}        props [description]
 * @return {[type]}              [description]
 */
export function formBuilder(props) {
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
/**
 * run all validations from a formJSON
 * @method validate
 * @param  {[type]} values [description]
 * @return {[type]}        [description]
 */
export function formValidate(values) {
  const errors = {};
  const v = this.getValidators();
  _.forEach(values, function(value, key) {
    _.forEach(v, function(vvalue, vkey) {
      if (key == vkey) {
        vvalue.forEach(validator => {
          const r = validators[validator.type](value, validator.param);
          if (r) {
            errors[key] = r;
          }
        });
      }
    });
  });
  return errors;
}

/**
 * Logic to display the right class name in the field contener
 * @method getFieldClass
 * @param  {[type]}      meta [description]
 * @return {[type]}           [description]
 */
export function getFieldClass(meta) {
  if (meta.touched && meta.error) {
    return 'form-field-contener form-field-contener-error';
  }
  return 'form-field-contener';
}
/**
 * Logic to display the right class name in the field input
 * @method getInputClass
 * @param  {[type]}      meta [description]
 * @return {[type]}           [description]
 */
export function getInputClass(meta) {
  if (meta.touched && meta.error) {
    return 'form-field-input invalid';
  }
  return 'form-field-input';
}
