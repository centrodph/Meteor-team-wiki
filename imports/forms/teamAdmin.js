import formBuilder from './formbasic';
const formTeamAdmin = new formBuilder([
  {
    name: 'name',
    type: 'text',
    component: 'input',
    label: 'Team name',
    validators: [
      {
        type: 'required',
        param: null
      },
      {
        type: 'minlenght',
        param: { leght: 5 }
      },
      {
        type: 'maxlenght',
        param: { leght: 200 }
      }
    ]
  },
  {
    name: 'description',
    type: 'textarea',
    label: 'Team description',
    component: 'textarea',
    validators: [
      {
        type: 'required',
        param: null
      },
      {
        type: 'minlenght',
        param: { leght: 5 }
      },
      {
        type: 'maxlenght',
        param: { leght: 200 }
      }
    ]
  }
]);
export default formTeamAdmin;
