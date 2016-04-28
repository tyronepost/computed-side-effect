import Ember from 'ember';

export default Ember.Component.extend({
    selectedValue: null,
    
    displayText: Ember.computed('selectedValue', function() {
        console.log('computedProperty called');
       let obj = this.get('obj');
        let a = obj.a;
        let b = obj.b;
        Ember.set(obj, 'a', 'SUP');
        Ember.set(obj, 'b', 'FOO');
        return a + ' ' + b;
    }),
    
    actions: {
        selectValue(newValue) {
            console.log('calling selectValue');
            Ember.set(this, 'selectedValue', newValue.target.value);
            
        }
    }

});
