import Ember from 'ember';

export function responsibility(params/*, hash*/) {
  var contact = '[Not decided]';
  var role = '[Not decided]';
  var attributes = params[0];
  
  //debugger;
  
  for (var i = 0; i < attributes.length; ++i) {
    var attr = attributes[i];
    
    if (attr.Name === 'ResponsibleContact') {
      contact = attr.Value;
    } else if (attr.Name === 'ResponsibleRole') {
      role = attr.Value;
      role = role.replace(/Stage\d_/gi, '');
    }
  }
    
  if (contact !== '[Not decided]') {
    return contact;
  } else {
    return role;
  }
}

export default Ember.Helper.helper(responsibility);
