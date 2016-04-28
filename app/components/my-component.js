import Ember from 'ember';

var obj = {
    a: "hello",
    b: "world",
    arr: [1, 2, 3]
}

export default Ember.Component.extend({
    obj: null,
    init() {
        this._super();
        this.obj = obj;
    }
});
