import formBuilder from './formbasic';
import FormInputText from './element.input';
import FormInputTextarea from './element.textarea';
const formTeamAdmin = new formBuilder([
  {
    name: 'name',
    label: 'Team name',
    component: FormInputText,
    validators: [
      {
        type: 'required',
        param: null
      },
      {
        type: 'minlenght',
        param: { length: 5 }
      },
      {
        type: 'maxlenght',
        param: { length: 200 }
      }
    ]
  },
  {
    name: 'description',
    label: 'Team description',
    component: FormInputTextarea,
    validators: [
      {
        type: 'required',
        param: null
      },
      {
        type: 'minlenght',
        param: { length: 5 }
      },
      {
        type: 'maxlenght',
        param: { length: 200 }
      }
    ]
  }
]);
export default formTeamAdmin;
