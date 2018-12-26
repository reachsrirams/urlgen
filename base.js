/**
 * User: sriram
 * Date: 11/12/12
 * Time: 11:48 PM
 * To change this template use File | Settings | File Templates.
 */

// New methods to the localStorage class to support 'object'
Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}
