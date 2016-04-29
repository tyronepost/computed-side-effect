import Ember from 'ember';

var obj = {
    a: "hello",
    b: "world",
    arr: [1, 2, 3]
};

export default Ember.Component.extend({
    obj: null,

    init() {
        this._super();
        this.obj = obj;
    },

    objStr: Ember.computed('obj.a', 'obj.b', 'obj.arr.@each', function() {
      Ember.run.scheduleOnce('render', this, function() {
        console.log('schedule once');
      });
      return this.obj.a + this.obj.b + this.obj.arr;
    })
});
