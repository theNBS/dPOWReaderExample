import Ember from 'ember';

export function attributeValue(params, hash) {
  //debugger;
  
  var attrs = params[0];
  var attributeName = hash.attributeName;
  
  for (var i = 0; i < attrs.length; ++i) {
    var attr = attrs[i];
    
    if (attr.Name === attributeName) {
      return attr.Value;
    }
  }
    
  return "";
}

export default Ember.Helper.helper(attributeValue);
