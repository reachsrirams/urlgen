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
 * Date: 28/10/12
 * Time: 3:21 PM
 * To change this template use File | Settings | File Templates.
 */

// method that returns value of a query parameter in the window URL

function returnQueryValue(queryParam) {
    // TODO need to refactor and decouple from window.location
    queryParamList = window.location.search.substring(1);
    parsedParams = queryParamList.split("&");
    var finalParamValue = "";
    for (i=0;i<parsedParams.length;i++) {
        param = parsedParams[i].split("=");
        if (param[0] == queryParam) {
            finalParamValue = param[1];
        }
    }
    return finalParamValue;
}


// The isUrl function is courtesy - http://dzone.com/snippets/validate-url-regexp

function isUrl(s)
{
    var regexp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(s);
}

function isCheckboxChecked(checkboxId)
{
    return $(checkboxId).is(":checked");
}

function generateUtmUrl(medium)
{
    var utmCampaign = $("#utm_campaign").val();
    var utmSource = $("#utm_source").val();
    var urlTextDiv = document.getElementById("url");
    var finalUrlString = "";
    if(urlTextDiv) {
        var urlValue = urlTextDiv.value;
        if(urlValue)
        {
            finalUrlString = urlValue + "/?utm_campaign=" +
                utmCampaign + "&utm_medium=" + medium +
                "&utm_source=" + utmSource;
        }
    }
    return finalUrlString;
}

function publishValueToDiv(checkboxId, resultDiv, mediumName, linkTitle)
{
    var finalValue = "";
    if(linkTitle == undefined)
    {
        linkTitle = mediumName;

    }
    if(isCheckboxChecked(checkboxId))
    {
        finalValue = generateUtmUrl(mediumName);
    }
    publishFinalValueToDiv(resultDiv, finalValue, linkTitle);
}

function publishFinalValueToDiv(divId, value, linkTitle)
{
    var resultDiv = document.getElementById(divId);
    if(isUrl(value.toString()))
    {
        resultDiv.innerHTML = "<a href='"+value+"'>" + linkTitle +"</a>";
    }
    else
    {
        resultDiv.innerHTML = value;
    }

}

function generateResults()
{
    publishValueToDiv("#facebook", "results_for_facebook", "facebook");

    publishValueToDiv("#linkedin", "results_for_linkedin", "linkedin");

    publishValueToDiv("#googleplus", "results_for_googleplus", "googleplus");

    publishValueToDiv("#twitter", "results_for_twitter", "twitter");

    publishValueToDiv("#allpurpose", "results_for_allpurpose", "allpurpose");

    storeAllPreferences();

}

function storeAllPreferences() {
    var prefManager = new PreferenceManager();

    var facebookCheckbox = $('#facebook').is(':checked');
    console.log("Value of Facebook Check box: "+facebookCheckbox);
    prefManager.setFacebookSelected(facebookCheckbox);

    var linkedInCheckbox = $('#linkedin').is(':checked');
    console.log("Value of LinkedIn Check box: "+linkedInCheckbox);
    prefManager.setLinkedInSelected(linkedInCheckbox);

    var googlePlusCheckbox = $('#googleplus').is(':checked');
    console.log("Value of google plus Check box: "+googlePlusCheckbox);
    prefManager.setGooglePlusSelected(googlePlusCheckbox);

    var twitterCheckbox = $('#twitter').is(':checked');
    console.log("Value of twitter Check box: "+twitterCheckbox);
    prefManager.setTwitterSelected(twitterCheckbox);

    var campaignText = $('#utm_campaign').val();
    console.log("Value of Campaign: "+campaignText);
    prefManager.setCampaign(campaignText);

    var sourceText = $('#utm_source').val();
    console.log("Value of Source: "+sourceText);
    prefManager.setSource(sourceText);

}

function loadAllPreferences() {
    var prefManager = new PreferenceManager();

    var facebookCheckbox = prefManager.isFacebookSelected();
    console.log("Facebook value from Storage: "+facebookCheckbox);
    $("#facebook").prop('checked', facebookCheckbox);

    var linkedInCheckbox = prefManager.isLinkedInSelected();
    console.log("LinkedIn value from Storage: "+linkedInCheckbox);
    $("#linkedin").prop('checked', linkedInCheckbox);

    var googlePlusCheckbox = prefManager.isGooglePlusSelected();
    console.log("Google Plus value from Storage: "+googlePlusCheckbox);
    $("#googleplus").prop("checked", googlePlusCheckbox);

    var twitterCheckbox = prefManager.isTwitterSelected();
    console.log("Twitter value from Storage: "+twitterCheckbox);
    $("#twitter").prop("checked", twitterCheckbox);

    var campaignText = prefManager.getCampaign();
    console.log("Campaign value from Storage: "+campaignText);
    $("#utm_campaign").val(campaignText);

    var sourceText = prefManager.getSource();
    console.log("Source value from Storage: "+sourceText);
    $("#utm_source").val(sourceText);
}
