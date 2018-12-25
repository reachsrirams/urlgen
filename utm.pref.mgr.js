/*
 * Copyright (c) Cloudbuilder Consulting 2012. All rights reserved.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * User: sriram
 * Date: 16/12/12
 * Time: 10:02 AM
 * This JavaScript file represents the PreferenceManager class. This class provides an OO wrapper around
 * HTML5 localStorage for storing and loading UTM related preferences.
 */

function PreferenceManager()
{
    this.facebookKey = "iv.utm.facebook";
    this.linkedInKey = "iv.utm.linkedin";
    this.googlePlusKey = "iv.utm.googpleplus";
    this.twitterKey = "iv.utm.twitter";
    this.campaignKey = "iv.utm.campaign";
    this.sourceKey = "iv.utm.source";
}

// Method that returns the value from localStorage. If the localStorage value is null, then defaultValue is returned

PreferenceManager.prototype.loadPrefFromLocalStorage = function(key, defaultValue) {
    var preferenceValue = defaultValue;
    if(window.localStorage )
    {
        preferenceValue = localStorage.getObject(key);
        if(preferenceValue == null)
        {
            console.log("Value NULL for key: "+key);
            preferenceValue = defaultValue;
        }
        console.log("Key: "+key+":::Object type of Value: "+typeof preferenceValue+":::Value: "+preferenceValue);
    }
    return preferenceValue;
}

// Method that stores the key-value pair in localStorage

PreferenceManager.prototype.storePrefToLocalStorage = function(key, value) {
    if(window.localStorage)
    {
        localStorage.setObject(key, value);
        console.log("Value: "+value+" stored in local storage.");
    }
}

PreferenceManager.prototype.isFacebookSelected = function() {
    // TODO - add boolean value type check. If not boolean return default value
    return this.loadPrefFromLocalStorage(this.facebookKey, true);
}                                                       ;

PreferenceManager.prototype.setFacebookSelected = function(value) {
    // TODO - add boolean value type check
    this.storePrefToLocalStorage(this.facebookKey, value);
}

PreferenceManager.prototype.isLinkedInSelected = function() {
    // TODO - add boolean value type check. If not boolean return default value
    return this.loadPrefFromLocalStorage(this.linkedInKey, true);
}

PreferenceManager.prototype.setLinkedInSelected = function(value) {
    // TODO - add boolean value type check
    this.storePrefToLocalStorage(this.linkedInKey, value);
}

PreferenceManager.prototype.isGooglePlusSelected = function() {
    // TODO - add boolean value type check. If not boolean return default value
    return this.loadPrefFromLocalStorage(this.googlePlusKey, true);
}

PreferenceManager.prototype.setGooglePlusSelected = function(value) {
    // TODO - add boolean value type check
    this.storePrefToLocalStorage(this.googlePlusKey, value);
}

PreferenceManager.prototype.isTwitterSelected = function() {
    // TODO - add boolean value type check. If not boolean return default value
    return this.loadPrefFromLocalStorage(this.twitterKey, true);
}

PreferenceManager.prototype.setTwitterSelected = function(value) {
    // TODO - add boolean value type check
    this.storePrefToLocalStorage(this.twitterKey, value);
}

PreferenceManager.prototype.getCampaign = function() {
    return this.loadPrefFromLocalStorage(this.campaignKey, "promote_blog");
}

PreferenceManager.prototype.setCampaign = function(value) {
    this.storePrefToLocalStorage(this.campaignKey, value);
}

PreferenceManager.prototype.getSource = function() {
    return this.loadPrefFromLocalStorage(this.sourceKey, "cloudbuilder.in");
}

PreferenceManager.prototype.setSource = function(value) {
    this.storePrefToLocalStorage(this.sourceKey, value);
}
