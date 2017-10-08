export default function(props) {
  this.props = props;
  this.getArray = () => {
    return this.props;
  };
  this.getFields = () => {
    return this.props.map(field => field.name);
  };
}
